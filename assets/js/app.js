var number = 30;

// ???? VVVV
var intervalId;

var correctAnswers = 0;
var wrongAnswers = 0;
var noAnswer = 0;


// Objects de preguntas
var questions = [{
    question: "Who is the administrator of the office?",
    namesAnswer: ["Jim","Pam","Kevin", "Dwaight", "Michael"],
    answer: "4"
},{
    question: "Who like cats in the Office?",
    namesAnswer: ["Pam","Kevin", "Dwaight", "Angela","Oscar"],
    answer: "3"
},{
    question: "What type of farm does Dwight own?",
    namesAnswer: ["Bear Farm","Beet Farm", "Bettle Farm", "Carrot Farm"],
    answer: "1"
},{
    question: "Where did Andy Bernard sail his parents' yacht to??",
    namesAnswer: ["Bermuda","Greece", "Virgin Islands", "Jamaica"],
    answer: "0"
},
];

// empieza a dar start en el boton

$("#start").on("click", function() {

    //  Como llego a esconder el boton una vez se le de START
    $(this).hide();

    // texto del countdown
    $("#time").html("Time Remaining: 30 Seconds");

//    empieza el countdown
    run();
   
    // Question 1 ------ NO ENTIENDO DESPUES DEL INPUT LO QUE HACE
	
	for(i = 0; i < questions.length; i++)
	{
		$("#question"+(i+1)).html("<h3>" + questions[i].question + "</h3>");
		inputstring = "";
		for(j = 0; j < questions[i].namesAnswer.length; ++j)
		{
			inputstring+="<input type='radio' name='answer" +(i+1)+ "' value='"+j+"'> " + questions[i].namesAnswer[j];
		}
		$("#answer"+(i+1)).html(inputstring+"<br><br>");
	}

    // enviarInfo
    $("#submit").html("<button id='done' class='btn'>Done!</button>");


    // Sigue Obteniendo el resultado despues de dar done
    $("#done").on("click", function() {
        keepingScore();

        // Display 
        resultFinal();
        
    });
});

// funcion del countdown del tiempo (no se si esta bien)
    function run() {
    clearInterval(intervalId);
    intervalId = setInterval(decrement, 1000);
}

// funcion decrementando las preguntas

function decrement() {
    //  Decrease number by one.
    number--;
    //  Show the number in the #time tag
    $("#time").html("Time Remaining: " + number + " Seconds" );

    if (number === 0) {
        stop();

        keepingScore();
        resultFinal();

    }
}

function stop() {

    clearInterval(intervalId);
}

    // https://www.w3schools.com/jquery/eff_hide.asp para esconder los resultados

    function resultFinal() {
    $("#time").hide();
    $("#question1").hide();
    $("#answer1").hide();
    $("#question2").hide();
    $("#answer2").hide();
    $("#question3").hide();
    $("#answer3").hide();
    $("#question4").hide();
    $("#answer4").hide();

  
  
    $("#submit").hide();

    $("#resultsMessage").html("All Done!");
    $("#correct").html("Correct Answers: " + correctAnswers);
    $("#incorrect").html("Wrong Answers: " + wrongAnswers);
    $("#noAnswer").html("No Answers: " + noAnswer);
}

// mantiene score
// https://api.jquery.com/val/ info

function keepingScore() {

	for(i = 0; i< questions.length; ++i)
	{
		var answ = $("input[name='answer"+(i+1)+"']:checked").val();
		console.log(answ);
		if(answ === undefined) ++noAnswer;
		else if(answ === questions[i].answer) ++correctAnswers;
		else ++wrongAnswers;
	}
}