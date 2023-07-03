import { compareElem } from "../rs-css/app/compareArrs";

test('compare if two arrays are the same', () => {
  expect(compareElem([1, 2, 3, 4, 5], [1, 2, 3, 4, 5])).toBe(true);
});

test('compare if two arrays are the same', () => {
  expect(compareElem(["dress", "dog", "wardrobe"], ["dress", "dog", "wardrobe", "chair"])).toBe(false);
});