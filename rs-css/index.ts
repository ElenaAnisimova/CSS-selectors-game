import './style.css'
import levels from './sources/sources'
import levelStatusObjTempl from './sources/levelsStatuses'
import Highlight from './sources/highlight'
import { Default } from './sources/types'
import openBrgMenu from './app/openMenu'
import { createHTMLHint } from './app/drawHints'
import { hoverOverElem, hoverOverHTML } from './app/hoverFunc'
import { compareElem } from './app/compareArrs'
import { addClassShake } from './app/wrongAnswer'
import { winMessage } from './app/winMessage'
import { listenInput, clearCSS } from './app/hlInput'
import { addWinAnimation } from './app/winAnimation'
import { drawStatuses } from './app/drawStatuses'

const levelList = document.querySelector('.levels-list') as HTMLOListElement

function drawLevels (): void {
  for (let i = 0; i < levels.length; i++) {
    const listItem = document.createElement('li')
    listItem.className = 'levels-item'
    listItem.setAttribute('levelNumber', levels[i].level.toString())
    levelList.appendChild(listItem)

    const levelStatus = document.createElement('div')
    levelStatus.className = 'level-status'
    levelStatus.setAttribute('levelNumber', levels[i].level.toString())
    listItem.appendChild(levelStatus)

    const levelNameDiv = document.createElement('div')
    levelNameDiv.className = 'level-name'
    levelNameDiv.setAttribute('levelNumber', levels[i].level.toString())
    listItem.appendChild(levelNameDiv)
    levelNameDiv.textContent = `${levels[i].level + 1}. ${levels[i].levelName}`
  }
}

drawLevels()

function chooseLevel (): void {
  levelList.addEventListener('click', (e) => {
    const target = e.target as HTMLElement
    currLevel = Number(target.getAttribute('levelNumber'))
    redrawLvl()
  })
}
chooseLevel()

const htmlView = document.querySelector('.html-view') as HTMLElement
const castle = document.querySelector('.castle') as HTMLElement

let currLevel = 0

function showHtml (): void {
  castle.innerHTML = levels[currLevel].roomElements
  const gameElements = document.querySelectorAll('.castle *')
  for (let i = 0; i < gameElements.length; i++) {
    gameElements[i].setAttribute('element', i.toString())
  }

  htmlView.innerHTML = levels[currLevel].htmlTemplate
  const allStrings = document.querySelectorAll('.html-view *')
  for (let i = 0; i < allStrings.length; i++) {
    if (allStrings[i].children.length === 0) {
      allStrings[i].innerHTML = Highlight(levels[currLevel].htmlMarkup[i])
    }
  }
  setMarkupAttr();
  hoverOverElem()
  hoverOverHTML()
  createHTMLHint()
}

function setMarkupAttr(): void {
    const codeStrings = document.querySelectorAll('.task-elements')
    for (let i = 0; i < codeStrings.length; i++) {
    codeStrings[i].setAttribute('element', i.toString())
  }
}

function addAnimation (): void {
    const roomElements: NodeListOf<HTMLElement> = castle.querySelectorAll(
    levels[currLevel].selector
  )
  roomElements.forEach((el) => {
    el.classList.add('animation')
  })
}

const input = document.querySelector('.input-selector') as HTMLTextAreaElement
const levelStatuses = document.querySelectorAll('.level-status')

function changeStatus (): void {
  if (levelStatusObj[currLevel].useHint === 'true') {
    levelStatuses[currLevel].classList.add('level-hint')
    levelStatusObj[currLevel].levelStatus = 'hint'
  } else levelStatusObj[currLevel].levelStatus = 'completed'
  levelStatuses[currLevel].classList.add('level-done')
}

function checkSelector (): void {
  const array1 = Array.from(document.querySelectorAll('.animation'))
  const array2 = Array.from(castle.querySelectorAll(input.value))

  if (compareElem(array1, array2)) {
    changeStatus()
    addWinAnimation()
    if (currLevel === 9) {      //magic number!!!!!!!!!!!!1
      addWinAnimation()
      setTimeout(winMessage, 800)
    } else {
      currLevel++
      setTimeout(redrawLvl, 800)
    }
  } else if (!compareElem(array1, array2)) {
    addClassShake()
  }
}

function checkSelectorEnter (el: Default): void {
  if (el.code === 'Enter') {
    el.preventDefault()
    checkSelector()
  }
}

window.addEventListener('keydown', checkSelectorEnter)
const enterBtn = document.querySelector('.btn-enter') as HTMLButtonElement
enterBtn.addEventListener('click', checkSelector)

let line = 0
let count = 0
let result = ''

function typeLine (): void {
  const text = levels[currLevel].help
  input.value = ''
  clearCSS()
  const interval = setTimeout(() => {
    result += text[line][count]
    input.placeholder = result
    count++
    if (count >= text[line].length) {
      count = 0
      line++
      if (line === text.length) {
        clearTimeout(interval)
        input.placeholder = result
        return true
      }
    }
    typeLine()
  }, 80)
}

function clearInput (): void {
  setTimeout(() => (input.placeholder = 'Type a CSS Selector'), 2500)
  line = 0
  count = 0
  result = ''
}

function typeHelp (): void {
  typeLine()
  clearInput()
  hintStatus()
}

function hintStatus (): void {
  levelStatusObj[currLevel].useHint = 'true'
}

const helpBtn = document.querySelector('.btn-help') as HTMLButtonElement
helpBtn.addEventListener('click', typeHelp)

const levelItems = document.querySelectorAll('.levels-item')

function highlightCurrLvl (): void {
  levelItems.forEach((item: Element) => {
    item.classList.remove('curr-lvl')
  })
  for (let i = 0; i < levelItems.length; i++) {
    if (levelItems[i].getAttribute('levelnumber') === currLevel.toString()) {
      levelItems[i].classList.add('curr-lvl')
    }
  }
  changeLvlNmb()
}

const lvlNmb = document.querySelector('.level-nmb') as HTMLSpanElement
function changeLvlNmb (): void {
  lvlNmb.innerText = (currLevel + 1).toString()
}
const taskName = document.querySelector('.task-name') as HTMLHeadingElement

function changeTask (): void {
  taskName.innerText = levels[currLevel].task
}

const newGameBtn = document.querySelector('.new-game-btn') as HTMLButtonElement

export let levelStatusObj = levelStatusObjTempl

function startNewGame (): void {
  levelStatusObj.forEach((obj) => (obj.levelStatus = 'not completed'))
  levelStatusObj.forEach((obj) => (obj.useHint = 'false'))
  currLevel = 0
  redrawLvl()
  levelStatuses.forEach((item) => {
    item.classList.remove('level-hint')
  })
  levelStatuses.forEach((item) => {
    item.classList.remove('level-done')
  })
}

newGameBtn.addEventListener('click', () => {
  localStorage.clear()
})
newGameBtn.addEventListener('click', startNewGame)

function saveGame (): void {
  localStorage.setItem('levelsStatuses', JSON.stringify(levelStatusObj))
  localStorage.setItem('currentLevel', JSON.stringify(currLevel))
}

function loadGame (): void {
  if (localStorage.getItem('levelsStatuses') != null) {
    levelStatusObj = JSON.parse(localStorage.getItem('levelsStatuses') ?? '')
  }
  if (localStorage.getItem('currentLevel') != null) {
    currLevel = JSON.parse(localStorage.getItem('currentLevel') ?? '0')
  }
}

window.addEventListener('beforeunload', saveGame)

function startLoadedGame (): void {
  loadGame()
  drawStatuses()
  redrawLvl()
}

function startGame (): void {
  if (localStorage.getItem('levelsStatuses') != null) {
    startLoadedGame()
  } else startNewGame()
}

window.addEventListener('load', startGame)

function redrawLvl (): void {
  input.value = ''
  clearCSS()
  showHtml()
  highlightCurrLvl()
  addAnimation()
  changeTask()
}

openBrgMenu()
listenInput()