//! for Method:
//! ===>Example: 
//   async function foo() {
//   try {
//     const res = await fetch("https://restcountries.com/v3.1/all");
//     const result = await res.json();
//     for(var i=0;i<=result.length;i++){ 
//         console.log(result[i].name)
//     }
//   } catch (error) {
//     console.log("error");
//   }
// }
// foo();     

// o/p:
// {common: 'French Polynesia', official: 'French Polynesia', nativeName: {…}}
// {common: 'Saint Martin', official: 'Saint Martin', nativeName: {…}}         and etc.,,,,

// *************************************************************************************************************************

//! for of Method:
//! ===>Example 1:
// async function foo() {
//   try {
//     const res = await fetch("https://restcountries.com/v3.1/all");
//     const result = await res.json();
//     for(let obj of result){
//         console.log(obj.name.common);
//     }
//   } catch (error) {
//     console.log("error");
//   }
// }
// foo(); 

// o/p:name{common} display
// French Polynesia
// Saint Martin
// Venezuela
// Réunion           and etc.,,,


//! ===>Example 2:
// async function foo() {
//   try {
//     const res = await fetch("https://restcountries.com/v3.1/all");
//     const result = await res.json();
//         for(const obj of result){
//         console.log(obj.area);
//     }
//   } catch (error) {
//     console.log("error");
//   }
// }
// foo();            

// o/p:area values display
// 4167  
// 53 
// 916445   and etc.,

// *************************************************************************************************************************

//! for in Method:
// ! ===>Example:
// async function foo() {
//     try {
//       const res = await fetch("https://restcountries.com/v3.1/all");
//       const result = await res.json();
//       for(const index in result){
//     console.log(result[index].area);
//       }
//     } catch (error) {
//       console.log("error");
//     }
//   }
//   foo();

// o/p:area values display
// 4167  
// 53 
// 916445   and etc.,

// *************************************************************************************************************************

// ! forEach Method:
// ! ===>Example:
// async function foo() {
//     try {
//         const res = await fetch("https://restcountries.com/v3.1/all");
//         const result = await res.json();
//         result.forEach(element => {
//             console.log(element.name);
//         });
//     } catch (error) {
//         console.log("error");
//     }
// }
// foo();

// o/p:
// {common: 'French Polynesia', official: 'French Polynesia', nativeName: {…}}

// {common: 'Saint Martin', official: 'Saint Martin', nativeName: {…}}

// {common: 'Venezuela', official: 'Bolivarian Republic of Venezuela', nativeName: {…}}  and etc.,,,


// ! map Method:
// ! ===>Example:
// async function foo() {
//     try {
//         const res = await fetch("https://restcountries.com/v3.1/all");
//         const result = await res.json();
//         result.map(element => {
//             console.log(element.name);
//         });
//     } catch (error) {
//         console.log("error");
//     }
// }
// foo();

// o/p: no changes for forEach output
// {common: 'French Polynesia', official: 'French Polynesia', nativeName: {…}}

// {common: 'Saint Martin', official: 'Saint Martin', nativeName: {…}}

// {common: 'Venezuela', official: 'Bolivarian Republic of Venezuela', nativeName: {…}}  and etc.,,,

// *************************************************************************************************************************

//! spread operator : converts a string into character array
//! syntax:
//  var arr = ["Prabha","Karan"]
//  var arr1 = ["Erode", "9688841727"]
//  var arr2 = [...arr,...arr1]
//  console.log(arr2);

//  o/p:
//  ['Prabha', 'Karan', 'Erode', '9688841727']  length:4

// *************************************************************************************************************************

//!rest parameter
// function foo(a, b, c, ...rest) {
//     var sum = 0;
//     for (var i = 0; i < rest.length; i++) {
//         sum = sum + rest[i]
//     }
//     return sum;
// }
// console.log(foo(12, 13, 14, 15, 16, 17, 18, 19, 20))    // 105

// a=12
// b=13
// c=14

// rest=15+16+17+18+19+20 = 105

// *************************************************************************************************************************