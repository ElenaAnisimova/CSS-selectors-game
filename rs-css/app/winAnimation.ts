export function addWinAnimation (): void {
  const roomElements: NodeListOf<HTMLElement> =
    document.querySelectorAll('.animation')
    roomElements.forEach((el) => {
    el.classList.add('fly')
  })
}