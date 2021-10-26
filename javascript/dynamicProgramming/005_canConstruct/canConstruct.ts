const canConstruct = (target: string, wordBank: string[], memo: Record<string, boolean> = {}) => {
    if (target === "") return true;
    // word bank doesn't change so target is sufficient as the key
    if (target in memo) return memo[target];

    for (const word of wordBank) {
        if (!target.startsWith(word)) {
            continue
        }
        const isConstructable = canConstruct(target.substring(word.length), wordBank, memo);
        if (isConstructable) {
            memo[target] = true;
            return memo[target];
        } 
    }

    memo[target] = false;
    return memo[target];
};

export default canConstruct;