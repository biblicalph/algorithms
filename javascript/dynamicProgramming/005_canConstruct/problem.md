# Problem

Write a function `canConstruct(target, wordBank)` that accepts a target string and an array of strings.

The function should return a boolean indicating whether or not the `target` can be constructed by
concatenating elements of the `wordBank` array.

You may reuse elements of `wordBank` as many times as needed.

Given the following inputs, the function should return the expected output

```js
canConstruct(abcdef, [ab, abc, cd, def, abcd]) = true
canConstruct(skateboard, [bo, rd, ate, t, ska, sk, boar ]) = false
canConstruct("", [cat, dog, mouse]) = true
```

See [abcdef problem diagram](./diagram1.png) and [skateboard problem diagram](./diagram2.png) for a visual explanation
of the solution.
