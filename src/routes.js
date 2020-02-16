const routes = require('next-routes')

module.exports = routes()
  .add('HomePage', '/')
  .add('ListPage', '/api/v1/dragon')