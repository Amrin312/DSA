function findFirstOccurrence(arr, num){
    for(let i=0; i<arr.length; i++){
        if(arr[i] == num){
            return i
        }
    }

    return -1
}


console.log(findFirstOccurrence([1, 2, 2, 2, 3, 4], 2));


//below is Only for sorted array
function findFirstOccurrence(arr, target) {
    let left = 0;
    let right = arr.length - 1;
    let result = -1;

    while(left <= right){
        const mid = Math.floor((left + right)/2);
        
        if(arr[mid] === target){
            result = mid;
            right = mid-1;
        }else if(arr[mid] < target){
            left = mid +1
        }else{
            right = mid-1;
        }
    }

    return result;
}

console.log(findFirstOccurrence([1, 2, 3, 4, 5, 6, 7, 8, 9], 8));