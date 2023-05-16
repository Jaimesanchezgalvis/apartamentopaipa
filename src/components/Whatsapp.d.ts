import { ReactNode } from "react";

declare module "./Whatsapp" {
  export interface WhatsappProps {
    children?: ReactNode;
  }

  export const Whatsapp: React.FC<WhatsappProps>;
}
