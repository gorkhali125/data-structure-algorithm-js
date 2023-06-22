/**
    A graph is a non-linear data structure consisting of a collection of nodes (vertices) connected by edges.
    Graphs are widely used to represent relationships between objects and can model a variety of real-world scenarios.
    Graph algorithms are designed to solve problems related to graphs, such as traversal, shortest path, connectivity, and more.
*/

/**
    Graph Algorithm Example: Depth-First Search (DFS)
    Depth-First Search (DFS) is a graph traversal algorithm that explores as far as possible along each branch before backtracking.
    It visits all vertices of a connected component, marking each visited vertex to avoid revisiting.
    DFS can be implemented recursively or using a stack.
*/
class Graph {
    constructor() {
        this.vertices = [];
        this.adjacencyList = new Map();
    }

    addVertex(vertex) {
        this.vertices.push(vertex);
        this.adjacencyList.set(vertex, []);
    }

    addEdge(vertex1, vertex2) {
        this.adjacencyList.get(vertex1).push(vertex2);
        this.adjacencyList.get(vertex2).push(vertex1);
    }

    dfs(startingVertex) {
        const visited = new Map();
        const stack = [];

        this.vertices.forEach((vertex) => {
            visited.set(vertex, false);
        });

        stack.push(startingVertex);

        while (stack.length > 0) {
            const currentVertex = stack.pop();

            if (!visited.get(currentVertex)) {
                visited.set(currentVertex, true);
                console.log(currentVertex);

                const neighbors = this.adjacencyList.get(currentVertex);

                neighbors.forEach((neighbor) => {
                    if (!visited.get(neighbor)) {
                        stack.push(neighbor);
                    }
                });
            }
        }
    }
}


// Example Usage
const graph = new Graph();

// Adding vertices
graph.addVertex("A");
graph.addVertex("B");
graph.addVertex("C");
graph.addVertex("D");
graph.addVertex("E");
graph.addVertex("F");

// Adding edges
graph.addEdge("A", "B");
graph.addEdge("A", "C");
graph.addEdge("B", "D");
graph.addEdge("C", "E");
graph.addEdge("D", "E");
graph.addEdge("D", "F");
graph.addEdge("E", "F");

// Performing DFS traversal
console.log("DFS Traversal:");
graph.dfs("A");