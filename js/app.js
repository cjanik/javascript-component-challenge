var App = angular.module('App', ['ui.router', 'mainCtrl']);

App.config(function($stateProvider, $urlRouterProvider){
  
  $urlRouterProvider.otherwise('/');
  
  $stateProvider.state('/',{
    url: '/',
    templateUrl: './js/view.html'
  });
});
