const products = [
  { name: "iPhone", category: "Mobile" },
  { name: "Samsung", category: "Mobile" },
  { name: "MacBook", category: "Laptop" },
  { name: "Dell", category: "Laptop" }
];

function groupObj(arr, group){
    let result = {};

    for(let key of arr){

        let val = key[group];

        if(!result[val]){
            result[val] = [];
        }

        result[val].push(key);
    }

    return result
}

console.log(groupObj(products, "category"));