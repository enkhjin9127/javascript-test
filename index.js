// // problem 1
// let a = 5,
//   b = 4,
//   c = 3,
//   p = a + b + c;
// console.log(p);

// // problem 2
// let m = 5;
// let x = m * m * m;
// console.log(x);
// let y = m * m * 6;
// console.log(y);

// // problem 3
// let q = 6,
//   w = 4;
// let t = q * w;
// console.log(t);
// let e = q * 2 + w * 2;
// console.log(e);

// // problem 4
// let i = 3,
//   j = 1,
//   k = 5,
//   u = i * j - k;
// console.log(u);

// // problem 5
// let f = 4,
//   g = 3,
//   h = 5;
// d = -2;
// v = f * (d * d) - g * d + h;
// console.log(v);

// // problem 6
// let o = 476;
// console.log(o % 10);
// // problem 7
// console.log(Math.floor((o % 100) / 10));
// // problem 8
// let double = 27;
// first = double % 10;
// second = Math.floor((double % 100) / 10);
// console.log(first * second);

// // problem 9
// let triple = 123,
//   p9first = triple % 10,
//   p9second = Math.floor((triple % 100) / 10);
// p9third = Math.floor(triple / 100);
// console.log(p9first + p9second + p9third);

// // problem 10
// let sec = 200;
// min = Math.floor(sec / 60);
// sec = sec - min * 60;
// console.log(min, sec);
// // problem 11
// let p11sec = 3612;
// hour = Math.floor(p11sec / 60 / 60);
// p11min = Math.floor(hour / 60);
// p11sec = p11sec - hour * 60 * 60 - p11min * 60;
// console.log(hour, p11min, p11sec);

// // problem 12
// let p12hour = 44;
// p12day = Math.floor(p12hour / 24);
// p12hour = p12hour - p12day * 24;
// console.log(p12day, p12hour);

// // problem 13
// let p13day = 2;
// p13hour = 5;
// p13hour = p13hour + p13day * 24;
// console.log(p13hour);

// // problem 14
// let p14month = 27;
// p14year = Math.floor(p14month / 12);
// p14month = p14month - p14year * 12;
// console.log(p14year, p14month);

// // problem 15
// let p15month = 7;
// p15year = 2;
// p15month = p15month + p15year * 12;
// console.log(p15month);

// // problem 16
// console.log("p16");
// let p16number1 = 16;
// p16number2 = 69;
// if (p16number1 > p16number2) {
//   console.log("The largest number:", p16number1);
// } else {
//   console.log("The largest number:", p16number2);
// }

// // problem 17
// console.log("p17");
// let p17number1 = 96;
// p17number2 = 100;
// if (p17number1 > p17number2) {
//   console.log("The smallest number:", p17number2);
// } else {
//   console.log("The smallest number:", p17number1);
// }

// // problem 18
// console.log("p18");
// let p18number1 = 29;
// p18number2 = 3;
// p18number3 = 10;
// if (p18number1 > p18number2) {
//   if (p18number1 > p18number3) {
//     console.log("The largest number is:", p18number1);
//   } else {
//     console.log("The largest number is:", p18number3);
//   }
// } else {
//   if (p18number2 > p18number3) {
//     console.log("The largest number is:", p18number2);
//   } else {
//     console.log("The largest number is:", p18number3);
//   }
// }

// // problem 19
// console.log("p19");
// let p19number1 = 10;
// p19number2 = 15;
// p19number3 = 12;
// p19number4 = 4;
// smallest = p19number1;
// if (p19number2 < smallest) {
//   smallest = p19number2;
// }
// if (p19number3 < smallest) {
//   smallest = p19number3;
// }
// if (p19number4 < smallest) {
//   smallest = p19number4;
// }
// console.log("smallest:", smallest);

// p20
// console.log("p20");
// let p20n1 = 85;
// p20n2 = 75;
// p20n3 = 96;
// p20n4 = 69;
// let sum = 0;
// if (p20n1 > 80) {
//   sum += p20n1;
// }
// if (p20n2 > 80) {
//   sum += p20n2;
// }
// if (p20n3 > 80) {
//   sum += p20n3;
// }
// if (p20n4 > 80) {
//   sum += p20n4;
// }
// console.log(sum);

// // p21
// console.log("p21");
// let p21n1 = 3;
// p21n2 = 6;
// p21n3 = 2;
// p21n4 = 4;
// let mult = 1;
// if (p21n1 < 5) {
//   mult *= p21n1;
// }
// if (p21n2 < 5) {
//   mult *= p21n2;
// }
// if (p21n3 < 5) {
//   mult *= p21n3;
// }
// if (p21n4 < 5) {
//   mult *= p21n4;
// }
// console.log(mult);

// // p22
// console.log("p22");
// let p22n1 = 10;
// p22n2 = 20;
// p22n3 = 5;
// let evensum = 0;
// if (p22n1 % 2 == 0) {
//   evensum += p22n1;
// }
// if (p22n2 % 2 == 0) {
//   evensum += p22n2;
// }
// if (p22n3 % 2 == 0) {
//   evensum += p22n3;
// }
// console.log(evensum);

// // p23
// console.log("p23");
// let p23n1 = 10;
// p23n2 = 9;
// p23n3 = 5;
// let oddsum = 0;
// if (p23n1 % 2 !== 0) {
//   oddsum += p23n1;
// }
// if (p23n2 % 2 !== 0) {
//   oddsum += p23n2;
// }
// if (p23n3 % 2 !== 0) {
//   oddsum += p23n3;
// }
// console.log(oddsum);

// // p24
// console.log("p24");
// let p24n1 = 5;
// p24n2 = 2;
// p24n3 = 5;
// let count5 = 0;
// if (p24n1 == 5) {
//   count5 += 1;
// }
// if (p24n2 == 5) {
//   count5 += 1;
// }
// if (p24n3 == 5) {
//   count5 += 1;
// }
// console.log(count5);

// // p25
// console.log("p25");
// let p25n1 = 3;
// p25n2 = 12;
// p25n3 = 8;
// p25n4 = 9;
// let dividedby3 = 0;
// if (p25n1 % 3 == 0) {
//   dividedby3 += 1;
// }
// if (p25n2 % 3 == 0) {
//   dividedby3 += 1;
// }
// if (p25n3 % 3 == 0) {
//   dividedby3 += 1;
// }
// if (p25n4 % 3 == 0) {
//   dividedby3 += 1;
// }
// console.log(dividedby3);

// // p26
// console.log("p26");
// let p26n1 = 7;
// p26n2 = 22;
// p26n3 = 13;
// p26n4 = 30;
// let dividedby11 = 0;
// if (p26n1 % 11 !== 0) {
//   dividedby11 += p26n1;
// }
// if (p26n2 % 11 !== 0) {
//   dividedby11 += p26n2;
// }
// if (p26n3 % 11 !== 0) {
//   dividedby11 += p26n3;
// }
// if (p26n4 % 11 !== 0) {
//   dividedby11 += p26n4;
// }
// console.log(dividedby11);

// // p27
// console.log("p27");
// let p27n1 = 11;
// if (p27n1 > 10) {
//   console.log("YES");
// }

// // p28
// console.log("p28");
// let p28n1 = 4;
// if (p28n1 < 5) {
//   console.log("YES");
// }

// // p29
// console.log("p29");
// let p29n1 = 3;
// p29n2 = 4;
// p29n3 = 5;
// if (p29n1 % 2 == 0) {
//   console.log("YES");
// } else {
//   console.log("NO");
// }
// if (p29n2 % 2 == 0) {
//   console.log("YES");
// } else {
//   console.log("NO");
// }
// if (p29n3 % 2 == 0) {
//   console.log("YES");
// } else {
//   console.log("NO");
// }

// p30
// console.log("IOI");

// p31
// let i;
// for (i = 0; i < 3; i++) {
//   console.log("IOI");
// }

// p32
// let N = 4;
// for (let i = 0; i < N; i++) {
//   console.log("IOI");
// }

// p33
// let N = prompt(Number);
// bak = 1;
// for (let i = 1; i <= N; i++) {
//   bak *= i;
// }
// console.log(bak);

// p34
// let N = prompt(Number);
// answer = 0;
// for (let i = 1; i <= N; i++) {
//   answer = answer + 100;
// }
// console.log(answer);

// p35
// let loop = prompt(Number);
// answer = 0;
// for (let i = 1; i <= loop; i++) {
//   answer += 50;
// }
// console.log(answer);

// p36
// let pow = prompt(Number);
// num = 1;
// for (let i = 1; i <= pow; i++) {
//   num *= 2;
// }
// console.log(num);

// p37
// let num = prompt(Number);
// pow = prompt(Number);
// answer = 1;
// for (i = 1; i <= pow; i++) {
//   answer *= num;
// }
// console.log(answer);

// p38
// let num = prompt(Number);
// if (num >= 3) {
//   console.log("tentssen");
// } else {
//   console.log("unasan");
// }

// p39
// let dun = 5;
// switch (dun) {
//   case 2:
//     console.log("Muu");
//     break;
//   case 3:
//     console.log("Dund");
//     break;
//   case 4:
//     console.log("Sain");
//     break;
//   case 5:
//     console.log("Onts");
//     break;
//   default:
//     console.log("error");
// }

// p40
// let dun = 84;
// if (dun < 59) {
//   console.log("F");
// } else if (dun < 69) {
//   console.log("D");
// } else if (dun < 79) {
//   console.log("C");
// } else if (dun < 89) {
//   console.log("B");
// } else {
//   console.log("A");
// }

// p41
// let day = 1;
// switch (day) {
//   case 0:
//     day = "Sunday";
//     console.log("Sunday");
//     break;
//   case 1:
//     day = "Monday";
//     console.log("Monday");
//     break;
//   case 2:
//     day = "Tuesday";
//     console.log("Tuesday");
//     break;
//   case 3:
//     day = "Wednesday";
//     console.log("Wednesday");
//     break;
//   case 4:
//     day = "Thursday";
//     console.log("Thursday");
//     break;
//   case 5:
//     day = "Friday";
//     console.log("Friday");
//     break;
//   case 6:
//     day = "Saturday";
//     console.log("Saturday");
//   default:
//     console.log("error");
// }

// p42
// let seasons = 12;
// switch (seasons) {
//   case 1:
//   case 2:
//   case 3:
//     console.log("Spring");
//     break;
//   case 4:
//   case 5:
//   case 6:
//     console.log("Summer");
//     break;
//   case 7:
//   case 8:
//   case 9:
//     console.log("Fall");
//     break;
//   case 10:
//   case 11:
//   case 12:
//     console.log("Winter");
//     break;
//   default:
//     console.log("error");
// }

// p43
// let a = 3;
// b = 4;
// c = 5;
// if (a + b > c) {
//   console.log("gurvaljin bolno");
// } else {
//   console.log("gurvaljin bolohgui");
// }

// p44
// let a = 3;
// n = 10;
// for (let i = 1; i <= n; i++) {
//   console.log(a, "*", i, "=", a * i);
// }

// p45
// let num = prompt(Number);
// pow = prompt(Number);
// answer = 1;
// for (i = 1; i <= pow; i++) {
//   console.log(num, "^", i, "=", (answer *= num));
// }

// p46
// let b = prompt(Number);
// c = prompt(Number);
// d = prompt(Number);
// a = b * c - d;
// console.log(a);
