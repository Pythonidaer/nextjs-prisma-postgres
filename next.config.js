const path = require('path')

module.exports = {
  serverOptions: {
    https: {
      key: path.resolve('./localhost-key.pem'),
      cert: path.resolve('./localhost.pem'),
    },
  },
}
