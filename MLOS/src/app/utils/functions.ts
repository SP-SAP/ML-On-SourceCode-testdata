// --- function getUniq ---
/* input: unsorted array */
/* output: sorted array with only unique values */

export function getUnique(a) {
  // initialize variables
  var i = 0
  var b = a.sort()
  var t = []
  // handel special cases
  if (a.length === 0) {
    return []
  }
  // loop over array
  for(; i < b.length; i++){
    if((b.length > 0 && i == 0) ||
      (i > 0 && t[t.length - 1] !== b[i])) {
      t.push(b[i])
    }
    if(i+1 === b.length) {
      return t
    }
  }

}
