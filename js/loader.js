/*
 * This block is an example of a function that will run as soon as 
 * the html document is done loading.  In this specific block we 
 * load "sub modules" in order to test the complexities that come
 * with different forms of dynamically generated html.  The main
 * source of this html will be ajax, as this is the easiest way I
 * know of to send out events to PHP pages which can respond server
 * side and build HTML pages on demand. 
 *
 * There are many other short hand notations for this function.
 *
 * 1. $().ready(function(){
 *
 *    });
 *
 * 2. $(function() {     <---- this is the most common
 *        Code here 
 *    });
 *
 * 3. jQuery(function($) { <----- isolates the $ symbol from global scope
 *        $(tag). regular javascript / jquery here 
 *    });
 */

$(document).ready(function(){
	
	load_direct();
	// load_text_ajax();
	load_json_ajax();

	$(document).on('SMClick', 'click', function(){
		console.log(this.id);
	});
});

function load_direct () {
	$('#direct_load_target').load('submodules/subModule0/SubModule0.php', function() {
		alert( "Load was performed." );
	});
}

function load_text_ajax () {
	$('#ajax_text_target').load('submodules/subModule1/SubModule1.html', function() {
  		alert( "Load was performed." );
	});
}

function load_json_ajax () {

    var jsonObj = 
    $(form_id).serializeArray()
    .reduce(function(a, x) { a[x.name] = x.value; return a; }, {})
    // console.log(jsonObj);

    $.ajax({ 
        url: target_address,
        data: { post_var : jsonObj },
        type: 'post',
        dataType: 'json',
        success:
            function (return_value) {  /* automatically runs this on success */
                if (return_value[0] == "success") {
                    // console.log(return_value);
                    $('#main_body').load("user_registration_success.php");
                } else if (return_value[0] == "Email already registered\n") {
                    $('#main_body').load("needs_activation.php");
                } else {
                    alert 
                        ( "REGISTRATION FAILURE\n" 
                        + "--------------------------------------------------------------------------------------------------------------\n"
                        + return_value[0]
                        + "--------------------------------------------------------------------------------------------------------------\n"
                        );  
                } 
            },
        error: 
            function(req, error){
                if (error === 'error'){error = req.statusText;}
                var errormsg = 'in handle_form function ajax failure (user_register.js): '+ error;
                alert (errormsg);
            }
    }); /* end of ajax call */
}