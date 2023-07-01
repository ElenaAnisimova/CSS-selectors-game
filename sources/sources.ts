const levels = [
  {
    level: 0,
    levelName: "A",
    selectorName: "Type Selector",
    task: "Select the dresses",
    taskDescription: "Select elements by their type",
    selector: "dress",
    help: "dress",
    roomElements: `
     <div class="princess"></div>
    <wardrobe>
      <dress></dress>
      <dress></dress>
      <dress></dress>
    </wardrobe>
    `,
    htmlMarkup: [
      `<div class="princess"></div>`,
      "",
      `<wardrobe>`,
      `<dress></dress>`,
      `<dress></dress>`,
      `<dress></dress>`,
      `</wardrobe>`,
    ],
    htmlTemplate: `<div class="task-elements"></div><div class="task-elements"><div class="for-text"></div><div class="task-elements"></div><div class="task-elements"></div><div class="task-elements"></div><div class="for-text"></div></div>`,
  },
  {
    level: 1,
    levelName: "#id",
    selectorName: "ID Selector",
    task: "Select the blue dress",
    taskDescription: "Select elements with an ID",
    selector: "#blue",
    help: "#blue",
    roomElements: `
         <div class="princess"></div>,
           <wardrobe>
        <dress></dress>
        <coat></coat>
        <dress id="blue"></dress>
     </wardrobe>
      `,
    htmlMarkup: [
      `<div class="princess"></div>`,
      "",
      `<wardrobe>`,
      `<dress></dress>`,
      `<coat></coat>`,
      `<dress id="blue"></dress>`,
      `</wardrobe>`,
    ],
    htmlTemplate: `<div class="task-elements"></div><div class="task-elements"><div class="for-text"></div><div class="task-elements"></div><div class="task-elements"></div><div class="task-elements"></div><div class="for-text"></div></div>`,
  },
  {
    level: 2,
    levelName: "A B",
    selectorName: "Descendant Selector",
    task: "Select the dog in the pet house",
    taskDescription: "Select an element inside another element",
    selector: "pethouse dog",
    help: "pethouse dog",
    roomElements: `
      <div class="princess"></div>
      <vase></vase>
      <pethouse>
        <dog></dog>
      </pethouse>
      <dog></dog>
        `,
    htmlMarkup: [
      `<div class="princess"></div>`,
      `<vase></vase>`,
      "",
      `<pethouse>`,
      `<dog></dog>`,
      `</pethouse>`,
      `<dog></dog>`,
    ],
    htmlTemplate: `<div class="task-elements"></div><div class="task-elements"></div><div class="task-elements"><div class="for-text"></div><div class="task-elements"></div><div class="for-text"></div></div><div class="task-elements"></div>`,
  },
  {
    level: 3,
    levelName: ".class",
    selectorName: "Class Selector",
    task: "Select the black dogs",
    taskDescription: "Select elements by their class",
    selector: ".black",
    help: ".black",
    roomElements: `
      <div class="princess"></div>
      <pethouse>
        <dog class="black"></dog>
      </pethouse>
      <dog class="black"></dog>
      <dog class="brown"></dog>
        `,
    htmlMarkup: [
      `<div class="princess"></div>`,
      "",
      `<pethouse>`,
      `<dog class="black"></dog>`,
      `</pethouse>`,
      `<dog class="black"></dog>`,
      `<dog class="brown"></dog>`,
    ],
    htmlTemplate: `<div class="task-elements"></div><div class="task-elements"><div class="for-text"></div><div class="task-elements"></div><div class="for-text"></div></div><div class="task-elements"></div><div class="task-elements"></div>`,
  },
  {
    level: 4,
    levelName: "A.classname",
    selectorName: "Class Selector",
    task: "Select the orange cat",
    taskDescription: "  A1Q4RDCombine the Class Selector",
    selector: "cat.orange",
    help: "cat.orange",
    roomElements: `
       <div class="princess"></div>
       <pethouse>
            <dog class="black"></dog>
       </pethouse>
       <cat class="orange"></cat>
       <dog class="brown"></dog>
       <cat class="black"></cat>
        `,
    htmlMarkup: [
      `<div class="princess"></div>`,
      "",
      `<pethouse>`,
      `<dog class="black"></dog>`,
      `</pethouse>`,
      `<cat class="orange"></cat>`,
      `<dog class="brown"></dog>`,
      `<cat class="black"></cat>`,
    ],
    htmlTemplate: `<div class="task-elements"></div><div class="task-elements"><div class="for-text"></div><div class="task-elements"></div><div class="for-text"></div></div><div class="task-elements"></div><div class="task-elements"></div><div class="task-elements"></div>`,
  },
  //   {
  //     level: 5,
  //     levelName: "*",
  //     selectorName: "Universal Selector",
  //     task: "Select all elements",
  //     taskDescription: "  Combine the Class Selector",
  //     selector: ".castle *",
  //     help: ".castle *",
  //     boardMarkup: `
  //   <pethouse>
  //           <cat class="orange"></cat>
  //   </pethouse>
  //      <vase></vase>
  //      <dog class="brown"></dog>
  //      <cat class="black"></cat>
  //      <box></box>
  //       `,
  //       boardMarkup2: [
  //         `<div class="princess"></div>`,
  //         `<wardrobe>
  //         <dress></dress>
  //         <dress></dress>
  //         <dress></dress>
  //       </wardrobe>`,
  //         `<dress></dress>`,
  //         `<dress></dress>`,
  //         `<dress></dress>`,
  //       ],
  //     divsNames: ["wardrobe", "dress", "dress", "dress"],
  //   },
  // }
  {
    level: 5,
    levelName: "A *",
    selectorName: "Universal Selector",
    task: "Select everything on the tables",
    taskDescription: " Combine the Universal Selector",
    selector: ".table *",
    help: ".table *",
    roomElements: `
         <div class="princess"></div>
         <div class="table">
            <chicken></chicken>
         </div>
         <box></box>
         <div class="table">
            <vase class="small"></vase>
         </div>
         <div class="table">
            <cat class="black"></cat>
         </div>
        `,
    htmlMarkup: [
      `<div class="princess"></div>`,
      "",
      `<div class="table">`,
      `<chicken></chicken>`,
      `</div>`,
      `<box></box>`,
      "",
      `<div class="table">`,
      `<vase class="small"></vase>`,
      `</div>`,
      "",
      `<div class="table">`,
      `<cat class="black"></cat>`,
      `</div>`,
    ],
    htmlTemplate: `<div class="task-elements"></div><div class="task-elements"><div class="for-text"></div><div class="task-elements"></div><div class="for-text"></div></div><div class="task-elements"></div><div class="task-elements"><div class="for-text"></div><div class="task-elements"></div><div class="for-text"></div></div><div class="task-elements"><div class="for-text"></div><div class="task-elements"></div><div class="for-text"></div></div>`,
  },
  {
    level: 6,
    levelName: "A + B",
    selectorName: "Adjacent Sibling Selector",
    task: "Select every vase that's next to a chair",
    taskDescription: "Select an element that directly follows another element",
    selector: "chair + vase",
    help: "chair + vase",
    roomElements: `
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
    htmlMarkup: [
      "",
      `<chair>`,
      `<cat class="black"></cat>`,
      `</chair>`,
      `<vase></vase>`,
      `<chair></chair>`,
      `<vase class="small"></vase>`,
      `<vase></vase>`,
      "",
      `<div class="table">`,
      `<vase class="small"></vase>`,
      `</div>`,
    ],
    htmlTemplate: `<div class="task-elements"><div class="for-text"></div><div class="task-elements"></div><div class="for-text"></div></div><div class="task-elements"></div><div class="task-elements"></div><div class="task-elements"></div><div class="task-elements"></div><div class="task-elements"><div class="for-text"></div><div class="task-elements"></div><div class="for-text"></div></div>`,
  },
  {
    level: 7,
    levelName: "A > B",
    selectorName: "Child Selector",
    task: "Select the cat directly on the chair",
    taskDescription: "Select direct children of an element",
    selector: "chair > cat",
    help: "chair > cat",
    roomElements: `
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
    htmlMarkup: [
      `<cat class="white"></cat>`,
      "",
      `<chair>`,
      `<cat class="white"></cat>`,
      `</chair>`,
      `<cat class="orange"></cat>`,
      `<chair></chair>`,
      "",
      `<chair>`,
      "",
      `<basket>`,
      `<cat class="white"></cat>`,
      `</basket>`,
      `</chair>`,
    ],
    htmlTemplate: `<div class="task-elements"></div><div class="task-elements"><div class="for-text"></div><div class="task-elements"></div><div class="for-text"></div></div><div class="task-elements"></div><div class="task-elements"></div><div class="task-elements"><div class="for-text"></div><div class="task-elements"><div class="for-text"></div><div class="task-elements"></div><div class="for-text"></div></div><div class="for-text"></div></div>`,
  },
  {
    level: 8,
    levelName: ":last-child",
    selectorName: "Last Child Pseudo-selector",
    task: "Select the lower cat",
    taskDescription: "Select the last element inside of another elemente",
    selector: "cat:last-child",
    help: "cat:last-child",
    roomElements: `
    <div class="princess"></div>
    <chair class="fancy"></chair>
    <dog></dog>
    <chair class="fancy">
           <cat class="black"></cat>
           <cat class="black"></cat>
           <cat class="black"></cat>
    </chair>
    <basket></basket>
          `,
    htmlMarkup: [
      `<div class="princess"></div>`,
      `<chair class="fancy"></chair>`,
      `<dog></dog>`,
      "",
      `<chair class="fancy">`,
      `<cat class="black"></cat>`,
      `<cat class="black"></cat>`,
      `<cat class="black"></cat>`,
      `</chair>`,
      `<basket></basket>`,
    ],
    htmlTemplate: `<div class="task-elements"></div><div class="task-elements"></div><div class="task-elements"></div><div class="task-elements"><div class="for-text"></div><div class="task-elements"></div><div class="task-elements"></div><div class="task-elements"></div><div class="for-text"></div></div><div class="task-elements"></div>`,
  },
  {
    level: 9,
    levelName: ":not",
    selectorName: "Negation Pseudo-class",
    task: "Select all the elements that are NOT black",
    taskDescription: "Select all the elements that are NOT black",
    selector: ":not(.black)",
    help: ":not(.black)",
    roomElements: `
    <dog></dog>
    <div class="table">
    <cat class="orange"></cat>
    </div>
    <dog class="black"></dog>
    <chair class="black">
    <dog></dog>
    </chair>
    <vase class="black"></vase>
          `,
    htmlMarkup: [
      `<dog></dog>`,
      '',
      `<div class="table">`,
      `<cat class="orange"></cat>`,
      `</div>`,
      `<dog class="black"></dog>`,
      '',
      `<chair class="black">`,
      `<dog></dog>`,
      `</chair>`,
      `<vase class="black"></vase>`,
    ],
    htmlTemplate: `<div class="task-elements"></div><div class="task-elements"><div class="for-text"></div><div class="task-elements"></div><div class="for-text"></div></div><div class="task-elements"></div><div class="task-elements"><div class="for-text"></div><div class="task-elements"></div><div class="for-text"></div></div><div class="task-elements"></div>`
  },
];
export default levels;
