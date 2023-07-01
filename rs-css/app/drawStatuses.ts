import { levelStatusObj } from ".."

export function drawStatuses (): void {
  const levelStatuses = document.querySelectorAll('.level-status')
  for (let i = 0; i < levelStatusObj.length; i++) {
    if (levelStatusObj[i].levelStatus === 'hint') {
      levelStatuses[i].classList.add('level-hint')
    }
    if (levelStatusObj[i].levelStatus === 'completed') {
      levelStatuses[i].classList.add('level-done')
    }
  }
}