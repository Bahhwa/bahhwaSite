var statNumber = 0;
var rolls = 0;

function rollDice () {
    var dice = [];
    rolls++; 
    for (var i = 0; i < 4; i++ ){
        dice[i] = Math.floor(Math.random()*6)+1
        document.querySelector(`.dieImg${i}`).setAttribute('src', `images/dice${dice[i]}.png`)
    }
    return dice;
}

function removeLowest () {
    var numbers = rollDice();

    var lowest = 7;

    for (var i = 0; i < numbers.length; i++){

        if (numbers[i] < lowest) {
            lowest = numbers[i];
        }   
        statNumber = statNumber + numbers[i];
    }

    statNumber = statNumber - lowest;
    document.querySelector(".rolledValue").innerHTML = `The Rolled Value is: ${statNumber} ` ;
    document.querySelector(".diceRoll").setAttribute('disabled', true)

    return statNumber;
}

function setStat (value){

if(rolls != 0) {    
    if (value === 'cha'){
        document.querySelector(".statValue.cha").innerHTML = `${statNumber}`;
        document.querySelector(".setStat.Cha").setAttribute('disabled',true);
    }
    else if (value === 'str'){
        document.querySelector(".statValue.str").innerHTML = `${statNumber}`;
        document.querySelector(".setStat.Str").setAttribute('disabled',true);
    }
    else if (value === 'dex'){
        document.querySelector(".statValue.dex").innerHTML = `${statNumber}`;
        document.querySelector(".setStat.Dex").setAttribute('disabled',true);
    }
    else if (value === 'con'){
        document.querySelector(".statValue.con").innerHTML = `${statNumber}`;
        document.querySelector(".setStat.Con").setAttribute('disabled',true);
    }
    else if (value === 'int'){
        document.querySelector(".statValue.int").innerHTML = `${statNumber}`;
        document.querySelector(".setStat.Int").setAttribute('disabled',true);
    }
    else if (value === 'wis'){
        document.querySelector(".statValue.wis").innerHTML = `${statNumber}`;
        document.querySelector(".setStat.Wis").setAttribute('disabled',true);
    }
    statNumber = 0;

    if (rolls < 6){
        document.querySelector(".diceRoll").removeAttribute('disabled');
    }
} else {
    alert("You need to roll before adding stats");
}

}