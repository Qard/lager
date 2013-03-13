var Lager = require('..')

describe('index.js', function () {
  
  it('should support name definitions', function () {
    var log = new Lager('test')
    log.name.should.eql('test')
  })

  it('should have sensible defaults', function () {
    var log = new Lager('test')
    log.useTimestamp.should.eql(false)
    log.width.should.eql(10)
  })

  it('should support object definitions', function () {
    var test = new Lager({ name: 'test' })
    test.name.should.eql('test')
  })

  it('should expose reporters', function () {
    var log = new Lager('test')
    log.log.should.be.a('function')
    log.notice.should.be.a('function')
    log.error.should.be.a('function')
  })

})