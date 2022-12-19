 var app = angular.module('homeApp', ['ngRoute']);

app.config(function($routeProvider){
    $routeProvider
      .when('/home',{
          controller: 'HomeController',
          templateUrl: 'views/home.html'
    })
      .when('/viewPreviousTransactions', {
          controller: 'ViewPreviousTransactionsController',
          templateUrl: 'views/viewPreviousTransactions.html'
    })
      .when('/', {
        controller: 'LoginController',
        templateUrl: 'views/login.html'
    })
      .when('/viewBalance', {
        controller: 'ViewBalanceController',
        templateUrl: 'views/viewBalance.html'
    })
      .when('/updateBalance', {
          controller: 'UpdateBalanceController',
          templateUrl: 'views/updateBalance.html'
    })
        .when('/learnMore', {
            templateUrl: 'views/learnMore.html'
        })
    .otherwise({redirectTo: '/'});
});

 app.constant('configSettings', {
     'baseUrl': 'http://www.baseurl.com',
     'someElseSetting': 'settingValue',
     'playerId': 'playerId',
     'amount': 'amount'
     //other setting will also be there.
 });