function removeElement(nums, val){
    let x=0;
    
    for(let i=0; i<nums.length; i++){
        if(nums[i] !== val){
            nums[x] = nums[i];
            x = x+1;
        }
    }
    console.log(nums)
    return x
}


let arr=[0,1,2,2,3,0,4,2];

console.log(removeElement(arr, 2));

//We're copying only the values we want to keep.