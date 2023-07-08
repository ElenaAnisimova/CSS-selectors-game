export function addClassShake (el: HTMLElement, className: string): void {
  el.classList.add(className)
  setTimeout(() => {
    el.classList.remove(className)
  }, 400)
}