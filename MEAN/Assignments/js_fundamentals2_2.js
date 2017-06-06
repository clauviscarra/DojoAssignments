var thisObject ={

  sumIntegers: function (x,y){
    var sum = 0
    if (x < y){
      for (var i = x; i <= y; i++){
        sum += i;
    }
    return ('x < y', sum);
  }
  },

  returnAvg: function (arr2){
    var sum2 = 0

    for (var z = 0; z < arr2.length; z++){
      sum2 += arr2[z];
    }
    return sum2/arr2.length

  }

}


console.log(thisObject.returnAvg([2,3,4,7,2,10]));
