var config = require('../config');
var request = require('request');
var expect = require('chai').expect;
var _ = require('lodash');

describe('https', function() {
  if(config.https === true) {
    describe('Secure', function() {
      it('Should redirect http to https', function(done) {
        request('http://www.techinasia.com', function(error, response, body) {
          expect(response.request.uri.port).to.eq(443);
          done(error);
        });
      });
    });
  } else {

  }
});