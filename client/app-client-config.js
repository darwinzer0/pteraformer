//angular.module('pteraformer',['angular-meteor','ui.router','pteraformer-place-reference-directive']);
//var app = angular.module('pteraformer',['angular-meteor','ui.router',
//                                        'pteraformer-cliff-service',
//                                        'pteraformer-place-reference-directive']);
angular.module('pteraformer').config(function($urlRouterProvider, $stateProvider, $locationProvider){
  $locationProvider.html5Mode(true);
  $stateProvider
    .state('layers', {
      url: '/layers',
      templateUrl: 'client/views/layers-dashboard.html',
      controller: 'LayersController'
    })
    .state('corpus', {
      url: '/corpus/:corpusId',
      templateUrl: 'client/views/corpus-dashboard.html',
      controller: 'CorpusController'
    })
    .state('document', {
      url: '/document/:documentId',
      templateUrl: 'client/views/document-dashboard.html',
      controller: 'DocumentController'
    });
  $urlRouterProvider.otherwise("/layers");
});
angular.module('pteraformer').controller('LayersController', function ($scope, $meteor, CLIFFService) {
});
angular.module('pteraformer').controller('CorpusController', function ($scope, $meteor, $stateParams) {
  $scope.corpusId = $stateParams.corpusId;
});