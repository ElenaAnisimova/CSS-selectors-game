
export function highlightCurrLvl(): void {
  const levelItems = document.querySelectorAll(".levels-item");
  levelItems.forEach((item: Element) => {
    item.classList.remove("curr-lvl");
  });
  for (let i = 0; i < levelItems.length; i++) {
    if (levelItems[i].getAttribute("levelnumber") === window.currLevel.toString()) {
      levelItems[i].classList.add("curr-lvl");
    }
  }
  changeLvlNmb();
}

const lvlNmb = document.querySelector(".level-nmb") as HTMLSpanElement;
function changeLvlNmb(): void {
  lvlNmb.innerText = (window.currLevel + 1).toString();
}