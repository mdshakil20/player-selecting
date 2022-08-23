
let child = 0;


//button disable  function
function btnDisable(btnId) {
    document.getElementById(btnId).disabled = true;
    document.getElementById(btnId).style.backgroundColor = '#97999c';
}

//this function selecting only 5 players
function getAndPutName(playerNameId, btnId) {
    const playerName = document.getElementById(playerNameId).innerText;
    const li = document.createElement('li');
    li.innerText = playerName;
    const PlayerListParent = document.getElementById('selectedPlayers');

    if (PlayerListParent.childElementCount < 4){
        PlayerListParent.appendChild(li);
        btnDisable(btnId);
        child++;
    }
    else if (PlayerListParent.childElementCount == 4) {
        PlayerListParent.appendChild(li);
        document.getElementById('hideElement').style.visibility = 'visible';
        btnDisable(btnId);
        child++;
    }
    else if(PlayerListParent.childElementCount >= 5){
        alert("You already selecte 5 players. You can't select any more.");
    }

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
    getAndPutName('player1','selectBtn1');
});

//when select2 button is clicked
document.getElementById('selectBtn2').addEventListener('click', function () {
    getAndPutName('player2','selectBtn2');
});

//when select3 button is clicked
document.getElementById('selectBtn3').addEventListener('click', function () {
   getAndPutName('player3','selectBtn3');
});

//when select4 button is clicked
document.getElementById('selectBtn4').addEventListener('click', function () {
    getAndPutName('player4','selectBtn4');
});

//when select5 button is clicked
document.getElementById('selectBtn5').addEventListener('click', function () {
    getAndPutName('player5','selectBtn5');
});

//when select6 button is clicked
document.getElementById('selectBtn6').addEventListener('click', function () {
    getAndPutName('player6','selectBtn6');
});

//total player cost calculating and put the value
document.getElementById('calculate').addEventListener('click', function () {
    const perPlayerCost = getInputValue('perPlayer');
    const playersExpense = perPlayerCost * child;
    document.getElementById('playerExpense').innerText = playersExpense;
});

//total cost calculating and put the value
document.getElementById('total_calculate').addEventListener('click', function () {
    const managerCost = getInputValue('managerInputField');
    const coachCost = getInputValue('coachInputField');
    const totalPlayersCostSting =  document.getElementById('playerExpense').innerText;
    const totalPlayersCost = parseFloat(totalPlayersCostSting);
    const total = managerCost + coachCost + totalPlayersCost;
    document.getElementById('total_expense').innerText = total;
});
