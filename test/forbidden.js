var config = require('../config');
var request = require('request');
var expect = require('chai').expect;
var _ = require('lodash');

describe('Forbidden', function() {
  [
    'http://www.techinasia.com/.rss'
  ].forEach(function(url) {
    it('Should 403 - ' + url, function(done) {
      request(url, function(error, response, body) {
        expect(response.statusCode).to.eq(403);
        done(error);
      });
    });
  });
});