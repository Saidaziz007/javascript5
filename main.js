// while1

// let A = 5;
// let B = 4;

// while (A > B) {
//   A -= B;
// }
// console.log(A);

// while2

// let A = 5;
// let B = 4;
// let sum = 0;

// while (A > B) {
//   A -= B;
//   sum++
// }
// console.log(sum);

// while3

// let A = 10;
// let d = A;

// while (A > 1) {
//   A /= 3;
// }
// if (A == 1) {
//   console.log(d);
// } else {
//   console.log(d + " 3 ning darajasimas");
// }

// while4

// let n = 10;
// let m = 3;
// let sum = 0;

// while (n >= m) {
//   n -= m;
//   sum++;
// }
// console.log(sum, n);

// while5

// let n = 20;
// let res = "";

// while (n >= 1) {
//   let d = parseInt(n % 10);
//   res += d;
//   n /= 10;
// }
// console.log(res);

// while6

// let n = 6;
// let sum = 0;
// let res = 0;
// let d;

// while (n >= 1) {
//   d = parseInt(n % 10);
//   res += d;
//   sum++;
//   n /= 10;
// }
// console.log(res);
// console.log(sum);

// while7

// let n = 12;
// let d;
// let res = false;

// while (n >= 1) {
//   d = parseInt(n % 10);
//   if (d == 2) {
//     res = true;
//   }
//   n /= 10;
// }
// if (res) {
//   console.log("2 bor");  
// } else {
//   console.log("2 yoq");    
// };

// while8

// let n = 5;
// let d;
// let res = false;

// while (n >= 1) {
//   d = parseInt(n % 10);
//   if (d % 2 != 0) {
//     res = true;
//     console.log(d);
//   }
//   n /= 10;
// }
// if (res) {
//   console.log("toq raqam bor");  
// } else {
//   console.log("toq raqam yoq");    
// };

// while9

// let n = 50905;
// let s = "" + n
// let d = "";

// while (n > 1) {
//   d += parseInt(n % 10);
//   n /= 10;
// }
// if (s == d) {
//   console.log("True");
// } else {
//   console.log("False");
// };

// while10


// let n = 5;
// let i = 2;
// let d = "";

// while (n / 2 + 1 > i) {
//   if (n % i == 0) {
//     d++;
//   };
//   i++;
// }
// if (d >= 1) {
//   console.log(n + " tubmas!");      
// } else {
//   console.log(n + " tub!");
// };

// loop1

// let N = 4;

// for (let i = 1; i <= N; i++) {
//   let row = "";
//   for (let j = i; j <= N - 1; j++) {
//     row += " ";
//   };
//   for (let z = 1; z <= 2 * i - 1; z++) {
//     row += "*";
//   };
//   console.log(row);
// }

// loop2

// let N = 4;

// for (let i = N; i >= 1; i--) {
//   let row = "";
//   for (let j = i; j <= N - 1; j++) {
//     row += " ";
//   };
//   for (let z = 1; z <= 2 * i - 1; z++) {
//     row += "*";
//   };
//   console.log(row);
// }

// loop3

// let a = 59133927;
// let count = 0;

// while (a > 1) {
//   a /=10;
//   count++;
// }

// console.log(count);

// loop4

// let a = 45789;
// let d = "";

// while (a > 1) {
//   d += parseInt(a % 10);
//   a/=10;
// }

// console.log(d);

// loop5

// let a = 1234321;
// let s = a;
// let d = "";

// while (a > 1) {
//   d += parseInt(a % 10);
//   a /= 10;
// }
// if (s == d) {
//   console.log("True");
// } else {
//   console.log("False");
// };

// loop6

// let a = 20;
// let res = 0;

// for (let i = 1; i <= a; i++) {
//   let b = i
//   while (b >= 1) {
//     let d = parseInt(b % 10);
//     if (d == 1) {
//       res++;
//     };
//     b /= 10;
//   }
// }
// console.log(res + " ta");

// loop7

// let a = 20;
// let res = 0;

// for (let i = 1; i <= a; i++) {
//   let b = i
//   while (b >= 1) {
//     let d = parseInt(b % 10);
//     res += d;
//     b /= 10;
//   }
// }
// console.log(res);

// loop8

// let a = 20;
// let res = 0;

// for (let i = 1; i <= a; i++) {
//   let b = i;
//   while (b >= 1) {
//     let d = parseInt(b % 10);
//     res++;
//     b /= 10;
//   }
// }
// console.log(res);

// loop9

// let a = 4;
// let b = 8;

// for (let i = 1; i <= a; i++) {
//   let row = "";
//   if (i == 1 || i == a) {
//     for (let j = 1; j <= b; j++) {
//       row += "*";
//     }
//   } else {
//     for (let j = 1; j <= b; j++) {
//       if (j == 1 || j == b) {
//         row += "*";
//       } else{
//         row += " ";
//       }
//     }
//   }
//   console.log(row);
// }

// loop10

// let a = 10;
// let d = 0;
// let count = 0;
// let res = "";

// for (let i = 2; i <= a; i++) {
//   for (let j = 2; j <= i / 2 + 1; j++) {
//     if (i % j == 0 && i != j) {
// d++;
//     }
//   }
//   if (!d) {
//     count++;
//     res = res + (i + "; ");
//   }
//   d = 0;
// }
// console.log(count + " (" + res + ")");

// loop11

// let a = 200;
// let s = a;
// let d = "";
// let res = "";
// let sum = 0;

// for (let i = 11; i <= a; i++) {
//   let is = i;
//   let firstNumber = is % 10;
//   while (is >= 1) {
//     is /= 10;
//     d += firstNumber;
//   }
//   if (i == d) {
//     sum++;
//     res = res + i + ", ";
//   }
//   d = ""
// }
// console.log(sum + " (" + res + ")");