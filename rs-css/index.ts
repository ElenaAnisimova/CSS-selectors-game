import "./style.css";
import levels from "../sources/sources";

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
// const levelItems = levelList.children;

function drawLevels(): void {
  for (let i = 0; i < levels.length; i++) {
    const listItem = document.createElement("li");
    listItem.className = "levels-name";
    listItem.setAttribute("levelNumber", levels[i].level.toString());
    // listItem.id = levels[i].level.toString();
    levelList.appendChild(listItem);
    listItem.textContent = levels[i].levelName;
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

function checkSelectorConditions() {
  if (
    input.value == levels[currLevel].selector &&
    document.activeElement == input
  ) {
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

function removeClassShake(): void {
  codeWrapper.classList.remove("shake");
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
// function checkSelectorBtn () {

// }
window.addEventListener("keydown", checkSelectorEnter);
const enterBtn = document.querySelector(".btn-enter") as HTMLButtonElement;
enterBtn.addEventListener("click", checkSelectorConditions);
// TODO: FOCUS STAYS ON THE BTN 
