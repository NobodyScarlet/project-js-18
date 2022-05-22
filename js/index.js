'use strict'

const arr = [1,2,3,-1,-2,-3];

function test (arr) {
    const exampleArr = [];

    if (arr.length === 0){
        return console.log(`Array ${arr} is empty`)
    }
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > 0) {
            exampleArr.push(arr[i]);
        }
    }
    if (exampleArr.length === 0) {
        return console.log(null);
    }
    return console.log(exampleArr);
}
test(arr)
test(-1,-2,-3)
test([-1,-2,-3,-4,-5, 6])
test([])
test([null,"a","*","i", undefined])