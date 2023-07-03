export function compareElem<T> (array1: T[], array2: T[]): boolean {
  const compLen: boolean = array1.length === array2.length;
  const compEl: boolean = array1.every(function (
    element: T,
    index: number
  ) {
    return element === array2[index];
  });
  return compLen && compEl;
}
