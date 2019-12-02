class Queue {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  constructor() {
  	this.front = -1;
  	this.rear = -1;
  	this.storage = {};
  }
	enqueue(value) {
   this.rear++;
   this.storage[this.rear] = value;
  };

  dequeue() {
    if (this.front !== this.rear) {
      this.front++;
      return this.storage[this.front];
    }
  };

  size() {
    return this.rear - this.front;
  };
}

var queue = new Queue();