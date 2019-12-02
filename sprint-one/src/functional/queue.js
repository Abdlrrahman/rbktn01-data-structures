var Queue = function() {
  var someInstance = {};
  var rear = -1;
  var front = -1;

  // Use an object with numeric keys to store values
  var storage = {};

  // Implement the methods below

  someInstance.enqueue = function(value) {
    rear++;
    storage[rear] = value;
  };

  someInstance.dequeue = function() {
    if (front !== rear) {
      front++;
      return storage[front];
    }
  };

  someInstance.size = function() {
    return rear - front;
  };

  return someInstance;
};
