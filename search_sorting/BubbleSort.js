function bubbleSort(arr){

    let n = arr.length;
    let count = 0;

    for(let j=0; j<n-1; j++){

        let isSwapped = false;
        
        for(let i=0; i<n-1-i; i++){
            count++
          
            if(arr[i] > arr[i+1]){
                [arr[i], arr[i+1]] = [arr[i+1], arr[i]]
            }

        }
            if(!isSwapped) break
    }

    console.log(count);
    return arr
}

console.log(bubbleSort([5,0,1,2,7,9,3,4]));