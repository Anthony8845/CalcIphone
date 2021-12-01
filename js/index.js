let a = ''; // first number
let b = ''; // second number
let sign = ''; // operation sign
let finish = false;

const ac = document.querySelector('.ac');
const btn = document.querySelector('.buttons')

const digit = [ '0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '.'];
const action = ['-', '+', 'x', '/',];
const addFunc = ['+/-', '%'];


// screen

const out = document.querySelector('.calc-screen p');

function clearAll() {
  
  a = '';
  b = '';
  sign = '';
  finish = false;
  out.textContent = '0'
}

ac.addEventListener('click', clearAll);

btn.addEventListener('click', (event) => {
  // console.log(event)
  // the button is not pressed
  if (!event.target.classList.contains('btn')) return;
  // the button pressed 'clearAll' ac
  if (event.target.classList.contains('ac')) return;

  out.textContent = '';
  //i get the button pressed
  const key = event.target.textContent;

  // pressed 0-9 or .
  if (digit.includes(key)) {
    if(b === '' && sign === '') {
      a += key;
      
      out.textContent = a;
    }else if (a !== '' && b !== '' && finish) {
      b = key;
      finish = false;
      out.textContent = b;
    }else{
      b += key;
      out.textContent = b;
    }
    console.log(a, b, sign)
    return
   
  }

  // pressed +-/x
  if(action.includes(key)) {
    sign = key;
    out.textContent = sign;
    
    return
  }

  // pressed +/-
  let signChange
  if (addFunc.includes(key)) {
    if (key === '+/-') {
      if (a = (-a)) {
        signChange = +a;
      }
    }
    
    out.textContent = signChange;
  }
  
  // pressed %
  
  if (addFunc.includes(key)) {
    if(key === '%') {
      if (b) {
        console.log('Нажали b')
        b = a*(b/100);
        
        console.log(b)

        out.textContent = b.toFixed(3).replace(/0*$/, '');
      } 
      
    }
  }


  // pressed =
  if (key === '=') {
    if (b === '') b = a;
    switch (sign) {
      case '+': 
        a = (+a) + (+b);
        break;
      case '-':
          a = a - b; 
        break;
      case 'x':
          a = a * b; 
        break;
      case '/':
        if ( b === '0') {
          out.textContent = 'error';
          a = '';
          b = '';
          sign = '';
          return;
        }
          a = a / b; 
        break;
      
    }
    finish = true;
    

    if (Number.isInteger(a) ) {
      out.textContent = a;
    }else{
      let result = a;
      
      out.textContent = result.toFixed(3).replace(/0*$/, '');
    }
    
    
    console.log(a, b, sign)
  }
})