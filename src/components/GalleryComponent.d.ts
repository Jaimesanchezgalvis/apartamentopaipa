import { ReactNode } from "react";

declare module "./GalleryComponent" {
  export interface GalleryComponentProps {
    children?: ReactNode;
  }

  export const GalleryComponent: React.FC<GalleryComponentProps>;
}
