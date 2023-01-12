// let numArr = [0, 1, 2, 3, 4, 5, 6, 8, 10, 11, 13, 22]
// let answer = 0
// for (let i = 2; i <= 10; i++) {
//     if( i % 2 != 0 ) {
//     console.log(i);}
// }



// for (let i = 0; i < numArr.length; i++) {
//     // answer += numArr[i] % 2 == 0 ? 1 : 0;
//     // answer += numArr[i] % 2 != 0 ? 1 : 0;

//     // += operatori answer uchun qiymatlarni qo'shishni anglatadi (Arifmetik)
// }

// console.log(answer);




const numbers = [1 , 2 , 3 , 4 , 5 , 6 , 7 , 8 , 9 , 10];
const isOdd =(num) => num % 2 == 0;
const odd = numbers.filter(isOdd);
console.log(odd );


// function check(num) {
//     return(-1)**num+1?'juft son':'toq son';
// }
// const n=+prompt('juft son yozing');
// alert(check(n));

