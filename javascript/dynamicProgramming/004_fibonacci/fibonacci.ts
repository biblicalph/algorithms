/**
 * To compute the fibonacci of say 7, we do the following
 * fibonacci(7) = fibonacci(6) + fibonacci(5)
 * fibonacci(6) = fibonacci(5) + fibonacci(4)
 * fibonacci(5) = fibonacci(4) + fibonacci(3)    // this is repeated twice, once or fibonacci(7) and another for fibonacci(6)
 * fibonacci(4) = fibonacci(3) + fibonacci(2)
 * fibonacci(3) = fibonacci(2) + fibonacci(1)
 * fibonacci(2) = 1
 * fibonacci(1) = 1
 * 
 * In the absence o memoization number of function calls doubles at each step and this leads to an exponential time execution - 2^n
 * Using a memo, we can skip some calls we have already computed and reduce the time complexity to 0(n) - a polynomial time
 * Space complexity, for both memoized and non memoized implementations is 0(n)
 */
const fibonacci = (n: number, memo: Record<string, number> = {}) => {
    if (n <= 2) return 1;
    if (n in memo) return memo[n];

    memo[n] = fibonacci(n - 1, memo) + fibonacci(n - 2, memo);
    return memo[n];
};

export default fibonacci;

/**
 * Implementation of Fibonacci using dynamic tabulation tabulation method.
 * Space complexity: O(n)
 * Time complexity: O(2n) = O(n)
 */
export const fibonacciUsingTab = (n: number) => {
    const fibTable = Array(n + 1).fill(0);
    fibTable[1] = 1;

    for (let i = 2; i <= n; i++) {
        fibTable[i] = fibTable[i - 1] + fibTable[i - 2];
    }

    return fibTable[n];
};