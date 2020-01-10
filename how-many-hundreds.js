function howManyHundreds (number) {
  let remainder = number % 100;
  number -= remainder;
  let numOfHundreds = number / 100
  return numOfHundreds
}

console.log(howManyHundreds(1000), "=?", 10);
console.log(howManyHundreds(894), "=?", 8);
console.log(howManyHundreds(520), "=?", 5);
console.log(howManyHundreds(99), "=?", 0);
console.log(howManyHundreds(0), "=?", 0);