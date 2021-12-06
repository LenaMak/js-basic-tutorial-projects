const colors = ["green", "red", "rgb(133,122,200)", "rgba(133,122,200,0.5)", "#f15025"];
const btn = document.getElementById('btn');
const color = document.querySelector('.color');

btn.addEventListener('click', function(){
 let randomNumber = getRandomNumber();
 console.log(randomNumber);
 document.body.style.backgroundColor = colors[randomNumber];
 // display color name on screen
 color.textContent = colors[randomNumber];
});

// function to generate a random number
function getRandomNumber(){
 return Math.floor(Math.random() * colors.length);
}