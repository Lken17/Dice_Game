//create a function that genterates a random number from 1-6 when called.
//create a function that generates a random number and logs it to id "score_1"
//This then is linked to the button via HTMl.

let total = 0;


function hitMe(){
    let rollMe = (Math.ceil(Math.random() * 6));
        console.log(rollMe);
            document.getElementById("Score_1").innerHTML=rollMe;
                total += rollMe;
            document.getElementById("Total").innerHTML=total;
            document.getElementById("Dice1").src = `../img/${rollMe}.png`;
     if (rollMe == 1)
        alert ("You rolled a 1. You Lose!  :(" ) + location.reload();
     else if (total >= 20)
        alert ("Winner!! You scored 20+ ") + location.reload();
     else 
        console.log(total)
};


