const routes = require('next-routes')

module.exports = routes()
  .add('HomePage', '/')
  .add('ListPage', '/dragons')
  .add('DetailsPage', '/dragons/:id')