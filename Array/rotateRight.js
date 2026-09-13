function rotateRight(arr, r){
    let n = arr.length;
    r = r % n;

    for(let i=0; i<r; i++){
        const last = arr[n-1];

        for(let j=n-1; j>0; j--){
            arr[j] = arr[j-1];
        }

        arr[0] = last;
    }

    return arr
}

const arr = [1, 2, 3, 4, 5];
console.log(rotateRight(arr, 2));

//left rotate

function rotateLeft(arr, t){
    let n = arr.length;
    t = t % n;

    for(let i=0; i<t; i++){
        const first = arr[0];

        for(let j=0; j<n-1; j++){
            arr[j] = arr[j+1];
        }

        arr[n-1] = first;
    }

    return arr
}

// const arr = [1, 2, 3, 4, 5];

console.log(rotateLeft(arr, 2));