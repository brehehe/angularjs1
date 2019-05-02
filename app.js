var app = angular.module('app', ['ngRoute', 'ngAnimate']);

app.config(function ($routeProvider, $locationProvider) {
    $routeProvider
            .when("/", {
                template: "WELCOME BRO!!"
            })
            .when("/proxy", {
                templateUrl: MAINDOMAIN + 'template/proxy.html',
            })
            .when("/banana", {
                template: "<h1>Banana</h1><p>Bananas contain around 75% water.</p>"
            })
            .when("/tomato", {
                template: "<h1>Tomato</h1><p>Tomatoes contain around 95% water.</p>"
            })
            .otherwise(
                    {redirectTo: "/"}
            );
    $locationProvider.html5Mode(true);
})