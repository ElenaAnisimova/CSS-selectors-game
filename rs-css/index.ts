import "./style.css";
import levels from "../sources/sources";
import levelStatusObj from "../sources/levelsStatuses";

// // const cssEditor = document.querySelector(".css-editor") as HTMLElement;
// const form = document.querySelector(".form") as HTMLFormElement;

const htmlView = document.querySelector(".html-view") as HTMLElement;
const Highlight = (string: string): string => {
  string = string.replace(/</g, "&lt;");
  string = string.replace(/>/g, "&gt;");
  string = string.replace(
    /=(["|'](.*?)["|'])/g,
    '=<span class="string">$1</span>'
  );
  string = string.replace(/(\s.*)(?==<)/g, ' <span class="global">$1</span>');
  string = string.replace(
    /(?!<span\sclass=".*">.*<\/span>)(&lt;[^\s&;]+)/g,
    '<span class="method">$1</span>'
  );
  string = string.replace(
    /(?!<span\sclass=".*">.*<\/span>)(\/?&gt;)/g,
    '<span class="method">$1</span>'
  );
  //  console.log(string);
  return string;
};
let currLevel = 0;
const castle = document.querySelector(".castle") as HTMLElement;
// const princessTemplate = `<div class="princess"></div>` as string;
function showHtml(): void {
  // const arr = document.querySelectorAll(".castle *");
  // const result = [];
  // for (let i = 0; i < arr.length; i++) {
  //   result.push(arr[i].outerHTML);

  // }

  // console.log(result);

  castle.innerHTML = levels[currLevel].boardMarkup;
  const code = levels[currLevel].boardMarkup;
  const syntax = Highlight(code);
  htmlView.innerHTML = syntax;
}
showHtml();

function addAnimation() {
  // const roomElements = Array.from(document.querySelectorAll(".castle *"));
  const roomElements: NodeListOf<HTMLElement> = document.querySelectorAll(
    levels[currLevel].selector
  );
  // console.log(roomElements);
  roomElements.forEach((el) => el.classList.add("animation"));
}
addAnimation();

const levelList = document.querySelector(".levels-list") as HTMLOListElement;

function drawLevels(): void {
  for (let i = 0; i < levels.length; i++) {
    const listItem = document.createElement("li");
    listItem.className = "levels-item";
    listItem.setAttribute("levelNumber", levels[i].level.toString());
    // listItem.id = levels[i].level.toString();
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

function chooseLevel() {
  for (let i = 0; i < levelList.children.length; i++)
    levelList.addEventListener("click", (e) => {
      const target = e.target as HTMLElement;
      currLevel = Number(target.getAttribute("levelNumber"));
      showHtml();
      addAnimation();
    });
}
chooseLevel();

const input = document.querySelector(".input-selector") as HTMLInputElement;
const codeWrapper = document.querySelector(".code-wrapper") as HTMLDivElement;
const levelStatuses = document.querySelectorAll(".level-status");

function checkSelectorConditions() {
  function changeStatus() {
    if (levelStatusObj[currLevel].levelStatus == "hint") {
      levelStatuses[currLevel].classList.add("level-hint");
    } else levelStatuses[currLevel].classList.add("level-done");
  }
  function removeClassShake(): void {
    codeWrapper.classList.remove("shake");
  }
  if (
    input.value == levels[currLevel].selector &&
    document.activeElement == input
  ) {
    changeStatus();
    currLevel++;
    input.value = "";
    showHtml();
    addAnimation();
  } else if (
    input.value !== levels[currLevel].selector &&
    document.activeElement == input
  ) {
    codeWrapper.classList.add("shake");
    setTimeout(removeClassShake, 400);
  }
}

function checkSelectorEnter(el: {
  code: string;
  preventDefault: () => void;
}): void {
  if (el.code == "Enter") {
    el.preventDefault();
    checkSelectorConditions();
  }
}

window.addEventListener("keydown", checkSelectorEnter);
const enterBtn = document.querySelector(".btn-enter") as HTMLButtonElement;
enterBtn.addEventListener("click", checkSelectorConditions);

let line = 0;
let count = 0;
let result = "";
function typeLine() {
  const text = levels[currLevel].help;
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

function clearInput() {
  setTimeout(() => (input.placeholder = "Type a CSS Selector"), 2500);
  line = 0;
  count = 0;
  result = "";
}

function typeHelp() {
  typeLine();
  clearInput();
  hintStatus();
}

function hintStatus() {
  levelStatusObj[currLevel].levelStatus = "hint";
}

const helpBtn = document.querySelector(".btn-help") as HTMLButtonElement;
helpBtn.addEventListener("click", typeHelp);


// TODO: FOCUS STAYS ON THE BTN
// TODO: FIX LEVEL*
