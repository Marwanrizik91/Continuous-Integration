function fizzbuzz(number) {
    let rem3 = number % 3 == 0;
    let rem5 = number % 5 == 0;
     if (rem3 && rem5) {
     return "Fizzbuzz"; // write your code here
   } else if(rem5 ) {
     return "Buz"
   } else if (rem3) {
     return "Fizz"
   } else if(typeof number != 'number') {
     return "string"
   } else {
     return number
   }
  }
  



module.exports = fizzbuzz;