import win from '../sources/winMarkup'

export function winMessage (el: HTMLElement): void {
  el.innerHTML = win.markup
}