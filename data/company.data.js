const faker = require('faker');

module.exports = new Array(10).fill(null).map(() => {
    return {
        name: faker.company.companyName(),
        code: faker.random.uuid(),
        image: faker.image.imageUrl(),
        money: faker.finance.account(),
        description: faker.company.catchPhraseDescriptor()
    }
})