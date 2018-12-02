function triangletracker(){
  var side1 = parseInt(document.getElementById('a').value);
  var side2 = parseInt(document.getElementById('b').value);
  var side3 = parseInt(document.getElementById('c').value);


  if((a + b > c) && (b + c > a) && (a + c > b)){
    if(a == b && b == c && a == c){
      document.getElementById('output').value = 'This is an equilateral triangle';
    }//end of equilateral if
    else if (a == b || b == c || a == c) {
      document.getElementById('output').value = 'This is an Isosceles triangle';
    }//end of isosceles if
    else {
      document.getElementById('output').value = 'This is a Scalene triangle';
    }
  }
  else{
    document.getElementById('output').value = 'This is not a triangle';

  }//end of parent if
}
