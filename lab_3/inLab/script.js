var score = 0;
var scoreView = document.getElementById("score");
var body = document.body;
var randomWords=["test","random","loremIpsum","randomText"]
stopped = false;

function gameAdd(flag){
    var board = document.getElementById("game").children;
    var rand = Math.floor(Math.random() * 5);
    var place = Math.floor(Math.random() * board.length);
    var randomRow = board.item(place);
    if(rand == 0){
        node=makeHeader()
    }
    if(rand == 1){
        node=makePlus()
    }
    if(rand == 2){
        node=makeMinus()
    }
    if(rand ==3){
        node=makeWord()
    }
    if(rand ==4){
        node=makeNumber()
    }
    if(flag){
        board.item(place).parentNode.insertBefore(node,randomRow);
    }
    else{
        document.getElementById("game").appendChild(node);
    }
}

function gameRemove(){
    var board = document.getElementById("game").children;
    var place = Math.floor(Math.random() * board.length);
    var randomRow = board.item(place);
    randomRow.parentNode.removeChild(randomRow);
}

function makeHeader(){
    var rand = Math.floor(Math.random() * 6 + 1);
    var header = document.createElement("h"+rand);
    var text = document.createTextNode("Nagłówek poziomu "+rand);
    header.appendChild(text);
    header.addEventListener("click", function(){
        changeScore(-rand);
    });
    return header;
}

function makePlus(){
    var plus=document.createElement("p");
    var text = document.createTextNode("+");
    plus.appendChild(text);
    plus.addEventListener("click",function(){
        gameAdd(true);
    })
    return plus
}

function makeMinus(){
    var minus=document.createElement("p");
    var text = document.createTextNode("-");
    minus.appendChild(text);
    minus.addEventListener("click",function(){
        gameRemove()
    })
    return minus
}

function makeWord(){
    var word=document.createElement("p");
    var rand = Math.floor(Math.random() * randomWords.length);
    var text = document.createTextNode(randomWords[rand]);
    word.appendChild(text);
    word.addEventListener("click",function(){
        changeScore(randomWords[rand].length)
    })
    return word
}

function makeNumber(){
    var number=document.createElement("p");
    var rand = Math.floor(Math.random() * 20);
    var text = document.createTextNode(rand);
    number.appendChild(text);
    number.addEventListener("click",function(){
        changeScore(rand)
    })
    return number
}

function changeScore(value){
    score += parseInt(value);
    scoreView.innerHTML = "your actual score: "+ score;
}


function startGame(){
    score=0
    for(var i=0;i<10;i++){
        gameAdd(false)
    }
    
    window.setInterval(() => {
        if (!stopped) {
            gameRemove()
        }
    }, 1000);
    
    window.setTimeout(() => {
        stopped = true;
        message="End of game your score is "+score;
        body.innerHTML="Your score is "+score;
    }, 30000);
}