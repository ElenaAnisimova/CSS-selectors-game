import levels from "../sources/sources";
import { setMarkupAttr } from "./setAttr";
import { hoverOverElem, hoverOverHTML } from "./hoverFunc";
import Highlight from "../sources/highlight";
import { createHTMLHint } from "./drawHints";

const htmlView = document.querySelector(".html-view") as HTMLElement;
const castle = document.querySelector(".castle") as HTMLElement;

export function drawMarkup(): void {
  castle.innerHTML = levels[window.currLevel].roomElements;
  const gameElements = document.querySelectorAll(".castle *");
  for (let i = 0; i < gameElements.length; i++) {
    gameElements[i].setAttribute("element", i.toString());
  }

  htmlView.innerHTML = levels[window.currLevel].htmlTemplate;
  const allStrings = document.querySelectorAll(".html-view *");
  for (let i = 0; i < allStrings.length; i++) {
    if (allStrings[i].children.length === 0) {
      allStrings[i].innerHTML = Highlight(levels[window.currLevel].htmlMarkup[i]);
    }
  }
  setMarkupAttr();
  hoverOverElem();
  hoverOverHTML();
  createHTMLHint();
}