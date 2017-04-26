function isCCvalid(arr){
  var sum = 0;
  var last = arr[arr.length-1]

    if((arr.length >= 13 && arr.length <= 19) !== true)
      return false;

    for(var i = arr.length-1; i < arr.length; i--){
      if( i % 2 == 1)
        arr[i] = arr[i] * 2;

      if(arr[i] > 9)
        arr[i] = arr[i] - 9;

      sum+=arr[i]
    }
    sum += last;

    if(sum % 10 == 0)
      return true;
    return false;
}

isCCvalid(arr=[3,4,5,6,7,4,4,5,6,7,6,7,8,9,1]);
