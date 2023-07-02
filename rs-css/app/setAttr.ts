
export function setMarkupAttr(): void {
  const codeStrings = document.querySelectorAll(".task-elements");
  for (let i = 0; i < codeStrings.length; i++) {
    codeStrings[i].setAttribute("element", i.toString());
  }
}