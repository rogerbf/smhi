const endpoints = require(`./endpoints`)
const forecast = require(`./forecast`).bind(null, endpoints)

module.exports = {
  forecast
}
