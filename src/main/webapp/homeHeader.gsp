<nav data-ng-controller="navigatorController">
<div class="navbar navbar-fixed-top">
	<div class="navbar-inner">
		<div class="container">
		    <ul class="nav">
		    	<li class="">
					<a class="brand" href="index"><strong>Xpenses Tracker</strong></a>
				</li>
		    	<li class="divider-vertical"></li>
		    	<li data-ng-class="{ active: \$state.includes('home') }">
		    		<a href="#/home"><i class="icon-home icon-white"></i>&nbsp;</a>
		    	</li>
		    	<li class="divider-vertical"></li>
		    	<li data-ng-class="{ active: \$state.includes('xpenses') }">
		    		<a href="#/xpenses">Xpenses</a>
		    	</li>
		    	<li data-ng-class="{ active: \$state.includes('tags') }">
		    		<a href="#/tags">Tags</a>
		    	</li> 
		    	<li data-ng-class="{ active: \$state.includes('reports') }">
		    		<a href="#/reports">Reports</a>
		    	</li>
		    	<li data-ng-class="{ active: \$state.includes('locations') }">
		    		<a href="#/locations">Locations</a>
		    	</li>
		    	<li data-ng-class="{ active: \$state.includes('currencys') }">
		    		<a href="#/currencys">Currencies</a>
		    	</li>
		    	<li data-ng-class="{ active: \$state.includes('users') }">
		    		<a href="#/users">Users</a>
		    	</li>
		    	<li data-ng-class="{ active: \$state.includes('roles') }">
		    		<a href="#/roles">Roles</a>
		    	</li>
		    </ul>
		    <ul class="nav pull-right">
				<li class="divider-vertical"></li>
				<li data-ng-class="{ active: \$state.includes('settings') }">
					<a href="#/settings">
						<i class="icon-cog"></i>&nbsp;Settings
					</a>
				</li>
				<li>
					<a href="logout">
						<i class="icon-signout"></i>&nbsp;Logout
					</a>
				</li>
			</ul>
		</div>
	</div>
</div>
</nav>
