var Lager = require('./index')

// Prepare some loggers to test
var loggers = []
loggers.push(new Lager('test'))
loggers.push(new Lager({
  name: 'timelog'
  , useTimestamp: true
  , indentation: '  '
}))

// Do tests for each logger
loggers.forEach(function (log) {
  log.log('test message')
  log.notice('test notice', { some: 'json' })
  log.error(new Error('test error'))
})