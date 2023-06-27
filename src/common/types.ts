import { ReactNode } from "react";

export type Paragraph = {
  title?: string;
  description: string | ReactNode;
  img?: string;
};
