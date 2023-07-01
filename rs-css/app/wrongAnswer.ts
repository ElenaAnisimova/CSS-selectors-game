const codeWrapper = document.querySelector('.code-wrapper') as HTMLDivElement

export function addClassShake (): void {
  codeWrapper.classList.add('shake')
  setTimeout(() => {
    codeWrapper.classList.remove('shake')
  }, 400)
}