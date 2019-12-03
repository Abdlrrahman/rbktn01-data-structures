var Set = function() {
  var set = Object.create(setPrototype);
  set._storage = {}; // fix me
  return set;
};

var setPrototype = {};

setPrototype.add = function(item) {
	this._storage[item] = true;
};

setPrototype.contains = function(item) {
	// !this._storage[item] this is converting it to a Boolean 
	// the other ! is correcting it 
	return !!this._storage[item];
};

setPrototype.remove = function(item) {
	delete this._storage[item]
};

/*
 * Complexity: What is the time complexity of the above functions?
 * add (1)
 * contains (1)
 * remove (1)
 */

 // Our previous Code
//  setPrototype.add = function(item) {
// 	for (var i = 0; i < this._storage.length; i++) {
// 		if (this._storage[i] === item) {
// 			return ;
// 		}
// 	}
// 	this._storage.push(item);

// };

// setPrototype.contains = function(item) {
// 	for (var i = 0; i < this._storage.length; i++) {
// 		if (this._storage[i] === item) {
// 			return true;
// 		}
// 	}
// 	return false;
// };

// setPrototype.remove = function(item) {
// 	for (var i = 0; i < this._storage.length; i++) {
// 		if (this._storage[i] === item) {
// 			delete this._storage[i];
// 		}
// 	}

/*
 * Complexity: What is the time complexity of the above functions?
 * add (N)
 * contains (N)
 * remove (N)
 */