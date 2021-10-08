import bestSum from "./bestSum";

const testCases = [
    {
        input: {
            targetSum: 8, 
            numbers: [2, 3, 5]
        },
        output: [5, 3]
    },
    {
        input: {
            targetSum: 7, 
            numbers: [2, 3]
        },
        output: [3, 2, 2]
    },
    {
        input: {
            targetSum: 7, 
            numbers: [5, 3, 4, 7]
        },
        output: [7]
    },
    {
        input: {
            targetSum: 7, 
            numbers: [2, 4]
        },
        output: null
    },
    {
        input: {
            targetSum: 8, 
            numbers: [1, 4, 5]
        },
        output: [4, 4] // not [1, 1, 1, 5]
    },
    {
        input: {
            targetSum: 100, 
            numbers: [1, 2, 5, 25]
        },
        output: [25, 25, 25, 25]
    },
    {
        input: {
            targetSum: 300, 
            numbers: [7, 14]
        },
        output: null
    },
];

describe("bestSum spec", () => {
    testCases.forEach(({ input, output }) => {
        it(`should return ${output} when target sum = ${input.targetSum} and numbers = ${input.numbers}`, () => {
            const result = bestSum(input.targetSum, input.numbers);

            expect.hasAssertions();
            if (!output) {
                expect(result).toBeNull();
                return;
            } 
            expect(result).toEqual(expect.arrayContaining(output));
        });
    });
});