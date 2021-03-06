import fibonacci, { fibonacciUsingTab } from "./fibonacci";

const testCases = [
    {
        input: 1,
        output: 1,
    },
    {
        input: 2,
        output: 1,
    },
    {
        input: 3,
        output: 2,
    },
    {
        input: 7,
        output: 13,
    },
    {
        input: 20,
        output: 6765,
    },
    {
        input: 40,
        output: 102334155,
    },
    {
        input: 50,
        output: 12586269025,
    }
];

describe("fibonacci spec", () => {
    testCases.forEach(({ input, output }) => {
        it(`should return ${output} if input = ${input}`, () => {
            expect(fibonacci(input)).toBe(output);
        });
    });
});

describe("fibonacciUsingTab spec", () => {
    testCases.forEach(({ input, output }) => {
        it(`should return ${output} if input = ${input}`, () => {
            expect(fibonacciUsingTab(input)).toBe(output);
        });
    });
});