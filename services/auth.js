'use strict';

angular
    .module('app')
    .factory('AuthService', AuthService);

function AuthService($window, $q, $http, baseUrl) {

    return {
        login: login
    };

    function login(account, successCallback, errorCallback) {
        var req = {
            method: 'GET',
            url: baseUrl + '/login?username=' + account.username + '&password=' + account.password,
            headers: {
                'X-Parse-Application-Id': 'HRO2cFv4ygTNg0Ici8lZsXgtAPTb6z4LaPSSOMAY',
                'X-Parse-REST-API-Key': 'kQVTWOfrPPxphfackPXEIZiHMSIOAAcT7PcY8zLH'
            }
        };

        $http(req).then(successCallback, errorCallback);
    }
}