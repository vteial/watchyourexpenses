<% 
include 'testTop.gsp'
request.jsScriptPath = 'test.js'
%>

<section data-ng-controller="testController">
	<p>Welcome to test!</p>
</section> 
 
<%
include 'testBottom.gsp'
%>