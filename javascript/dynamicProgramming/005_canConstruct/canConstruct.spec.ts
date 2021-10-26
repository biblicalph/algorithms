import canConstruct from "./canConstruct";

describe("canConstruct spec", () => {
    const testCases: {
        input: {
            target: string;
            wordBank: string[];
        },
        output: boolean;
    }[] = [
        {
            input: {
                target: "abcdef",
                wordBank: ["ab", "abc", "cd", "def", "abcd"],
            },
            output: true,
        },
        {
            input: {
                target: "skateboard",
                wordBank: ["bo", "rd", "ate", "t", "ska", "sk", "boar"],
            },
            output: false,
        },
        {
            input: {
                target: "enterapotentpot",
                wordBank: ["a", "p", "ent", "enter", "ot", "o", "t"],
            },
            output: true,
        },
        {
            input: {
                target: `${"e".repeat(39)}f`,
                wordBank: ["e", "ee", "eee", "eeee", "eeeee", "eeeeee"],
            },
            output: false,
        },
    ];

    testCases.forEach(({ input, output }) => {
        it(`should return ${output} when target = ${input.target} and wordBank = ${input.wordBank}`, () => {
            expect(canConstruct(input.target, input.wordBank)).toBe(output);
        });
    });
});