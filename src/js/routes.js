'use strict';

/**
 * Route configuration
 */
angular.module('rAppDoor').config(['$stateProvider', '$urlRouterProvider','$locationProvider',
    function($stateProvider, $urlRouterProvider, $locationProvider) {

        // For unmatched routes
        $urlRouterProvider.otherwise('/');
        $locationProvider.hashPrefix('');

        // Application routes
        $stateProvider
            .state('index', {
                url: '/',
                templateUrl: 'templates/dashboard.html'
            })
            .state('applications', {
                url: '/applications',
                templateUrl: 'templates/applications.html'
            })
            .state('trending', {
                url: '/trending',
                templateUrl: 'templates/trending.html'
            });
    }
]);
