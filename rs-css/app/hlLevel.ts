const lvlNmb = document.querySelector(".level-nmb") as HTMLSpanElement;

export function highlightCurrLvl(): void {
  const levelItems = document.querySelectorAll(".levels-item");
  levelItems.forEach((item: Element) => {
    item.classList.remove("curr-lvl");
  });
  for (let i = 0; i < levelItems.length; i++) {
    if (
      levelItems[i].getAttribute("levelnumber") === window.currLevel.toString()
    ) {
      levelItems[i].classList.add("curr-lvl");
    }
  }
  changeLvlNmb(lvlNmb, window.currLevel);
}

export function changeLvlNmb(el: HTMLElement, lvlNmb: number): void {
  el.innerHTML = (lvlNmb + 1).toString();
}
