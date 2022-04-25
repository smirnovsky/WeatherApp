const rp = require('request-promise')

module.exports = async function(city = '') {
    if (!city) {
        throw new Error('City is not defined')
    }

    const KEY = '73e50cc600729964d235d81226595219'
    const uri = 'https://api.openweathermap.org/data/2.5/weather'

    const options = {
         uri,
         qs: {
             appid: KEY,
             q: city,
             units: 'imperial'
         },
         json: true
    }

    try {
        const data = await rp(options)
        const celsius = (data.main.temp - 32) * 5/9 

        return {
            weather: `${data.name}: ${celsius.toFixed(0)}`,
            error: null
        }
    } catch (error) {
        return {
            weather: null,
            error: error.error.message
        }
    }

    
}