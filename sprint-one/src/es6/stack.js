class Stack {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  constructor() {
		this.storage = {};
  	this.index = -1;
  }
  push(value) {
  	this.index++;
  	this.storage[this.index] = value;
  };

  pop() {
  	if (this.index !== -1) {
  		this.index--;
  		return this.storage[this.index + 1];
  	}
  };

  size() {
  	return this.index + 1;
  };
}
var stack = new Stack();