// Array Iterator Methods

// forEach

// const friends = ['Melissa', 'Mark', 'Andrew', 'Nick']

// friends.forEach((friend) => {
//   console.log(`I have a friend named ${friend}`)
// })

// MAP

// const nums = [1, 2, 3]
// const squared = nums.map((num) => num * num)

// console.log(squared)

// const instructors = ['Alex', 'Stephanie', 'Daniel']

// instructors.map((instructor) => {
//   console.log(`${instructor} is awesome,`)
// })

// FILTER

// const nums = [100, 2, 5, 42, 99]
// const odds = nums.filter((num) => num % 2)

// console.log(odds)

// const people = ["jerks", "nice people", "jerks", "nice people", "nice people"];

// const jerks = people.filter((jerk) => jerk === 'jerks')

// console.log(jerks)

// FIND

const cars = [
  { color: 'red', make: 'BMW', year: 2001 },
  { color: 'white', make: 'Toyota', year: 2013 },
  { color: 'black', make: 'Ford', year: 2014 },
  { color: 'white', make: 'Tesla', year: 2016 },
]

// const firstWhiteCar = cars.find((car) => car.color === 'white')
// console.log(firstWhiteCar)

// const missingCar = cars.find((car) => car.color === 'blue')
// console.log(missingCar)

// const notTooOldCar = cars.find((car) => car.year > 2014)
// console.log(notTooOldCar)

// FIND INDEX

// const idxFirstCarNewerThan2015 = cars.findIndex((car) => car.year > 2015)

// console.log(idxFirstCarNewerThan2015)

// const missingCarIdx = cars.findIndex((car) => car.year > 2020)

// console.log(missingCarIdx)

// SOME

// const hasFord = cars.some((car) => car.make === 'Ford')

// console.log(hasFord)

// const myRoom = ["evil monkey", "bed", "lamp"];

// const isEvilMonkeyInROom = myRoom.some((monkey) => monkey === "evil monkey")

// console.log(isEvilMonkeyInROom)

// EVERY

// const cars = [
//   { color: 'red', make: 'BMW', year: 2001 },
//   { color: 'white', make: 'Toyota', year: 2013 },
//   { color: 'black', make: 'Ford', year: 2014 },
//   { color: 'white', make: 'Tesla', year: 2016 },
// ]

// const everyCarIsNewerThan2000 = cars.every((car) => car.year > 2000)
// everyCarIsNewerThan2000 -> true

// REDUCE

// const nums = [25, 6, 100, 3]

// const sum = nums.reduce((acc, num) => {
//   console.log(acc, num)
//   return acc + num
// })

// console.log(sum)

const votes = ['Yes', 'No', 'No', 'Yes', 'Yes']
const tally = votes.reduce((runningTally, vote) => {
  // Assign 1 if first time seeing a certain "type" of vote
  // otherwise increase count by 1
  runningTally[vote] = runningTally[vote] ? runningTally[vote] + 1 : 1
  return runningTally
}, {})

console.log(tally)
