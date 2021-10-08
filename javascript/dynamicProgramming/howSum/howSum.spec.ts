import { howSum, howSumAllCombinations } from "./howSum";

const testCases = [
    {
        input: {
            targetSum: 8, 
            numbers: [2, 3, 5]
        },
        output: [
            [2, 2, 2, 2],
            [2, 3, 3],
            [5, 3],
        ]
    },
    {
        input: {
            targetSum: 7, 
            numbers: [2, 3]
        },
        output: [
            [3, 2, 2]
        ]
    },
    {
        input: {
            targetSum: 7, 
            numbers: [5, 3, 4, 7]
        },
        output: [
            [3, 4],
            [7]
        ]
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
            targetSum: 300, 
            numbers: [7, 14]
        },
        output: null
    },
];

describe("howSum spec", () => {
    testCases.slice(0, 1).forEach(({ input, output }) => {
        it(`should return ${output} when target sum = ${input.targetSum} and numbers = ${input.numbers}`, () => {
            const result = howSum(input.targetSum, input.numbers);

            expect.hasAssertions();
            if (!output) {
                expect(result).toBeNull();
                return;
            } 
            expect(result).toEqual(expect.arrayContaining(output[0]));
        });
    });
});

describe("howSumAllCombinations spec", () => {
    testCases.forEach(({ input, output }) => {
        it(`should return ${output} when target sum = ${input.targetSum} and numbers = ${input.numbers}`, () => {
            const result = howSumAllCombinations(input.targetSum, input.numbers);

            expect.hasAssertions();
            if (!output) {
                expect(result).toBeNull();
                return;
            } 
            output.forEach((row, ind) => {
                expect(result[ind]).toEqual(expect.arrayContaining(row));
            });
        });
    });
});