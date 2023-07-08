import "./style.css";
import levelStatusObjTempl from "./sources/levelsStatuses";
import openBrgMenu from "./app/openMenu";
import { listenInput } from "./app/hlInput";
import { drawStatuses } from "./app/drawStatuses";
import { drawLevels } from "./app/drawLevels";
import { redrawLvl } from "./app/redrawLevel";
import { chooseLevel } from "./app/chooseLvl";
import { callHintFunc } from "./app/typeHint";
import { callSaveGame } from "./app/saveGame";
import { startNewGame, callStartGame, clearStorage } from "./app/newGame";
import { callCheckAnsKey } from "./app/checkAnswerEnt";
import { callCheckAns } from "./app/checkAnswer";
import { levelObj } from "./sources/types";
export let levelStatusObj: levelObj[]  = levelStatusObjTempl;

// CURRENT LEVEL VARIABLE 
declare global {
  interface Window { currLevel: number; }
}
window.currLevel = window.currLevel || 0;

// DRAW HTML
drawLevels();
chooseLevel();

// START GAME, LOAD GAME 
export function loadGame(){
  if (localStorage.getItem("levelsStatuses") != null) {
    levelStatusObj = JSON.parse(localStorage.getItem("levelsStatuses") ?? "");
  }
  
  if (localStorage.getItem("currentLevel") != null) {
    window.currLevel = JSON.parse(localStorage.getItem("currentLevel") ?? "0");
  }
  return levelStatusObj
}

function startLoadedGame(): void {
  loadGame();
  drawStatuses();
  redrawLvl();
}

function startGame(): void {
  if (localStorage.getItem("levelsStatuses") != null) {
    startLoadedGame();
  } else startNewGame();
}

window.addEventListener("load", startGame);

// LISTENERS 
openBrgMenu();
listenInput();
callHintFunc();
callSaveGame();
clearStorage();
callStartGame();
callCheckAns();
callCheckAnsKey();