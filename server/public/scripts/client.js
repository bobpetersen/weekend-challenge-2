console.log('script.js has been loaded!');

$(document).ready(onReady);

function onReady() {
  console.log('jQuery has been loaded!');
  $('#addBtn').on('click', addition);
  $('#subtractBtn').on('click', subtraction);
  $('#multiplyBtn').on('click', multiply);
  $('#divideBtn').on('click', division);
  $('#resetBtn').on('click', reset);
  getAllMaths();
}

function getAllMaths() {
  $.ajax({
    method: 'GET',
    url: '/all-maths'
  }).then(function (calc_data) {
    console.log(calc_data);
    for (const result of calc_data) {
      $('#mathHistory').prepend(`<p>${result.x} ${result.action} ${result.y} = ${result.result}</p>`);// always {object.property}
    }
  });
}

function addition() {
  console.log('addition');
  let newMath = {
    x: $('#inputX').val(),
    y: $('#inputY').val(),
    type: 'add'
  };
  $.ajax({
    method: 'POST',
    url: '/addition',
    data: newMath
  }).then(function(response) {
    $('#mathHistory').empty();
    getAllMaths();
    //$('#outputSum').prepend(`${response.mathy}`)
    console.log(response);
  });
}

function subtraction() {
  console.log('subtraction');
  let newMath = {
    x: $('#inputX').val(),
    y: $('#inputY').val(),
    type: 'subtract'
  };
  $.ajax({
    method: 'POST',
    url: '/subtract',
    data: newMath
  }).then(function (response) {
    $('#mathHistory').empty();
    getAllMaths();
    //$('#outputSum').prepend(`${response.mathy}`)
    console.log(response);
  });
}


function multiply() {
  console.log('multiply');
  let newMath = {
    x: $('#inputX').val(),
    y: $('#inputY').val(),
    type: 'multiply'
  };
  $.ajax({
    method: 'POST',
    url: '/multiply',
    data: newMath
  }).then(function (response) {
    $('#mathHistory').empty();
    getAllMaths();
    //$('#outputSum').prepend(`${response.mathy}`)
    console.log(response);
  });
}

function division() {
  console.log('division');
  let newMath = {
    x: $('#inputX').val(),
    y: $('#inputY').val(),
    type: 'division'
  };
  $.ajax({
    method: 'POST',
    url: '/division',
    data: newMath
  }).then(function (response) {
    $('#mathHistory').empty();
    getAllMaths();
    //$('#outputSum').prepend(`${response.mathy}`)
    console.log(response);
  });
}


function reset() {
  console.log('reset');
}
