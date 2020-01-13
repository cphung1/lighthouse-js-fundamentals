function merge (arrayOne, arrayTwo) {
  let combinedArray = concat(arrayOne, arrayTwo);
  let storeNum = ""
  for (let a = 0; a < combinedArray.length; a++){
    for (let x = 0; x < combinedArray.length; x++){
      if (combinedArray[a] < combinedArray[x]){
        storeNum = combinedArray[a];
        combinedArray[a] = combinedArray[x];
        combinedArray[x] = storeNum; 
      } 
    }
  }
  return combinedArray;
}

function concat(firstArray, secondArray) {
  for (let i = 0; i < secondArray.length; i++) {
    firstArray.push(secondArray[i]);
  }
  return firstArray;
}

console.log(merge([ 4, 5, 6 ], [ 1, 2, 3, 4 ]), "=?", [ 1, 2, 3, 4, 4, 5, 6 ]);
console.log(merge([ 4 ], [ 2, 5, 8 ]), "=?", [ 2, 4, 5, 8 ]);
console.log(merge([ 1, 2, 6 ], []), "=?", [ 1, 2, 6 ]);

