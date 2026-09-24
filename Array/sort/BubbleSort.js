const arr = [4, 1, 3, 2];

function bubbleSort(arr) {
    let n = arr.length;

    for(let i=0; i<n-1; i++){
        let swapped = false;
        for(let j=0; j<n-i-1; j++){
            if(arr[j + 1] < arr[j]){
                let temp = arr[j]; arr[j] = arr[j+1];
                arr[j+1] = temp;
                swapped = true;
                }
        } 
        if(!swapped){
                break 
            } 
    } 
    return arr
} 
    console.log(bubbleSort(arr));
    // Expected output: // [1, 2, 3, 4] 

        