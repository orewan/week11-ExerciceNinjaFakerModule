const { faker } = require('@faker-js/faker');

const randomName    = faker.person.fullName();
const randomCountry = faker.location.country();

const randomAddress = faker.location.streetAddress(); 


let user = {
 "name"    : randomName,
 "address" : randomAddress,
 "country" : randomCountry
}


console.log(user);

// https://fakerjs.dev/guide/usage.html
// npm install @faker-js/faker --save-dev

// const randomAddressCity = faker.location.city()
// const randomEmail = faker.internet.email();