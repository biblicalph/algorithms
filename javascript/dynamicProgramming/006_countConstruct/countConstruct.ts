const countConstruct = (target: string, wordBank: string[], memo: Record<string, number> = {}) => {
    if (target === "") return 1;
    if (target in memo) return memo[target];

    let numWays = 0;
    for (const word of wordBank) { 
        if (!target.startsWith(word)) {
            continue;
        }
        numWays += countConstruct(target.slice(word.length), wordBank, memo);
    }

    memo[target] = numWays;
    return numWays;
};

export default countConstruct;