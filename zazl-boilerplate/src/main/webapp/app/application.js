//
// Cooperative app.
//
// Copyright (c) The Dojo Foundation 2011. All Rights Reserved.
//
define(
	//App-specific dependencies
	[
	    'dojo',
		'coweb/main',
		'dojo/parser',
        'cowebx/dojo/BusyDialog/BusyDialog',
		'dijit/layout/BorderContainer',
		'dijit/layout/ContentPane'
	],
	function(dojo, coweb, parser, BusyDialog) {
		console.log("hello");
		// parse declarative widgets
	   	parser.parse(dojo.body());

	   	// get a session instance
	    var sess = coweb.initSession();
	    
	   	// create BusyDialog for session
	    BusyDialog.createBusy(sess);
	    
	    // do the prep
	    sess.prepare();
	}
);