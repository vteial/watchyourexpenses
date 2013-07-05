appServices.factory('appServiceFacade', function($log, timeZonesService,
		countriesService, accessControlService) {
	var appServiceFacade = {
		timeZonesService : timeZonesService,
		countriesService : countriesService,
		accessControlService : accessControlService
	}

	return appServiceFacade;
});

var dependents = [ 'ui.utils', 'ui.compat', 'ui.bootstrap' ];

// dependents.push('');
// dependents.push('angular-underscore');
// dependents.push('angular-underscore/utils');
// dependents.push('angular-underscore/filters');
// dependents.push('wydAngular.filters');
// dependents.push('wydAngular.services');
// dependents.push('wydAngular.directives');

// dependents.push('app.filters');
dependents.push('app.services');
// dependents.push('app.directives');
dependents.push('app.controllers');

var app = angular.module('app', dependents);

var router = function($stateProvider, $routeProvider, $urlRouterProvider,
		appServiceFacade) {
	// $urlRouterProvider.otherwise('/');

	$routeProvider.when('/', {
		redirectTo : '/index'
	});

	var stateProvider = $stateProvider.state('index', {
		url : '/index',
		views : {
			'viewA' : {
				templateUrl : 'partials/index.html',
				controller : 'indexController'
			}
		}
	});

	var stateProvider = $stateProvider.state('login', {
		url : '/login',
		views : {
			'viewA' : {
				templateUrl : 'partials/login.html',
				controller : 'loginController'
			}
		}
	});
	

	stateProvider.state('about', {
		url : '/about',
		views : {
			'viewA' : {
				templateUrl : 'partials/about.html',
				controller : 'aboutController'
			}
		}
	});

	stateProvider.state('contact', {
		url : '/contact',
		views : {
			'viewA' : {
				templateUrl : 'partials/contact.html',
				controller : 'contactController'
			}
		}
	});

	stateProvider.state('terms', {
		url : '/terms',
		views : {
			'viewA' : {
				templateUrl : 'partials/terms.html',
				controller : 'termsController'
			}
		}
	});

	stateProvider.state('security', {
		url : '/security',
		views : {
			'viewA' : {
				templateUrl : 'partials/security.html',
				controller : 'securityController'
			}
		}
	});

	stateProvider.state('privacy', {
		url : '/privacy',
		views : {
			'viewA' : {
				templateUrl : 'partials/privacy.html',
				controller : 'privacyController'
			}
		}
	});

	stateProvider.state('test', {
		url : '/test',
		views : {
			'viewA' : {
				templateUrl : 'partials/test.html',
				controller : 'testController'
			}
		}
	});

};
var configs = [ '$stateProvider', '$routeProvider', '$urlRouterProvider',
		router ];
app.config(configs);

function appInit($rootScope, $state, $stateParams, $log) {
	$rootScope.$state = $state;
	$rootScope.$stateParams = $stateParams;
}
app.run([ '$rootScope', '$state', '$stateParams', '$log', appInit ]);
