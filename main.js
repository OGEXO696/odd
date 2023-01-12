// Massiv 


/* 
    Massiv - qiymatlar to'plamini saqlaydigan ma'lumotlar strukturasidir.
    Massiv kvadrat qavslar bilan belgilanadi [] 
*/

// let arr = []

// console.log(arr);

// Massivdagi roʻyxat vergul bilan ajratiladi

// let numArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// console.log(numArr);

// Massivlardagi qiymatlarni sanab o'tish 0 dan boshlanadi - bu yacheyka raqami va o'zgaruvchan [yacheyka raqami] ko'rsatiladi (index)
// Yacheykaga har qanday turdagi ma'lumotlarni joylashtira olamiz

// console.log(numArr[2]);

// let numArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// let str = 'Hello World'
// // lenght xususiyati massivdagi elementlar sonini ko'rsatadi
// console.log(str.length);
// console.log(numArr.length);

// // Massiv elementlari boycha yugirib chiqish oddiy for tsikli orqali amalga oshirilishi mumkin
// for (let i = 0; i < numArr.length; i++) {
//     console.log(numArr[i]);
// }

// Endi massivda nechta juft raqam borligini ko'rib chiqamiz

// let numArr = [0, 1, 2, 3, 4, 5, 6, 8, 10, 11, 13, 22]
// let answer = 0

// for (let i = 0; i < numArr.length; i++) {
//     answer += numArr[i] % 2 == 0 ? 1 : 0;
//     // answer += numArr[i] % 2 != 0 ? 1 : 0;
//     // += operatori answer uchun qiymatlarni qo'shishni anglatadi (Arifmetik)
// }

// console.log(answer);


// Massiv metodlari

// splice() metodi *****

// arr.splice(str) metodi – bu massivlar bilan ishlash uchun universal "Shveytsariya pichog'i". Hamma narsani qila oladi: elementlarni qo'shish, olib tashlash va almashtirish.

// ochirish

// let arr = ['Men', 'JavaScript', 'Organvoman']

// arr.splice(0, 1) // 0-pozitsiyadan boshlab, 1 elementni o'chiradi

// console.log(arr);

// 3 ta element ochirib 2 ta element qoshih

// let arr = ['Men', 'JavaScript', 'Orgavoman', 'Qiyn', 'Ekan']

// arr.splice(0, 3, 'Kallani', 'Ishlatish')

// console.log(arr);

// dastlabki 3 elementni olib tashlash va ularni boshqasi bilan almashtirish

// dastlabki 2 elementni olib tashlash

// let removedArr = arr.splice(0, 2) // "Men", "JavaScript" <-- olib tashlangan elementlardan massiv

// console.log(removedArr);
// console.log(arr);

// Splice metodi, shuningdek, deleteCount ni 0 ga o'rnatish orqali elementlarni o'chirmasdan ham kiritishi mumkin:

// let arr = ['Men', 'JavaScript', 'Orgavoman']
// arr.splice(2, 0, 'Massivlarni')
// console.log(arr);

// 2-pozitsiyadan
// 0 ta elementni olib tashlang
// "Massivlarni" qoysish



// push() metodi *****

// Massiv oxiriga element qo'shadi:

// let fruitsArr = ['olma', 'banan', 'anans']

// fruitsArr.push('uzum')

// console.log(fruitsArr);

// pop() metodi

// Massivdan oxirgi elementni olib tashlaydi va uni qaytaradi:

// fruitsArr.pop()

// console.log(fruitsArr);

// shift() metodi

// Birinchi elementni massivdan olib tashlaydi va uni qaytaradi:

// fruitsArr.shift()

// console.log(fruitsArr);

// unshift() metodi

// Massiv boshiga element qo‘shadi:

// fruitsArr.unshift('olma','nok')

// console.log(fruitsArr);

// push() va unshift() usullari bir vaqtning o'zida bir nechta elementlarni qo'shishi mumkin:


// split() metodi ****

// Haqiqiy hayotiy vaziyat. Biz xabar almashish uchun ariza yozmoqdamiz va tashrif buyuruvchi uni jo'natish kerak bo'lganlarning ismlarini vergul bilan ajratilgan holda kiritadi: Vasya, Petya, Masha. Lekin biz uchun bir qatorda ishlagandan kora massivi bilan ishlash ancha qulayroq. Uni qanday olish mumkin?

// str.split(ajratish) metodiqiladi. U berilgan (ajratish) chegarasiga ko'ra qatorni massivga ajratadi.


// let users = 'Vasya, Petya, Masha'

// let usersArr = users.split(', ')

// for (let i = 0; i < usersArr.length; i++) {
//     alert(`Habar: ${usersArr[i]} ga jonatildi.`)
// }

// Split usulida ixtiyoriy ikkinchi raqamli argument mavjud - massivdagi elementlar soni chegarasi. Belgilanganidan ko'proq bo'lsa, massivning qolgan qismi o'chiriladi. Amalda, bu kamdan-kam hollarda qo'llaniladi:

// let users = 'Vasya, Petya, Masha, Sasha, Pavel, Karim, Abbos, Murod, Sergey'

// let usersArr = users.split(', ', 5)

// console.log(usersArr);


//Split(s) ni bo'sh argument s bilan chaqirish satrni harflar qatoriga bo'ladi.:

// let str = 'test text'

// console.log(str.split(''));

// join() metodi

// arr.join(glue) ni chaqirish bo'linishning to'liq teskarisini bajaradi. Ularning orasiga glue qo'yish orqali arr elementlaridan qatorini hosil qiladi.


// let users = ['Vasya', 'Petya', 'Masha']

// let usersStr = users.join(':') // : orqali massivni qatorga birlashtirish

// console.log(usersStr); // Vasya:Petya:Masha




// let myArr = ['Mening', 'Ismim', 'AbdulMalik', '23', 'Yoshdaman']

// myArr.splice(2,2, 'Kamron', '27')

// console.log(myArr);