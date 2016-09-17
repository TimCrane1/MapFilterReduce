function reduce(collection, callback, initial) {
  var accumulator = initial;
  collection.forEach(function(element) {
    if (accumulator === undefined) {
      accumulator = element;
    } else {
      accumulator = callback(accumulator, element);
    }
  });
  return accumulator;
}
