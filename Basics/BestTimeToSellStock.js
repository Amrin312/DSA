const arr = [7,1,5,3,6,4];

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


// DRY RUN
// 1 = 1-7 = -6 > 0 , min = 1 < 7 = 1
// 5 = 5-1 = 4 > 0 => 4, min = 5 < 1
// 3 = 3-1 = 2 > 4 , min = 3<1
// 6 = 6-1 =5 > 4 => 5, min = 5<1
// 4 = 4-1 = 3 >5, min 4<1;

// Leetcode 121
// You are given an array prices where prices[i] is the price of a given stock on the ith day.

// You want to maximize your profit by choosing a single day to buy one stock and choosing a different day in the future to sell that stock.

// Return the maximum profit you can achieve from this transaction. If you cannot achieve any profit, return 0.
