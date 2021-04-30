const baseConfig = require('../../jest.config.js')
const packageJson = require('./package')

module.exports = {
  ...baseConfig,
  name: packageJson.name,
  displayName: packageJson.name,
  setupFilesAfterEnv: ['./test/jest.setup.js'],
}
