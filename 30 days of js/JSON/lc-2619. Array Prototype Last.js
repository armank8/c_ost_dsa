// 2619. Array Prototype Last
Array.prototype.last = function () {
  return this.length === 0 ? -1 : this[this.length - 1];
};

/**  this[this.length - 1] → Gets the last element.   
 *   This method works on any array because this refers 
 *   to the array on which last() is called.
 */