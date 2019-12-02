 var Tree = function(value) {
  var newTree = {};
  
  newTree.value = value;
  newTree.children = [];

  _.extend(newTree, treeMethods);

  return newTree;
};

var treeMethods = {};

treeMethods.addChild = function(value) {
	var child = Tree(value);
  this.children.push(child);
  return child
};

treeMethods.contains = function(target) {
  var found = false; 

	if (this.value === target) {
		return found = true;
	}

  for (var i = 0; i < this.children.length; i++) {
    if (this.children[i].value === target) {
      return found = true;
    } else {
      found = this.children[i].contains(target) || found;
    }
  }
  return found;
}

/*
 * Complexity: What is the time complexity of the above functions?
 * addChild (1)
 * contains (1)
 * innerSearch (N)
 */
