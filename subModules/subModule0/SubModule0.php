<!DOCTYPE html>
<html lang="en">
<head>
  <title>Event Propogator</title>
  <!--
      NOTE: the load of the jquery library here is a test for this 
      specific system, and should be truncated off the module in
      order to satisfy the ajax .load() defaults.
   -->
<!-- <script type="text/javascript" src="jquery-3.1.slim.min.js"></script> -->

</head>
<body>
	<div id="submodule_basic">
		<form>
		  <input id="input0" type="text"/>
		  <button id="button0">submit</button>
		</form>
	</div>
<div id="footer"></div>

<!-- load scripts here -->
<!-- 
	NOTE: if we load scripts here like we would normally do, they will 
	generate an error if using the standard .load() method of ajax.  
	The issue stems from the fact that without a "suffixed selector 
	expression," .load() will actually attempt to run the scripts that the 
	loaded material contains.  It does this by passing the new data through 
	the .html() method before it begins its insertion into the DOM.  Since
	ajax is asyncronyous, it is possible that more than one script could 
	be running at the same time.  This behavior has been deemed bad for
	the user and so this strategy is deprecated.  Thus a new strategy
	must be created.... see the php submodule tests for examples. 
-->
<!-- <script type="text/javascript" src="jquery-3.1.slim.min.js"></script> -->
<!-- <script type="text/javascript" src="CustomEvent.js"></script> -->
<!-- <script type="text/javascript" src="customizedEvents.js"></script> -->

<!-- 
	However, you can actually load scripts directly by writing the script 
	out in the submodule.

	NOTE: this is not a self contained module due to the fact that 
	the includes for jquery and etc are not included in the script here
	I have a solution for that as well. 
-->
<script>
	$('#button0').on('click', function(event){
		event.preventDefault();
		event.stopPropagation();
		
		alert ($('#input0').val());

	});
</script>

</body>
</html>