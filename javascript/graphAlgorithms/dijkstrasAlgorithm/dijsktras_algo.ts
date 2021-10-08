export type IInputGraph = Record<string, Record<string, number>>;
export type IResultGraph = Record<string, { prev: string | null; cost: number}>;
type IVisitedNodes = Set<string>;

/**
 * Implementation o Dijkstra's shortest path algorithm
 * See: https://www.youtube.com/watch?v=pVfj6mxhdMw for an explanation of Dijkstra's algorithm
 * 
 */
const dijstrasAlgo = ({ graph, startNode, endNode }: {
    graph: IInputGraph;
    startNode: string;
    endNode: string;
}) => {
    const resultGraph: IResultGraph = {};
    const visitedNodes: IVisitedNodes = new Set();
    // Add the cost and path from the start node to itself
    resultGraph[startNode] = {
        cost: 0,
        prev: null,
    };
    const getUnvisitedNodeWithLowestCost = createGetUnvisitedNodeWithLowestCost({ visitedNodes, resultGraph });
    const getResultGraphNodeCost = createGetResultGraphNodeCost(resultGraph);
    let lowestCostNode = getUnvisitedNodeWithLowestCost();

    while (lowestCostNode !== null && lowestCostNode !== endNode) {
        const neighbours = lowestCostNode && Object.entries(graph[lowestCostNode]) || [];
        // Update cost of the neighbours
        for (const [node, cost] of neighbours) {
            const newCost = getResultGraphNodeCost(lowestCostNode) + cost;
            if (getResultGraphNodeCost(node) > newCost) {
                resultGraph[node] = {
                    prev: lowestCostNode,
                    cost: newCost,
                };
            }
        } 

        if (lowestCostNode) {
            visitedNodes.add(lowestCostNode);
        }
        lowestCostNode = getUnvisitedNodeWithLowestCost();
    }
    return {
        path: getCheapestPathFromStartToEnd({
            resultGraph,
            endNode,
        }),
        totalCost: resultGraph[endNode].cost,
        graph: resultGraph,
    }
};

export default dijstrasAlgo;

const createGetUnvisitedNodeWithLowestCost = ({ visitedNodes, resultGraph }: {
    visitedNodes: IVisitedNodes;
    resultGraph: IResultGraph;
}) => {
    return (): string | null => {
        const result = Object.entries(resultGraph).reduce((acc, [nodeName, { cost }]) => {
            if (visitedNodes.has(nodeName)) {
                return acc;
            }
            if (cost < acc.lowestCost) {
                acc.lowestCost = cost;
                acc.node = nodeName;
            }
            return acc;
        }, { lowestCost: Number.POSITIVE_INFINITY, node: null } as { lowestCost: number; node: string | null; });

        return result.node;
    };
}

const createGetResultGraphNodeCost = (resultGraph: IResultGraph) => (node: string) => {
    return resultGraph[node] ? resultGraph[node].cost : Number.POSITIVE_INFINITY;
};

const getCheapestPathFromStartToEnd = ({ resultGraph, endNode }: {
    resultGraph: IResultGraph;
    endNode: string;
}) => {
    const path = [endNode];
    let currentNode = endNode;

    while (resultGraph[currentNode].prev) {
        const prevNode = resultGraph[currentNode].prev as string;
        path.unshift(prevNode);
        currentNode = prevNode;
    }

    return path;
};