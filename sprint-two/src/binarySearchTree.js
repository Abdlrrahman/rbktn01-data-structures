class BinarySearchTree{
	constructor(value){
  	this.value = value;
  	this.right = null;
  	this.left = null;
	}

	insert(value){
  if (value < this.value) {
    if (this.left === null) {
      this.left = new BinarySearchTree(value);
    } else {
      this.left.insert(value);
    }
  } else if (value > this.value) {
      if (this.right === null) {
        this.right = new BinarySearchTree(value);
      } else {
      this.right.insert(value);
      }
    }
	};
  
  contains(value) {
    console.log(this.value)
    var isFound = false;
    if (this.value === value) {
      isFound = true;
    }

    if (this.value < value){
      if (this.right !== null) {
        if (this.right.value === value) {
          return true
        }
        this.right.contains(value)
      }
    }

    if (this.value > value){
      if (this.left !== null) {
        if (this.left.value === value) {
          return true
        }
        this.left.contains(value)
      }
    }

    return isFound;
  };

  depthFirstLog(callback){
    callback(this.value); // function (element) { var arr = []; return arr.push(element) }

    if (this.left) {
      this.left.depthFirstLog(callback);
    }

    if (this.right) {
      this.right.depthFirstLog(callback);
    }
  };
} 

var BST = new BinarySearchTree();














/*
 * Complexity: What is the time complexity of the above functions?
 */

