<% 
request.jsScriptPath = 'test.js'

include 'topHtml.gsp'
%>

<section class="container" data-ng-controller="testController">

<p>Welcome to test!</p>

<angular-table class="table" 
	model="[ { id: 1, name: 'Bob', street: '1 street ave' } ]" 
    filter-query-model="filterQuery" default-sort-column="id">
    <header-row>
        <header-column sortable="true" sort-field-name="id">
            <div style="display: inline-block;">Id</div>
            <sort-arrow-ascending></sort-arrow-ascending>
            <sort-arrow-descending></sort-arrow-descending>
        </header-column>
        <header-column sortable="false" sort-field-name="name">
            Name
        </header-column>
        <header-column sortable="true" sort-field-name="street">
            <div style="display: inline-block;">Street</div>
            <sort-arrow-ascending></sort-arrow-ascending>
            <sort-arrow-descending></sort-arrow-descending>
        </header-column>
    </header-row>

    <row on-selected="handleRowSelection(row)" selected-color="#87cefa" 
        even-color="#ffffff" odd-color="#eeeeee">
        <column>{{ row.id }}</column>
        <column>{{ row.name }}</column>
        <column>{{ row.street }}</input></column>
    </row>
</angular-table>

<!-- 
<div class="demoDetailPane">
	<div class="demoDetailInnerPane">
	    <p>Id: {{ selectedRow.id }}</p>
	    <p>Name: <input type="text" ng-model="selectedRow.name"></input></p>
	    <p>Street: <input type="text" ng-model="selectedRow.street"></input></p>
	
	    <p><button ng-click="addRows(1)">Add Row To End</button></p>
	    <p><button ng-click="listOfNumbers.pop()">Remove Last Row</button></p>
	    <p><button ng-click="listOfNumbers = []">Remove All Rows</button></p>
	    <p><button ng-click="addRows(50)">Add 50 Rows</button></p>
	</div>
</div>
-->        	
</section> 
 
<%
include 'bottomHtml.gsp'
%>