console.log('script.js has been loaded!');

$(document).ready(onReady);


function onReady() {
  console.log('jQuery has been loaded!');
  $('#addBtn').on('click', addition);
  $('#subtractBtn').on('click', subtraction);
  $('#multiplyBtn').on('click', multiply);
  $('#divideBtn').on('click', division);
  $('#resetBtn').on('click', reset);
  console.log('button clicked');
  
}

function addition() {
    console.log('addition');
    
}

function subtraction() {
    console.log('subtraction');

}

function multiply() {
    console.log('multiply');

}

function division() {
    console.log('division');

}

function reset() {
    console.log('reset');

}
