(function() {
    "use strict";
    angular.module("health").config(function($stateProvider, $urlRouterProvider) {
        $stateProvider
            .state('home', {
                url: '/',
                templateUrl: 'templates/home.html',
                controller:"homeCtrl"
            })
            .state('profile', {
                url: '/profile',
                templateUrl: 'templates/profile.html',
                controller:"prflCtrl"
            })
            .state('account', {
                url: '/account',
                templateUrl: 'templates/account.html',
                controller:"accCtrl"
            });

        $urlRouterProvider.otherwise('/');
    });

})();
