import hljs from "highlight.js"

const showStylesSpan = document.querySelector('.language-css') as HTMLElement
const input = document.querySelector('.input-selector') as HTMLTextAreaElement

function highlightInput (): void {
  showStylesSpan.innerHTML = input.value
  hljs.highlightElement(showStylesSpan)
}

export const listenInput = () => input.addEventListener('input', highlightInput)

export function clearCSS (): void {
  showStylesSpan.innerHTML = ''
}