var test = require('tape');
var fizzbuzz = require('./index.js');

test('Testing Tape is working', function(t) {
  t.equal(1, 1, 'One should equal one');
  t.end();
});

test('Testing Tape is working', function(t) {
  t.equal(2, 2, 'One should equal two');
  t.end();
});

test('Testing Tape is working', function(t) {
  t.equal(fizzbuzz(3), "Fizz", 'should return Fizz');
  t.end();
});

test('Testing Tape is working', function(t) {
  t.equal(fizzbuzz(4), 4, 'should return 4');
  t.end();
});

test('Testing Tape is working', function(t) {
  t.equal(fizzbuzz(5), "Buzz", 'should return Buzz');
  t.end();
});

test('Testing Tape is working', function(t) {
  t.equal(fizzbuzz(6), "Fizz", 'should return Fizz');
  t.end();
});

test('Testing Tape is working', function(t) {
  t.equal(fizzbuzz(15), "Fizzbuzz", 'should return Fizzbuzz');
  t.end();
});

test("Testing big numbers", function(t) {
  t.equal(fizzbuzz(9465), "Fizzbuzz", 'should return Fizzbuzz');
  t.end();
})

test("Testing other than numbers", function(t) {
  t.equal(fizzbuzz("ffsft"),"string", 'insert only numbers');
  t.end();
})

test("should work on negative numbers", function(t) {
  t.equal(fizzbuzz(-3), "Fizz", 'should return Fizz');
  t.end();
})

test("should work on negative numbers", function(t) {
  t.equal(fizzbuzz(-5), "Buzz", 'should return Buzz');
  t.end();
})

test("should work on negative numbers", function(t) {
  t.equal(fizzbuzz(-15), "Fizzbuzz", 'should return Fizzbuzz');
  t.end();
})