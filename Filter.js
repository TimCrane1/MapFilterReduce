function filter(arr, callback) {
  var newArray = [];
  for(var i = 0; i < arr.length; i++) {
      if (callback(arr[i]) == true) {
        newArray.push(arr[i])
      }
  }  
  return newArray;
}