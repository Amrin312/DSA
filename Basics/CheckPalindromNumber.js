
function palindromNumber(n){
    if(n < 0) return false // Corner case 1 => If it is negative value it is not a palindrom
    let num = n;
    let rev =0;

    while(num > 0){
        let rem = num % 10;  // Reminder is the last number. num % 10 gives the last number

        rev = (10* rev) + rem; // To store number in a varibale 

        num = Math.floor(num / 10); // To remove the last digit
    }

    return rev === n
}

let n=121;

console.log(palindromNumber(n));

