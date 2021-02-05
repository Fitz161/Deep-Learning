document.addEventListener("DOMContentLoaded", function () {
  /*这是一个事件监听器，它监听浏览器的 "DOMContentLoaded" 事件，即 HTML 文档体加载、解释完毕事件。
  事件触发时将调用function的代码，从而避免了错误发生
   */
  function createParagraph() {
    let para = document.createElement('p');
    para.textContent = '你点击了这个按钮！';
    document.body.appendChild(para);
  }

  const buttons = document.querySelectorAll('button');

  for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener('click', createParagraph);
  }
});
// 我是一条注释
/*
我也是
一条注释
*/
let randomNumber = Math.floor(Math.random() * 100) + 1;

const guesses = document.querySelector('.guesses');
const lastResult = document.querySelector('.lastResult');
const lowOrHi = document.querySelector('.lowOrHi');

const guessSubmit = document.querySelector('.guessSubmit');
const guessField = document.querySelector('.guessField');

let guessCount = 1;
let resetButton;

function checkGuess() {
  let userGuess = Number(guessField.value);
  if (guessCount === 1) {
    guesses.textContent = '上次猜的数';
  }
  guesses.textContent += userGuess + ' ';

  if (userGuess === randomNumber) {
    lastResult.textContent = 'congrads!';
    lastResult.style.backgroundColor = 'green';
    lowOrHi.textContent = '';
    setGameOver();
  }
  else if (guessCount === 10) {
    lastResult.textContent = 'game over';
    setGameOver();
  }
  else {
    lastResult.textContent = 'right';
    lastResult.style.backgroundColor = 'red';
    if (userGuess < randomNumber) {
      lowOrHi.textContent = 'upper';
    }
    else {
      lowOrHi.textContent = 'lower';
    }
  }
  guessCount++;
  guessField.value = '';
  guessField.focus();
}
let sequence = [1, 1, 2, 3, 5, 8, 13];
for (let i = 0; i < sequence.length; i++) {
  console.log(sequence[i]);
}