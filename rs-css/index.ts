import "./style.css";
import levels from "../sources/sources";

// // const cssEditor = document.querySelector(".css-editor") as HTMLElement;

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

const castle = document.querySelector(".castle") as HTMLElement;
// const princessTemplate = `<div class="princess"></div>` as string;
function showHtml(): void {
  // htmlView.innerText = castle.innerHTML;
  // console.log(document.querySelectorAll('.castle *')[1].outerHTML);
  // const arr = document.querySelectorAll(".castle *");
  // const result = [];
  // for (let i = 0; i < arr.length; i++) {
    //   result.push(arr[i].outerHTML);
    
    // }
    
    // console.log(result);
    // const roomElements = document.querySelectorAll(".castle *")[2].outerHTML;
    // console.log(roomElements);
    // if(roomElements === )
    
    
    castle.innerHTML = levels[0].boardMarkup;
  const code = levels[0].boardMarkup;
  console.log(code);

  const syntax = Highlight(code);
  htmlView.innerHTML = syntax;
  console.log(htmlView.innerText);
}
showHtml();

function drawLevels() {
  const levelList = document.querySelector(".levels-list") as HTMLOListElement;
  for (let i = 0; i < levels.length; i++) {
    const listItem = document.createElement("li");
    listItem.className = "levels-name";
    levelList.appendChild(listItem);
    listItem.textContent = levels[i].levelName;
  }
}
drawLevels();
// function checkSelector(){
//   if ()
// }
