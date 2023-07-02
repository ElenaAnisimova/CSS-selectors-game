import levels from "../sources/sources";
const castle = document.querySelector(".castle") as HTMLElement;

export function addAnimation(): void {
  const roomElements: NodeListOf<HTMLElement> = castle.querySelectorAll(
    levels[window.currLevel].selector
  );
  roomElements.forEach((el:HTMLElement):void => {
    el.classList.add("animation");
  });
}