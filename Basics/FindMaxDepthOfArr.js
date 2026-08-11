function findDepth(arr) {
    let maxDepth = 0;

    function findCount(nums, depth) {
        for (let i = 0; i < nums.length; i++) {

            if (Array.isArray(nums[i])) {
                findCount(nums[i], depth + 1);
            }

            maxDepth = Math.max(maxDepth, depth);
        }
    }

    findCount(arr, 0);

    return maxDepth;
}

const arr = [
    1,
    [2, 3],
    [4, [5, 6]],
    [7, [8, [9, 10]]]
];

console.log(findDepth(arr));