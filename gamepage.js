// generation of random value
var y = Math.floor(Math.random() * 10 + 1);
// count of attempts
// until hit
  
// function for the number sent by the user
var x = document.getElementsById("guessField").value;

if (x == y)
{
    alert("CONGRATULATIONS!!!"+playername+" YOU GUESSED IT RIGHT IN " + guess +" GUESS ");
    guess= 1;
}
else if(x > y){
    guess++;
    alert("OOPS SORRY!!! TRY A SMALLER NUMBER")
}
else
{
    guess++;
alert("OOPS SORRY!!! TRY A GREATER NUMBER")
}

function playAgain(){
    y = Math.floor(Math.random() * 10 + 1);
}