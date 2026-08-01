// Remove Duplicates from Sorted Array

function removeDuplicates(arr){
   let x = 0;
   
   for(let i=0; i<arr.length; i++){
       if(arr[i] > arr[x]){
           x = x+1;
           arr[x] = arr[i];
       }
   }
   return arr
}

let arr=[0,0,1,1,1,2,2,3,3,4];
console.log(removeDuplicates(arr));

//DRY RUN
// 0 =  0,0 X
// 0 => 0,0 X
// 1 => 1,0 => x =1, x1 = 1
// 1 => 1, 1 => X
// 1 => 1,1 X
// 2 => 2,1 => x=2, x2 = 2
// 2 => 2,2 => X
// 3 = 3,2 => x=3, x3 = 3
// 3 = 3,3 X
// 4 => 4, 3 => x=4 = x4 = 4
// 0,1,2,3,4,_,_,_,_ => returns 5

// Leetcode problem: 26
// Given an integer array nums sorted in non-decreasing order, remove the duplicates in-place such that each unique element appears only once. The relative order of the elements should be kept the same.

// Consider the number of unique elements in nums to be k​​​​​​​​​​​​​​. After removing duplicates, return the number of unique elements k.

// The first k elements of nums should contain the unique numbers in sorted order. The remaining elements beyond index k - 1 can be ignored.