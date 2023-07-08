import { clearCSS } from "../rs-css/app/hlInput";

const mockedElementDOM = { innerHTML: "Hello, world" } as unknown as HTMLElement;

it('should remove innerHTML', () => { 
 clearCSS(mockedElementDOM);
  expect(mockedElementDOM.innerHTML).toBe("");
});


import { setInputValue } from "../rs-css/app/hlInput";

const mockedElementInput = { value: "Hello, world" } as unknown as HTMLInputElement;

it('should set innerHTML as input value', () => { 
 setInputValue(mockedElementDOM, mockedElementInput);
  expect(mockedElementDOM.innerHTML).toBe("Hello, world");
});
