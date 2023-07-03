import parseHtml from "../rs-css/app/parseStr";

test('parse string "<dog element="3"><div class="info-div"></div></dog>" to be equal "<dog></dog>"', () => {
  expect(parseHtml(`<dog element="3"><div class="info-div"></div></dog>`)).toBe(`<dog></dog>`);
});