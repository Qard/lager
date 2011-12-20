var _ = require('underscore')

var utils = {
  // Trim whitespace
  trim: function (str) {
    return (str || '').replace(/^\s+|\s+$/g, '')
  }

  // Perform a line map trim
  , trimLines: function (str) {
    return str.split("\n").map(utils.trim).join("\n")
  }

  // Indent string
  , indent: function (str, ind) {
    return ind + str.replace(/\n/g, "\n" + ind)
  }

  // Generate indentation text from space count
  , numOfSpace: function (n) {
    return _.range(n).reduce(function (m) {
      return m + ' '
    }, '')
  }
}

module.exports = utils