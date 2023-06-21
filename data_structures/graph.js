/**
  Introduction to Graphs:
  A graph is a non-linear data structure that consists of a collection of vertices (also known as nodes) and edges. 
  Vertices represent entities or objects, and edges represent the relationships between those entities. 
  Graphs are used to model a wide range of real-world scenarios, such as social networks, transportation networks, computer networks, and more.

  There are two common types of graphs:

  1. Undirected Graph: In an undirected graph, edges have no direction. 
      The relationship between vertices is symmetric, meaning if there is an edge from vertex A to vertex B, there is also an edge from vertex B to vertex A.
  2. Directed Graph (Digraph): In a directed graph, edges have a specific direction.
      The relationship between vertices is asymmetric, meaning if there is an edge from vertex A to vertex B, there might not be an edge from vertex B to vertex A.
*/

class Graph {
  constructor() {
    this.vertices = new Map();
  }

  /**
  1. Adding a Vertex:
  - To create a graph, we need to add vertices.
  - Each vertex represents an entity or an object in the graph.
  - We can add vertices individually or in bulk.
  */
  addVertex(vertex) {
    if (!this.vertices.has(vertex)) {
      this.vertices.set(vertex, []);
    }
  }

  /**
  2. Adding an Edge:
  - An edge represents a relationship between two vertices.
  - In an undirected graph, the relationship is bidirectional.
  - In a directed graph, the relationship has a specific direction.
  - We can add edges between existing vertices.
  */
  addEdge(fromVertex, toVertex) {
    if (this.vertices.has(fromVertex) && this.vertices.has(toVertex)) {
      this.vertices.get(fromVertex).push(toVertex);
    }
  }

  /**
  3. Getting the Vertices:
  - To retrieve all the vertices in the graph.
  - It provides an array or iterable containing all the vertices.
  */
  getVertices() {
    return Array.from(this.vertices.keys());
  }

  /**
  4. Getting the Neighbors of a Vertex:
  - To retrieve all the neighbors of a specific vertex.
  - Neighbors are the vertices directly connected to the given vertex.
  */
  getNeighbors(vertex) {
    if (this.vertices.has(vertex)) {
      return this.vertices.get(vertex);
    }
    return [];
  }

  /**
  5. Checking if an Edge Exists:
  - To check if an edge exists between two vertices.
  - Returns true if an edge exists, false otherwise.
  */
  hasEdge(fromVertex, toVertex) {
    if (this.vertices.has(fromVertex)) {
      return this.vertices.get(fromVertex).includes(toVertex);
    }
    return false;
  }

  /**
  6. Removing an Edge:
  - To remove an edge between two vertices.
  - Removes the edge from the source vertex to the target vertex.
  */
  removeEdge(fromVertex, toVertex) {
    if (this.vertices.has(fromVertex)) {
      const edges = this.vertices.get(fromVertex);
      const index = edges.indexOf(toVertex);
      if (index !== -1) {
        edges.splice(index, 1);
      }
    }
  }

  /**
  7. Removing a Vertex:
  - To remove a vertex from the graph.
  - Removes the vertex and any associated edges.
  */
  removeVertex(vertex) {
    if (this.vertices.has(vertex)) {
      this.vertices.delete(vertex);
      for (const edges of this.vertices.values()) {
        const index = edges.indexOf(vertex);
        if (index !== -1) {
          edges.splice(index, 1);
        }
      }
    }
  }
}

// Example usage - adding vertex:
const graph = new Graph();
graph.addVertex("A");
graph.addVertex("B");
graph.addVertex("C");

// Example usage - adding edges:
graph.addEdge("A", "B"); // Adds an edge from A to B in an undirected graph
graph.addEdge("B", "C"); // Adds an edge from B to C in an undirected graph
graph.addEdge("C", "A"); // Adds an edge from C to A in an undirected graph

// Example usage - getting all vertices:
const vertices = graph.getVertices();
console.log(vertices); // Output: ["A", "B", "C"]

// Example usage - getting neighbours of a vertex:
const neighbors = graph.getNeighbors("A");
console.log(neighbors); // Output: ["B", "C"]

// Example usage - checking if an edge exists:
console.log(graph.hasEdge("A", "B")); // Output: true
console.log(graph.hasEdge("B", "A")); // Output: true (for an undirected graph)
console.log(graph.hasEdge("A", "C")); // Output: false

// Example usage - removing an edge:
graph.removeEdge("A", "B");

// Example usage - removing a vertex:
graph.removeVertex("A");