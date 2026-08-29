const user = {
    name: "Amrin",
    age: 25,
    address: {
        city: "Chennai"
    },
    skills: ["JavaScript", "React"]
};

function deepClone(obj){
    if(typeof obj !== 'object' || obj === null){
        return obj
    }

    if(Array.isArray(obj)){
        return obj.map(item => deepClone(item));
    }

    let result = {};

    for(let key in obj){
        result[key] = deepClone(obj[key]);
    }

    return result
}

const cloned = deepClone(user);

cloned.address.city = "Bangalore";
cloned.skills.push("Node.js");

console.log(cloned);
console.log(user);