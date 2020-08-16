window.addEventListener('load', init)
// selectors 
let buttonHolder = document.getElementById("button-holder");
let emptyWordContainer = document.querySelector(".empty-word-container");
let userNotification = document.querySelector('.wrong-right')
let currentLife = document.querySelector('.remain')
let buttons = document.querySelectorAll('button')
let restart = document.querySelector('.restart')

let nflTeams = [
    'sardinals',
    'falcons',
    'ravens',
    'bills',
    'panthers',
    'bears',
    'bengals',
    'browns',
    'cowboys',
    'broncos',
    'lions',
    'packers',
    'texans',
    'colts',
    'jaguars',
    'chiefs',
    'chargers',
    'rams',
    'dolphins',
    'vikings',
    'patriots',
    'saints',
    'giants',
    'jets',
    'raiders',
    'eagles',
    'steelers',
    "niners",
    'seahawks',
    'buccaneers',
    'titans',
    'redskins'
];

//gets random team from list
let randomWords = nflTeams[Math.floor(Math.random() * nflTeams.length)];

//Globals
let hiddenAnswer=[]
let letterGuessed;
let lives = 10



// starts game 
function init () {
    //Displays emtpty underscores 
    hiddenWordLi()
    // creats the button elements
    creatButtons()
    //displays lives
    currentLife.innerHTML = lives
}


//Creating li for hidden word _____
function hiddenWordLi(){
    for(i=0; i< randomWords.length; i++){
        hiddenAnswer.push(' _')
    }
    for(i=0; i< randomWords.length; i++){
        const creatLi = document.createElement('th')
        creatLi.classList.add(`index${i}`)
        creatLi.innerText = hiddenAnswer[i];
        creatLi.innerText = ("_")
        emptyWordContainer.appendChild(creatLi)
    }
  
    console.log(hiddenAnswer)
  
}
//creating buttons
function creatButtons() {
    let buttonHolder = document.querySelector('#button-holder')
  for (var i = 65; i <= 90; i++) {
      let letter = String.fromCharCode(i);
      let button = document.createElement("button")
      button.className = "buttons"
      button.innerHTML = letter;
      buttonHolder.appendChild(button)
      button.onclick = function(e) {
       getLetter(this)
       //testing answer
       testanswer(letterGuessed)
        // Checking for win or lose condition
       gameCheck()
       
  }
  
}
}
//Get letters
function getLetter(e) {
    letterGuessed = e.innerHTML
    letterGuessed = letterGuessed.toLowerCase()
}

// test for leter and switches if correct 
function testanswer(letterGuessed){
    console.log(randomWords)
    for(let i=0; i < randomWords.length; i++){
        //checking and replaing correct answer in UI
        if(letterGuessed === randomWords[i]){
            hiddenAnswer[i] = randomWords[i]
            let switchAnswer = document.querySelector(`.index${i}`)
            switchAnswer.innerHTML = randomWords[i]
        }
    }
        if(letterGuessed = randomWords.includes(letterGuessed)){
             userNotification.innerHTML = "Correct"
             console.log(hiddenAnswer)

            }else{ 
                lives--
                userNotification.innerHTML = "wrong"
                currentLife.innerHTML = lives
                animate()
             console.log(hiddenAnswer)
             
            }
}



// End of game functions && Restart option
function gameCheck(){ 
    if(lives=== 0){
        buttonHolder.remove()
        let button1 = document.createElement("button")
        button1.className = "buttons"
        button1.innerHTML = "Restart";
        restart.appendChild(button1)
        button1.onclick = function(e) {
            location.reload()
      };
    }
    else if(hiddenAnswer.toString().split(',').join('') === randomWords){
        buttonHolder.remove()
        let button1 = document.createElement("button")
        button1.className = "buttons"
        button1.innerHTML = "You Win!";
        restart.appendChild(button1)
        button1.onclick = function(e) {
            location.reload()
      };
    }
} 


      // Animate man
      var animate = function () {
        var drawMe = lives ;
        drawArray[drawMe]();
      }
    
      
       // Hangman
      canvas =  function(){
    
        myStickman = document.getElementById("stickman");
        context = myStickman.getContext('2d');
        context.beginPath();
        context.strokeStyle = "#fff";
        context.lineWidth = 2;
      };
      
        head = function(){
          myStickman = document.getElementById("stickman");
          context = myStickman.getContext('2d');
          context.beginPath();
          context.arc(60, 25, 10, 0, Math.PI*2, true);
          context.stroke();
        }
        
      draw = function($pathFromx, $pathFromy, $pathTox, $pathToy) {
        
        context.moveTo($pathFromx, $pathFromy);
        context.lineTo($pathTox, $pathToy);
        context.stroke(); 
    }
    
       frame1 = function() {
         draw (0, 150, 150, 150);
       };
       
       frame2 = function() {
         draw (10, 0, 10, 600);
       };
      
       frame3 = function() {
         draw (0, 5, 70, 5);
       };
      
       frame4 = function() {
         draw (60, 5, 60, 15);
       };
      
       torso = function() {
         draw (60, 36, 60, 70);
       };
      
       rightArm = function() {
         draw (60, 46, 100, 50);
       };
      
       leftArm = function() {
         draw (60, 46, 20, 50);
       };
      
       rightLeg = function() {
         draw (60, 70, 100, 100);
       };
      
       leftLeg = function() {
         draw (60, 70, 20, 100);
       };
      
      drawArray = [frame1, frame2, frame3, frame4, rightLeg, leftLeg, rightArm, leftArm,  torso,  head, ]; 
    




      