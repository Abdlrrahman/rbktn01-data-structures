
var HashTable = function() {
  this._counter = 0;
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var bucket = this._storage.get(index) || [];
  for (var i = 0; i < bucket.length; i++) {
    var tuple = bucket[i];
    if (tuple[0] === k) {
      tuple[1] = v;
      return;
    }
  }

  bucket.push([k, v]);
  this._counter++;
  this._storage.set(index, bucket);
  if (this._counter > this._limit * 0.75) {
    this.resize(this._limit * 2);
  }
};

HashTable.prototype.retrieve = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var bucket = this._storage.get(index) || [];
  for (var i = 0; i < bucket.length; i++) {
    var tuple = bucket[i];
    if (tuple[0] === k) {
      return tuple[1];
    }
  }
};

HashTable.prototype.remove = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  this._counter--;
  this._storage.set(index);
  if (this._counter < this._limit * 0.25) {
    this.resize(this._limit / 2);
  }
};

HashTable.prototype.resize = function(limit) {
  var oldStorage = this._storage;
  this._limit = limit;
  this._storage = LimitedArray(this._limit);
  this._counter = 0;
  var context = this;
  oldStorage.each(function(bucket) {
    if (!bucket) { return; }
    for (var i = 0; i < bucket.length; i++) {
      var tuple = bucket[i];
      context.insert(tuple[0], tuple[1]);
    }
  })
}




/*
 * Complexity: What is the time complexity of the above functions?
 */



// var HashTable = function() {
//   this._limit = 8;
//   this._storage = LimitedArray(this._limit);
// };

// HashTable.prototype.insert = function(k, v) {
//   var index = getIndexBelowMaxForKey(k, this._limit);
//   var bucket = this._storage.get(index) || [];
//   for (var i = 0; i < bucket.length; i++) {
//     var tuple = bucket[i];
//     if (tuple[0] === k) {
//       tuple[1] = v;
//       return;
//     }
//   }
//   bucket.push([k, v]);
//   this._storage.set(index, bucket);
// };

// HashTable.prototype.retrieve = function(k) {
//   var index = getIndexBelowMaxForKey(k, this._limit);
//   var bucket = this._storage.get(index) || [];
//   for (var i = 0; i < bucket.length; i++) {
//     var tuple = bucket[i];
//     if (tuple[0] === k) {
//       return tuple[1];
//     }
//   }
// };

// HashTable.prototype.remove = function(k) {
//   var index = getIndexBelowMaxForKey(k, this._limit);
//   this._storage.set(index)
// };