function selectionSort(arr) {
    const n = arr.length;

    for(let i=0; i<n-1; i++){
        let min = i;

        for(let j=i+1; j<n; j++){
            if(arr[j] < arr[min]){
                min = j;
            }
        }

        let temp = arr[i];
        arr[i] = arr[min];
        arr[min] = temp;
    }

    return arr
}

console.log(selectionSort([1,4,6,7,3,2]));

//we select element in loop and swap to sort.