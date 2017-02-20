(function () {

    'use strict';

    angular.module('app')
        .config([
            '$locationProvider',
            '$routeProvider',
            function ($locationProvider, $routeProvider) {
                $routeProvider.when('/vegetables', {
                    templateUrl: 'views/vegetable.html',
                    controller: 'VegetableController',
                    controllerAs: 'Vegetable'
                });
                $routeProvider.when('/login', {
                    templateUrl: 'views/login.html',
                    controller: 'AuthController',
                    controllerAs: 'Auth'
                });
                $routeProvider.otherwise({redirectTo: '/vegetables'});
            }
        ]);

}());
