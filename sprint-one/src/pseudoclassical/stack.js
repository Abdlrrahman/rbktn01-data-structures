var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  this.index = -1;
  this.storage = {};
};
Stack.prototype.push = function(value){
	this.index++;
  return this.storage[this.index] = value;
  }

Stack.prototype.pop = function(){
	if (this.index !== -1) {
  		this.index--;
   return this.storage[this.index + 1];
  } 
} 	

Stack.prototype.size = function(){
   return this.index + 1;
 }


var stack = new Stack();