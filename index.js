//Question bank
var questionBank= [
    {
        question : 'The h1 element in the HTML defines',
        option : ['Hyperlink','Headings','HyperText','Html-text'],
        answer : 'Headings'
    },
    {
        question : 'For displaying a webpage within a webpage,HTML uses',
        option : ['Classes','Iframes','Div element','Span Element'],
        answer : 'Iframes'
    },
    {
        question : 'Which of the following selector matches a element based on its class attribute?',
        option : ['The Type Selector','The Universal Selector','The Class Selector','All of the above'],
        answer : 'The Class Selector'
    },
    {
        question : 'If we want to use a nice green dotted border around an image, which css property are we going to use?',
        option : ['border-line','border-style','border-decoration','border-color'],
        answer : 'border-color'
    },
    {
        question : 'Which of the following type of variable is visible everywhere in your JavaScript code?',
        option : ['Global variable','local variable','Both of the above','None of the above'],
        answer : 'Global variable'
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

//function to display questions
function displayQuestion(){
    for(var a=0;a<span.length;a++){
        span[a].style.background='none';
    }
    question.innerHTML= 'Q.'+(i+1)+' '+questionBank[i].question;
    option0.innerHTML= questionBank[i].option[0];
    option1.innerHTML= questionBank[i].option[1];
    option2.innerHTML= questionBank[i].option[2];
    option3.innerHTML= questionBank[i].option[3];
    stat.innerHTML= "Question"+' '+(i+1)+' '+'of'+' '+questionBank.length;
}

//function to calculate scores
function calcScore(e){
    if(e.innerHTML===questionBank[i].answer && score<questionBank.length)
    {
        score= score+1;
        document.getElementById(e.id).style.background= 'limegreen';
    }
    else{
        document.getElementById(e.id).style.background= 'red';
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
        points.innerHTML= score+ '/'+ questionBank.length;
        quizContainer.style.display= 'none';
        scoreboard.style.display= 'block'
    }
}

//click events to next button
next.addEventListener('click',nextQuestion);

//Back to Quiz button event
function backToQuiz(){
    location.reload();
}

//function to check Answers
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