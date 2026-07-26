// function removeDuplicates(arr){
//     return arr.filter((item, index) => arr.indexOf(item) === index);
// }

// function removeDuplicates(arr){
//     return arr.reduce((acc, curr) => acc.includes(curr) ? acc : [...acc, curr], []);
// }

// function removeDuplicates(arr){
//     let result = [];
    
//     for(let i=0; i<arr.length; i++){
//         if(!result.includes(arr[i])){
//             result.push(arr[i]);
//         }
//     }
//     return result
// }




const array = [1, 21, 21, 2, 4, 5, 6, 8, 12, 12, 23, 8, 9];
console.log(removeDuplicates(array));