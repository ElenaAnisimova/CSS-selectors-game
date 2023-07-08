import { winMessage } from "../rs-css/app/winMessage";
import win from "../rs-css/sources/winMarkup";


const mockedElementDOM = { classList: { toggle: jest.fn()}, innerHTML: "" } as unknown as HTMLElement;

it('should set innerHTML', () => { 
  winMessage(mockedElementDOM);
  expect(mockedElementDOM.innerHTML).toBe(win.markup);
});