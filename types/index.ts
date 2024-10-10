import { MouseEventHandler } from "react";

export interface CustomButtonProps {
  title:string;
  containerStyles?: string; // questionmark = optional
  handleClick?:
  MouseEventHandler<HTMLButtonElement>
  btnType: "button" | "submit"
}