var inputL1;
var inputL2;
var inputL3;
var inputL4;
var inputL5;
var inputL6;
var favArr2 = [];
var favArr = [];


function push(){
  favArr2.push(favArr[1],favArr[0],favArr[2]);
  return favArr2;
};

$(document).ready(function() {
  $("form#form1").submit(function(event) {
    event.preventDefault();
    inputL1 = $('input#like1').val();
    console.log(inputL1);
    inputL2 = $('input#like2').val();
    console.log(inputL2);
    inputL3 = $('input#like3').val();
    console.log(inputL3);
    inputL4 = $('input#like4').val();
    console.log(inputL4);
    inputL5 = $('input#like5').val();
    console.log(inputL5);
    inputL6 = $('input#like6').val();
    console.log(inputL6);
    favArr =[inputL1, inputL2, inputL3, inputL4, inputL5, inputL6];
    console.log(favArr);
    push(favArr);
    console.log(favArr2);
    $("ul#card-text").append("<li>" + favArr2[0] + "</li>");
    $("ul#card-text").append("<li>" + favArr2[1] + "</li>");
    $("ul#card-text").append("<li>" + favArr2[2] + "</li>")
});

});
