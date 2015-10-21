
var expect = require('chai').expect;
var checklink = require('./');

describe('checklink index.js', function() {

  it('should return true when url is taobao.com', function(done) {

    checklink('https://taobao.com')
      .then(function(result) {
        expect(result.isPassed).to.equal(true);
        done();
      });

  });

  it('should return false when url is xxxhhhhhh.com', function(done) {

    checklink('http://xxxhhhhhh.com')
      .then(function(result) {
        expect(result.isPassed).to.equal(false);
        done();
      });

  });

  it('should return array when url is array', function(done) {

    checklink(['http://baidu.com', 'https://taobao.com', 'xxxxxxxx', 'hxhxhhxhx.com.cn'])
      .then(function(result) {

        console.log(result);

        expect(result.isPassed).to.equal(false);
        expect(result.deadlinks.length).to.equal(2);
        done();
      });

  });

});
