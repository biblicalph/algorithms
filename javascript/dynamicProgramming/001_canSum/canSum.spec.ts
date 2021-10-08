import canSum from "./canSum";

describe("canSum spec", () => {
    const testCases = [
        {
            input: {
                targetSum: 7,
                numbers: [2, 3]
            },
            output: true,
        },
        {
            input: {
                targetSum: 7,
                numbers: [5, 3, 4, 7]
            },
            output: true,
        },
        {
            input: {
                targetSum: 7,
                numbers: [2, 4],
            },
            output: false,
        },
        {
            input: {
                targetSum: 8,
                numbers: [2, 3, 5],
            },
            output: true,
        },
        {
            input: {
                targetSum: 300,
                numbers: [7, 14],
            },
            output: false,
        },
    ];

    testCases.forEach(({ input, output }) => {
        it(`should return ${output} if target sum = ${input.targetSum} and numbers = ${input.numbers}`, () => {
            expect(canSum(input.targetSum, input.numbers)).toBe(output);
        });
    })
});