let arr = [7,1,5,3,6,4];

function findStock(arr){
    let min = arr[0];
    let maxProfit = 0;
    
    for(let i=1; i<arr.length; i++){
        if(arr[i] - min > maxProfit){
            maxProfit = arr[i] - min;
        }
        if(arr[i] < min){
            min = arr[i];
        }
    }
    
    return maxProfit
}

console.log(findStock(arr));

// store the min buy day and find the max profit from selling day and return maxProfit