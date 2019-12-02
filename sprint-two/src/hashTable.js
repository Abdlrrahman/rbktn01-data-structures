

var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var bucket = [];
  var tuple = [];
  if ( !bucket[k] ) {
  	tuple[0] = k;
  	tuple[1] = v;
  	bucket.push(tuple);
  }
  console.log(this._storage)

  this._storage.set(index, tuple[1]);
};

HashTable.prototype.retrieve = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  return this._storage.get(index);
};

HashTable.prototype.remove = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  this._storage.set(index)
};



/*
 * Complexity: What is the time complexity of the above functions?
 */


