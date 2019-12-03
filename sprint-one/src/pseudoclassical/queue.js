var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  this.front = -1;
  this.rear = -1;
  this.storage = {};
};

Queue.prototype.enqueue = function(value) {
  this.rear++;
  this.storage[this.rear] = value;
};

Queue.prototype.dequeue = function() {
  if (this.front !== this.rear) {
    this.front++;
    return this.storage[this.front];
  }
};

Queue.prototype.size = function() {
  return this.rear - this.front;
};


var queue = new Queue();