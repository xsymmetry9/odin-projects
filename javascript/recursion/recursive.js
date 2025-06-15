// Recursion Exercise by Odin Project
//Date: 9-16-2023

//1. Create a Fibonnaci function without using recursion

const fib = (num) =>{
    let arr = [0, 1];
    if(num <= 2)
    {
        return arr.splice(0, num);
    }
    else{
        for(let i = 2; i< num; i++){
            arr.push(arr[i - 2] + arr[i-1]) 
        }
        return arr;
    }
}

console.log(fib(4));
console.log(fib(1));
console.log(fib(2));

//2. Create a Fib function using recursion

const fibRecursive = (num, arr = [0, 1]) =>
    arr.length >= num ? arr.slice(0,num) : fibRecursive(num, [...arr, arr[arr.length - 2] + arr[arr.length - 1]]);
    
console.log(fibRecursive(4));
console.log(fibRecursive(1));
console.log(fibRecursive(2));

//3. Create a mergeSort function 

const mergeSort = (arr) =>{
    if(arr.length <= 1)
        {return arr}

    const middle = Math.floor(arr.length/2);
    const left = arr.slice(0, middle);
    const right = arr.slice(middle);

    return sort(mergeSort(left), mergeSort(right));
}

const sort = (left, right) =>{

    //gets two array list called "left" and "right"

    let result = [];
    let leftIndex = 0;
    let rightIndex = 0;

    //checks which one is greater and push the less one to the new array
    //and add +1 which ever side is greater
    while(leftIndex < left.length && rightIndex < right.length)
    {
        if(left[leftIndex] < right[rightIndex])
        {
            result.push(left[leftIndex])
            leftIndex++;
        } else {
            result.push(right[rightIndex])
            rightIndex++;
        }
    }
    return result.concat(left.slice(leftIndex), right.slice(rightIndex));
}

console.log(mergeSort([23,2,1,52,4,63,8,5]));

// left1a is [23, 2, 1, 52]

// left2a is [23, 2]
// left3a is [23]
// right3a is [2]
// //via merge
// left2a is [2,23]

// right2a is [1, 52]
// left is [1]
// right is [52]
// //via merge
// right2a is [1,52]

// left [1, 2, 23, 52]

// //end of recursion

// //--------------------------------------------------

// right is [4, 63, 8, 5]