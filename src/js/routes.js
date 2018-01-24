'use strict';

/**
 * Route configuration for the RDash module.
 */
angular.module('UBSDash').config(['$stateProvider', '$urlRouterProvider',
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
            .state('susjob', {
                url: '/susjob',
                templateUrl: 'templates/susjob.html'
            })
            .state('susjobAdd', {
                url: '/susjobAdd',
                templateUrl: 'templates/susjobadd.html'
            })
            .state('apps', {
                url: '/apps',
                templateUrl: 'templates/apps.html'
            })
            .state('trending', {
                url: '/trending',
                templateUrl: 'templates/trending.html'
            });
    }
]);
