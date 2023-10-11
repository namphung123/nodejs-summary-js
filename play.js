let name = 'Nam'
let age = 20
let hasHobbies = true
age = 21

const summarizeUser = (userName, userAge, userHasHobby) => {
  return (
    'Name is ' +
    userName +
    ',age is ' +
    userAge +
    ' and the user has hobbies: ' +
    userHasHobby
  )
}

console.log(summarizeUser(name, age, hasHobbies))
