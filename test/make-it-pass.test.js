var test = require('tape'); // assign the tape library to the variable "test"

function sum (a, b) {
	return a+b;
  // your code to make the test pass goes here ...
}
function sub (a, b) {
	return a-b;
}

test('sum should return the addition of two numbers', function (t) {
  t.equal(3, sum(1, 2)); // make this test pass by completing the add function!
  t.end();
});

test('sub should return the substraction of two numbers', function (t) {
  t.equal(3, sub(5, 2)); 
  t.end();
});
test('sub should return the substraction of two numbers', function (t) {
  t.equal(7, sub(10, 3)); 
  t.end();
});
