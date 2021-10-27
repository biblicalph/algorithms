import allConstruct from "./allConstruct";

describe("canConstruct spec", () => {
    const testCases: {
        input: {
            target: string;
            wordBank: string[];
        },
        output: string[][];
    }[] = [
        {
            input: {
                target: "abcdef",
                wordBank: ["ab", "abc", "cd", "def", "abcd", "ef", "c"],
            },
            output: [
                [ "ab", "cd", "ef" ],
                [ "ab", "c", "def" ],
                [ "abc", "def" ],
                [ "abcd", "ef" ],
            ],
        },
        {
            input: {
                target: "skateboard",
                wordBank: ["bo", "rd", "ate", "t", "ska", "sk", "boar"],
            },
            output: [],
        },
        {
            input: {
                target: "purple",
                wordBank: ["purp", "p", "ur", "le", "purpl"],
            },
            output: [
                [ "purp", "le" ],
                [ "p", "ur", "p", "le" ],
            ],
        },
        {
            input: {
                target: "enterapotentpot",
                wordBank: ["a", "p", "ent", "enter", "ot", "o", "t"],
            },
            output: [
                [ "enter", "a", "p", "o", "t", "ent", "p", "ot"],
                [ "enter", "a", "p", "o", "t", "ent", "p", "o", "t"],
                [ "enter", "a", "p", "ot", "ent", "p", "o", "t"],
                [ "enter", "a", "p", "ot", "ent", "p", "ot"],
            ],
        },
        {
            input: {
                target: `${"e".repeat(39)}f`,
                wordBank: ["e", "ee", "eee", "eeee", "eeeee", "eeeeee"],
            },
            output: [],
        },
        {
            input: {
                target: "",
                wordBank: ["cat", "dog", "mouse"],
            },
            output: [[]],
        },
    ];

    testCases.forEach(({ input, output }) => {
        it(`should return ${output} when target = ${input.target} and wordBank = ${input.wordBank}`, () => {
            const result = allConstruct(input.target, input.wordBank);

            // if (!output.length) {
            //     expect(result).toEqual([]);
            //     return;
            // }
            expect(result).toEqual(expect.arrayContaining(output));
        });
    });
});