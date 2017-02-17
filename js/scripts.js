var assessSides = function(side1, side2, side3){
  if((side1 + side2 <= side3) || (side2 + side3 <= side1) || (side1 + side3 <= side2)){
    var returnVal = "non";
  } else{
    if(side1 === side2 && side1 === side3 && side2 === side3){
      var returnVal = "equilateral";
    } else if (side1 != side2 && side1!= side3 && side2 != side3){
      var returnVal = "scalene";
    } else if (side1 === side2 || side1 === side3 || side2 === side3){
      var returnVal = "isosceles";
    }
  }
  return returnVal;
}

var assessSidesV2 = function(side1, side2, side3){
  //side1 and side2
  if (side1===side2){
    if(side3 >= side1+side2){
      var returnVal = "non";
    }else if(side1===side3){
      var returnVal = "equilateral";
    }else{
      var returnVal = "isoceles";
    }
  //side2 and side3
  }else if(side2===side3){
    if (side1 >= side2+side3){
      var returnVal = "non";
    }else if(side2===side1){
      var returnVal = "equilateral";
    }else{
      var returnVal = "isoceles";
    }
  //side1 and side3
  }else if (side1===side3){
    if (side2 >= side1+side3){
      var returnVal = "non";
    }else if(side1 ===side2){
      var returnVal = "equilateral";
    }else {
      var returnVal = "Isoceles";
    }
  }else{
    var returnVal = "Scalene";
  }
  return returnVal;
}


$(function(){
  $("#triangleForm").submit(function(){
    // console.log("Got in");
    var side1 = parseInt($("#side1").val());
    var side2 = parseInt($("#side2").val());
    var side3 = parseInt($("#side3").val());
    // debugger;
    var typeOfTriangle = assessSides(side1, side2, side3);
    $(".result-report").show();
    $(".t-val").text(typeOfTriangle)




    event.preventDefault();
  });
});
