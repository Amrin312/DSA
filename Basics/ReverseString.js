function reverseString(arr){
    
    let n = arr.length-1;
    let len = Math.floor(arr.length /2);
    
    for(let i=0; i<len; i++){
        [arr[i], arr[n-i]] = [arr[n-i], arr[i]]
    }
    
    return arr;
}


let arr=["h","e","l","l","o"];
console.log(reverseString(arr));