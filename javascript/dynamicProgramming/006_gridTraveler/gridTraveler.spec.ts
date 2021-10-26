import gridTraveler from "./gridTraveler";

describe("gridTraveler spec", () => {
    const testCases = [
        {
            input: {
                rows: 2,
                cols: 3,
            },
            output: 3,
        },
        {
            input: {
                rows: 1,
                cols: 1,
            },
            output: 1,
        },
        {
            input: {
                rows: 0,
                cols: 1,
            },
            output: 0,
        },
        {
            input: {
                rows: 1,
                cols: 0,
            },
            output: 0,
        },
        {
            input: {
                rows: 0,
                cols: 0,
            },
            output: 0,
        },
    ];

    testCases.forEach(({ input, output }) => {
        it(`should return ${output} when input = ${JSON.stringify(input)}`, () => {
            expect(gridTraveler(input.rows, input.cols)).toBe(output);
        });
    });
})