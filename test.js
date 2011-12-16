#!/usr/bin/env mocha -r should -R spec
var Lager = require('./index')
  , utils = require('./lib/utils')

// Test different behaviours of the interface.
describe('Lager', function () {

  var log;
  before(function () {
    log = new Lager('test')
  })

  it('should support name definitions', function () {
    log.name.should.eql('test')
  })

  it('should support object definitions', function () {
    var test = new Lager({ name: 'test' })
    test.name.should.eql('test')
  })

  it('should indent string', function () {
    utils.indent('test', ' ').should.eql(' test')
  })

  it('should generate indentation string', function () {
    utils.numOfSpace(1).should.eql(' ')
  })

  it('should trim string', function () {
    utils.trim(' test ').should.eql('test')
  })

  it('should expose reporters', function () {
    log.log.should.be.a('function')
    log.notice.should.be.a('function')
    log.error.should.be.a('function')
  })

})