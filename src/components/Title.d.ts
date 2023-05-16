import { ReactNode } from "react";

declare module "./Title" {
  export interface TitleProps {
    children?: ReactNode;
  }

  export const Title: React.FC<TitleProps>;
}
