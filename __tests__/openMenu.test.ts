import { toggleClass } from "../rs-css/app/openMenu";

/**
 * @jest-environment jsdom
 */
// test('use jsdom in this test file', () => {
//   const element = document.createElement('div');
//   // expect(element).not.toBeNull();
// });


describe('toggleClass', () => {
  const mockedElementDOM = { classList: { toggle: jest.fn()} } as unknown as HTMLElement;

  it('should toggle the class', () => {
    const className = 'mocked-class';
    toggleClass(mockedElementDOM, className);
    expect(mockedElementDOM.classList.toggle).toBeCalledWith('mocked-class');
  });
});

