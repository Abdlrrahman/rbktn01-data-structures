var LinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value) {
    var node = new Node(value);
    if (list.head === null) {
      list.head = node;
    } else {
      list.tail.next = node
    }

    list.tail = node;
  };

  list.removeHead = function() {
    if (list.head !== null) {
      var pointer = list.head;
      list.head = list.head.next;
      return pointer.value;
    }
  };

  list.contains = function(target) {
    var pointer = list.head;
    while (pointer !== null) {
      if (pointer.value === target) {
        return true;
      }
      pointer = pointer.next;
    }

    return false;
  };

  return list;
};

var Node = function(value) {
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
  addToTail = O(1)
  removeHead = O(1)
  contains = O(n);
 */
