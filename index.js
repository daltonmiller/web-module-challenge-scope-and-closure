// ⭐️ Example Challenge START ⭐️

/**
 * ### Challenge `processFirstItem`
 * 
 * @instructions
 * Implement a higher-order function called `processFirstItem`.
 * It takes two arguments:
 * @param stringList an array of strings.
 * @param callback function that takes a string as its argument.
 * @returns the result of invoking `callback` with the FIRST element in `stringList`.
 * 
 * Example of usage of this higher-order function:
 * Invoking `processFirstItem` passing `['foo', 'bar']` and `(str) => str + str`,
 * should return 'foofoo'.
*/
function processFirstItem(stringList, callback) {
  return callback(stringList[0])
}

// ⭐️ Example Challenge END ⭐️


///// M V P ///////

/* Task 1: `counterMaker`
 * Study the code for counter1 and counter2. Answer the questions below.
 * 
 * 1. What is the difference between counter1 and counter2?
 * on counter 1 the variable is on the inside and on counter2 it is on the outside
 * 2. Which of the two uses a closure? How can you tell?
 * counter1, because because it has a function inside of it
 * 3. In what scenario would the counter1 code be preferable? In what scenario would counter2 be better? 
 *when you dont want to redefine the count to zero but when doing so you interfer with global scope which could hurt in the long run
*/

// counter1 code
function counterMaker() {
  let count = 0;
  return function counter() {
   return count++;
  }
}

const counter1 = counterMaker();

// counter2 code
let count = 0;

function counter2() {
  return count++;
}


/* Task 2: inning() 

Write a function called `inning` that generates a random number of points that a team scored in an inning. This should be a whole number between 0 and 2. */
console.log()
function inning(){
 
  var score = Math.floor(3 * Math.random());
  
  return score;
 
 

    /*Code Here*/

}
console.log(inning())

/* Task 3: finalScore()

Write a higher order function called `finalScore` that accepts the callback function `inning` (from above) and a number of innings and and returns the final score of the game in the form of an object.
For example, 

finalScore(inning, 9) might return: 
{
  "Home": 11,
  "Away": 5,
}

*/ 

function finalScore(inning, num){
  let final = {Home: 0, Away: 0};
  for(let i = 0; i < num; i++){
    final.Home += inning();
    final.Away += inning();
  }
return final
}
 console.log(finalScore(inning, 9))
/* Task 4: 

Create a function called `scoreboard` that accepts the following parameters: 

(1) Callback function `inning` that you wrote above
(2) A number of innings

and returns the score at each pont in the game, like so:

1st inning: 0 - 2
2nd inning: 1 - 3
3rd inning: 1 - 3
4th inning: 2 - 4
5th inning: 4 - 6
6th inning: 4 - 6
7th inning: 4 - 6
8th inning: 5 - 8
9th inning: 6 - 10

Final Score: 6 - 10 */

function scoreboard(inning, num) {
  let homeScore = 0;
  let awayScore = 0;
  let homeFinal = {
    1: 0,
    2: 0, 
    3: 0,
    4: 0,
    5: 0,
    6: 0,
    7: 0,
    8: 0,
    9: 0
  }
  let awayFinal =  {
    1: 0,
    2: 0, 
    3: 0,
    4: 0,
    5: 0,
    6: 0,
    7: 0,
    8: 0,
    9: 0
  };

  for (let i = 0; i < num; i++){
    homeScore += inning();
    awayScore += inning();
    console.log(homeScore)
    homeFinal[i + 1] += homeScore
    awayFinal[i + 1] += awayScore
  /* CODE HERE */
}
return   (
`1st inning: ${homeFinal[1]} - ${awayFinal[1]}
2nd inning: ${homeFinal[2]} - ${awayFinal[2]}
3rd inning: ${homeFinal[3]} - ${awayFinal[3]}
4th inning: ${homeFinal[4]} - ${awayFinal[4]}
5th inning: ${homeFinal[5]} - ${awayFinal[5]}
6th inning: ${homeFinal[6]} - ${awayFinal[6]}
7th inning: ${homeFinal[7]} - ${awayFinal[7]}
8th inning: ${homeFinal[8]} - ${awayFinal[8]}
9th inning: ${homeFinal[9]} - ${awayFinal[9]}`
)

}
console.log(scoreboard(inning, 9))

/*function finalScore(inning, num){
  let score = {Home: 0, Away: 0};
  for(let i = 0; i < num; i++){
    score.Home += inning();
    score.Away += inning();
  }
return score
}
 console.log(finalScore(inning, 9))*/