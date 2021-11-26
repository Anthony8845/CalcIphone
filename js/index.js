let a = ''; // first number
let b = ''; // second number
let sign = ''; // operation sign
let finish = false;

const ac = document.querySelector('.ac');
const btn = document.querySelector('.buttons')

const digit = [ '0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '.'];
const action = ['-', '+', 'x', '/',];



// screen

const out = document.querySelector('.calc-screen p');

function clearAll () {
  console.log('lol')
  // a = '';
  // b = '';
  // sign = '';
  // finish = false;
  // out.textContent = '0'
}

ac.addEventListener('onclick', clearAll);

btn.addEventListener('onclick', (event) => {
  // the button is not pressed
  if (!event.target.classList.contains('btn')) return;
  // the button pressed 'clearAll' ac
  if (event.target.classList.contains('ac')) return;

  out.textContent = '';
  //i get the button pressed
  const key = event.target.textContent;

  
})