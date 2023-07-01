import win from '../sources/winMarkup'
const castle = document.querySelector('.castle') as HTMLElement

export function winMessage (): void {
  castle.innerHTML = win.markup
}