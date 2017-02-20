'use strict';

angular
    .module('app')
    .factory('VegetableService', VegetableService);

function VegetableService($http, baseUrl) {

  return {
    findAll: findAll
  };

  function findAll(successCallback, errorCallback) {
    var req = {
      method: 'GET',
      url: baseUrl + '/classes/Vegetable',
      headers: {
        'X-Parse-Application-Id': 'HRO2cFv4ygTNg0Ici8lZsXgtAPTb6z4LaPSSOMAY',
        'X-Parse-REST-API-Key': 'kQVTWOfrPPxphfackPXEIZiHMSIOAAcT7PcY8zLH',
        'X-Parse-Session-Token': 'r:1d143f03e820675b8ca0c60a81005137',
      }
    };

    $http(req).then(successCallback, errorCallback);
  }
}