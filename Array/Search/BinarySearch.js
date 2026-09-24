const arr = [2, 5, 8, 12, 16, 23, 38];

const target = 16;

function binarySearch(arr, target) {
    let n = arr.length;
    let l = 0;
    let r = n-1;
        while(r >= l){
            let mid = Math.floor((r+l) / 2);
            if(arr[mid] === target){
                return mid 
            }else if(target > arr[mid]){
                l = mid + 1; 
            }else if(target < arr[mid]){
                r = mid - 1; 
            } 
        } 
        return -1; 
} 

console.log(binarySearch(arr, target));