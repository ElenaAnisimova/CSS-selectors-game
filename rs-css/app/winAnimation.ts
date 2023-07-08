export function addWinAnimation (): void {
  const roomElements: NodeListOf<HTMLElement> =
    document.querySelectorAll('.animation')
    roomElements.forEach((el: HTMLElement) => {
    el.classList.add('fly')
  })
}