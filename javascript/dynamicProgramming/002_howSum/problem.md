# Problem

Write a function `howSum(targetSum, numbers)` that takes in a targetSum and an array of numbers as arguments.

The function should return an array containing all combinations of elements that add up to exactly the targetSum.

If there is no combination that adds up to the targetSum, then return null.

Below are sample inputs and the expected output:

```js
howSum(7, [2, 3]) = [3, 2, 2] // order is not relevant
howSum(7, [5, 3, 4, 7]) = [3, 4], [7]
howSum(7, [2, 4]) = null
howSum(8, [2, 3, 5]) = [2, 2, 2, 2], [2, 3, 3] [3, 5]
howSum(300, [7, 14]) = null
```

## Additional Notes

`howSum` is an example of a **combinatoric** problem.
`howSumAllCombinations` is an example of a **combinatoric optimization** problem

See [diagram](./sum.png) for a visual explanation of the implemented solution.
