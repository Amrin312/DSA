let arr = [5,6,2,7,1];

function insertionSort(){
    let n = arr.length;

    for(let i=1; i<n; i++){
        let curr = arr[i];

        let j = i-1;

        console.log(j);
        while(j >= 0 && arr[j] > curr){
                arr[j + 1] = arr[j]
                
                j--;
        }
        arr[j+1] = curr;
    }
    return arr
}


console.log(insertionSort(arr));