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
		'dijit/layout/BorderContainer',
		'dijit/layout/ContentPane'
	],
	function(dojo, coweb, parser) {
		// parse declarative widgets
	   	parser.parse(dojo.body());

	   	// get a session instance
	    var sess = coweb.initSession();
	    // do the prep
	    sess.prepare();
	}
);