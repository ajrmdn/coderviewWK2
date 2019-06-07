$(document).ready(function(){
  $("#survey").submit(function(event) {
    var userFavAnimal =($("#question1").val());
    var userFavColor = $("#question2").val();
    var userFavFood = $("#question3").val();
    var userFavClams = $("#question4").val();
    var userCode = $("#question5").val();
    event.preventDefault();



    if (userFavAnimal === "Dogs" && userFavColor === "Orange" && userFavFood === "Fruits" && userFavClams === "Red" && userCode === "Yes") {
      $(".ruby").show();
    } else if(userFavAnimal === "Cats" && userFavColor === "Purple" && userFavFood === "Veggies" && userFavClams === "White" && userCode === "No") {
      $(".java").show();
    } else if(userFavAnimal === "Birds" && userFavColor === "Red" && userFavFood === "Carbs" && userFavClams === "None" && userCode === "Maybe") {
      $(".react").show();
    }
  });
});
