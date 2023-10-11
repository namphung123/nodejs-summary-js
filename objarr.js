const person = {
  name: 'Nam',
  age: 20,
  greet: function () {
    console.log('Hello ' + this.name)
  },
}

const printName = ({ name }) => {
  console.log(name)
}

printName(person)

const { name, age } = person
console.log(name, age)

// const copiedPerson = { ...person }
// console.log(copiedPerson)

const hobbies = ['Coding', 'Game']
const [hobby1, hobby2] = hobbies
console.log(hobby1, hobby2)

// for (let hobby of hobbies) {
//   console.log(hobby)
// }
// console.log(hobbies)
// console.log(hobbies.map((hobby) => 'Hobby: ' + hobby))
// hobbies.push('Read')
// console.log(hobbies)

// const copiedArray1 = hobbies.slice()
// console.log(copiedArray1)

// const copiedArray2 = [...hobbies]
// console.log(copiedArray2)

// const toArray = (...arg) => {
//   return arg
// }

// console.log(toArray(1, 2, 3, 4))
