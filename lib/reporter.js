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

exports.log = function log (mode, m) {
  console[mode](m)
}

// Export the reporter builder
exports.type = function (mode) {

  // Prepare some mode scope utilities
  var color = modeColor(mode)
  function done (m) { exports.log(mode, m) }

  // Return reporter
  return function (msg) {

    // Collect extras list and indentation string
    var extras = Array.prototype.slice.call(arguments, 1) || []
      , ind = this.indentation
      , res = []

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

    // Add timestamp, if enabled
    if (this.useTimestamp) {
      res.push(((new Date).toUTCString() + ' - ').grey)
    }

    // Add message name
    res.push((utils.pad(this.name, this.width) + ' - ')[color])

    // Add message content
    res.push(utils.trim(msg))

    // Add extras, if available
    extras.forEach(function (extra) {
      res.push("\n" + utils.indent(extra.grey, ind + ind) + "\n")
    })

    done(utils.indent(res.join(''), ind))
  }
}