import { SyntheticEvent } from "react";

export interface CustomButtonProps {
  text: string;
  onClick: (e?: SyntheticEvent) => void;
  disable?: boolean;
  styles?: any;
}
