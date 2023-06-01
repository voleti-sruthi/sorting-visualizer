// import React from 'react'

function MergeSort(numArray) {
    if(numArray.length === 1){
        return numArray; 
    }
    const middleIdx = Math.floor(numArray.length/2);
    const firstHalfArr = MergeSort(numArray.slice(0,middleIdx));
    const secondHalfArr = MergeSort(numArray.slice(middleIdx));
    let i=0;
    let j=0;
    const sortedArray = [];
    while(i<firstHalfArr.length && j<secondHalfArr.length){
        if(firstHalfArr[i] < secondHalfArr[j]){
            sortedArray.push(firstHalfArr[i++]);
        }
        else{
            sortedArray.push(secondHalfArr[j++]);
        }
    }
    while(i<firstHalfArr.length) sortedArray.push(firstHalfArr[i++]);
    while(j<secondHalfArr.length) sortedArray.push(secondHalfArr[j++]);
    return sortedArray;
}

export default MergeSort;