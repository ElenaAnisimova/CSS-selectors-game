export type strIndex1 = 28;

export type strIndex2 = 12;

export type Callback<T> = (data?: T) => void;

export interface levelObj {
  levelStatus: string;
  useHint: string;
}

export interface Default {
  code: string;
  preventDefault: () => void;
}

export interface levelsInfo {
  level: number;
  levelName: string;
  selectorName: string;
  task: string;
  taskDescription: string;
  selector: string;
  help: string;
  roomElements: string;
  htmlMarkup: string[];
  htmlTemplate: string;
}
