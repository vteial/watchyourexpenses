var appControllers = angular.module('app.controllers', []);

appControllers.controller('testController', function($scope, $log, $http) {

	  $scope.selectedRow = {};
      $scope.listOfNumbers = [];

      $scope.addRows = function(numberOfRowsToAdd) {
          var startIndex = $scope.listOfNumbers.length;
          var endIndex = $scope.listOfNumbers.length + numberOfRowsToAdd;

          for(var i = startIndex; i < endIndex; i++) {
              $scope.listOfNumbers.push({
                 id: i,
                 name: 'name ' + i,
                 street: 'street ' + i
              });
          }
      };

      $scope.handleRowSelection = function(row) {
          $scope.selectedRow = row;
      };

      $scope.addRows(50);
});

var dependents = [ 'ui.utils', 'ui.compat', 'ui.bootstrap' ];
// dependents.push('');
dependents.push('app.controllers');
var app = angular.module('app', dependents);
