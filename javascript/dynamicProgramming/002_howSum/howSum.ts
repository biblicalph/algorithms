/**
 * Analysis for both howSum and howSumAllCombinations. See sum.png for a breakdown of the tree
 * 
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
/**
 * Given a target sum and an array of numbers, the function returns true if there are any combination of elements 
 * in the numbers array that sum up to the target sum
 */
export const howSum = (targetSum: number, numbers: number[], memo: Record<string, number[] | null> = {}) => {
    if (targetSum === 0) return [];
    if (targetSum < 0) return null;
    if (targetSum in memo) return memo[targetSum];

    for (const num of numbers) {
        const newTargetSum = targetSum - num;
        const result = howSum(newTargetSum, numbers, memo);
        if (result) {
            memo[newTargetSum] = [...result, num];
            return memo[newTargetSum];
        }
    }

    memo[targetSum] = null;
    return null;
};


/**
 * Given a target sum and an array of numbers, the function returns all possible combinations of numbers
 * that sum up to the target sum
 */
export const howSumAllCombinations = (targetSum: number, numbers: number[]): number[][] | null => {
    const combinations = getSummableCombinations(targetSum, numbers, {});

    if (!combinations) {
        return null;
    }

    // Remove any duplicate combinations. Even with memoization, duplicates still occur
    return removeDuplicateArrays(combinations);
};

const getSummableCombinations = (targetSum: number, numbers: number[], memo: Record<string, number[][] | null> = {}): number[][] | null => {
    if (targetSum in memo) return null;
    if (targetSum === 0) return [[]];
    if (targetSum < 0) return null;

    let combinations: number[][] | null = null;
    for (const num of numbers) {
        const newTargetSum = targetSum - num;
        const result = getSummableCombinations(newTargetSum, numbers, memo);

        if (result) {
            combinations = combinations || [];
            combinations.push(...addToResultItems(num, result));
        }
    }

    memo[targetSum] = combinations;
    return memo[targetSum];
};

const addToResultItems = (num: number, result: number[][]): number[][] => {
    return result.map(entry => {
        entry.push(num);
        return entry;
    });
};

const removeDuplicateArrays = (combinations: number[][]): number[][] => {
    const elemSet = new Set<string>();
    return combinations.reduce((acc, elements) => {
        const key = elements.sort().join(",");
        if (!elemSet.has(key)) {
            acc.push(elements);
            elemSet.add(key);
        }
        return acc;
    }, [] as number[][]);
};