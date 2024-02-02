

// // // Input array
// // // let arr = ['GFG1', 'GFG2', 'GFG3', 'GFG4'];
// // let str =""
     
// // // Function to create object
// // function toObject(arr) {
// //     // target object
// //     // let rv = {};
// //     // Traverse array using loop
// //     // for (let i = 0; i < arr.length; ++i)
// //     //     // Assign each element to object
// //     //     rv[i] = arr[i];
// //     // let rv = Object.assign({}, arr);
// //     let rv = {...arr}

// //     // let user = JSON.parse(JSON.stringify(rv));
// //     let user = rv

// //     rv["0"]= "ANUJ"
    

// //     // var rv = 100
// //     // let rv = 20 
// //         console.log("rm :",rv);    
// //         console.log("user :",user)
// //     // return rv;
// // }


// // toObject(arr)

// // //  function dupArr(arr){
// // //   let obj  = {}
// // //     for(let i of arr){
// // //       obj[i] = ++obj[i] || 1

// // //   }
// // //   let arrA = []
// // //   for(let i in obj){
// // //     console.log(`key : ${i}   value : ${obj[i]}`)
// // //     if(obj[i]>1){
// // //         arrA.push(i)
// // //     }
// // // }
// // // console.log(arrA)

// // // // console.log(Object.values(obj))
// // //   return Object.keys(obj).filter((v)=>{
// // //     // console.log(`key : ${v}   value : ${obj[v]}`)
// // //     obj[v] >1})
// // //  }  

// // // let ans = dupArr([2,3,3,5,6,6,8])
// // // // console.log(ans)

// // maximum count


// function maxCount(str){
// let obj ={}
// for (let c of str){
//     obj[c] = ++obj[c] || 1
// }
// // let max =0
// // let maxChar=""
// // for(let i in obj)
// // if(obj[i]>max){
// //     max = obj[i]
// //     maxChar=i
// // }
// // return maxChar

// let maxChar = Object.keys(obj).reduce((a,b)=> obj[a] > obj[b] ? a : b)
// return
// }



// console.log(maxCount("Hello Bitchs"))


// anagram

// function checkAnagram(str1,str2){
//     let obj1 ={}
//     let obj2 ={}
//     for(let i of str1){
//       obj1[i] = ++obj1[i] || 1
//     }

// //     for(let i of str2){
// //         obj2[i] = ++obj2[i] || 1
// //       }

// //    if(Object.keys(obj1).length !== Object.keys(obj2).length)
// //    return false
   
// //   for(let char in obj1) {
// //     if(obj1[char]!= obj2[char])
// //     return false
// //   }

// // return true

// for(let i=0;i<str2.length;i++){
//     let char = str2[i]
//     if(!obj1[char])return false;
//     else obj1[char] -= 1
// }
// return true
// }

// anagram using sort

// const sort = string => string.replace(/\W/g,"").split("").sort().join("")
// function checkAnagram(str1,str2){
//     return sort(str1)===sort(str2)
// }

// console.log(checkAnagram("hello","olleh"))

// vowel count

// const vowelCount = string =>{
//     let vowels ="aeiou"
//     let count = 0
//     for(let i of string.toLowerCase()){
//         if(vowels.includes(i)){
//             count++
//         }
//     }
//     return count
// }

// vowelcount using match

// const vowelCount = string =>{
//     let matches = string.toLowerCase().match(/[aeiou]/g)
//     return matches ? matches.length : 0
// }

//  console.log(vowelCount("Hianimal"))

// reverse individual words and sentence

// function __reverse(str){
//    let ans = str.split(" ").map(word=>{
//       return word.split('').reverse().join('')
//     }).reverse().join(" ")

//     return ans

// }


// console.log(__reverse("Hi I am Anuj"))


//capitalise 
// const capitalise = string =>{
//     let words= []

//     for(let i of string.split(" ")){
//         words.push(i.charAt(0).toUpperCase() + i.slice(1))
//     }
//     return words.join(" ")
// }
// const capitalise = str =>{
//     let title = str[0].toUpperCase()

//     for(let i = 1 ; i< str.length;i++){
//         title += str[i-1] === " " ? str[i].toUpperCase() : str[i]
//     }

//     return title
// }


// console.log(capitalise("hi i am anuj"))

// duplicate elements in arr
const arr = "ahcsbhucbshcbi"
// console.log(Math.max(...arr))
const removeDup = arr => arr.split("").filter((i,index)=>arr.indexOf(i) === index).join("")
console.log(removeDup(arr))

// const animals = [
//     {name:"Aadhya",threat:"4"},
//     {name:"Buddy",threat:"1"},
//     {name:"Vivan",threat:"5"}  
// ]

// let ans = animals.filter(i=> i.name && parseInt(i.threat) > 2)
// console.log(ans)

//deep copy

// const cloneObject = obj =>{
//     let clone ={}
//     for(let i in obj){
//         if(typeof obj[i]=='object'&&obj[i]!=null){
//             clone[i] = cloneObject(obj[i])
//         }
//         else
//         clone[i] = obj[i]
            
//     }
//     return clone
// }

// let obj = {
//     name: 'anuj',
//     address :{
//         state:"Delhi",
//         city:"New Delhi"
//     }
// }
// let newObj=cloneObject(obj)

// console.log(newObj)