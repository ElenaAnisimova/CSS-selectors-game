import { addClassShake } from "../rs-css/app/wrongAnswer";

describe('toggleClass', () => {
  const mockedElementDOM = { classList: { add: jest.fn(), toggle: jest.fn(), remove: jest.fn()} } as unknown as HTMLElement;

  it('should toggle the class', () => {
    const className = 'mocked-class';
    addClassShake(mockedElementDOM, className);
    expect(mockedElementDOM.classList.add).toBeCalledWith('mocked-class');
  });
});
