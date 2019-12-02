var LinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value) {
    var node = new Node(value);
    if (list.head === null){
      list.head = node;
    }else{
      list.tail.next = node
    }
    list.tail = node;
  };

  list.removeHead = function() {
    if(list.head !== null){
      var p = list.head;
      list.head = list.head.next;
      return p.value;
    }
  };

  list.contains = function(target) {
    var p = list.head;
    while(p !== null){
      if(p.value === target){
        return true;

      }
      p = p.next;
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
