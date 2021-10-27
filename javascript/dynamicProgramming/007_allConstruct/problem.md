# Problem

Write a function `allConstruct(target, wordBank)` that accepts a target string and an array of strings.

The function should return an array of all the ways the `target` can be constructed by concatenating elements of the
`wordBank` array. You may reuse elements of `wordBank` as many times as needed.

Given the following inputs, the function should return the expected output

```js
canConstruct(abcdef, [ab, abc, cd, def, abcd]) = [ [abc, def] ]
canConstruct(skateboard, [bo, rd, ate, t, ska, sk, boar ]) = []
canConstruct("", [cat, dog, mouse]) = []
canConstruct(purple, [purp, p, ur, le, purpl]) = [ [purp, le], [p, ur, p, le] ]
```

For a visualization of the problem, see the [Freecodecamp Youtube course](https://youtu.be/oBt53YbR9Kk?t=10273)
