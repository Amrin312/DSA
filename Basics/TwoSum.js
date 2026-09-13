function twoSum(arr, target){
    const map = new Map();

    for(let i =0; i<arr.length; i++){
        const needed = target - arr[i];

        if(map.has(needed)){
            return [map.get(needed), i];
        }

        map.set(arr[i], i)
    }

    return []
}

console.log(twoSum([2,7,11,15], 9));


//dry run
// map = {}

// i=0 => {
//     needed = 9-2 = 7
//     if() false so skips
//     map.set(2, 0);
// }

// i=1 => {
//     needed = 9-7 = 2;
//     if(2) = yes so returns 0,1
// }