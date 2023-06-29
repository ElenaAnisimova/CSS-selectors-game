import "./style.css";
import levels from "../sources/sources";
import levelStatusObjTempl from "../sources/levelsStatuses";
import Highlight from "../sources/highlight";
import win from "../sources/winMarkup";

// // const cssEditor = document.querySelector(".css-editor") as HTMLElement;

const htmlView = document.querySelector(".html-view") as HTMLElement;

let currLevel = 0;
const castle = document.querySelector(".castle") as HTMLElement;

function showHtml(): void {
  castle.innerHTML = levels[currLevel].roomElements;
  const gameElements = document.querySelectorAll(".castle *");
  for (let i = 0; i < gameElements.length; i++) {
    gameElements[i].setAttribute("element", i.toString());
  }

  htmlView.innerHTML = levels[currLevel].htmlTemplate;
  const allStrings = document.querySelectorAll(".html-view *");
  for (let i = 0; i < allStrings.length; i++) {
    if (allStrings[i].children.length == 0) {
      allStrings[i].innerHTML = Highlight(levels[currLevel].htmlMarkup[i]);
    }
  }

  const codeStrings = document.querySelectorAll(".task-elements");
  for (let i = 0; i < codeStrings.length; i++) {
    codeStrings[i].setAttribute("element", i.toString());
  }
  hoverOverElem();
  hoverOverHTML();
}

function hoverOverElem() {
  // const roomElements = document.querySelectorAll(".castle *");

  const codeStrings = document.querySelectorAll(".task-elements");
  castle.addEventListener("mouseover", (el) => {
    const targetEl = el.target as HTMLElement;
    for (let i = 0; i < codeStrings.length; i++) {
      if (
        targetEl.getAttribute("element") ===
        codeStrings[i].getAttribute("element")
      ) {
        codeStrings[i].classList.add("highlight-str");
        targetEl.classList.add("highlight-el");
      }
    }
  });

  castle.addEventListener("mouseout", (el) => {
    const targetEl = el.target as HTMLElement;
    for (let i = 0; i < codeStrings.length; i++) {
      codeStrings[i].classList.remove("highlight-str");
      targetEl.classList.remove("highlight-el");
    }
  });
}
function hoverOverHTML() {
  const roomElements = document.querySelectorAll(".castle *");
  const codeStrings: NodeListOf<HTMLElement> =
    document.querySelectorAll(".task-elements");

  // function checkAttr(el: { getAttribute: (arg0: string) => string }) {
  //   const res: string = el.getAttribute("element");
  //   return res;
  // if (el.getAttribute("element") === roomElements[i].getAttribute("element")) {
  //   roomElements[i].classList.add("highlight-str");
  // }
  // }
  //   codeStrings.forEach(function(elem) {
  //     elem.addEventListener("mouseover", function() {
  //       const res = elem.getAttribute("element");
  //       return res;
  //     });
  // });
  codeStrings.forEach((item) =>
    item.addEventListener("mouseover", (e) => {
      e.stopPropagation();
      for (let i = 0; i < roomElements.length; i++) {
        if (
          item.getAttribute("element") ===
          roomElements[i].getAttribute("element")
        ) {
          roomElements[i].classList.add("highlight-el");
          item.classList.add("highlight-str");
        }
      }
    })
  );

  codeStrings.forEach((item) =>
  htmlView.addEventListener("mouseout", (e) => {
    e.stopPropagation();
    for (let i = 0; i < roomElements.length; i++) {
      roomElements[i].classList.remove("highlight-el");
      item.classList.remove("highlight-str");
    }
  }));
}

function addAnimation(): void {
  const roomElements: NodeListOf<HTMLElement> = document.querySelectorAll(
    levels[currLevel].selector
  );
  roomElements.forEach((el) => el.classList.add("animation"));
}

const levelList = document.querySelector(".levels-list") as HTMLOListElement;

function drawLevels(): void {
  for (let i = 0; i < levels.length; i++) {
    const listItem = document.createElement("li");
    listItem.className = "levels-item";
    listItem.setAttribute("levelNumber", levels[i].level.toString());
    levelList.appendChild(listItem);

    const levelStatus = document.createElement("div");
    levelStatus.className = "level-status";
    levelStatus.setAttribute("levelNumber", levels[i].level.toString());
    listItem.appendChild(levelStatus);

    const levelNameDiv = document.createElement("div");
    levelNameDiv.className = "level-name";
    levelNameDiv.setAttribute("levelNumber", levels[i].level.toString());
    listItem.appendChild(levelNameDiv);
    levelNameDiv.textContent = `${levels[i].level + 1}. ${levels[i].levelName}`;
  }
}

drawLevels();

function chooseLevel(): void {
  levelList.addEventListener("click", (e) => {
    const target = e.target as HTMLElement;
    currLevel = Number(target.getAttribute("levelNumber"));
    redrawLvl();
  });
}
chooseLevel();

const input = document.querySelector(".input-selector") as HTMLInputElement;
const codeWrapper = document.querySelector(".code-wrapper") as HTMLDivElement;
const levelStatuses = document.querySelectorAll(
  ".level-status"
) as NodeListOf<Element>;

function changeStatus() {
  if (levelStatusObj[currLevel].levelStatus == "hint") {
    levelStatuses[currLevel].classList.add("level-hint");
  } else levelStatusObj[currLevel].levelStatus = "completed";
  levelStatuses[currLevel].classList.add("level-done");
}

function addClassShake(): void {
  codeWrapper.classList.add("shake");
  setTimeout(() => codeWrapper.classList.remove("shake"), 400);
}

function winMessage(): void {
  castle.innerHTML = win.markup;
}

function checkSelector(): void {
  const arr = document.querySelectorAll(".castle *");
  console.log(arr);
  if (input.value == levels[currLevel].selector) {
    changeStatus();
    addWinAnimation();
    if (currLevel === 9) {
      winMessage();
    } else {
      currLevel++;
      setTimeout(redrawLvl, 800);
    }
  } else if (input.value !== levels[currLevel].selector) {
    addClassShake();
  }
}

function checkSelectorEnter(el: {
  code: string;
  preventDefault: () => void;
}): void {
  if (el.code == "Enter") {
    el.preventDefault();
    checkSelector();
  }
}

window.addEventListener("keydown", checkSelectorEnter);
const enterBtn = document.querySelector(".btn-enter") as HTMLButtonElement;
enterBtn.addEventListener("click", checkSelector);

let line = 0;
let count = 0;
let result = "";

function typeLine(): void {
  const text = levels[currLevel].help;
  input.value = "";
  const interval = setTimeout(() => {
    result += text[line][count];
    input.placeholder = result;
    count++;
    if (count >= text[line].length) {
      count = 0;
      line++;
      if (line == text.length) {
        clearTimeout(interval);
        input.placeholder = result;
        return true;
      }
    }
    typeLine();
  }, 80);
}

function clearInput(): void {
  setTimeout(() => (input.placeholder = "Type a CSS Selector"), 2500);
  line = 0;
  count = 0;
  result = "";
}

function typeHelp(): void {
  typeLine();
  clearInput();
  hintStatus();
}

function hintStatus(): void {
  levelStatusObj[currLevel].levelStatus = "hint";
}

const helpBtn = document.querySelector(".btn-help") as HTMLButtonElement;
helpBtn.addEventListener("click", typeHelp);
const showStylesSpan = document.querySelector(
  ".user-styles"
) as HTMLSpanElement;

function highlightInput(): void {
  showStylesSpan.innerHTML = Highlight(input.value);
}
input.addEventListener("input", highlightInput);
const levelItems = document.querySelectorAll(".levels-item");

function highlightCurrLvl(): void {
  levelItems.forEach((item: Element) => {
    item.classList.remove("curr-lvl");
  });
  for (let i = 0; i < levelItems.length; i++) {
    if (levelItems[i].getAttribute("levelnumber") == currLevel.toString()) {
      levelItems[i].classList.add("curr-lvl");
    }
  }
}

const taskName = document.querySelector(".task-name") as HTMLHeadingElement;

function changeTask(): void {
  taskName.innerText = levels[currLevel].task;
}

const newGameBtn = document.querySelector(".new-game-btn") as HTMLButtonElement;

let levelStatusObj = levelStatusObjTempl;

function startNewGame(): void {
  levelStatusObj.forEach((obj) => (obj.levelStatus = "not completed"));
  currLevel = 0;
  redrawLvl();
  levelStatuses.forEach((item) => item.classList.remove("level-hint"));
  levelStatuses.forEach((item) => item.classList.remove("level-done"));
}

newGameBtn.addEventListener("click", () => localStorage.clear());
newGameBtn.addEventListener("click", startNewGame);

function saveGame(): void {
  localStorage.setItem("levelsStatuses", JSON.stringify(levelStatusObj));
  localStorage.setItem("currentLevel", JSON.stringify(currLevel));
}
function loadGame(): void {
  if (localStorage.getItem("levelsStatuses")) {
    levelStatusObj = JSON.parse(localStorage.getItem("levelsStatuses") || "");
  }
  if (localStorage.getItem("currentLevel")) {
    currLevel = JSON.parse(localStorage.getItem("currentLevel") || "0");
  }
}

function drawStatuses(): void {
  for (let i = 0; i < levelStatusObj.length; i++) {
    if (levelStatusObj[i].levelStatus === "hint") {
      levelStatuses[i].classList.add("level-hint");
    }
    if (levelStatusObj[i].levelStatus === "completed") {
      levelStatuses[i].classList.add("level-done");
    }
  }
}
window.addEventListener("beforeunload", saveGame);

function startLoadedGame() {
  loadGame();
  drawStatuses();
  redrawLvl();
}

function startGame() {
  if (localStorage.getItem("levelsStatuses")) {
    startLoadedGame();
  } else startNewGame();
}

window.addEventListener("load", startGame);

function addWinAnimation(): void {
  const roomElements: NodeListOf<HTMLElement> =
    document.querySelectorAll(".animation");
  roomElements.forEach((el) => el.classList.add("fly"));
}

function redrawLvl() {
  input.value = "";
  showHtml();
  highlightCurrLvl();
  addAnimation();
  changeTask();
}

// TODO: FIX LEVEL*
// fix width when highlitinh text
