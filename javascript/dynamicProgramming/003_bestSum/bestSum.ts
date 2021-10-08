/**
 * Brute force implementation (no memoization)
 * Time complexity: O(n^m * m), where m = target sum and n = length of numbers array.
 * For example, if { target: 8, numbers: [2, 3, 5] }, 
 * root of tree n^m = 3^0 = 1, level 1 3^1 = 3, etc.
 * The *m in the time complexity comes from the array spread, map and reduce operations
 * Space complexity of howSum: O(m)
 * Space complexity of howSumAllCombinations: O(m^2)
 * 
 * Memoized implementation
 * Time complexity: O(n*m*m) = O(n*m^2). m^2, due to the constant exponent, executes in polynomial time
 * Space complexity: O(m^2). Accounts for space used by the stack and the space used by the array created in the function
 */
const bestSum = (targetSum: number, numbers: number[], memo: Record<string, number[] | null> = {}): number[] => {
    if (targetSum === 0) return [];
    if (targetSum < 0) return null;
    if (targetSum in memo) return memo[targetSum];

    let shortestPath: number[] | null = null;

    for (const num of numbers) {
        const newTargetSum = targetSum - num;
        const result = bestSum(newTargetSum, numbers, memo);

        if (result) {
            const combination = [...result, num];

            if (shortestPath === null || combination.length < shortestPath.length) {
                shortestPath = combination;
            }
        }
    }

    memo[targetSum] = shortestPath;
    return shortestPath;
};

export default bestSum