var config = require('../config');
var request = require('request');
var expect = require('chai').expect;
var _ = require('lodash');

describe('www', function() {
  if(config.www === true) {
    // non-www -> www
    describe('non-www redirect', function() {
      context('When visiting non-www', function() {
        it('Should redirect non-www traffic to www', function(done) {
          request('http://google.com', function(error, response, body) {
            expect(_.startsWith(response.request.host, 'www.')).to.equal(true);
            done(error);
          });
        });
      });

      context('When visiting another subdomain', function() {
        it('Should not redirect traffic to www', function() {
          request('http://images.google.com', function(error, response, body) {
            expect(_.startsWith(response.request.host, 'images.')).to.equal(true);
            done(error);
          });
        });
      });
    });
  } else {
    // www -> non-www
    describe('www redirect', function() {
      context('When visiting www', function() {
        it('Should redirect www traffic to non-www', function(done) {
          request('http://www.stackoverflow.com', function(error, response, body) {
            expect(_.startsWith(response.request.host, 'www.')).to.equal(false);
            done(error);
          });
        });
      });

      context('When visiting another subdomain', function() {
        it('Should not redirect traffic to www', function() {
          request('http://images.google.com', function(error, response, body) {
            expect(_.startsWith(response.request.host, 'images.')).to.equal(true);
            done(error);
          });
        });
      });
    });
  }
});