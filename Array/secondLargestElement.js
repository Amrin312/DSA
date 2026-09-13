const arr = [10, 5, 8, 20, 15];

function secondLargest(arr) {
    let first = -Infinity;
    let second = -Infinity;

    for(let i=0; i<arr.length; i++){
        if(arr[i] > first){
            second = first;
            first = arr[i];
        }else if(second !== arr[i] && arr[i] > second){
            second = arr[i]
        }
    }

    return second
}

console.log(secondLargest(arr));