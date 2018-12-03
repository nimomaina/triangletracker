function triangletracker() {
  var a = parseInt(document.getElementById("side1").value);
  var b = parseInt(document.getElementById("side2").value);
  var c = parseInt(document.getElementById("side3").value);

  var type = ['Equilateral triangle', 'Isosceles triangle', 'Scalene triangle', 'Not a triangle'];


  if(a + b > c && b + c > a && a + c > b){
    if(a == b && b == c && a == c){
      document.getElementById("output").innerHTML = 'This is an ' + type[0];
    }//end of equilateral if
    else if (a == b || b == c || a == c) {
      document.getElementById("output").innerHTML = 'This is an ' + type[1];
    }//end of isosceles if
    else {
      document.getElementById("output").innerHTML ='This is a ' +  type[2];
    }
  }
  else{
    document.getElementById("output").innerHTML = 'Sorry this is ' + type[3];

  }//end of parent if
}//end of function
