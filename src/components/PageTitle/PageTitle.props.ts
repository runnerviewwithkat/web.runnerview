import { DetailedHTMLProps, HTMLAttributes, ReactNode } from "react";

export interface IPageTitleProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  children: ReactNode;
}
