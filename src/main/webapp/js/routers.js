var router = function($stateProvider, $routeProvider, $urlRouterProvider,
		appServiceFacade) {
	// $urlRouterProvider.otherwise('/');

	$routeProvider.when('/', {
		redirectTo : '/home'
	});

	stateProvider = $stateProvider.state('home', {
		url : '/home',
		views : {
			'viewA' : {
				templateUrl : 'partials/home.html',
				controller : 'homeController'
			}
		}
	});

	stateProvider.state('xpenses', {
		url : '/xpenses',
		views : {
			'viewA' : {
				templateUrl : 'partials/xpenses.html',
				controller : 'xpensesController'
			}
		}
	});

	stateProvider.state('tags', {
		url : '/tags',
		views : {
			'viewA' : {
				templateUrl : 'partials/tags.html',
				controller : 'tagsController'
			}
		}
	});

	stateProvider.state('reports', {
		url : '/reports',
		views : {
			'viewA' : {
				templateUrl : 'partials/reports.html',
				controller : 'reportsController'
			}
		}
	});

	stateProvider.state('locations', {
		url : '/locations',
		views : {
			'viewA' : {
				templateUrl : 'partials/locations.html',
				controller : 'locationsController'
			}
		}
	});

	stateProvider.state('currencys', {
		url : '/currencys',
		views : {
			'viewA' : {
				templateUrl : 'partials/currencys.html',
				controller : 'currencysController'
			}
		}
	});

	stateProvider.state('users', {
		url : '/users',
		views : {
			'viewA' : {
				templateUrl : 'partials/users.html',
				controller : 'usersController'
			}
		}
	});

	stateProvider.state('roles', {
		url : '/roles',
		views : {
			'viewA' : {
				templateUrl : 'partials/roles.html',
				controller : 'rolesController'
			}
		}
	});

	stateProvider = $stateProvider.state('settings', {
		url : '/settings',
		views : {
			'viewA' : {
				templateUrl : 'partials/settings.html',
				controller : 'settingsController'
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
