import { ReactNode } from "react";

export interface Children {
  children?: ReactNode;
}

export interface ManyChildren {
  children?: ReactNode[] | ReactNode;
}
