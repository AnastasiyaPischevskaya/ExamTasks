'use strict';


let sum=0;
let k=0;
function test(arr){

  for(let i=0; i<arr.length; i++){
    
    if(Array.isArray(arr[i])){
        test(arr[i]);
        k++;
      }
    else{
      sum += arr[i];
    }
  }
console.log(sum, k);
}

// test([1,2,[3,4]])

test([2,5,[7,8,[4,3]]])