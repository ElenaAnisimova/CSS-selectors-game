import levels from "../sources/sources";
import { clearCSS } from "./hlInput";
const input = document.querySelector(".input-selector") as HTMLTextAreaElement;

let line = 0;
let count = 0;
let result = "";

export function typeLine(): void {
  const text:string = levels[window.currLevel].help;
  input.value = "";
  clearCSS();
  const interval = setTimeout(() => {
    result += text[line][count];
    input.placeholder = result;
    count++;
    if (count >= text[line].length) {
      count = 0;
      line++;
      if (line === text.length) {
        clearTimeout(interval);
        input.placeholder = result;
        return true;
      }
    }
    typeLine();
  }, 80);
}

export function clearInput(): void {
  setTimeout(() => (input.placeholder = "Type a CSS Selector"), 2500);
  line = 0;
  count = 0;
  result = "";
}