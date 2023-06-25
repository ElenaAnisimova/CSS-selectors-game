const levels = [
  {
    level: 0,
    levelName: "A",
    selectorName: "Type Selector",
    task: "Select the dresses",
    taskDescription: "Select elements by their type",
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
    level: 1,
    levelName: "#id",
    selectorName: "ID Selector",
    task: "Select the blue dress",
    taskDescription: "Select elements with an ID",
    selector: "#blue",
    help: "#blue",
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
    level: 2,
    levelName: "A B",
    selectorName: "Descendant Selector",
    task: "Select the dog in the pet house",
    taskDescription: "Select an element inside another element",
    selector: "pethouse dog",
    help: "pethouse dog",
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
    level: 3,
    levelName: ".class",
    selectorName: "Class Selector",
    task: "Select the black dogs",
    taskDescription: "Select elements by their class",
    selector: ".black",
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
    level: 4,
    levelName: "A.classname",
    selectorName: "Class Selector",
    task: "Select the orange cat",
    taskDescription: "  A1Q4RDCombine the Class Selector",
    selector: "cat.orange",
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
    level: 5,
    levelName: "*",
    selectorName: "Universal Selector",
    task: "Select all elements",
    taskDescription: "  Combine the Class Selector",
    selector: ".castle *",
    help: ".castle *",
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
    level: 6,
    levelName: "A *",
    selectorName: "Universal Selector",
    task: "Select everything on the tables",
    taskDescription: " Combine the Universal Selector",
    selector: ".table *",
    help: ".table *",
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
    level: 7,
    levelName: "A + B",
    selectorName: "Adjacent Sibling Selector",
    task: "Select every vase that's next to a chair",
    taskDescription: "Select an element that directly follows another element",
    selector: "chair + vase",
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
    level: 8,
    levelName: "A > B",
    selectorName: "Child Selector",
    task: "Select the cat directly on the chair",
    taskDescription: "Select direct children of an element",
    selector: "chair > cat",
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
    level: 9,
    levelName: ":first-child",
    selectorName: "First Child Pseudo-selector",
    task: "Select the top cat",
    taskDescription: "Select an element that are the only element inside of another one",
    selector: "cat:first-child",
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
