import { levelStatusObj } from "..";
import { redrawLvl } from "./redrawLevel";

const newGameBtn = document.querySelector(".new-game-btn") as HTMLButtonElement;
export function startNewGame(): void {
  const levelStatuses = document.querySelectorAll(".level-status");
  levelStatusObj.forEach((obj) => (obj.levelStatus = "not completed"));
  levelStatusObj.forEach((obj) => (obj.useHint = "false"));
  window.currLevel = 0;
  redrawLvl();
  levelStatuses.forEach((item) => {
    item.classList.remove("level-hint");
  });
  levelStatuses.forEach((item) => {
    item.classList.remove("level-done");
  });
}

export const clearStorage = ():void => newGameBtn.addEventListener("click", ():void => {
  localStorage.clear();
});
export const callStartGame = ():void => newGameBtn.addEventListener("click", startNewGame);