import { redrawLvl } from "./redrawLevel";

export function chooseLevel(): void {
  const levelList = document.querySelector(".levels-list") as HTMLOListElement;
  levelList.addEventListener("click", (e) => {
    const target = e.target as HTMLElement;
    window.currLevel = Number(target.getAttribute("levelNumber"));
    redrawLvl();
  });
}
