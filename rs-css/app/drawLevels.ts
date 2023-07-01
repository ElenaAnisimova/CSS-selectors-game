import levels from '../sources/sources'
// import curr
// const levelList = document.querySelector('.levels-list') as HTMLOListElement

// function drawLevels (): void {
//   for (let i = 0; i < levels.length; i++) {
//     const listItem = document.createElement('li')
//     listItem.className = 'levels-item'
//     listItem.setAttribute('levelNumber', levels[i].level.toString())
//     levelList.appendChild(listItem)

//     const levelStatus = document.createElement('div')
//     levelStatus.className = 'level-status'
//     levelStatus.setAttribute('levelNumber', levels[i].level.toString())
//     listItem.appendChild(levelStatus)

//     const levelNameDiv = document.createElement('div')
//     levelNameDiv.className = 'level-name'
//     levelNameDiv.setAttribute('levelNumber', levels[i].level.toString())
//     listItem.appendChild(levelNameDiv)
//     levelNameDiv.textContent = `${levels[i].level + 1}. ${levels[i].levelName}`
//   }
// }

// drawLevels()

// function chooseLevel (): void {
//   levelList.addEventListener('click', (e) => {
//     const target = e.target as HTMLElement
//     currLevel = Number(target.getAttribute('levelNumber'))
//     redrawLvl()
//   })
// }
// chooseLevel()