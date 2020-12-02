const person ={
    name:"mounika",
    qualification:"mca",
    location:"marripalem"
    
}
console.log(person.location);
person.location = "vizag"
console.log(person);
 person.nationality="indian"
 console.log(person)

//  hi, i am mounika from vizag and i am an indian


function detail(name,location,nationality){
return (`hi, i am ${name} from ${location} and i am an ${nationality}`)
}
console.log(detail(person.name,person.location,person.nationality))