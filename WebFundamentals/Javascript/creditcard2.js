function isCCValid(arr){
  var sum = 0;
  var last = arr[arr.length-1];

  if(arr.length >= 13 && arr.length =<19){
    for(var i = arr.length-1; i < arr.length; i--){
      if(i%2===1){
        arr[i]=arr[i]*2
      }
      if(arr[i]>9){
        arr[i] = arr[i]-9
      }
    }
  }
}
