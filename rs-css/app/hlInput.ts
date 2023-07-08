import hljs from "highlight.js";

const showStylesSpan = document.querySelector(".language-css") as HTMLElement;
const input = document.querySelector(".input-selector") as HTMLTextAreaElement;

export function setInputValue(
  el: HTMLElement,
  inputEl: HTMLTextAreaElement | HTMLInputElement
): void {
  el.innerHTML = inputEl.value;
}

export function callHighlight(el: HTMLElement): void {
  hljs.highlightElement(el);
}

function highlightInput(): void {
  setInputValue(showStylesSpan, input);
  callHighlight(showStylesSpan);
}

export const listenInput = (): void =>
  input.addEventListener("input", highlightInput);

export function clearCSS(el: HTMLElement): void {
  el.innerHTML = "";
}
