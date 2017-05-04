

function addIndex (arr, index, value){


  for(var i = arr.length; i >= index; i--){
    arr[i] = arr[i-1]
  }

  arr[index] = value;
  console.log(arr);
}


addIndex ([2,3,4,5,6], 3, 17)
