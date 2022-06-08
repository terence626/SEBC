// console.log('blahblsdfgsdgdgdsah');
// alert ("Hello");
// alert ("World");


// let scoreAvg = 0



// console.log(scoreAvg( prompt('score1')))

// query age
// query retirement age
// calculate years to retiremnt or calculate # of years retired



// const checkRetireYearLeft = ()



// random value generated
var y = Math.floor(Math.random() * 100 + 1);

// counting the number of guesses
// made for correct Guess
var guess = 1;

document.getElementById("submitguess").onclick = function(){

// number guessed by user
var x = document.getElementById("guessField").value;

if(x == y)
{
   alert("CONGRATULATIONS! YOU GOT IT RIGHT IN "
           + guess + " GUESSES!");
}
else if(x > y) /* if guessed number is greater
               than actual number*/
{
   guess++;
   alert("Sorry!  Please try a smaller number.");
}
else
{
   guess++;
   alert("Sorry!  Please try a larger number.")
}
}
