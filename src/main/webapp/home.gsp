<html lang="en" class="no-js" data-ng-app="app" data-ng-csp>
<head>
	<title>xpenses tracker</title>
	
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<meta name="description" content="Appliation to track and manage day to day expenses">
    <meta name="author" content="xpensesTracker">
    
	<link href="assets/css/bootstrap-combined.no-icons.min.css" rel="stylesheet">
	<link href="assets/css/font-awesome.min.css" rel="stylesheet">
	<link href="assets/css/font-webrupee.css" rel="stylesheet">
	<link href="assets/css/prettify.css" rel="stylesheet" />

	<link href="css/main.css" rel="stylesheet"/>
    <link rel="shortcut icon" type="image/png" href="assets/img/fav-icon.png">

	<!-- Le HTML5 shim, for IE6-8 support of HTML5 elements -->
    <!--[if lt IE 9]>
    <script src="http://html5shim.googlecode.com/svn/trunk/html5.js"></script>
    <![endif]-->

</head>
<body onload="prettyPrint()">

<% include 'homeHeader.gsp' %>

<div class="container" ui-view="viewA"></div>

<div class="container">
	<br/><br/>
	<pre>
	\$state = {{\$state.current.name}}
	\$stateParams = {{\$stateParams}}
	</pre>
</div>

<% include 'footer.gsp' %>

<script src="assets/lib/modernizr.min.js" type="text/javascript"></script>
<script src="assets/lib/moment.min.js" type="text/javascript"></script>
<script src="assets/lib/underscore-min.js" type="text/javascript"></script>
<script src="assets/lib/underscore.string.min.js" type="text/javascript"></script>
<script src="assets/lib/prettify/prettify.js" type="text/javascript"></script>

<script src="assets/lib/jquery.min-2.0.2.js" type="text/javascript"></script>
<!-- 
<script src="assets/lib/bootstrap.min.js" type="text/javascript"></script>
-->
<script src="assets/lib/angular.min-1.0.7.js" type="text/javascript"></script>
<script src="assets/lib/angular-resource.min-1.0.7.js" type="text/javascript"></script>
<script src="assets/lib/angular-ui-router.js" type="text/javascript"></script>
<script src="assets/lib/ui-utils.min.js" type="text/javascript"></script>
<script src="assets/lib/ui-bootstrap-tpls-0.4.0.min.js" type="text/javascript"></script>
<script src="assets/lib/angular-underscore.js" type="application/javascript"></script>
<script src="assets/lib/angular-table-1.0.0.min.js" type="application/javascript"></script>

<script src="assets/lib/angular-webstorage.js" type="text/javascript"></script>
<script src="assets/lib/html5sql.js" type="application/javascript"></script>
<script src="assets/lib/ztt-ydn.db-0.6.6.js" type="application/javascript"></script>

<script src="js/wydAngular.js" type="application/javascript"></script>
	
<script src="js/filters.js" type="application/javascript"></script>
<script src="js/directives.js" type="application/javascript"></script>

<script src="js/services.js" type="application/javascript"></script>
<script src="js/services/countriesService.js" type="application/javascript"></script>
<script src="js/services/timeZonesService.js" type="application/javascript"></script>
<script src="js/services/accessControlService.js" type="application/javascript"></script>

<script src="js/controllers.js" type="application/javascript"></script>
<script src="js/controllers/loginController.js" type="application/javascript"></script>
<script src="js/controllers/xpensesController.js" type="application/javascript"></script>
<script src="js/controllers/tagsController.js" type="application/javascript"></script>
<script src="js/controllers/reportsController.js" type="application/javascript"></script>
<script src="js/controllers/locationsController.js" type="application/javascript"></script>
<script src="js/controllers/currencysController.js" type="application/javascript"></script>
<script src="js/controllers/usersController.js" type="application/javascript"></script>
<script src="js/controllers/rolesController.js" type="application/javascript"></script>
<script src="js/controllers/settingsController.js" type="application/javascript"></script>

<script src="js/routers.js" type="application/javascript"></script>

<script src="home.js" type="application/javascript"></script>

</body>
</html>