/**
 * Brute force solution (without memoization) has O(n^m) time complexity, where n is the number of elements in the array
 * and m is the target sum. i.e. If the numbers includes a 1, there will be at least m level stack calls [m - 1, m - 2, ..., 0]
 * At each level, we make n calls.
 * With memoization, we eliminate some of the calls at each level of m and achieve a O(m * n) complexity
 * Space complexity is always O(m), the height of the stack
 */
const canSum = (targetSum: number, numbers: number[], memo: Record<string, boolean | null>  = {}) => {
    if (targetSum === 0) return true;
    if (targetSum < 0) return false;

    if (targetSum in memo) {
        return memo[targetSum];
    }

    for (const num of numbers) {
        const diff = targetSum - num;
        
        memo[diff] = canSum(diff, numbers, memo);
        if (memo[diff]) {
            return true;
        }
    }
    return false;
};

export default canSum;