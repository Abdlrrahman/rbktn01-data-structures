var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var queue = Object.create(queueMethods);
  queue.rear = -1;
  queue.front = -1;
  var storage = {};
  queue.storage = storage;
  return queue;
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