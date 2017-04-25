/*There is 1/100 chances you win at the slot machine, which will give
you between 50-100 quarters. Every quarter you play = 1 game. While
the user still has quarters, use math.random to determine if they won*/

//var chance=Math.trunc(Math.random()*100);
var pot=Math.floor(Math.random()*50)+51;
var quarters=100;
var win=34

for(var i=quarters;i>0;i--){
  var chance=Math.trunc(Math.random()*100);
  if(chance==win){
    console.log("YOU WIN!! " + pot + i);
  }
  else{
    console.log(chance + " = chance ");console.log("you are a loser ");console.log("the pot was " + pot);
  }

}
