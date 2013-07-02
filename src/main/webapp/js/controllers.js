var appControllers = angular.module('app.controllers', []);

appControllers.controller('navigatorController', function($scope, $log) {

});

appControllers.controller('loginController', function($rootScope, $scope, $log,
		$state, appServiceFacade) {

	var user = {
		sex : 'Male',
		recaptchaOne : 3,
		recaptchaTwo : 5
	}
	$scope.user = user;

	$scope.timeZones = [];
	appServiceFacade.timeZonesService.list().then(function(data) {
		$scope.timeZones = data.data;
		$scope.user.timeZone = data.data[0];
	}, function(errorMessage) {
		$log.error(errorMessage);
	});

	$scope.countries = [];
	appServiceFacade.countriesService.list().then(function(data) {
		$scope.countries = data.data;
		$scope.user.country = data.data[0];
	}, function(errorMessage) {
		$log.error(errorMessage);
	});

	$scope.rigister = function() {
		
	};

	$scope.login = function() {
		// $rootScope.$emit("accessControlService.logInSuccess", {
		// alertMessage : ' successfully signed in...'
		// });
		$state.transitionTo('home');
	};

	$scope.reset = function() {

	}
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
