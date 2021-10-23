const frontimg = document.querySelector(".frontimg");
const slider = document.querySelector(".slider");
const headline = document.querySelector(".headline");

const t1=new TimelineMax();

t1.fromTo(frontimg,1,{height:'0%'},{height:'80%',ease: Power2.easeInOut})
  .fromTo(frontimg,1.2,{width:'100%'},{width:'80%',ease: Power2.easeInOut})
  .fromTo(slider,1.2,{x:"-100%"},{x:"0%",ease: Power2.easeInOut},"-=1.2")
  .fromTo(headline,1.2,{opacity:'0%'},{opacity:'100%',ease: Power2.easeInOut},"-=1.2")

// team heading
  var words = document.getElementsByClassName('word');
var wordArray = [];
var currentWord = 0;

words[currentWord].style.opacity = 1;
for (var i = 0; i < words.length; i++) {
  splitLetters(words[i]);
}

function changeWord() {
  var cw = wordArray[currentWord];
  var nw = currentWord == words.length-1 ? wordArray[0] : wordArray[currentWord+1];
  for (var i = 0; i < cw.length; i++) {
    animateLetterOut(cw, i);
  }
  
  for (var i = 0; i < nw.length; i++) {
    nw[i].className = 'letter behind';
    nw[0].parentElement.style.opacity = 1;
    animateLetterIn(nw, i);
  }
  
  currentWord = (currentWord == wordArray.length-1) ? 0 : currentWord+1;
}

function animateLetterOut(cw, i) {
  setTimeout(function() {
		cw[i].className = 'letter out';
  }, i*80);
}

function animateLetterIn(nw, i) {
  setTimeout(function() {
		nw[i].className = 'letter in';
  }, 340+(i*80));
}

function splitLetters(word) {
  var content = word.innerHTML;
  word.innerHTML = '';
  var letters = [];
  for (var i = 0; i < content.length; i++) {
    var letter = document.createElement('span');
    letter.className = 'letter';
    letter.innerHTML = content.charAt(i);
    word.appendChild(letter);
    letters.push(letter);
  }
  
  wordArray.push(letters);
}

changeWord();
setInterval(changeWord, 4000);

// card loading effect
const card1 = document.querySelector(".card1");
const cardTitle = document.querySelectorAll(".card-title");


const t2=new TimelineMax();

t2.fromTo(card1,2,{opacity:'0%'},{opacity:'100%',ease: Power2.easeInOut})
  .fromTo(cardTitle,1,{transform: "rotate(0deg) skew(0deg)"},{transform: "rotate(-5deg) skew(-5deg)",ease: Power2.easeInOut})
  
  