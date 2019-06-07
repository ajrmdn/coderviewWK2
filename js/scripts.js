$(document).ready(function(){
  $("#survey").submit(function(event) {
    var userFavAnimal =($("#question1").val());
    var userFavColor = $("#question2").val();
    var userFavFood = $("#question3").val();
    var userFavClams = $("#question4").val();
    var userCode = $("#question5").val();
    event.preventDefault();

    if (userFavAnimal === "Dogs" && userFavColor === "Orange" && userFavFood === "Fruits" && userFavClams === red && userCode === "Yes") {
      $(".ruby").show();

    }


  });
});
