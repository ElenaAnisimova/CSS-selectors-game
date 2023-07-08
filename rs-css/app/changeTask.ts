import levels from "../sources/sources";


export function changeTask(taskEl: HTMLHeadingElement, lvlNmb: number): void {
  taskEl.innerText = levels[lvlNmb].task;
}
