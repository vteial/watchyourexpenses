<nav data-ng-controller="navigatorController">
<div class="navbar navbar-fixed-top">
	<div class="navbar-inner">
		<div class="container">
		    <ul class="nav">
		    	<li class="">
					<a class="brand" href="index"><strong>Xpenses Tracker</strong></a>
				</li>
		    	<li class="divider-vertical"></li>
		    	<li data-ng-class="{ active: \$state.includes('index') }">
		    		<a href="#/index"><i class="icon-home icon-white"></i>&nbsp;</a>
		    	</li>
		    	<li class="divider-vertical"></li>
		    </ul>
		    <ul class="nav pull-right">
				<li class="divider-vertical"></li>
				<li data-ng-class="{ active: \$state.includes('login') }">
					<a href="#/login">
						<i class="icon-signin"></i>&nbsp;Login
					</a>
				</li>
			</ul>
		</div>
	</div>
</div>
</nav>
