let currentVal = '';
let holderVal = '';
let currentOpperation = '';
let previousNum = 0;

function reset(){
    document.querySelector(".value").innerHTML = ``;
    currentVal = '';
    holderVal = '';
}

function setValue (value){
    currentVal = currentVal + value;
    document.querySelector(".value").innerHTML = `${currentVal}`;
}

function newOpperation (opperation){
    holderVal = Number(document.querySelector(".value").innerHTML)
    document.querySelector(".value").innerHTML = '';
    currentVal = '';

    if (opperation === 'minus'){
        currentOpperation = 'minus'
    } else if (opperation === 'add'){
        currentOpperation = 'add'
    }else if (opperation === 'divide'){
        currentOpperation = 'divide'
    }else if (opperation === 'multiply'){
        currentOpperation = 'multiply'
    }
}

function completeOpperation() {
    currentVal = Number(document.querySelector(".value").innerHTML)

    if (currentOpperation === 'minus'){
        currentVal = holderVal - currentVal;
        document.querySelector(".value").innerHTML = `${currentVal}`;
    } else if (currentOpperation === 'add'){
        currentVal = holderVal + currentVal;
        document.querySelector(".value").innerHTML = `${currentVal}`;
    }else if (currentOpperation === 'divide'){
        currentVal = holderVal / currentVal;
        document.querySelector(".value").innerHTML = `${currentVal}`;
    }else if (currentOpperation === 'multiply'){
        currentVal = holderVal * currentVal;
        document.querySelector(".value").innerHTML = `${currentVal}`;
    }
}