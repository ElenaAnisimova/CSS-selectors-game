const burgerBtn = document.querySelector('.burger-btn') as HTMLElement
const openMenu = document.querySelector('.right-column') as HTMLElement
const footer = document.querySelector('.footer') as HTMLElement

function openLvlMenu (): void {
  openMenu.classList.toggle('menu_active')
  footer.classList.toggle('menu_active')
  burgerBtn.classList.toggle('burger-icon_active')
}

const openBrgMenu = () => burgerBtn.addEventListener('click', openLvlMenu)

export default openBrgMenu