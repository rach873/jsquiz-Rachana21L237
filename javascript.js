window.onload = function () {
  	
    var questionArea = document.getElementsByClassName('questions')[0],
        answerArea   = document.getElementsByClassName('answers')[0],
        checker      = document.getElementsByClassName('checker')[0],
        current      = 0,
    
    
        allQuestions = {
           " JavaScript is the programming language of the _____." : ['Desktop', 'Mobile', 'Web', 2],
          
          'Which type of JavaScript language is _____?' : ['Object-oriented','Object-based','Functional programming',1],
          
          'Which JavaScript method is used to write on browsers console?' : ['console.write()','console.output()','console.log()',2],
        };
        function loadQuestion(curr) {
           
            
              var question = Object.keys(allQuestions)[curr];
              
              questionArea.innerHTML = '';
              questionArea.innerHTML = question;    
            }
            function loadAnswers(curr) {
               
                
                  var answers = allQuestions[Object.keys(allQuestions)[curr]];
                  
                  answerArea.innerHTML = '';
                  
                  for (var i = 0; i < answers.length -1; i += 1) {
                    var createDiv = document.createElement('div'),
                        text = document.createTextNode(answers[i]);
                        createDiv.appendChild(text);      
      createDiv.addEventListener("click", checkAnswer(i, answers));
      
      
      answerArea.appendChild(createDiv);
    }
  }
  
  function checkAnswer(i, arr) {
 
    return function () {
      var givenAnswer = i,
      correctAnswer = arr[arr.length-1];
      
      if (givenAnswer === correctAnswer) {
        addChecker(true);             
      } else {
        addChecker(false);                        
      }
      
      if (current < Object.keys(allQuestions).length -1) {
        current += 1;
        
        loadQuestion(current);
        loadAnswers(current);
      } 
      else {
        questionArea.innerHTML = 'Well Done!';
        answerArea.innerHTML = '';
      }
                              
    };
  }
  
  function addChecker(bool) {

  var createDiv = document.createElement('div'),
        txt       = document.createTextNode(current + 1);
    
    createDiv.appendChild(txt);
    
    if (bool) {
      
      createDiv.className += 'correct';
      checker.appendChild(createDiv);
    } else {
      createDiv.className += 'false';
      checker.appendChild(createDiv);
    }
  }
  
  loadQuestion(current);
  loadAnswers(current);
  
};
