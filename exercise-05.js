function palindrome(kata) {
  var balikKata = '';

  for (var i = kata.length - 1; i > -1; i--) {
    balikKata = balikKata + kata[i];
  }

  return balikKata == kata ? true : false;
}

// TEST CASES
console.log(palindrome('katak')); // true
console.log(palindrome('blanket')); // false
console.log(palindrome('civic')); // true
console.log(palindrome('kasur rusak')); // true
console.log(palindrome('mister')); // false