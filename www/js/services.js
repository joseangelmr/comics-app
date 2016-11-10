/**
 * Created by joseangelmr on 10/11/16.
 */
angular.module('app.services', [])
  .factory('API', function ($http, $q, lodash) {
    var apiURL = 'https://gateway.marvel.com/v1/public/comics';
    var comics = [];

    function validateResponse(result) {
      return !(typeof result.data != 'array' && typeof result.data != 'object');
    }

    return {
      getComics: function () {
        var q = $q.defer();
        $http.get(apiURL, {
          params: {
            ts: 1,
            apikey: 'e6a1b088a7ed19d114d8fb7a5e374609',
            hash: 'a0958f81dfbc210c58034f2cdb4d94de',
          }
        })
          .then(function (result) {
            comics = result.data.data.results;
            return !validateResponse(result) ? q.reject(new Error('Invalid Response')) : q.resolve(result.data.data.results);
          }, function (err) {
            q.reject(err);
          });
        return q.promise;
      }

    }
  })
