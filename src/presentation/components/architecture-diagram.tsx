"use client";

import {
  Background,
  BackgroundVariant,
  Controls,
  Handle,
  MarkerType,
  Panel,
  Position,
  ReactFlow,
  type Edge,
  type Node,
  type NodeProps,
} from "@xyflow/react";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";

import type {
  ArchitectureDiagram as ArchitectureDiagramDefinition,
  ArchitectureNodeKind,
  ArchitecturePortSide,
} from "@/domain/portfolio";

import styles from "./architecture-diagram.module.css";

type SystemNodeData = {
  label: string;
  caption: string;
  description: string;
  kind: ArchitectureNodeKind;
  compact: boolean;
  targetSide?: ArchitecturePortSide;
  sourceSide?: ArchitecturePortSide;
};

type SystemFlowNode = Node<SystemNodeData, "system">;

const edgeOptions = {
  type: "smoothstep",
  markerEnd: { type: MarkerType.ArrowClosed, color: "#858b92" },
  style: { stroke: "#858b92", strokeWidth: 1.2 },
} as const;

const portPositions: Readonly<Record<ArchitecturePortSide, Position>> = {
  top: Position.Top,
  right: Position.Right,
  bottom: Position.Bottom,
  left: Position.Left,
};

function SystemNode({ data, selected }: NodeProps<SystemFlowNode>) {
  if (data.kind === "boundary") {
    return (
      <div
        className={`${styles.node} ${styles.boundaryNode}`}
        data-kind={data.kind}
        data-selected={selected || undefined}
      >
        <span>{data.caption}</span>
        <strong>{data.label}</strong>
        <p>{data.description}</p>
        <Handle className={styles.handle} position={Position.Bottom} type="source" />
      </div>
    );
  }

  return (
    <div className={styles.node} data-kind={data.kind} data-selected={selected || undefined}>
      <Handle
        className={styles.handle}
        position={data.compact ? Position.Top : portPositions[data.targetSide ?? "left"]}
        type="target"
      />
      <span>{data.caption}</span>
      <strong>{data.label}</strong>
      <Handle
        className={styles.handle}
        position={data.compact ? Position.Bottom : portPositions[data.sourceSide ?? "right"]}
        type="source"
      />
    </div>
  );
}

const nodeTypes = { system: SystemNode };

const representativeCompactPositions: Readonly<Record<string, Readonly<{ x: number; y: number }>>> =
  {
    "rest-input": { x: 0, y: 0 },
    "sqs-input": { x: 250, y: 0 },
    "schedule-input": { x: 125, y: 145 },
    inbound: { x: 125, y: 290 },
    orchestrator: { x: 125, y: 435 },
    transformer: { x: 125, y: 580 },
    "marketplace-adapter": { x: 125, y: 725 },
    "marketplace-api": { x: 0, y: 870 },
    "result-event": { x: 250, y: 870 },
    observability: { x: 125, y: 1015 },
  };

type ArchitectureDiagramProps = Readonly<{
  definition: ArchitectureDiagramDefinition;
  joined?: boolean;
}>;

export function ArchitectureDiagram({ definition, joined = false }: ArchitectureDiagramProps) {
  const [selectedNodeId, setSelectedNodeId] = useState<string | null>(null);
  const [fullscreen, setFullscreen] = useState(false);
  const [compactLayout, setCompactLayout] = useState(false);
  const fullscreenButtonRef = useRef<HTMLButtonElement>(null);

  const nodes = useMemo<readonly SystemFlowNode[]>(() => {
    const visibleNodes = compactLayout
      ? definition.nodes.filter((diagramNode) => diagramNode.kind !== "boundary")
      : definition.nodes;

    return visibleNodes.map((diagramNode, index) => ({
      id: diagramNode.id,
      type: "system",
      position: compactLayout
        ? (representativeCompactPositions[diagramNode.id] ?? {
            x: (index % 2) * 250,
            y: Math.floor(index / 2) * 145,
          })
        : diagramNode.position,
      ...(compactLayout || !diagramNode.parentId
        ? {}
        : { parentId: diagramNode.parentId, extent: "parent" as const }),
      ...(diagramNode.size
        ? { style: { width: diagramNode.size.width, height: diagramNode.size.height } }
        : {}),
      zIndex: diagramNode.kind === "boundary" ? 0 : 1,
      data: {
        label: diagramNode.label,
        caption: diagramNode.caption,
        description: diagramNode.description,
        kind: diagramNode.kind,
        compact: compactLayout,
        targetSide: diagramNode.targetSide,
        sourceSide: diagramNode.sourceSide,
      },
    }));
  }, [compactLayout, definition.nodes]);

  const edges = useMemo<readonly Edge[]>(
    () =>
      definition.edges
        .filter(
          (diagramEdge) =>
            !(
              compactLayout &&
              definition.key === "representative" &&
              (diagramEdge.target === "observability" ||
                diagramEdge.source === "integration-service")
            ),
        )
        .map((diagramEdge) => ({
          ...diagramEdge,
          ...edgeOptions,
          animated: diagramEdge.animated ?? false,
          labelStyle: { fill: "#b6bac0", fontSize: 10 },
          labelBgStyle: { fill: "#141619", fillOpacity: 0.92 },
        })),
    [compactLayout, definition.edges, definition.key],
  );

  const selectedNode = definition.nodes.find((diagramNode) => diagramNode.id === selectedNodeId);

  const closeFullscreen = useCallback(() => {
    setFullscreen(false);
    window.requestAnimationFrame(() => fullscreenButtonRef.current?.focus());
  }, []);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(width <= 760px)");
    const updateLayout = () => setCompactLayout(mediaQuery.matches);

    updateLayout();
    mediaQuery.addEventListener("change", updateLayout);

    return () => mediaQuery.removeEventListener("change", updateLayout);
  }, []);

  useEffect(() => {
    if (!fullscreen) {
      return undefined;
    }

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        closeFullscreen();
      }
    };

    window.addEventListener("keydown", handleEscape);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleEscape);
    };
  }, [closeFullscreen, fullscreen]);

  return (
    <div
      aria-label={fullscreen ? `${definition.title}, fullscreen diagram` : undefined}
      aria-modal={fullscreen || undefined}
      className={`architectureDiagram ${styles.shell} ${joined ? styles.joined : ""} ${fullscreen ? styles.fullscreen : ""}`}
      role={fullscreen ? "dialog" : undefined}
    >
      <div
        className={`${styles.canvas} ${compactLayout && definition.key === "representative" ? styles.representativeCompactCanvas : ""}`}
      >
        <ReactFlow<SystemFlowNode, Edge>
          aria-label={definition.title}
          defaultEdgeOptions={edgeOptions}
          edges={[...edges]}
          elementsSelectable
          fitView
          fitViewOptions={{ padding: 0.18, minZoom: 0.28, maxZoom: 1.25 }}
          key={compactLayout ? "compact" : "wide"}
          minZoom={0.25}
          nodeTypes={nodeTypes}
          nodes={[...nodes]}
          nodesConnectable={false}
          nodesDraggable={false}
          onNodeClick={(_, node) => setSelectedNodeId(node.id)}
          panOnDrag={fullscreen}
          panOnScroll={fullscreen}
          preventScrolling={fullscreen}
          zoomOnPinch={fullscreen}
          zoomOnScroll={fullscreen}
        >
          <Background color="#34383d" gap={32} size={1} variant={BackgroundVariant.Dots} />
          <Controls
            aria-label="Diagram zoom controls"
            position="bottom-left"
            showInteractive={false}
          />
          <Panel position="top-right">
            <button
              aria-label={fullscreen ? "Exit fullscreen diagram" : "Open fullscreen diagram"}
              className={styles.fullscreenButton}
              onClick={() => (fullscreen ? closeFullscreen() : setFullscreen(true))}
              ref={fullscreenButtonRef}
              type="button"
            >
              <span aria-hidden="true">{fullscreen ? "×" : "⛶"}</span>
              {fullscreen ? "Close" : "Fullscreen"}
            </button>
          </Panel>
        </ReactFlow>
      </div>

      <div aria-live="polite" className={styles.selection}>
        <p className={styles.selectionEyebrow}>
          {selectedNode ? selectedNode.caption : "Where to start"}
        </p>
        <h3>{selectedNode ? selectedNode.label : "Follow the arrows"}</h3>
        <p className={styles.selectionDescription}>
          {selectedNode
            ? selectedNode.description
            : "Read from left to right. Each box represents one responsibility in the system; select any box for a fuller explanation."}
        </p>
      </div>

      <details className={styles.semanticFallback}>
        <summary>Read the architecture as text</summary>
        <p className={styles.semanticSummary}>{definition.summary}</p>
        <ol className={styles.semanticList}>
          {definition.nodes.map((diagramNode) => (
            <li key={diagramNode.id}>
              <strong>{diagramNode.label}</strong>
              <span>{diagramNode.description}</span>
            </li>
          ))}
        </ol>
      </details>
    </div>
  );
}
