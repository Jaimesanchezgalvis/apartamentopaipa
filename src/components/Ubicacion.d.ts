import { ReactNode } from "react";

export interface UbicacionProps {
  children?: ReactNode;
  googleMapURL?: string;
  containerElement?: ReactNode;
  mapElement?: ReactNode;
  loadingElement?: ReactNode;
}

export const Ubicacion: React.FC<UbicacionProps>;
