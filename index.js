// problem 1
let a = 5,
  b = 4,
  c = 3,
  p = a + b + c;
console.log(p);
// problem 2
let m = 5;
let x = m * m * m;
console.log(x);
let y = m * m * 6;
console.log(y);
// problem 3
let q = 6,
  w = 4;
let t = q * w;
console.log(t);
let e = q * 2 + w * 2;
console.log(e);
// problem 4
let i = 3,
  j = 1,
  k = 5,
  u = i * j - k;
console.log(u);
// problem 5
let f = 4,
  g = 3,
  h = 5;
d = -2;
v = f * (d * d) - g * d + h;
console.log(v);
// problem 6
let o = 476;
console.log(o % 10);
// problem 7
console.log(Math.floor((o % 100) / 10));
// problem 8
let double = 27;
first = double % 10;
second = Math.floor((double % 100) / 10);
console.log(first * second);
// problem 9
let triple = 123,
  p9first = triple % 10,
  p9second = Math.floor((triple % 100) / 10);
p9third = Math.floor(triple / 100);
console.log(p9first + p9second + p9third);
// problem 10
let sec = 200;
min = Math.floor(sec / 60);
sec = sec - min * 60;
console.log(min, sec);
// problem 11
let p11sec = 3612;
hour = Math.floor(p11sec / 60 / 60);
p11min = Math.floor(hour / 60);
p11sec = p11sec - hour * 60 * 60 - p11min * 60;
console.log(hour, p11min, p11sec);
// problem 12
let p12hour = 44;
p12day = Math.floor(p12hour / 24);
p12hour = p12hour - p12day * 24;
console.log(p12day, p12hour);
// problem 13
let p13day = 2;
p13hour = 5;
p13hour = p13hour + p13day * 24;
console.log(p13hour);
// problem 14
let p14month = 27;
p14year = Math.floor(p14month / 12);
p14month = p14month - p14year * 12;
console.log(p14year, p14month);
// problem 15
let p15month = 7;
p15year = 2;
p15month = p15month + p15year * 12;
console.log(p15month);
// problem 16
let p16number1 = 16;
p16number2 = 14;
p16Largest = Math.max(p16number1, p16number2);
console.log("The largest number is: " + p16Largest);
// problem 17
let p17number1 = 9;
p17number2 = 6;
p17Smallest = Math.min(p17number1, p17number2);
console.log("The smallest number is: " + p17Smallest);
// problem 18
let p18number1 = 1;
p18number2 = 3;
p18number3 = 2;
p18Largest = Math.max(p18number1, p18number2, p18number3);
console.log("The largest number is: " + p18Largest);
// problem 19
let p19number1 = 3;
p19number2 = 2;
p19number3 = 1;
p19number4 = 4;
p19Smallest = Math.min(p19number1, p19number2, p19number3, p19number4);
console.log("The smallest number is: " + p19Smallest);
