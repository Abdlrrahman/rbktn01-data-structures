var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.  
var stack = Object.create(stackMethods);
  stack.index = -1;
  var storage = {};
  stack.storage = storage;
  return stack;
};
 

 var stackMethods = {};
  stackMethods.push = push;
  stackMethods.pop = pop;
  stackMethods.size = size;

function push(value){
	this.index++;
  return this.storage[this.index] = value;
  }

function pop(){
	if (this.index !== -1) {
  		this.index--;
   return this.storage[this.index + 1];
  } 
} 	

function size(){
   return this.index + 1;
 }

