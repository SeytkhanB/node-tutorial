import _lodash from "lodash";

const items = [1, [2, [3, [4]]]];
const newItems = _lodash.flattenDeep(items);
console.log(newItems); // [ 1, 2, 3, 4 ]
