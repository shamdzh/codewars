/* Your goal in this kata is to implement a difference function, which subtracts one list from another and returns the result.

It should remove all values from list a, which are present in list b keeping their order.

arrayDiff([1,2],[1]) == [2]
If a value is present in b, all of its occurrences must be removed from the other:

arrayDiff([1,2,2,2,3],[2]) == [1,3]
 */

let a1 = [1, 2, 3, 4, 5];
let b1 = [2, 3];


function arrayDiff(a, b) {
    let newArray = a;

    for(let i = 0; i < b.length; i++) {
        newArray = newArray.filter((elem) => elem !== b[i])
    }

    return newArray;
  
}

console.log(arrayDiff(a1, b1))

// best solution 
function array_diff(a, b) {
    return a.filter(e => !b.includes(e));
  }