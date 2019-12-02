var Stack = function() {
  var someInstance = {};
  var index = -1;

  // Use an object with numeric keys to store values
  var storage = {};

  // Implement the methods below
  someInstance.push = function(value) {
    index++;
  	storage[index] = value;
  };

  someInstance.pop = function() {
  	if (index !== -1) {
  		index--;
  		return storage[index + 1];
  	}
  };

  someInstance.size = function() {
  	return index + 1;
  };

  return someInstance;
};
