angular.module('${artifactId}App', [
    'ngRoute',
    '${artifactId}Controllers'
])
    .config(function ($routeProvider) {
        $routeProvider
            .when('/start', {
                templateUrl: 'views/start.html',
                controller: 'StartCtrl'
            })
            .otherwise({
                redirectTo: '/start'
            });
    });