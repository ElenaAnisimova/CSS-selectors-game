export const compareElem = (array1: Element[], array2: Element[]): boolean => {
  const compLen: boolean = array1.length === array2.length;
  const compEl: boolean = array1.every(function (
    element: Element,
    index: number
  ) {
    return element === array2[index];
  });
  return compLen && compEl;
};
