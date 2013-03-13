var reporter = require('../lib/reporter')

describe('lib/reporter.js', function () {

  var logger
  beforeEach(function () {
    logger = {
      name: 'foo'
      , width: 10
      , indentation: '   '
      , useTimestamp: false
      , log: reporter.type('log')
      , error: reporter.type('error')
    }
  })

  it('should pass along mode', function () {
    reporter.log = function (mode) {
      mode.should.eql('log')
    }

    logger.log('message')
  })

  it('should pass along message', function () {
    reporter.log = function (mode, message) {
      message.should.eql('   \u001b[32m       foo - \u001b[39mmessage')
    }
    
    logger.log('message')
  })

  it('should pass along errors', function () {
    reporter.log = function (mode, message) {
      // Has message title
      message.should.match(/Error: Something went wrong/)

      // Has stack trace
      message.should.match(/test\/reporter.js\:[0-9]*:[0-9]*/)
    }
    
    logger.error(new Error('Something went wrong'))
  })

})