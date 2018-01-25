'use strict';

/**
 * Route configuration
 */
angular.module('rAppDoor').config(['$stateProvider', '$urlRouterProvider',
    function($stateProvider, $urlRouterProvider) {

        // For unmatched routes
        $urlRouterProvider.otherwise('/');

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
