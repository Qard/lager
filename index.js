// Load dependencies.
var  _ = require('underscore')
  , reporter = require('./lib/reporter')
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

  this.indentation = '   '
  this.useTimestamp = false

  // Support name or object to mixin.
  if (typeof name === 'string') {
    this.name = name
  } else {
    _.extend(this, name)
  }

  if (typeof this.indentation !== 'string') {
    this.indentation = utils.numOfSpace(this.indentation)
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
Lager.prototype.log = reporter('log')

/**
 * Notice level reporter
 * 
 * @param string | Error
 *    Message or Error instance to report
 * 
 * @param(s) mixed
 *    Extra info, will be inspected if non-string
 */
Lager.prototype.notice = reporter('info')

/**
 * Error level reporter
 * 
 * @param string | Error
 *    Message or Error instance to report
 * 
 * @param(s) mixed
 *    Extra info, will be inspected if non-string
 */
Lager.prototype.error = reporter('error')