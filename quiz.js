//Display questões

var questionBank= [
    {
        question : 'Qual é o nome da galáxia em que o nosso Sistema Solar está localizado?',
        option : ['Via Láctea','Andrômeda',' Via Nebulosa','Centaurus'],
        answer : 'Via Láctea'
    },
    {
        question : 'Qual é o maior planeta do sistema solar?',
        option : ['Júpiter', 'Saturno','Urano', 'Terra'],
        answer : 'Júpiter'
    },
    {
        question : 'Qual é o elemento mais abundante no universo?',
        option : ['Hélio','Hidrogênio','Oxigênio','Carbono'],
        answer : 'Hidrogênio'
    },
    {
        question : 'Qual é o planeta mais próximos do Sol?',
        option : ['Saturno','Urano','Mercúrio','Júpiter'],
        answer : 'Mercúrio'
    },
    {
        question : 'A Terra realiza vários movimentos, um dos principais é o movimento realizado em torno do Sol, chamado de?',
        option : ['Rotação','Transformação','Movimentação','Translação'],
        answer : 'Translação'
    }
]

var question= document.getElementById('question');
var quizContainer= document.getElementById('quiz-container');
var scorecard= document.getElementById('scorecard');
var option0= document.getElementById('option0');
var option1= document.getElementById('option1');
var option2= document.getElementById('option2');
var option3= document.getElementById('option3');
var next= document.querySelector('.next');
var points= document.getElementById('score');
var span= document.querySelectorAll('span');
var i=0;
var score= 0;

//function tela questões
function displayQuestion(){
    for(var a=0;a<span.length;a++){
        span[a].style.background='none';
    }
    question.innerHTML='Q.'+(i+1)+' '+questionBank[i].question;
    option0.innerHTML=questionBank[i].option[0];
    option1.innerHTML=questionBank[i].option[1];
    option2.innerHTML=questionBank[i].option[2];
    option3.innerHTML=questionBank[i].option[3];
    stat.innerHTML= "Question"+' '+(i+1)+' '+'of'+' '+questionBank.length;
}

//function calcular pontuação
function calcScore(e){
    if(e.innerHTML===questionBank[i].answer && score<questionBank.length)
    {
        score= score+1;
        document.getElementById(e.id).style.background='#90EE90';
    }
    else{
        document.getElementById(e.id).style.background='red';
    }
    setTimeout(nextQuestion,300);
}

//function to display next question
function nextQuestion(){
    if(i<questionBank.length-1)
    {
        i=i+1;
        displayQuestion();
    }
    else{
        points.innerHTML=score+ '/'+ questionBank.length;
        quizContainer.style.display='none';
        scoreboard.style.display='block'
    }
}

//click events to next button
next.addEventListener('click',nextQuestion);

//botão jogar de novo
function backToQuiz(){
    location.reload();
}

//conferir respostas
function checkAnswer(){
    var answerBank= document.getElementById('answerBank');
    var answers= document.getElementById('answers');
    answerBank.style.display= 'block';
    scoreboard.style.display= 'none';
    for(var a=0;a<questionBank.length;a++)
    {
        var list= document.createElement('li');
        list.innerHTML= questionBank[a].answer;
        answers.appendChild(list);
        
    }
}


displayQuestion();
