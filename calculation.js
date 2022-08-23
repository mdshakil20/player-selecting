//for get player list
let child = 0;

//button disable  function
function btnDisable(btnId) {
    document.getElementById(btnId).disabled = true;
    document.getElementById(btnId).style.backgroundColor = '#97999c';
}

//this function selecting only 5 players
function getAndPutName(playerNameId,btnId) {
    const playerName = playerNameId;
    const li = document.createElement('li');
    li.innerText = playerName;
    const PlayerListParent = document.getElementById('selectedPlayers');

    if (PlayerListParent.childElementCount < 4) {
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
    else if (PlayerListParent.childElementCount >= 5) {
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

//when select button is clicked
function select(event){
    const id = event.id;
    const playerName = event.parentNode.children[1].innerText;
    getAndPutName(playerName,id);
}

//total player cost calculating and put the value
document.getElementById('calculate').addEventListener('click', function () {
    const perPlayerCost = getInputValue('perPlayer');
    if (perPlayerCost > 0) {
        const playersExpense = perPlayerCost * child;
        document.getElementById('playerExpense').innerText = playersExpense;
    }
    else 
    {
        alert("Please enter a valid number.");
    }

});

//total cost calculating and put the value
document.getElementById('total_calculate').addEventListener('click', function () {
    const managerCost = getInputValue('managerInputField');
    const coachCost = getInputValue('coachInputField');
    if (managerCost > 0 &&  coachCost > 0) {
    const totalPlayersCostSting = document.getElementById('playerExpense').innerText;
    const totalPlayersCost = parseFloat(totalPlayersCostSting);
    const total = managerCost + coachCost + totalPlayersCost;
    document.getElementById('total_expense').innerText = total;
    }
    else {
        alert("Please enter a valid number.");
    }
});