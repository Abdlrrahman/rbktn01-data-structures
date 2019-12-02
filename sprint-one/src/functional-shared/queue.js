var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var rear = -1;
  var front = -1;
  var storage = {};
  var resultQueue = {};
  resultQueue.rear = rear;
  resultQueue.front = front;
  resultQueue.storage = storage;
  _.extend(resultQueue, queueMethods);
  return resultQueue;
};

var queueMethods = {};
  queueMethods.enqueue = enqueue;
  queueMethods.dequeue = dequeue;
  queueMethods.size = size;

  function enqueue(value) {
    this.rear++;
    this.storage[this.rear] = value;
  };

  function dequeue() {
    if (this.front !== this.rear) {
      this.front++;
      return this.storage[this.front];
    }
  };

  function size() {
    return this.rear - this.front;
  };
