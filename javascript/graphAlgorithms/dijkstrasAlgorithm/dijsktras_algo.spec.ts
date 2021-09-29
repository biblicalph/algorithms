import dijstrasAlgo, { IInputGraph, IResultGraph } from "./dijsktras_algo";


describe("dijskra's algorithm spec", () => {
    const testCases: {
        desc: string;
        input: {
            graph: IInputGraph;
            startNode: string;
            endNode: string
        },
        output: {
            totalCost: number;
            path: string[];
            graph: IResultGraph;
        }
    }[] = [
        {
            desc: "should return the least cost and path from trading a book for a piano",
            input: {
                graph: {
                    "book": {
                        "rare lp": 5,
                        "poster": 0,
                    },
                    "rare lp": {
                        "bass guitar": 15,
                        "drum set": 20,
                    },
                    "poster": {
                        "bass guitar": 30,
                        "drum set": 35
                    },
                    "bass guitar": {
                        "piano": 20,
                    },
                    "drum set": {
                        "piano": 10,
                    },
                    "piano": {}
                },
                startNode: "book",
                endNode: "piano",
            }, 
            output: {
                totalCost: 35,
                path: ["book", "rare lp", "drum set", "piano"],
                graph: {
                    "book": {
                        cost: 0,
                        prev: null,
                    },
                    "rare lp": {
                        cost: 5,
                        prev: "book"
                    },
                    "poster": {
                        cost: 0,
                        prev: "book",
                    },
                    "bass guitar": {
                        cost: 20,
                        prev: "rare lp",
                    },
                    "drum set": {
                        cost: 25,
                        prev: "rare lp",
                    },
                    "piano": {
                        cost: 35,
                        prev: "drum set"
                    }
                }
            },
        },
        {
            desc: "should return the least cost and path from trading a book for a bass guitar",
            input: {
                graph: {
                    "book": {
                        "rare lp": 5,
                        "poster": 0,
                    },
                    "rare lp": {
                        "bass guitar": 15,
                        "drum set": 20,
                    },
                    "poster": {
                        "bass guitar": 30,
                        "drum set": 35
                    },
                    "bass guitar": {
                        "piano": 20,
                    },
                    "drum set": {
                        "piano": 10,
                    },
                    "piano": {}
                },
                startNode: "book",
                endNode: "bass guitar",
            }, 
            output: {
                totalCost: 20,
                path: ["book", "rare lp", "bass guitar"],
                graph: {
                    "book": {
                        cost: 0,
                        prev: null,
                    },
                    "rare lp": {
                        cost: 5,
                        prev: "book"
                    },
                    "poster": {
                        cost: 0,
                        prev: "book",
                    },
                    "bass guitar": {
                        cost: 20,
                        prev: "rare lp",
                    },
                    "drum set": {
                        cost: 25,
                        prev: "rare lp",
                    },
                },
            },
        },
        {
            "desc": "should return the fastest path from the start (S) to the end location (E)", 
            input: {
                startNode: "S",
                endNode: "E",
                graph: {
                    S: {
                        A: 5,
                        B: 2,
                    },
                    A: {
                        C: 4,
                        D: 2,
                    },
                    B: {
                        A: 8,
                        D: 7,
                    },
                    C: {
                        D: 6,
                        E: 3,
                    },
                    D: {
                        E: 1,
                    },
                    E: {},
                }  
            },
            output: {
                totalCost: 8,
                path: ["S", "A", "D", "E"],
                graph: {
                    S: {
                        cost: 0,
                        prev: null,
                    },
                    A: {
                        cost: 5,
                        prev: "S",
                    },
                    B: {
                        cost: 2,
                        prev: "S",
                    },
                    C: {
                        cost: 9,
                        prev: "A",
                    },
                    D: {
                        cost: 7,
                        prev: "A",
                    },
                    E: {
                        cost: 8,
                        prev: "D",
                    },
                }
            }
        },
        {
            "desc": "should return the shortest path from the start (S) to the end node (D)",
            input: {
                startNode: "S",
                endNode: "D",
                graph: {
                    S: {
                        A: 10,
                    },
                    A: {
                        B: 20,
                    },
                    B: {
                        C: 1,
                        D: 30,
                    },
                    C: {
                        A: 1,
                    },
                    D: {},
                },
            },
            output: {
                totalCost: 60,
                path: ["S", "A", "B", "D"],
                graph: {
                    S: {
                        cost: 0,
                        prev: null,
                    },
                    A: {
                        cost: 10,
                        prev: "S",
                    },
                    B: {
                        cost: 30,
                        prev: "A",
                    },
                    C: {
                        cost: 31,
                        prev: "B",
                    },
                    D: {
                        cost: 60,
                        prev: "B",
                    },
                }
            }
        }
    ];

    testCases.forEach(({ desc, input, output }) => {
        it(`${desc}`, () => {
            const result = dijstrasAlgo(input);
            expect(result.totalCost).toBe(output.totalCost);
            expect(result.path).toEqual(expect.arrayContaining(output.path));
            expect(result.graph).toEqual(output.graph);
        });
    });
});