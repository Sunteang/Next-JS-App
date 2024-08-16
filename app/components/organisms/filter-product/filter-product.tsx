import { CSSProperties, PropsWithChildren } from "react";

type ButtonProps = PropsWithChildren<{
  onClick?: => void;
  variant: 'Primary'| 'Secondary';
  size: 'sm'|'md'|'lg';
}>
