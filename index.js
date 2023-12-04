// const array=["labas", "ate", "duchas", "lopas"];
// for (let i of array){
//     console.log(i)
// }


// const array = [1, 2, 3, 4, 5, 6];
// let kiek = 0;
// for (let i of array){
//     kiek+=i;
// }
// console.log(kiek)
// let masyvas1 = array.reduce((akumuliatoris, reiksme) => akumuliatoris + reiksme, 0)
// console.log(masyvas1)
// let masyvas2 = 0
// array.forEach((reiksme) => {
//     masyvas2 += reiksme;
// });
// console.log(masyvas2)


// let array = "tiriantis sakinių struktūrą ir sudedamąsias dalis Tradiciškai laikoma"
// const sakinys = array.split(" ")
// let lyg = [];
// let nelyg = [];
// for (let i of sakinys){
//     if (i.length%2==0) lyg.push(i)
//     else nelyg.push(i)
// }
// lyg = lyg.toString()
// nelyg = nelyg.toString()
// console.log(lyg)
// console.log(nelyg)


// let skaiciai = [5, 10, 4, 14, 12, 15, 7, 8]
// for (let i=1; i<=3; i++){
//     let maziausias = Math.min(...skaiciai)
//     let index = skaiciai.indexOf(maziausias)
//     skaiciai.splice(index,1) 
// }
// console.log(skaiciai)


// let array = ['bmv', 'mercedes', 'audi', 'lambo', 'bently']
// let kiek = 0;
// array.forEach((reiksme) =>{
//     if (reiksme==="bently"){
//         kiek++
//     }
// })
// if (kiek>0){
//     console.log(`masyve yra ${kiek} bently automobili-s/ai`)
// }
// else{
//     array.push('bently')
//     console.log(array)
// }


// let array = ["pienas", "batonas", "pienas", "kiausiniai"]
// let array1 = []
// for (let i=0; i<array.length; i++){
//     if (array1.indexOf(array[i]) === -1){
//         array1.push(array[i])
//     }
// }
// console.log(array1)


// let array = ["obuolys", "kriause", "obuolys", "braske", "obuolys", "kriause"]
// let array1 = []
// for (let i=0; i<array.length; i++){
//     if (!array1.includes(array[i])){
//         array1.push(array[i])
//     }
// }
// console.log(array1)


// let skaiciai = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// for (let i = 0; i < skaiciai.length; i++) {
//     if (skaiciai[i] % 2 === 0) {
//         skaiciai[i] = "kastutis";
//     }
// }
// let keitykla = skaiciai.map(function(element) {
//     if (typeof element === 'string') {
//         return element.toUpperCase();
//     } else {
//         return element;
//     }
// });

// console.log(keitykla);


// let array = []
// function gamykla(min, max) {
//     return Math.random() * (max - min) + min;
//   }
// for (let i=1; i<=30; i++){
//     array.push(Math.floor(gamykla(5,26)))
// }
// console.log(array)
// let array1 = array.filter((sk) => sk>10)     
// console.log(`yra ${array1.length} skaiciai didesni uz 10`)

// let didziausias = Math.max(...array)
// // let index = array.indexOf(didziausias)
// console.log(`didziausias skaicius yra ${didziausias}`)
