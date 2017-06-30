const fetch = require(`node-fetch`)

const endpoints = {
  forecast: `https://www.smhi.se/wpt-a/backend_startpage/forecast/fetcher/{geonameid}/10dFormat`,
  solr: `https://www.smhi.se/wpt-a/backend_solr/search/{geonameid}`,
  districts: `https://www.smhi.se/wpt-a/data/keps/cap-metadata/rest/districts`,
  messages: `https://www.smhi.se/wpt-a/data/keps/cap-alert/rest/public/publishedmessages`,
  links: `https://www.smhi.se/wpt-a/smhi_se_links/all`,
  alerts: `https://www.smhi.se/wpt-a/data/keps/cap-alert/rest/public/publishedalerts`
}

const fetchJSON = (path, geonameid) =>
  fetch(path.replace(`{geonameid}`, geonameid)).then(data => data.json())

module.exports = Object.keys(endpoints).reduce(
  (api, endpoint) => Object.assign(
    api, { [endpoint]: fetchJSON.bind(null, endpoints[endpoint]) }
  ),
  {}
)
