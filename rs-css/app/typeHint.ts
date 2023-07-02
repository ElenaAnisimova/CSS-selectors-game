import { typeLine, clearInput } from "./showHint";
import { hintStatus } from "./hintStatus";

function typeHelp(): void {
  typeLine();
  clearInput();
  hintStatus();
}


const helpBtn = document.querySelector(".btn-help") as HTMLButtonElement;
export const callHintFunc = ():void => helpBtn.addEventListener("click", typeHelp);