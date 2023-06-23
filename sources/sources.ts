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
  {
    level: 7,
    doThis: "Select everything on the tables",
    selectorName: "Universal Selector",
    helpTitle: " Combine the Universal Selector",
    selector: "table *",
    levelName: "A *",
    help: "table *",
    boardMarkup: `
       <div class="princess"></div>
       <div class="table">
      <chicken></chicken>
   </div>
       <div class="table">
             <vase class="small"></vase>
   </div>
   <box></box>
       <div class="table">
           <cat class="black"></cat>
   </div>
      `,
  },
  {
    level: 8,
    doThis: "Select every vase that's next to a chair",
    selectorName: "Adjacent Sibling Selector",
    helpTitle: "Select an element that directly follows another element",
    selector: "chair + vase",
    levelName: "A + B",
    help: "chair + vase",
    boardMarkup: `
  <chair>
         <cat class="black"></cat>
  </chair>
  <vase></vase>
  <chair></chair>
    <vase class="small"></vase>
  <vase></vase>
    <div class="table">
           <vase class="small"></vase>
  </div>
      `,
  },
  {
    level: 9,
    doThis: "Select the cat directly on the chair",
    selectorName: "Child Selector",
    helpTitle: "Select direct children of an element",
    selector: "chair > cat",
    levelName: "A > B",
    help: "chair > cat",
    boardMarkup: `
  <cat class="white"></cat>
 <chair>
        <cat class="white"></cat>
 </chair>
  <cat class="orange"></cat>
 <chair></chair>
 <chair>
    <basket>
              <cat class="white"></cat>
    </basket>
 </chair>     
       `,
  },
  {
    level: 10,
    doThis: "Select the top cat",
    selectorName: "First Child Pseudo-selector",
    helpTitle: "Select an element that are the only element inside of another one",
    selector: "cat:first-child",
    levelName: ":first-child",
    help: "cat:first-child",
    boardMarkup: `
    <chair class="fancy"></chair>
  <dog></dog>
    <chair class="fancy">
         <cat class="black"></cat>
         <cat class="black"></cat>
         <cat class="black"></cat>
  </chair>
  <basket></basket>
        `,
  },
];
export default levels;
