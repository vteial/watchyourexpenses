appServices.factory('accessControlService', function($log, $http, $q) {
	var service = {};

	service.register = function() {
		var deferred = $q.defer();
		$http.post('register').success(function(data) {
			deferred.resolve(data);
			$log.info('register success...');
		}).error(function() {
			deferred.reject("unable to register...");
			$log.info('register fails...');
		});
		return deferred.promise;
	};

	service.resetPassword = function() {
		var deferred = $q.defer();
		$http.post('resetPassword').success(function(data) {
			deferred.resolve(data);
			$log.info('resetPassword success...');
		}).error(function() {
			deferred.reject("unable to resetPassword...");
			$log.info('resetPassword fails...');
		});
		return deferred.promise;
	};

	service.authenticate = function() {
		var deferred = $q.defer();
		$http.post('authenticate').success(function(data) {
			deferred.resolve(data);
			$log.info('authenticate success...');
		}).error(function() {
			deferred.reject("unable to authenticate...");
			$log.info('authenticate fails...');
		});
		return deferred.promise;
	};

	service.logout = function() {
		var deferred = $q.defer();
		$http.get('logout').success(function(data) {
			deferred.resolve(data);
			$log.info('logout success...');
		}).error(function() {
			deferred.reject("unable to logout data...");
			$log.info('logout fails...');
		});
		return deferred.promise;
	};

	return service;
});
