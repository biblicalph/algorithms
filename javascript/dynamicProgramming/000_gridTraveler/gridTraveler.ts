
const gridTraveler = (rows: number, cols: number, memo: Record<string, number> = {}): number => {
    // There's exactly 1 move in a 1x1 grid and no move in a 0x0 grid
    if (rows == 0 || cols == 0) return 0;
    if (rows == 1 && cols == 1) return 1;

    // Implement memoization to cache results
    const memoKey = `${rows},${cols}`;
    if (memoKey in memo) {
        return memo[memoKey];
    }

    return gridTraveler(rows - 1, cols, memo) + gridTraveler(rows, cols - 1, memo);
};

export default gridTraveler;


/**
 * Implement grid traveler using tabulation method
 * Space complexity: O(m * n)
 * Time complexity: O(m * n)
 */
export const gridTravelUsingTabulation = (rows: number, cols: number): number => {
    if (rows == 0 || cols == 0) {
        return 0;
    }
    // Create rows X cols grid and initialize with 0s
    const grid = Array.from({ length: rows + 1 })
        .map(() => Array(cols + 1).fill(0));
    
    // There is exactly 1 way to travel through a 1x1 grid
    grid[1][1] = 1;

    for (let rowIndex = 0; rowIndex <= rows; rowIndex++) {
        for (let colIndex = 0; colIndex <= cols; colIndex++) {
            const currentVal = grid[rowIndex][colIndex];
            // Increment element to the right and bottom of current
            if (colIndex + 1 <= cols) {
                grid[rowIndex][colIndex + 1] += currentVal;
            }
            if (rowIndex + 1 <= rows) {
                grid[rowIndex + 1][colIndex] += currentVal;
            }
        }
    }

    // The value in the bottom right is the number of ways to travel
    return grid[rows][cols];
};