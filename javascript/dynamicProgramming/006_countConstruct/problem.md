# Problem

Write a function `countConstruct(target, wordBank)` that accepts a target string and an array of strings.

The function should return the number of ways the `target` can be constructed by concatenating elements of the
`wordBank` array. You may reuse elements of `wordBank` as many times as needed.

Given the following inputs, the function should return the expected output

```js
canConstruct(abcdef, [ab, abc, cd, def, abcd]) = 1
canConstruct(skateboard, [bo, rd, ate, t, ska, sk, boar ]) = 0
canConstruct("", [cat, dog, mouse]) = 1
canConstruct(purple, [purp, p, ur, le, purpl]) = 2
```
