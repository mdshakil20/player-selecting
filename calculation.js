
let child = 0;
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
}

document.getElementById('selectBtn1').addEventListener('click', function () {
    if (child < 5) {
        getAndPutName('player1');
        document.getElementById("selectBtn1").disabled = true;
        document.getElementById("selectBtn1").style.backgroundColor = '#97999c';
    }
});

document.getElementById('selectBtn2').addEventListener('click', function () {
    if (child < 5) {
        getAndPutName('player2');
        document.getElementById("selectBtn2").disabled = true;
        document.getElementById("selectBtn2").style.backgroundColor = '#97999c';
    }
});

document.getElementById('selectBtn3').addEventListener('click', function () {
    if (child < 5) {
        getAndPutName('player3');
        document.getElementById("selectBtn3").disabled = true;
        document.getElementById("selectBtn3").style.backgroundColor = '#97999c';
    }
});

document.getElementById('selectBtn4').addEventListener('click', function () {
    if (child < 5) {
        getAndPutName('player4');
        document.getElementById("selectBtn4").disabled = true;
        document.getElementById("selectBtn4").style.backgroundColor = '#97999c';
    }
});

document.getElementById('selectBtn5').addEventListener('click', function () {
    if (child < 5) {
        getAndPutName('player5');
        document.getElementById("selectBtn5").disabled = true;
        document.getElementById("selectBtn5").style.backgroundColor = '#97999c';
    }
});

document.getElementById('selectBtn6').addEventListener('click', function () {
    if (child < 5) {
        getAndPutName('player6');
        document.getElementById("selectBtn6").disabled = true;
        document.getElementById("selectBtn6").style.backgroundColor = '#97999c';
    }
});



