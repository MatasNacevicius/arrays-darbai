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

// const maxNumOfMasyvas = Math.max(...array);
// console.log('didziausias masyvo skaicius: ', maxNumOfMasyvas)
 
// const maxNumOfMasyvasIndex = array.indexOf(maxNumOfMasyvas)
// console.log('didziausio skaicio indeksas: ', maxNumOfMasyvasIndex)
 
// let skaitliukas2 = 0
 
// for(let i=0; i<array.length; i++){
//     if(maxNumOfMasyvas === array[i]){
//         skaitliukas2++
//     }
//     }
// console.log('kiek kartu kartojasi didziausias skaicius: ', skaitliukas2)

// let evenNumbers = array.filter((number) => number % 2 === 0);
// let evenIndices = evenNumbers.map((number, index) => index);
// let sumOfEvenIndices = evenIndices.reduce((sum, index) => sum + index, 0);
// console.log("lyginiu skaiciu indeksu sums:", sumOfEvenIndices);

// let naujas = array.map((number, index) => number-index);
// console.log(naujas)

// for (let i=1; i<=10; i++){
//     array.push(Math.floor(gamykla(5,26)))
// }
// console.log(array)

// let poriniai = array.filter((number, index) => index%2==0);
// let neporiniai = array.filter((number, index) => index%2!=0);
// console.log(poriniai)
// console.log(neporiniai)

// let didziausias = poriniai.map((num, index) => (index % 2 == 0 && num > 15) ? 0 : num)
// console.log(didziausias)

// let indeksas = (elementas) => elementas > 10;
// console.log(array.findIndex(indeksas))


// let duomenys = {
//   id: "0001",
//   type: "donut",
//   name: "Cake",
//   ppu: 0.55,
//   topping: [
//     { id: "5001", type: "None" },
//     { id: "5002", type: "Glazed" },
//     { id: "5005", type: "Sugar" },
//     { id: "5007", type: "Powdered Sugar" },
//     { id: "5006", type: "Chocolate with Sprinkles" },
//     { id: "5003", type: "Chocolate" },
//     { id: "5004", type: "Maple" },
//   ],
// };
// console.log(duomenys.topping)
// let masyvas = duomenys.topping.forEach((element) => console.log(`id: ${element.id}, type: ${element.type}`))


// const family = {
//     grandparents: {
//         grandma: "Marge",
//         grandpa: "Homer",
//     },
//     parents: {
//         mom: "Lisa",
//         dad:"Millhouse",
//     },
//     children: {
//         daughter: "Anne",
//         son1: "Peter",
//         son2: "Bob",
//     },
// };

// for (let i in family){
//     let members = Object.values(family[i]).join(", ")
//     console.log(`${i}: ${members}`)
// }


// let knygos = [
//     {
//       isbn: 9786098233346,
//       price: 7.99,
//       year: 2006,
//       title: "Bloga dukte",
//       pagecount: 250,
//     },
//     {
//       isbn: 9786098233391,
//       price: 7.99,
//       year: 2015,
//       title: "Mergina kuria jis pazinojo",
//       pagecount: 315,
//     },
//     {
//       isbn: 9786099609324,
//       price: 7.99,
//       year: 2019,
//       title: "Tapk ragana",
//       pagecount: 150,
//     },
//     {
//       isbn: 9786094792250,
//       price: 6.99,
//       year: 2007,
//       title: "Sfera",
//       pagecount: 450,
//     },
//     {
//       isbn: 9786094792335,
//       price: 9.99,
//       year: 2019,
//       title: "Mes susitinkame cia",
//       pagecount: 500,
//     },
//     {
//       isbn: 9786094273780,
//       price: 7.99,
//       year: 2019,
//       title: "Sunaikinimas",
//       pagecount: 509,
//     },
//     {
//       isbn: 9786098233483,
//       price: 12.99,
//       year: 2018,
//       title: "Artemide",
//       pagecount: 199,
//     },
//     {
//       isbn: 9786094273872,
//       price: 4.99,
//       year: 2015,
//       title: "Fondas ir imperija",
//       pagecount: 185,
//     },
//     {
//       isbn: 9786094273902,
//       price: 7.99,
//       year: 2019,
//       title: "Amzinybes fjordo pranasai",
//       pagecount: 333,
//     },
//     {
//       isbn: 9786094442742,
//       price: 5.99,
//       year: 2004,
//       title: "Bejegiai",
//       pagecount: 777,
//     },
//     {
//       isbn: 9786094442940,
//       price: 14.99,
//       year: 2019,
//       title: "Klajunai",
//       pagecount: 172,
//     },
//     {
//       isbn: 9786090404386,
//       price: 7.99,
//       year: 2015,
//       title: "Mergina, kuri pakliuvo i voratinkli",
//       pagecount: 356,
//     },
//   ];
  
//   let masyvas = []
//   for (let i in knygos){
//     if (knygos[i].year > 2015){
//             masyvas.push(knygos[i].title)
//         }
//     for (let a in knygos[i]){
//         console.log(`${a} --> ${knygos[i][a]}`)
//     }
//   }
//   console.log(masyvas)



function skaičiuotiArbatpinigius(saskaita) {
    let palikamaSuma;
    if (saskaita < 50) {
        palikamaSuma = 0.2 * saskaita;
    } else if (saskaita >= 50 && saskaita < 200) {
        palikamaSuma = 0.15 * saskaita;
    } else {
        palikamaSuma = 0.1 * saskaita;
    }
    const galutineSuma = saskaita - palikamaSuma;
    return [palikamaSuma, galutineSuma];
 }

 const seima1 = skaičiuotiArbatpinigius(45);
 const seima2 = skaičiuotiArbatpinigius(120);
 const seima3 = skaičiuotiArbatpinigius(250);
 
 const rezultatai = [seima1, seima2, seima3];

 console.log(rezultatai)