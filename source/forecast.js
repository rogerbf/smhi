const fetch = require(`node-fetch`)

module.exports = ({ tendFormat }, geonameid) =>
  fetch(tendFormat.replace(`{geonameid}`, geonameid))
  .then(response => response.json())
