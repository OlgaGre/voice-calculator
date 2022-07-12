// function speak(text) {
//   const message = new SpeechSynthesisUtterance();
//   message.lang = "be-Latn-BY";
//   message.text = text;
//   window.speechSynthesis.speak(message)
// }


// перемен
const calculator = document.getElementById('container')
let audioSource = document.getElementById('audioSource')
let audio =  document.getElementById('audio')
let screen = document.getElementById('screen')
let button = document.getElementById('button')


function audioPlay (button){
let clickButton = 
setTimeout(function(){
  clickButton.addClass('active').removeClass('active');
  },1000)
}


 

calculator.onclick = function(event) {
  let target = event.target; // где был клик?
if (target.classList.contains('button')){
if (target.innerHTML === '÷') {
  audioSource.src = `./voice/del.wav`
  console.log(target.innerHTML)
} else{

console.log(target.innerHTML)

audioSource.src = `./voice/${target.innerHTML}.wav`

} 
let newInnerHTML = screen.innerHTML + target.innerHTML
console.log(newInnerHTML);
screen.innerHTML = newInnerHTML
audio.load(); //call this to just preload the audio without playing
audio.play();
}
};
button.onclick= function(){
  screen.innerHTML = ' '
}