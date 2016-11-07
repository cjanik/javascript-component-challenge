var express = require('express'),
  app = express(),
  PORT = 8080;

// KQED node endpoint challenge
// by Chris Janik

var request = require('request');
var wpEndpoint = 'http://ww2.kqed.org/perspectives/wp-json/wp/v2/posts';
var paginateQP = '?page=';
var pagesToRequest = 5;
var requestPromises = [];

app.get('/wpnews', function(req, res) {
  for (var page = 1; page <= pagesToRequest; page++) {
    var requestP = new Promise(function(resolve, reject) {
      var url = wpEndpoint + (page > 1 ? paginateQP + page : '');
      request(url, function(error, response, body) {
        if (error) {
          reject(error);
        } else if (response.statusCode === 200) {
          resolve(JSON.parse(body));
        }
      });
    });
    requestPromises.push(requestP);
  }

  Promise.all(requestPromises)
    .then(function(results) {
      // results contains an array of 5 responses, each of which is an array of 10 post objects
      // flatten arrays and filter results
      var flattenedResults = [].concat.apply([], results).map(function(value) {
        return {
          id: value.id,
          date: value.date,
          author: value.author,
          title: value.title,
          excerpt: value.excerpt
        };
      });

      if (!flattenedResults.length) {
        res.status(500).send('error, unexpected data format');
      } else {
        // json data type and success status are assumed by express
        res.send(flattenedResults);
      }
    })
    .catch(function(error) {
      res.status(500).send(error);
    })
});

var server = app.listen(PORT, function() {
  console.log('Server listening on port ' + PORT);
});
