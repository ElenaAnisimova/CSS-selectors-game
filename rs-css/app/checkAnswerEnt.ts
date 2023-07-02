import { Default } from "../sources/types";
import { checkSelector } from "./checkAnswer";

function checkSelectorEnter(el: Default): void {
  if (el.code === "Enter") {
    el.preventDefault();
    checkSelector();
  }
}

export const callCheckAnsKey = ():void  => window.addEventListener("keydown", checkSelectorEnter);