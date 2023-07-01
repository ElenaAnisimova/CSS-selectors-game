const castle = document.querySelector('.castle') as HTMLElement
const htmlView = document.querySelector('.html-view') as HTMLElement

export function hoverOverElem (): void {
  const codeStrings = document.querySelectorAll('.task-elements')
  castle.addEventListener('mouseover', (el: MouseEvent) => {
    const targetEl = el.target as HTMLElement
    for (let i = 0; i < codeStrings.length; i++) {
      if (
        targetEl.getAttribute('element') ===
        codeStrings[i].getAttribute('element')
      ) {
        codeStrings[i].classList.add('highlight-str')
        targetEl.classList.add('highlight-el')
        targetEl.querySelector('.info-div')?.classList.add('show-element')
      }
    }
  })

  castle.addEventListener('mouseout', (el: MouseEvent) => {
    const targetEl = el.target as HTMLElement
    for (let i = 0; i < codeStrings.length; i++) {
      codeStrings[i].classList.remove('highlight-str')
      targetEl.classList.remove('highlight-el')
      targetEl.querySelector('.info-div')?.classList.remove('show-element')
    }
  })
}

export function hoverOverHTML (): void {
  const roomElements = document.querySelectorAll('.castle *')
  const codeStrings: NodeListOf<HTMLElement> =
    document.querySelectorAll('.task-elements')

  codeStrings.forEach((item:HTMLElement) => {
    item.addEventListener('mouseover', (e: MouseEvent) => {
      e.stopPropagation()
      for (let i = 0; i < roomElements.length; i++) {
        if (
          item.getAttribute('element') ===
          roomElements[i].getAttribute('element')
        ) {
          roomElements[i].classList.add('highlight-el')
          item.classList.add('highlight-str')
          roomElements[i]
            .querySelector('.info-div')
            ?.classList.add('show-element')
        }
      }
    })
  })

  codeStrings.forEach((item:HTMLElement) => {
    htmlView.addEventListener('mouseout', (e: MouseEvent) => {
      e.stopPropagation()
      for (let i = 0; i < roomElements.length; i++) {
        roomElements[i].classList.remove('highlight-el')
        item.classList.remove('highlight-str')
        roomElements[i]
          .querySelector('.info-div')
          ?.classList.remove('show-element')
      }
    })
  })
}