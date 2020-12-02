//map high order functions

// frnd=['mounika','santoshi','mouni','santu']

// const modified = frnd.map(f => ("Ms " + f ))

// console.log(modified);
// console.log(frnd);

// num=[1,2,3,4,5,6]

// const add=num.map(n=>(n+10))
// console.log(add)

// frnd=['mounika','santoshi','mouni','santu','lav']

// const names= frnd.map((f,i) => ("Ms."+f))
// console.log(names)

//filters

// age=[10,11,12,13,14,17,19,20,23,25,26,27,29,30]

// const minor = age.filter(age => age<=18)

// console.log(minor);

// const major=age.filter(age => age>=18)
// console.log(major)

// const n20 = age.filter(age=> age!=20)
// console.log(n20)

// var frnd = [
//   {
//     name: "mounika",
//     gender: "female",
//   },
//   { name: "vishnu", gender: "male" },
//   {
//     name: "mouni",
//     gender: "female",
//   },
//   {
//     name: "naresh",
//     gender: "male",
//   },
//   {
//     name: "reshma",
//     gender: "female",
//   },
// ];

// console.log(frnd);

// const gender1 = frnd.filter((frnd) => frnd.gender == "male");
// console.log(gender1);

// sort //////////////

// var num = [7, 4, 9, 2, 3, 323, 54, 21, 87];

// var frnds = ["q", "e", "u", "r", "p"];

// console.log(num);
// // const asc = num.sort((a, b) => a - b);
// const asc = frnds.sort((a, b) => a.toString().localeCompare(b.toString()));
// console.log(asc);
// console.log(frnds);
// console.log(num);

// const dec = frnds.sort((a, b) => b.toString().localeCompare(a.toString()));
// console.log(dec);

var frnd = [
  {
    name: "mounika",
    gender: "female",
    age: 16,
  },
  { name: "vishnu", gender: "male", age: 20 },
  {
    name: "mouni",
    gender: "female",
    age: 17,
  },
  {
    name: "naresh",
    gender: "male",
    age: 18,
  },
  {
    name: "reshma",
    gender: "female",
    age: 19,
  },
];

// const major = frnd.filter((element) => element.age >= 18);
// console.log(major);

//should add a key pair as graduation:'completed'
//pick the age with even
// sort according to the name

// const modified = frnd.map((f) => ({ ...f, graduation: "completed" }));

// console.log(modified);

// const evenAge = frnd.filter((f) => f.age % 2 == 0);
// console.log(evenAge);

// const asc = evenAge.sort((a, b) =>
//   a.name.toString().localeCompare(b.name.toString())
// );
// console.log(asc);

const task = frnd
  .map((f) => ({ ...f, graduation: "completed" }))
  .filter((f) => f.age % 2 == 0)
  .sort((a, b) => a.name.toString().localeCompare(b.name.toString()));

console.log(task);
