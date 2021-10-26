
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