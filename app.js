var id = 1;
var count = 1;
var correct = 0;
var wrong = 0;

// const submitButton = document.getElementById("submit");
//submitButton.addEventListener("click", nextQuestion);
function mySave() {
  var myContent = document.getElementById("myTextarea").value;
  document.getElementById("myTextarea").value = "";
  localStorage.setItem("question" + " " + id, myContent);

  var myAnswer = document.getElementById("answer").value;
  document.getElementById("answer").value = "";
  localStorage.setItem("answer" + " " + id, myAnswer);
  id++;
}

function done() {
  // homework done()has to redirect home
  localStorage.setItem("numberOfQuestions", id);
  location.href = "/index.html";
}
function nextQuestion() {
  //is called when submit button is clicked
  let numberOfQuestions = localStorage.getItem("numberOfQuestions");
  if (count < numberOfQuestions) {
    check();
    console.log(count, numberOfQuestions);
    let countScore = count + 1;
    if (countScore.toString() == numberOfQuestions) {
      wrong = countScore - 1 - correct;
      console.log(wrong, countScore - 1);
      console.log(correct);
      var score = document.getElementById("score");
      score.style.display = "block";
      var questions = document.getElementById("questions");
      questions.style.display = "none";
      changeHtmlScore(correct, wrong, countScore - 1);
      //change html of total of questions and correct answers and wrong answers create new function and put the functionality
    } else {
      if (document.getElementById("err").innerHTML === "correct") {
        correct += 1;
      }
      count += 1;
      students();
    }
  }
}

function changeHtmlScore(correctAnswers, wrongAnswers, totalQuestions) {
  console.log(correctAnswers, wrongAnswers, totalQuestions);
  document.getElementById("scoreQuestion").innerHTML =
    "Total Questions " + totalQuestions;
  document.getElementById("scoreCorrect").innerHTML =
    "Correct Answers " + correctAnswers;
  document.getElementById("wrongAnswer").innerHTML =
    "Wrong Answers " + wrongAnswers;
}

function students() {
  const currentQuestion = localStorage.getItem(`question ${count}`); // ${count} is the value of count on line 2 evaluates to the value of question 1 question 2 in local storage

  var questionText = document.createTextNode(currentQuestion);
  console.log("question text", questionText);
  var question = document.getElementById("question");
  question.innerText = "";
  question.appendChild(questionText);

  console.log("html", question); //logs html that is being inserted by variable question
}

function check() {
  var a = document.getElementById("studentanswer").value;
  var answer = localStorage.getItem(`answer ${count}`);
  if (a == answer) {
    document.getElementById("err").innerHTML = "correct";
  } else {
    document.getElementById("err").innerHTML = "wrong";
    count + 1;
  }
}

// when the page loads, students function is called
// this is from <body onload="students()">
// function students() {
//   const currentQuestion = localStorage.getItem(`question ${count}`); // ${count} is the value of count on line 2 evaluates to the value of question 1 question 2 in local storage
//   console.log("^^^", currentQuestion);
//   // for (i = 0; i < id; i++) {
//   var h = document.createElement("h1"); // .createElement creates a html element of whatever you passed in as a string
//   h.id = "h1-question"; // sets the id attribute to "h1-question" => <h1 id="h1-question"></h1> initialize id attribute to h1-question
//   var question = document.createTextNode(currentQuestion); //create a text string with the value of currentQuestion
//   h.appendChild(question); // => <h1 id="h1-question">eg here is question 1</h1> puts it into html tag of h1

//   const questionContainer = document.getElementById("question-details"); // from students.html (<div id="question-details"></div>)

//   const previousQuestion = document.getElementById("h1-question"); // getting the h1 element created above and assigning it to previousQuestion
//   if (count !== 1) {
//     // if the count is not 1(this means there was a previous question)
//     questionContainer.removeChild(previousQuestion); //removing h1 that contains question
//   }

//   questionContainer.prepend(h);
//   console.log("&&&", h);

// }
// console.log(students());
//   var questionsList = localStorage.getItem();
//   document.getElementById("question").innerHTML = questionsList;
// h.innerHtml = localStorage.getItem(localStorage.key(i));
// document.body.appendChild(h);
// on student screen load
// create a counter variable and assgin it to 0
// call a function that loads the question at count
// display it in the browser
// when subit is clicked, increment the counter and perform these actions over again
// }
// console.log(questionsList);

// const previousQuestion = document.getElementById("h1-question"); // getting the h1 element created above and assigning it to previousQuestion
// if (count !== 1) {
//   // if the count is not 1(this means there was a previous question)
//   questionContainer.removeChild(previousQuestion); //removing h1 that contains question
// }

// questionContainer.prepend(h);
// console.log("&&&", h)
