// Instantiate a new graph
var Graph = function() {
	this.vertices = {};
};

var nodeOfGraph = function(value){
	this.value = value;
	this.edges = {};
};

// Add a node to the graph, passing in the node's value.
Graph.prototype.addNode = function(node) {
	if(!this.vertices[node])
	this.vertices[node] = new nodeOfGraph(node);
};

// Return a boolean value indicating if the value passed to contains is represented in the graph.
Graph.prototype.contains = function(node) {
	for (var key in this.vertices){
		if (this.vertices[key].value === node) {
			return true;
		}
	}
	return false;
};

// Removes a node from the graph.
Graph.prototype.removeNode = function(node) {
	for(var key in this.vertices[node].edges){
		delete this.vertices[key].edges[node];
	}

	for (var key in this.vertices){
		if (this.vertices[key].value === node) {
			delete this.vertices[key];

		}
	}
};

// Returns a boolean indicating whether two specified nodes are connected.  Pass in the values contained in each of the two nodes.
Graph.prototype.hasEdge = function(fromNode, toNode) {
 if(this.vertices[fromNode].edges[toNode] && this.vertices[toNode].edges[fromNode]){
		return true;
	}
	return false;
};

// Connects two nodes in a graph by adding an edge between them.
Graph.prototype.addEdge = function(fromNode, toNode) {
	if(!this.vertices[fromNode].edges[toNode]){
		this.vertices[toNode].edges[fromNode] = fromNode;
		this.vertices[fromNode].edges[toNode] = toNode;
	}
};

// Remove an edge between any two specified (by value) nodes.
Graph.prototype.removeEdge = function(fromNode, toNode) {
	if(this.vertices[fromNode].edges[toNode] && this.vertices[toNode].edges[fromNode]){
		delete this.vertices[fromNode].edges[toNode];
		delete this.vertices[toNode].edges[fromNode];
	}
};

// Pass in a callback which will be executed on each node of the graph.
Graph.prototype.forEachNode = function(cb) {
	 for (var val in this.vertices) {
      cb(val);
    }
};

/*
 * Complexity: What is the time complexity of the above functions?
 * addNode : O(1)
 * contains : O(n)
 * removeNode : O(n)
 * hasEdge : O(1)
 * addEdge : O(1)
 * removeEdge : O(1)
 * forEachNode O(n)
 */

