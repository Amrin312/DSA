let n=259;

function countDigits(n){
    let count =0;

    if(n == 0) return 1 //corner case 1 => when n is 0. It should return 1 coz it is also a digit

    n = Math.abs(n); //corner case 2 => what if n is negative number. Math.abs() converts it into absolute value(0 - n)

    while(n > 0){
        n = Math.floor(n/10); 
        // use math.fllor coz it will round off the number. basically js returns in decimal value when we divide
        count++;
    }
    return count
}
console.log(countDigits(n));

