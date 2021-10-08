# Problem statement

Write a function `canSum(targetSum, numbers)` that takes in a targetSum and an array of numbers as arguments.

The function should return a boolean indicating whether or not it is possible to generate the targetSum using numbers
from the array.

You may use an element of the array as many times as needed.

You may assume that all input numbers are non-negative.

Below are sample inputs and the expected output:

```js
howSum(7, [2, 3]) = true 
howSum(7, [5, 3, 4, 7]) = true
howSum(7, [2, 4]) = false
howSum(8, [2, 3, 5]) = true
howSum(300, [7, 14]) = false
```

## Additional Notes

The `canSum` problem is an example of a **decision** problem.
