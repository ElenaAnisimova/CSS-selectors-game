import { levelStatusObj } from "..";

function saveGame(): void {
  localStorage.setItem("levelsStatuses", JSON.stringify(levelStatusObj));
  localStorage.setItem("currentLevel", JSON.stringify(window.currLevel));
}

export const callSaveGame = ():void => window.addEventListener("beforeunload", saveGame);