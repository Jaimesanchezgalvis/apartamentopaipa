import { ReactNode } from "react";

declare module "./Content" {
  export interface ContentProps {
    children?: ReactNode;
  }

  export const Content: React.FC<ContentProps>;
}
