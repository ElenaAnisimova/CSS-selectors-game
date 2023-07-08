import { changeLvlNmb } from "../rs-css/app/hlLevel";


const mockedElementDOM = { innerHTML: "Mock span" } as unknown as HTMLElement;
const firstLvl = 0;

it('should set innerHTML as current level number', () => { 
 changeLvlNmb(mockedElementDOM, firstLvl);
  expect(mockedElementDOM.innerHTML).toBe("1");
});