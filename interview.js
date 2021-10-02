/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  //   console.log(nums);
  //   if (nums[0] + nums[1] === target) {
  //     return [0, 1];
  //  }

  for (let i = 0; i < nums.length; i++) {
    const element1 = nums[i];
    for (let j = 0; j < nums.length; j++) {
      const element2 = nums[j];

      if (element1 + element2 === target) {
        return [i, j];
      }
    }
  }
};

console.log(twoSum([2, 7, 11, 15], 9));
console.log(twoSum([2, 7, 11, 15], 18));
console.log(twoSum([2, 7, 11, 15], 17));
