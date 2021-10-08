# Problem

Write a function `bestSum(targetSum, numbers)` that takes in a targetSum and an array of numbers as arguments.

The function should return the shortest combination of numbers that add up to the targetSum.

If there is no combination that adds up to the targetSum, then return null.

Below are sample inputs and the expected output:

```js
bestSum(7, [5, 3, 4, 7]) = [7]
bestSum(8, [2, 3, 5]) = [3, 5]
bestSum(8, [1, 4, 5]) = [4, 4]
bestSum(100, [1, 2, 5, 100]) = [25, 25, 25, 25]
```

## Additional Notes

The `bestSum` problem is an example of an **optimization** problem.
