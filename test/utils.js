var utils = require('../lib/utils')

describe('lib/utils.js', function () {

  it('should indent each line in a string', function () {
    utils.indent("foo\nbar", ' ').should.eql(" foo\n bar")
  })

  it('should generate indentation string', function () {
    utils.numOfSpace(1).should.eql(' ')
  })

  it('should trim string', function () {
    utils.trim(' test ').should.eql('test')
  })

  it('should trim each line in a string', function () {
    utils.trimLines("foo\n bar").should.eql("foo\nbar")
  })

  it('should pad string', function () {
    utils.pad('test', 10).should.eql('      test')
  })
  
})