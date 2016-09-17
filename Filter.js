function filter(arr, callback) {
  var result = [];
  for(var i = 0; i < arr.length; i++) {
      if (callback(arr[i]) === true) {
        result.push(arr[i])
      }
  }  
  return result;
}
