import countConstruct from "./countConstruct";

describe("canConstruct spec", () => {
    const testCases: {
        input: {
            target: string;
            wordBank: string[];
        },
        output: number;
    }[] = [
        {
            input: {
                target: "abcdef",
                wordBank: ["ab", "abc", "cd", "def", "abcd"],
            },
            output: 1,
        },
        {
            input: {
                target: "skateboard",
                wordBank: ["bo", "rd", "ate", "t", "ska", "sk", "boar"],
            },
            output: 0,
        },
        {
            input: {
                target: "purple",
                wordBank: ["purp", "p", "ur", "le", "purpl"],
            },
            output: 2,
        },
        {
            input: {
                target: "enterapotentpot",
                wordBank: ["a", "p", "ent", "enter", "ot", "o", "t"],
            },
            output: 4,
        },
        {
            input: {
                target: `${"e".repeat(39)}f`,
                wordBank: ["e", "ee", "eee", "eeee", "eeeee", "eeeeee"],
            },
            output: 0,
        },
    ];

    testCases.forEach(({ input, output }) => {
        it(`should return ${output} when target = ${input.target} and wordBank = ${input.wordBank}`, () => {
            expect(countConstruct(input.target, input.wordBank)).toBe(output);
        });
    });
});