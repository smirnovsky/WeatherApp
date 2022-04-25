const rp = require('request-promise')

module.exports = async function(city = '') {
    if (!city) {
        throw new Error('City is not defined')
    }

    console.log('City', city)
}