// example of recursive function with member dependency, no utilization of return value
class Node {
  name: string
  children: Node[]
}

class NodeFinder {
  _hasNodeIncluded: boolean
  _foundNode: Node

  findNode(node: Node, key: string): Node {
    if (node.name === key ) {
      this._hasNodeIncluded = true
      this._foundNode = node
    }
    node.children.map((childNode: Node) => this.findNode(childNode, key))
    return this._foundNode
  }
}

const newNodeFinder = new NodeFinder()
console.log(newNodeFinder.findNode({name: 'Peter Pan', children: []}, 'Peter Parker'))



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


// https://www.typescriptlang.org/docs/handbook/declaration-files/do-s-and-don-ts.html
// wrong use of non-primitive
function reverse(s: String): String {
  return s.split("").reverse().join("");
}

function unusedGenericType<T>() {
  return
}

// Don’t use the return type any for callbacks whose value will be ignored:
function f(x: () => any) {
  x()
}

// Don’t use optional parameters in callbacks unless you really mean it
function getObject(done: (data: any, elapsedTime?: number) => void): void {
  done('')
}

// Don’t write separate overloads that differ only on callback arity
declare function beforeAll(action: () => void, timeout?: number): void;
declare function beforeAll(action: (done: DoneFn) => void, timeout?: number): void;

// Don’t put more general overloads before more specific overloads
declare function fn(x: any): any;
declare function fn(x: HTMLElement): number;
declare function fn(x: HTMLDivElement): string;

var myElem: HTMLDivElement;
var x = fn(myElem); // x: any

// Don’t write several overloads that differ only in trailing parameters
interface Example {
  diff(one: string): number;
  diff(one: string, two: string): number;
  diff(one: string, two: string, three: boolean): number;
}

// Don’t write overloads that differ by type in only one argument position
interface Moment {
  utcOffset(): number;
  utcOffset(b: number): Moment;
  utcOffset(b: string): Moment;
}


