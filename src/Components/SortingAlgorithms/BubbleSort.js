function BubbleSort(numArray) {
  let sortedArray = [];
  var swapped,temp;
  for(var i=0;i<numArray.length;i++){
    swapped = false;
    for(var j=0;j<numArray.length-i-1;j++){
        if (numArray[j] > numArray[j + 1])
          {
              temp = numArray[j];
              numArray[j] = numArray[j + 1];
              numArray[j + 1] = temp;
              swapped = true;
          }
    }
    if (swapped === false)
      break;
  }
  // sortedArray = numArray.sort((a,b)=>a-b);
  return sortedArray;
}

export default BubbleSort;