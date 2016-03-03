function reduce(arr, callback) {
       var total = arr[0];
    for(var i = 1; i < arr.length; i++) {
      total = callback(total, arr[i]);
  }
  return total;
}