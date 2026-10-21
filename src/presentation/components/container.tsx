import type { ComponentPropsWithoutRef, ElementType, ReactNode } from "react";

import styles from "./container.module.css";

type ContainerProps<TElement extends ElementType> = Readonly<{
  as?: TElement;
  children: ReactNode;
  className?: string;
}> &
  Omit<ComponentPropsWithoutRef<TElement>, "as" | "children" | "className">;

export function Container<TElement extends ElementType = "div">({
  as,
  children,
  className,
  ...props
}: ContainerProps<TElement>) {
  const Component = as ?? "div";
  const classes = className ? `${styles.container} ${className}` : styles.container;

  return (
    <Component className={classes} {...props}>
      {children}
    </Component>
  );
}
