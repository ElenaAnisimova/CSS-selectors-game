/* eslint-disable no-useless-escape */
import Highlight from "../rs-css/sources/highlight";

test('function should parse html code correctly into spans', () => {
  expect(Highlight(`<wardrobe></wardrobe>`)).toBe( 
    `<span class=\"method\">&lt;wardrobe</span><span class=\"method\">&gt;</span><span class=\"method\">&lt;/wardrobe</span><span class=\"method\">&gt;</span>`
  );
});
