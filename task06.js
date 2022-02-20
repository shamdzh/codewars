/* Given two integers a and b, which can be positive or negative, find the sum of all the integers between and including them and return it. If the two numbers are equal return a or b.

Note: a and b are not ordered!

Examples (a, b) --> output (explanation)
(1, 0) --> 1 (1 + 0 = 1)
(1, 2) --> 3 (1 + 2 = 3)
(0, 1) --> 1 (0 + 1 = 1)
(1, 1) --> 1 (1 since both are same) */

function getSum(a, b) {
  let summ = 0;

  if (a == b) {
    return a;
  }

  if (a > b) {
    for (b; b < a+1; b++) {
        summ = summ + b;
    }
  } else {
    for (a; a < b+1; a++) {
        summ = summ + a;
    }
  }
  
  console.log(summ)
}

getSum(-5, 6)

// best solution 
function GetSum( a,b )
{
   if (a == b) return a;
   else if (a < b) return a + GetSum(a+1, b);
   else return a + GetSum(a-1,b);
}

function GetSum( a,b ) {
  var result = 0;
  var bigger = a > b ? a : b;
  var smaller = a > b ? b : a;
  for (var i = smaller; i <= bigger; i++) { result += i }
  return result
}