import React, { useEffect, useState } from 'react'
import './__css__/SortingVisualizer.css'
import MergeSort from '../SortingAlgorithms/MergeSort';
import BubbleSort from '../SortingAlgorithms/BubbleSort';

function SortingVisualizer() {
    const [numArray,setNumArray] = useState([]);
    const [arraySize,setArraySize] = useState(100);
    function generateArray(ArrayLength){
        const temparray = [];
        for(let i = 0 ; i<ArrayLength ; i++){
            const randNum = Math.floor(Math.random()*500 + 5);
            console.log(randNum);
            temparray.push(randNum);
        }
        // console.log(temparray)
        setNumArray(temparray);
    }
useEffect(()=>{
    generateArray(arraySize);
},[]);
const mergeSort = ()=>{
    setNumArray(MergeSort(numArray));
}
const bubbleSort = ()=>{
    // const sortedArray = (BubbleSort(numArray));
    // console.log(sortedArray);
    // setNumArray(sortedArray);
    console.log(BubbleSort(numArray));
    setNumArray(BubbleSort(numArray));
    console.log(numArray);
}
  return (
    <div>
        <h1>SORTING VISUALIZER</h1>
        <h3>ENTER SIZE OF ARRAY:</h3>
        <input type="number" className='inputField' onChange={(e)=>{
            setArraySize(e.target.value)
        }}/>
        <div className='container'>
            {numArray.map((items,index)=>{
                return(
                <div 
                className="bars"
                key={index}
                style={{height:`${items}px`}}>
                </div>)
            })}
        </div>
        <button onClick={()=>generateArray(arraySize)}>reset</button>
        <button onClick={()=>mergeSort()}>MERGE SORT</button>
        <button onClick={()=>bubbleSort()}>BUBBLE SORT</button>
    </div>
  )
}

export default SortingVisualizer;