import { changeTask } from "../rs-css/app/changeTask";

const mockedElementDOM = { innerText: "" } as unknown as HTMLHeadingElement;
const firstLvl = 0;

it('should set element innerText to be equal current level task', () => { 
 changeTask(mockedElementDOM, firstLvl);
  expect(mockedElementDOM.innerText).toBe("Select the dresses");
});

const seventhLvl = 6;
it('should set element innerText to be equal current level task', () => { 
 changeTask(mockedElementDOM, seventhLvl);
  expect(mockedElementDOM.innerText).toBe("Select every vase that's next to a chair");
});
