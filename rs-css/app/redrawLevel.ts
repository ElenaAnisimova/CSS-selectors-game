import { clearCSS } from "./hlInput";
import { drawMarkup } from "./drawMarkup";
import { highlightCurrLvl } from "./hlLevel";
import { addAnimation } from "./lvlAnimation";
import { changeTask } from "./changeTask";

const input = document.querySelector(".input-selector") as HTMLTextAreaElement;
export function redrawLvl(): void {
  input.value = "";
  clearCSS();
  drawMarkup();
  highlightCurrLvl();
  addAnimation();
  changeTask();
}