$(function(){
  $("#triangleForm").submit(function(){
    // console.log("Got in");
    var side1 = parseInt($("#side1").val());
    var side2 = parseInt($("#side2").val());
    var side3 = parseInt($("#side3").val());
    // debugger;
    console.log(side1);
    if((side1 + side2 <= side3) || (side2 + side3 <= side1) || (side1 + side3 <= side2)){
      console.log("not a triangle");
    } else{
      if(side1 === side2 && side1 === side3 && side2 === side3){
        console.log("equilateral");
      } else if (side1 != side2 && side1!= side3 && side2 != side3){
        console.log("scalene")
      } else if (side1 === side2 || side1 === side3 || side2 === side3){
        console.log("isosceles");
      }
    }

    // //side1 and side2
    // if (side1===side2){
    //   if(side3 >= side1+side2){
    //     console.log("not a traingle");
    //   }else if(side1===side3){
    //     console.log("equilateral");
    //   }else{
    //     console.log("isoceles");
    //   }
    // //side2 and side3
    // }else if(side2===side3){
    //   if (side1 >= side2+side3){
    //     console.log("not a traingle");
    //   }else if(side2===side1){
    //     console.log("equilateral");
    //   }else{
    //     console.log("isoceles");
    //   }
    // //side1 and side3
    // }else if (side1===side3){
    //   if (side2 >= side1+side3){
    //     console.log("not a triangle");
    //   }else if(side1 ===side2){
    //     console.log("equilateral");
    //   }else {
    //     console.log("Isoceles");
    //   }
    // }else{
    //   console.log("Scalene");
    // }

    event.preventDefault();
  });
});
