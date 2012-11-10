/* global angular, define */

'use strict';

define(['controllers/MyCtrl1', 'controllers/MyCtrl2' ], function (MyCtrl1, MyCtrl2) {

    // Declare app level module which depends on filters, and services
    var app = angular.module('myApp', ['myApp.filters', 'myApp.services', 'myApp.directives']).
        config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/view1', {templateUrl:'partials/partial1.html', controller:MyCtrl1});
        $routeProvider.when('/view2', {templateUrl:'partials/partial2.html', controller:MyCtrl2});
        $routeProvider.otherwise({redirectTo:'/view1'});
    }]);

    return app;
});

