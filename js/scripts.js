// Business Logic:
  var add = function(number1, number2) {
    return number1 + number2;
  };

  var subtract = function(number1, number2) {
    return number1 - number2;
  };

  var multiply = function(number1, number2) {
    return number1 * number2;
  };

  var divide = function(number1, number2) {
    return number1 / number2;
  };

// User Logic:
$(document).ready(function() {
  $("form#add").submit(function(event) {
    event.preventDefault();
    var number1 = parseInt($("#add1").val());
    var number2 = parseInt($("#add2").val());
    var addresult = add(number1, number2)
    $("#addresults").text(addresult);
  });
  $("form#subtraction").submit(function(event) {
    event.preventDefault();
    var number1 = parseInt($("#sub1").val());
    var number2 = parseInt($("#sub2").val());
    var subresult = subtract(number1, number2)
    $("#subresults").text(subresult);
  });
  $("form#multiply").submit(function(event) {
    event.preventDefault();
    var number1 = parseInt($("#mul1").val());
    var number2 = parseInt($("#mul2").val());
    var mulresult = multiply(number1, number2)
    $("#mulresults").text(mulresult);
  });
  $("form#division").submit(function(event) {
    event.preventDefault();
    var number1 = parseInt($("#div1").val());
    var number2 = parseInt($("#div2").val());
    var divresult = divide(number1, number2)
    $("#divresults").text(divresult);
  });
});
// $(document).ready(function() {
//   debugger;
//   $("form#add").submit(function(event) {
//     event.preventDefault();
//     var number1 = parseInt($("#add1").val());
//     var number2 = parseInt($("#add2").val());
//     alert(add(number1, number2));
//   });
// });
