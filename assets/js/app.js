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
    answer: 4
},{
    question: "Who like cats in the Office?",
    namesAnswer: ["Pam","Kevin", "Dwaight", "Angela","Oscar"],
    answer: 4
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
        $("#question"+(i+1)).html("<h2>" + questions[i].question + "</h2>");
        $("#answer"+(i+1)).html("<input type='radio' name='answer"+(i+1)+"' " + "<label>" + questions[i].namesAnswer[i] + "</label>"
            + "<input type='radio' name='answer"+(i+1)+"' " + "<label>" + questions[i].namesAnswer[1] + "</label>"
            + "<input type='radio' name='answer"+(i+1)+"' " + "<label>" + questions[i].namesAnswer[2] + "</label>"
            + "<input type='radio' name='answer"+(i+1)+"' " + "<label>" + questions[i].namesAnswer[3] + "</label>"
            + "<input type='radio' name='answer"+(i+1)+"' " + "<label>" + questions[i].namesAnswer[4] + "</label><br><br>"
        );
    }
  
 
    
    // enviarInfo Tiene que ser invisible para que se vea despues
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
    // clearInterval(intervalId);
    // intervalId = setInterval(decrement, 1000);
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

    // No se lo que me hace esto VVV
    //  Clears intervalId
    // clearInterval(intervalId);
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
  
    $("#submit").hide();

    $("#resultsMessage").html("All Done!");
    $("#correct").html("Correct Answers: " + correctAnswers);
    $("#wrong").html("wrong Answers: " + wrongAnswers);
    $("#noAnswer").html("noAnswer: " + noAnswer);
}

// mantiene score
// https://api.jquery.com/val/ info

function keepingScore() {

    var userAnswer1 = $("input[name='answer1']:checked").val();
    var userAnswer2 = $("input[name='answer2']:checked").val();
  

    // Question 1
    if (userAnswer1 === undefined) {

        noAnswer++;
    }
    else if (userAnswer1 == questions[4].answer) {

        correctAnswers++;
    }
    else {

        wrongAnswers++;
    }

    // Question 2
    if (userAnswer2 === undefined) {

        noAnswer++;
    }
    else if (userAnswer2 == questions[4].answer) {

        correctAnswers++;
    }
    else {

        wrongAnswers++;
    }

  



   

}