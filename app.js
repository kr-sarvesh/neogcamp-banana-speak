var btnTranslate = document.querySelector('#btn-translate');
var txtInput = document.querySelector('#txt-input');
var outputDiv = document.querySelector('#output');

const clickHandler = () => {
  outputDiv.innerText = 'jajajajf' + txtInput.value;
};
btnTranslate.addEventListener('click', clickHandler);
