import { compareElem } from "./compareArrs";
import { addWinAnimation } from "./winAnimation";
import levels from "../sources/sources";
import { winMessage } from "./winMessage";
import { addClassShake } from "./wrongAnswer";
import { changeStatus } from "./changeLvlStatus";
import { redrawLvl } from "./redrawLevel";

const castle = document.querySelector(".castle") as HTMLElement;
const input = document.querySelector(".input-selector") as HTMLTextAreaElement;
const enterBtn = document.querySelector(".btn-enter") as HTMLButtonElement;
const codeWrapper = document.querySelector(".code-wrapper") as HTMLElement;

export function checkSelector(): void {
  try {
    const array1 = Array.from(document.querySelectorAll(".animation"));
    const array2 = Array.from(castle.querySelectorAll(input.value));
    if (compareElem(array1, array2)) {
      changeStatus();
      addWinAnimation();
      if (window.currLevel === levels.length - 1) {
        addWinAnimation();
        setTimeout(() => winMessage(castle), 800);
      } else {
        window.currLevel++;
        setTimeout(redrawLvl, 800);
      }
    } else if (!compareElem(array1, array2)) {
      addClassShake(codeWrapper, "shake");
    }
  } catch (error) {
    console.log(error);
    addClassShake(codeWrapper, "shake");
  }
}

export const callCheckAns = (): void =>
  enterBtn.addEventListener("click", checkSelector);
