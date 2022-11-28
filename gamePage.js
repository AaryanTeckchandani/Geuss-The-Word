player1Name = localStorage.getItem("player1Name")

player1Score = 0 ;

document.getElementById("player1Name").innerHTML = player1Name + " : ";

document.getElementById("player1Score").innerHTML = player1Score;

player2Name = localStorage.getItem("player2Name")

player2Score = 0;

document.getElementById("player2Name").innerHTML = player2Name + " : ";

document.getElementById("player2Score").innerHTML = player2Score;

document.getElementById("playerQuestion").innerHTML = "Question Turn : " + player1Name;

document.getElementById("playerAnswer").innerHTML = "Answer Turn : " + player2Name;

function send(){
    getWord = document.getElementById("word").value;
    word = getWord.toLowerCase();
    console.log("word in lowercase : " +word);

    charAt1 = word.charAt(1); 
    console.log(charAt1);

    lengthDivideBy2 =  Math.floor(word.length/2);
    charAt2= word.charAt(lengthDivideBy2);
    console.log(charAt2);

    lengthMinus1 = word.length -1;
    charAt3 = word.charAt(lengthMinus1);
    console.log(charAt3);

    removeCharAt1 = word.replace(charAt1, "_"); 
    removeCharAt2 = removeCharAt1.replace(charAt2, "_"); 
    removeCharAt3 = removeCharAt2.replace(charAt3, "_");


    console.log(removeCharAt3);

    questionWord = "<h4 id='wordDisplay'>Q."+removeCharAt3+"</h4>";
    inputBox = "<br> Answer : <input type='text' id='inputCheckBox'>";
    checkButton = "<br><br> <button class='btn btn-info' onclick='check()'>Check</button>";

    row = questionWord + inputBox + checkButton;
    document.getElementById("output").innerHTML=row;

    document.getElementById("word").value="";
}

questionTurn = "player1";
answerTurn= "player2";

function check()
{
    getAnswer = document.getElementById("inputCheckBox").value;
    answer = getAnswer.toLowerCase();
    console.log("answer in lower case - " + answer);
    if(answer== word)
    {
        if(answerTurn == "player1")
        {
            player1Score = player1Score +1;
            document.getElementById("player1Score").innerHTML = player1Score;
        }
        else{
          player2Score = player2Score +1;
          document.getElementById("player2Score").innerHTML = player2Score;  
        }

    }
    if(questionTurn == "player1")
    {
        questionTurn="player2"
        document.getElementById("playerQuestion").innerHTML = "Question Turn - " + player2Name;
    }
    else{
        questionTurn= "player1"
        document.getElementById("playerQuestion").innerHTML ="Question Turn - " +player1Name;
    }

    if(answerTurn == "player1")
    {
        answerTurn = "player2"
        document.getElementById("playerAnswer").innerHTML = "Answer Turn - " + player2Name;
    }

    else
    {
        answerTurn = "player1"
        document.getElementById("playerAnswer").innerHTML = "Answwer Turn - " + player1Name ;
    }

    document.getElementById("output").innerHTML = "";
}