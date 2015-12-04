var config = require('../config');
var request = require('request');
var expect = require('chai').expect;
var _ = require('lodash');

describe('Redirects', function() {
  [
    ['https://www.techinasia.com/admin', 'https://www.techinasia.com/login/?redirect=/core/wp-admin/']
  ].forEach(function(pair) {
    it('Should redirect - ', function(done) {
      request(pair[0], function(error, response, body) {
        expect(response.request.href).to.eq(pair[1]);
        done(error);
      });
    });
  });
});