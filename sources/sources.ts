const levels = [
  {
    level: 1,
    levelName: "A",
    selectorTask: "Select elements by their type",
    selectorName: "Type Selector",
    task: "Select the dresses",
    selector: "dress",
    help: "dress",
    boardMarkup: `
    <div class="princess"></div>
    <wardrobe>
      <dress></dress>
      <dress></dress>
      <dress></dress>
    </wardrobe>
    `,
  },
  {
    level: 2,
    doThis: "Select the blue dress",
    selectorName: "ID Selector",
    helpTitle: "Select elements with an ID",
    selector: "#blue",
    levelName: "#id",
    help: "#fancy",
    boardMarkup: `
    <div class="princess"></div>
      <wardrobe>
        <dress></dress>
        <coat></coat>
        <dress id="blue"></dress>
    </wardrobe>
    `,
  },
  {
    level: 3,
    doThis: "Select the dog in the pet house",
    selectorName: "Descendant Selector",
    helpTitle: "Select elements with an ID",
    selector: "box dog",
    levelName: "A B",
    help: "box dog",
    boardMarkup: `
    <div class="princess"></div>
        <vase></vase>
        <pethouse>
          <dog></dog>
        </pethouse>
        <dog></dog>
      `,
  },
  {
    level: 4,
    doThis: "Select the black dogs",
    selectorName: "Class Selector",
    helpTitle: "Select elements by their class",
    selector: ".black",
    levelName: ".class",
    help: ".black",
    boardMarkup: `
    <div class="princess"></div>
      <pethouse>
                      <dog class="black"></dog>
      </pethouse>
              <dog class="black"></dog>
              <dog class="brown"></dog>
      `,
  },
  {
    level: 5,
    doThis: "Select the orange cat",
    selectorName: "Class Selector",
    helpTitle: "  A1Q4RDCombine the Class Selector",
    selector: "cat.orange",
    levelName: "A.classname",
    help: "cat.orange",
    boardMarkup: `
     <div class="princess"></div>
  <pethouse>
          <dog class="black"></dog>
  </pethouse>
     <cat class="orange"></cat>
     <dog class="brown"></dog>
     <cat class="black"></cat>
      `,
  },
  {
    level: 6,
    doThis: "Select all elements",
    selectorName: "Universal Selector",
    helpTitle: "  Combine the Class Selector",
    selector: "*",
    levelName: "*",
    help: "*",
    boardMarkup: `
     
  <pethouse>
          <cat class="orange"></cat>
  </pethouse>
     <vase></vase>
     <dog class="brown"></dog>
     <cat class="black"></cat>
     <box></box>
      `,
  },
];
export default levels;
