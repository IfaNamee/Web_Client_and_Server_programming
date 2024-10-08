let user = {
    name: 'ifa',  
    password: 'water',
    email: 'ifa@gmail.com',
    roles: ['programmer', 'developer'],
    contact: {
        office: 'no office',
        phone: '123456789'
    }
}

user.salary = 20000 // add new property into object.
user.roles.push('server admin') // push new property.
user.contact.location = 'Saint Paul' // add new propery into contact

console.log(user) // print array list.