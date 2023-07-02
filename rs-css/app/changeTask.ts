import levels from "../sources/sources";
const taskName = document.querySelector(".task-name") as HTMLHeadingElement;

export function changeTask(): void {
  taskName.innerText = levels[window.currLevel].task;
}