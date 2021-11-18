const { validation } = require('./validation')
const { controllerWrapper } = require('./wrapper')
const { authenticate } = require('./authenticate')
const { upload } = require('./upload')

module.exports = {
  upload,
  validation,
  controllerWrapper,
  authenticate
}
