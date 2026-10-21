import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it } from "vitest";

import { architectureDiagrams } from "@/adapters/content/architecture-diagrams";

import { ArchitectureDiagram } from "./architecture-diagram";

const representativeDiagram = architectureDiagrams.find(
  (diagram) => diagram.key === "representative",
);

if (!representativeDiagram) {
  throw new Error("Representative diagram fixture is missing.");
}

describe("ArchitectureDiagram", () => {
  it("exposes diagram controls and the semantic text alternative", () => {
    render(<ArchitectureDiagram definition={representativeDiagram} />);

    expect(screen.getByRole("button", { name: "Zoom In" })).toBeInTheDocument();
    expect(screen.getByRole("button", { name: "Zoom Out" })).toBeInTheDocument();
    expect(screen.getByRole("button", { name: "Fit View" })).toBeInTheDocument();
    expect(screen.getByText("Read the architecture as text")).toBeInTheDocument();
    expect(screen.getByText(representativeDiagram.summary)).toBeInTheDocument();
  });

  it("shows the selected node explanation", () => {
    render(<ArchitectureDiagram definition={representativeDiagram} />);

    fireEvent.click(screen.getByTestId("rf__node-orchestrator"));

    expect(
      screen.getByRole("heading", { level: 3, name: "Operation use case" }),
    ).toBeInTheDocument();
    expect(
      screen.getByText(
        "The use case coordinates validation, transformation, credentials, the external call and the final result without depending on the input transport.",
        { selector: "p" },
      ),
    ).toBeInTheDocument();
  });

  it("enters fullscreen and restores focus after Escape", async () => {
    const user = userEvent.setup();
    render(<ArchitectureDiagram definition={representativeDiagram} />);

    const openFullscreen = screen.getByRole("button", { name: "Open fullscreen diagram" });
    await user.click(openFullscreen);

    expect(
      screen.getByRole("dialog", {
        name: "Simplified marketplace integration architecture, fullscreen diagram",
      }),
    ).toBeInTheDocument();

    await user.keyboard("{Escape}");

    await waitFor(() => {
      expect(screen.queryByRole("dialog")).not.toBeInTheDocument();
      expect(openFullscreen).toHaveFocus();
    });
  });
});
