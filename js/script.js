function triangletracker() {
  var a = parseInt(document.getElementById("side1").value);
  var b = parseInt(document.getElementById("side2").value);
  var c = parseInt(document.getElementById("side3").value);


  if(a + b > c && b + c > a && a + c > b){
    if(a == b && b == c && a == c){
      document.getElementById("output").value = "This is an equilateral triangle";
    }//end of equilateral if
    else if (a == b || b == c || a == c) {
      document.getElementById("output").value = "This is an Isosceles triangle";
    }//end of isosceles if
    else {
      document.getElementById("output").value = "This is a Scalene triangle";
    }
  }
  else{
    document.getElementById("output").value = "This is not a triangle";

  }//end of parent if
}//end of function
