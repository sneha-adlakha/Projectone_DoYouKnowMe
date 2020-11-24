const chalk = require('chalk');
var readlineSync=require("readline-sync");
console.log(chalk.cyan("welcome to the world of Quiz...R You Ready..."));
var userName=readlineSync.question(chalk.green("what is your name? \n"));
console.log("Welome "+userName);

var score=0;

function play(question,answer)
{
  var currentAns = readlineSync.question(question);
  if(currentAns.toUpperCase()===answer.toUpperCase())
  {
    console.log("you are right");
    score=score+1;
  }
  else
  {
    console.log("you are wrong");
    score = score-1;
  }
  console.log("your current score " +score);
}

var questionOne =
{
  question:"what is my fav food?\n",
  answer:"rajma"
}	
var questionTwo = 
{
  question: "what is my car name?\n ",
  answer : "honda"
}
var questionThree = 
{
  question: "what is my hobby? \n",
  answer : "reading"
}
var questionFour = 
{
  question: "who is my fav hero?\n",
  answer : "shahid"
}
var questionFive = 
{
  question: "My sister Name?\n",
  answer : "ambika"
}		
var questions = [questionOne,questionTwo,questionThree,questionFour,questionFive];
for(var i=0;i<questions.length;i++)
{
  var currentQuestion=questions[i];
  play(currentQuestion.question,currentQuestion.answer);
}
  console.log("your Final score " +score);