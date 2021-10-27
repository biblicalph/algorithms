const allConstruct = (target: string, wordBank: string[]): string[][] => {
    const memo = {}
    const result = allConstructHelper(target, wordBank, memo);
    return result;
};

const allConstructHelper = (target: string, wordBank: string[], memo: Record<string, string[][]>): string[][] => {
    if (target === "") return [ [] ];
    if (target in memo) return memo[target];

    const combinations: string[][] = [];

    for (const word of wordBank) {
        if (!target.startsWith(word)) {
            continue;
        }
        const result = allConstructHelper(target.slice(word.length), wordBank, memo);
        // add word to all entries in the result.
        // new array is returned during addition because of the use of memoization
        combinations.push(...result.map(entry => [word, ...entry]))
    }
    memo[target] = combinations;
    return combinations;
};

export default allConstruct;