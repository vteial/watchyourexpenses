appControllers.controller('loginController', function($scope, $log, $state,
		$window, appServiceFacade) {

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
		appServiceFacade.accessControlService.register().then(function(data) {
		}, function(errorMessage) {
			$log.error(errorMessage);
		});
	};

	$scope.login = function() {
		appServiceFacade.accessControlService.authenticate().then(
				function(data) {
					$window.location = 'index'
				}, function(errorMessage) {
					$log.error(errorMessage);
				});
	};

	$scope.resetPassword = function() {
		appServiceFacade.accessControlService.resetPassword().then(
				function(data) {
				}, function(errorMessage) {
					$log.error(errorMessage);
				});
	};
});
