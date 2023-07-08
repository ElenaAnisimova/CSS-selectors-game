import { clearCSS } from "./hlInput";
import { drawMarkup } from "./drawMarkup";
import { highlightCurrLvl } from "./hlLevel";
import { addAnimation } from "./lvlAnimation";
import { changeTask } from "./changeTask";

const input = document.querySelector(".input-selector") as HTMLTextAreaElement;
const showStylesSpan = document.querySelector('.language-css') as HTMLElement
const taskName = document.querySelector(".task-name") as HTMLHeadingElement;

export function redrawLvl(): void {
  input.value = "";
  clearCSS(showStylesSpan);
  drawMarkup();
  highlightCurrLvl();
  addAnimation();
  changeTask(taskName, window.currLevel);
}