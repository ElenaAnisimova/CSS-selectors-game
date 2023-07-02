import { levelStatusObj } from "..";


export function changeStatus(): void {
  const levelStatuses = document.querySelectorAll(".level-status");
  if (levelStatusObj[window.currLevel].useHint === "true") {
    levelStatuses[window.currLevel].classList.add("level-hint");
    levelStatusObj[window.currLevel].levelStatus = "hint";
  } else levelStatusObj[window.currLevel].levelStatus = "completed";
  levelStatuses[window.currLevel].classList.add("level-done");
}