var appControllers = angular.module('app.controllers', []);

appControllers.controller('navigatorController', function($scope, $log) {

});

appControllers.controller('loginController', function($rootScope, $scope, $log,
		$state, appServiceFacade) {

	$scope.timeZones = [];
	appServiceFacade.timeZonesService.list().then(function(data) {
		$scope.timeZones = data.data;
	}, function(errorMessage) {
		$log.error(errorMessage);
	});
	
	var user = {
		sex : 'Male'
	}
	$scope.user = user;

	$scope.login = function() {
		$rootScope.$emit("accessControlService.logInSuccess", {
			alertMessage : ' successfully signed in...'
		});
		$state.transitionTo('home');
	};
});

appControllers.controller('logoutController', function($rootScope, $scope,
		$log, $state, appServiceFacade) {
	$scope.viewTitle = 'Logout!';

	$scope.logout = function() {
		$rootScope.$emit("accessControlService.logOutSuccess", {
			alertMessage : 'successfully signed out...'
		});
	};
});

appControllers.controller('indexController', function($scope, $log) {
	$scope.viewTitle = 'Home!';
});

appControllers.controller('homeController', function($scope, $log) {
	$scope.viewTitle = 'Home!';
});

appControllers.controller('aboutController', function($scope, $log) {
	$scope.viewTitle = 'About!';
	// $scope.appId = $registry.get('appId');
	// $scope.appVersion = $registry.get('appVersion');
});

appControllers.controller('testController', function($scope, $log) {
	$scope.viewTitle = 'Test!';
});
