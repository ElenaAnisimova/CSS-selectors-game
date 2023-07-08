import { levelStatusObj } from "..";

export function hintStatus(): void {
  levelStatusObj[window.currLevel].useHint = "true";
}
