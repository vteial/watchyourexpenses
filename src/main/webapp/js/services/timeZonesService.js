appServices.factory('timeZonesService', function($log, $http, $q) {
	var timeZonesService = {};

	timeZonesService.list = function() {
		var deferred = $q.defer();
		$http.get('json/timeZones.json').success(function(data) {
			deferred.resolve(data);
			$log.info('timezones fetching success...');
		}).error(function() {
			deferred.reject("Unable to fetch timeZones data...");
			$log.info('timezones fetching fails...');
		});
		return deferred.promise;
	};

	return timeZonesService;
});