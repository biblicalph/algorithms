# Problem

Say that you are a traveler on a 2D grid. You begin in the top-left corner and your goal is to travel
to the bottom-right corner. You may only move down or right.

In how many ways can you travel to the goal on a grid with dimensions `m * n`?

Write a function `gridTraveler(m, n)` that calculates this.

Given the following inputs, the function should return the expected output

```js
gridTravel(2, 3) = 3
gridTraveler(1, 1) = 1
gridTraveler(1, 0) = 0
gridTraveler(0, 1) = 0
gridTraveler(0, 0) = 0
```

See [Freecodecamp video](https://youtu.be/oBt53YbR9Kk?t=12265) for visualization of grid travel using tabulation method
