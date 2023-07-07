/* eslint-disable no-useless-escape */
import Highlight from "../rs-css/sources/highlight";

describe(Highlight, () => {
  const hl = new Highlight();

test('class method should parse html code correctly into spans', () => {
  expect(hl.highlightHtml(`<wardrobe></wardrobe>`)).toBe( 
    `<span class=\"method\">&lt;wardrobe</span><span class=\"method\">&gt;</span><span class=\"method\">&lt;/wardrobe</span><span class=\"method\">&gt;</span>`
  );
})
});
