// Load dependencies.
var reporter = require('./lib/reporter')
  , utils = require('./lib/utils')

// Add color support.
require('colors')

/**
 * Construct and expose
 * 
 * @param string | object
 *    Reporter name or option object
 */
function Lager(name) {
  // Ensure instance access.
  if ( ! (this instanceof Lager)) {
    return new Lager(name)
  }

  this.width = 10
  this.indentation = '   '
  this.useTimestamp = false

  // Support name or object to mixin.
  if (typeof name === 'string') {
    this.name = name
  } else {
    for (var key in name) {
      this[key] = name[key]
    }
  }

  // Support space count as alternative to raw string
  if (typeof this.indentation === 'number') {
    this.indentation = utils.numOfSpaces(this.indentation)
  }
}

// Expose module
module.exports = Lager

/**
 * Log level reporter
 * 
 * @param string | Error
 *    Message or Error instance to report
 * 
 * @param(s) mixed
 *    Extra info, will be inspected if non-string
 */
Lager.prototype.log = reporter.type('log')

/**
 * Notice level reporter
 * 
 * @param string | Error
 *    Message or Error instance to report
 * 
 * @param(s) mixed
 *    Extra info, will be inspected if non-string
 */
Lager.prototype.notice = reporter.type('info')

/**
 * Error level reporter
 * 
 * @param string | Error
 *    Message or Error instance to report
 * 
 * @param(s) mixed
 *    Extra info, will be inspected if non-string
 */
Lager.prototype.error = reporter.type('error')