// Trim whitespace
exports.trim = function (str) {
  return (str || '').replace(/^\s+|\s+$/g, '')
}

// Trim each line
exports.trimLines = function (str) {
  return str.split("\n").map(exports.trim).join("\n")
}

// Indent all lines of a string
exports.indent = function (str, ind) {
  return ind + str.replace(/\n/g, "\n" + ind)
}

// Generate indentation text from space count
exports.numOfSpace = function (n) {
  var res = []
  for (var i = 0; i < n; i++) {
    res.push(' ')
  }
  return res.join('')
}

// Pad all strings to have the same length
exports.pad = function (str, depth) {
  return exports.numOfSpace(depth - str.length) + str
}