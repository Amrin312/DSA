// Remove duplicate objects from an array.

function removeDuplicates(arr){

    let seen = new Set();
    let finalArr = [];

    for(let i=0; i<arr.length; i++){
        if(!seen.has(arr[i].id)){
            seen.add(arr[i].id);
            finalArr.push(arr[i]);
        }
    }
    return finalArr
}

const users = [
    { id: 1, name: "Amrin", age: 24 },
    { id: 2, name: "Rahul", age: 26 },
    { id: 1, name: "Amrin", age: 24 },
    { id: 3, name: "Priya", age: 25 },
    { id: 2, name: "Rahul", age: 26 },
    { id: 4, name: "John", age: 28 }
];

console.log(removeDuplicates(users));
