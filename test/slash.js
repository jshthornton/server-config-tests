var config = require('../config');
var request = require('request');
var expect = require('chai').expect;
var _ = require('lodash');

describe('Slash', function() {
  if(config.trailingSlash === true) {
    describe('trailing', function() {
      it('Should redirect non-trailing to trailing', function(done) {
        request('http://www.techinasia.com/about-us', function(error, response, body) {
          expect(response.request.href).to.eq('https://www.techinasia.com/about-us/');
          done(error);
        });
      });
    });
  } else {

  }
});