
var scoreOfUser = 0;
var scoreOfComputer =0;
var options = ['rock','scissors','paper']
function rock(){
    var randomIndex =Math.floor(Math.random()* options.length) 
    // console.log(options[randomIndex])
    var choiceOfComputer = options[randomIndex]
    var choiceOfUser = 'rock'
    if(choiceOfComputer == 'paper'){
      disp.innerText = 'Computer choose paper, you lose'
      disp.style.backgroundColor = 'Red'
      disp.style.color = '#ffffff'
      scoreOfComputer++
      computerScore.innerText= scoreOfComputer
    }
    else if (choiceOfComputer=='scissors'){
        disp.innerText= 'Computer choose scissors, you win'
        disp.style.backgroundColor = 'green'
        disp.style.color = '#ffffff'
        scoreOfUser++
        userScore.innerText= scoreOfUser
    }
    else if(choiceOfComputer=='rock'){
        disp.innerText='Computer choose scissors. it is a tie'
        disp.style.backgroundColor = 'blue'
        disp.style.color = '#ffffff'

    }

    // console.log(Math.floor(Math.random()* options.length))
}
function paper(){
    var randomIndex =Math.floor(Math.random()* options.length) 
    // console.log(options[randomIndex])
    var choiceOfComputer = options[randomIndex]
    var choiceOfUser = 'rock'
    if(choiceOfComputer == 'rock'){
      disp.innerText = 'Computer choose rock, you win'
      disp.style.backgroundColor = 'Green'
      disp.style.color = '#ffffff'
      scoreOfUser++
        userScore.innerText= scoreOfUser
    }
    else if (choiceOfComputer=='scissors'){
        disp.innerText= 'Computer choose scissors, you lose'
        disp.style.backgroundColor = 'red'
        disp.style.color = '#ffffff'
        scoreOfUser++
        userScore.innerText= scoreOfUser
    }
    else if(choiceOfComputer=='paper'){
        disp.innerText='Computer choose paper. it is a tie'
        disp.style.backgroundColor = 'blue'
        disp.style.color = '#ffffff'
    }

    // console.log(Math.floor(Math.random()* options.length))
}
function scissors(){
    var randomIndex =Math.floor(Math.random()* options.length) 
    // console.log(options[randomIndex])
    var choiceOfComputer = options[randomIndex]
    var choiceOfUser = 'rock'
    if(choiceOfComputer == 'paper'){
      disp.innerText = 'Computer choose paper, you win'
      disp.style.backgroundColor = 'Green'
      disp.style.color = '#ffffff'
      scoreOfUser++
        userScore.innerText= scoreOfUser
    }
    else if (choiceOfComputer=='rock'){
        disp.innerText= 'Computer choose rock, lose'
        disp.style.backgroundColor = 'red'
        disp.style.color = '#ffffff'
        scoreOfUser++
        userScore.innerText= scoreOfUser
    }
    else if(choiceOfComputer=='scissors'){
        disp.innerText='Computer choose scissors. it is a tie'
        disp.style.backgroundColor = 'blue'
        disp.style.color = '#ffffff'
    }

    // console.log(Math.floor(Math.random()* options.length))
}

function restart(){
   userScore.innerText=0
   computerScore.innerText=0
   disp.innerText=""
   disp.style.backgroundColor='transparent'
}