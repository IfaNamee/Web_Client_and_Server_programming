// create object property.
let user = {username: 'ifa', password: 'phone'}

// both print usernames
console.log(user.username)
console.log(user['username'])

// both print password
console.log(user.password)
console.log(user['password'])

user.password = 'water'  // change or update data in object
console.log(user.password)

user['username'] = 'Roba'  // change or update data in object
console.log(user['username'])
console.log(user)

user.phone = '1234567' // add new property to object.
console.log(user)
console.log(user.phone)