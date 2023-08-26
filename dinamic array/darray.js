"use strict";
const nums = [];
//Write/update - O(1)
nums[0] = 1;
nums[1] = 2;
nums[2] = 3;
//write at the end O(1)
nums.push(4);
//write at the beginnig O(n)
nums.unshift(0);
nums.unshift(-1);
console.log(nums);
//Delete O(n)
nums.splice(2, 1);
console.log(nums);
