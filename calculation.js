
let child = 0;

//this function selecting only 5 players
function getAndPutName(idName) {
    const playerName = document.getElementById(idName).innerText;
    const li = document.createElement('li');
    li.innerText = playerName;
    const PlayerListParent = document.getElementById('selectedPlayers');
    if (PlayerListParent.childElementCount == 4) {
        child++;
        PlayerListParent.appendChild(li);
        document.getElementById('hideElement').style.visibility = 'visible';
    }
    else {
        PlayerListParent.appendChild(li);
        child++;
    }
    console.log(child);

}

//button disable  function
function btnDisable(btnId) {
    document.getElementById(btnId).disabled = true;
    document.getElementById(btnId).style.backgroundColor = '#97999c';
}

//get input value
function getInputValue(InputFieldId) {
    const inputValueString = document.getElementById(InputFieldId).value;
    const inputValue = parseFloat(inputValueString);
    document.getElementById(InputFieldId).value = '';
    return inputValue;
}




//when select1 button is clicked
document.getElementById('selectBtn1').addEventListener('click', function () {
    if (child < 5) {
        getAndPutName('player1');
        btnDisable('selectBtn1');
    }
});
//when select2 button is clicked
document.getElementById('selectBtn2').addEventListener('click', function () {
    if (child < 5) {
        getAndPutName('player2');
        btnDisable('selectBtn2');
    }
});
//when select3 button is clicked
document.getElementById('selectBtn3').addEventListener('click', function () {
    if (child < 5) {
        getAndPutName('player3');
        btnDisable('selectBtn3');
    }
});
//when select4 button is clicked
document.getElementById('selectBtn4').addEventListener('click', function () {
    if (child < 5) {
        getAndPutName('player4');
        btnDisable('selectBtn4');
    }
});
//when select5 button is clicked
document.getElementById('selectBtn5').addEventListener('click', function () {
    if (child < 5) {
        getAndPutName('player5');
        btnDisable('selectBtn5');
    }
});
//when select6 button is clicked
document.getElementById('selectBtn6').addEventListener('click', function () {
    if (child < 5) {
        getAndPutName('player6');
        btnDisable('selectBtn6');
    }
});

document.getElementById('calculate').addEventListener('click', function () {
    const perPlayerCost = getInputValue('perPlayer');
    const playersExpense = perPlayerCost * child;
    document.getElementById('playerExpense').innerText = playersExpense;
});

document.getElementById('total_calculate').addEventListener('click', function () {
    const managerCost = getInputValue('managerInputField');
    const coachCost = getInputValue('coachInputField');
    const totalPlayersCostSting =  document.getElementById('playerExpense').innerText;
    const totalPlayersCost = parseFloat(totalPlayersCostSting);
    const total = managerCost + coachCost + totalPlayersCost;
    document.getElementById('total_expense').innerText = total;
});
