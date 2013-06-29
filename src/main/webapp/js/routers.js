var router = function($stateProvider, $routeProvider, $urlRouterProvider,
		appServiceFacade) {
	$urlRouterProvider.otherwise('/');

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

	stateProvider = $stateProvider.state('settings', {
		url : '/settings',
		views : {
			'viewA' : {
				templateUrl : 'partials/settings.html',
				controller : 'settingsController'
			}
		}
	});

	stateProvider = $stateProvider.state('logout', {
		url : '/logout',
		views : {
			'viewA' : {
				templateUrl : 'partials/logout.html',
				controller : 'logoutController'
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
