var _ = require('underscore')

// Trim whitespace
module.exports.trim = function trim (str) {
  return (str || '').replace(/^\s+|\s+$/g, '')
}

// Indent string
module.exports.indent = function indent (str, ind) {
  return ind + str.replace(/\n/g, "\n" + ind)
}

// Generate indentation text from space count
module.exports.numOfSpace = function numOfSpace (n) {
  return _.range(n).reduce(function (m) {
    return m+' '
  })
}