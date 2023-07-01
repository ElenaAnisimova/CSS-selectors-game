import parseHtml from "./parseStr"

export function createHTMLHint (): void {
  const gameElements = document.querySelectorAll('.castle *')

  function createInfoEl (elem: Element): void {
    const infoEl = document.createElement('div')
    infoEl.className = 'info-div'
    elem.prepend(infoEl)
    infoEl.innerText = parseHtml(elem.outerHTML)
  }
  gameElements.forEach((item) => {
    createInfoEl(item)
  })
}