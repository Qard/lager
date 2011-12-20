var utils = require('./utils')
  , util = require('util')

// Split stack message from trace
function unstack (msg) {
  var sep = msg.search(/\n\s*at\s/)
  return {
    msg: msg.substr(0, sep)
    , stack: utils.trimLines(msg.substr(sep + 1))
  }
}

// Determine mode color
function modeColor (mode) {
  switch (mode) {
    case 'error':
      return 'red'
    case 'info':
      return 'yellow'
    default:
      return 'green'
  }
}

// Export the reporter builder
module.exports = function (mode) {

  // Prepare some mode scope utilities
  var color = modeColor(mode)
  function log (m) { console[mode](m) }

  // Return reporter
  return function(msg) {

    // Collect extras list and indentation string
    var extras = Array.prototype.slice.call(arguments, 1) || []
      , ind = this.indentation

    // Support Error objects
    if (msg instanceof Error) {
      var obj = unstack(msg.stack)
      extras.unshift(obj.stack)
      msg = obj.msg
    }

    // Ensure non-string values are inspected
    extras = extras.map(function (extra) {
      return (typeof extra !== 'string')
        ? util.inspect(extra)
        : extra
    })

    // Show message line
    log(utils.indent((this.name + ' - ')[color] + utils.trim(msg), ind))

    // Show timestamp, if enabled
    if (this.useTimestamp) {
      log(ind + '- ' + (new Date).toUTCString().grey + "\n")
    }

    // Show extras, if available
    extras.forEach(function (extra) {
      log(utils.indent(extra.grey, ind + ind) + "\n")
    })
  }
}