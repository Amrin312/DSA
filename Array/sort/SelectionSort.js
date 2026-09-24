const arr = [5, 2, 8, 1, 3];
 function selectionSort(arr) {
     let n = arr.length;
     for(let i =0; i<n-1; i++){
         let min = i;
          for(let j=i+1; j<n; j++){ 
            if(arr[j] < arr[min]){
                 min = j; 
                } 
            } 
            [arr[i], arr[min]] = [arr[min], arr[i]]
         }
          return arr
    } 
    console.log(selectionSort(arr));
    // Expected output: // [1, 2, 3, 5, 8]