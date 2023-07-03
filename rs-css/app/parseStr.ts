import { strIndex1, strIndex2 } from "../sources/types"

const strIndex28:strIndex1 = 28
const strIndex12:strIndex2 = 12

function parseHtml (str: string): string {
    
  const indexInf = str.indexOf('<div class="info-div"></div>')
  const sliceinfOut = str.slice(0, indexInf) + str.slice(indexInf + strIndex28)
  function cutElem (str: string): string {
    const indexEl = str.indexOf(' element')
    const sliceElOut = str.slice(0, indexEl) + str.slice(indexEl + strIndex12)
    if (!sliceElOut.includes(' element')) {
      
      return sliceElOut
    } else return cutElem(sliceElOut)
  }
  // console.log(cutElem(sliceinfOut));
  
  return cutElem(sliceinfOut)
}
export default parseHtml