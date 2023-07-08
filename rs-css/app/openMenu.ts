const burgerBtn = document.querySelector(".burger-btn") as HTMLElement;
const openMenu = document.querySelector(".right-column") as HTMLElement;
const footer = document.querySelector(".footer") as HTMLElement;

export function toggleClass(el: HTMLElement, className: string): void {
  el.classList.toggle(className);
}

function openLvlMenu() {
  toggleClass(openMenu, "menu_active");
  toggleClass(footer, "menu_active");
  toggleClass(burgerBtn, "burger-icon_active");
}

const openBrgMenu = (): void =>
  burgerBtn.addEventListener("click", openLvlMenu);

export default openBrgMenu;
