var appControllers = angular.module('app.controllers', []);

appControllers.controller('navigatorController', function($scope, $log) {

});

appControllers.controller('indexController', function($scope, $log) {
	$scope.viewTitle = 'Home!';
});

appControllers.controller('aboutController', function($scope, $log) {
	$scope.viewTitle = 'About!';
});

appControllers.controller('contactController', function($scope, $log) {
	$scope.viewTitle = 'Contact!';
});

appControllers.controller('termsController', function($scope, $log) {
	$scope.viewTitle = 'Terms!';
});

appControllers.controller('securityController', function($scope, $log) {
	$scope.viewTitle = 'Security!';
});

appControllers.controller('privacyController', function($scope, $log) {
	$scope.viewTitle = 'privacy!';
});

appControllers.controller('testController', function($scope, $log) {
	$scope.viewTitle = 'Test!';
});
