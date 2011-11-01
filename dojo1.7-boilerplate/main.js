//
// Main app config file. 
//
// Copyright (c) The Dojo Foundation 2011. All Rights Reserved.
//

var cowebConfig = { adminUrl: '../admin' };
var dojoConfig = {
    parseOnLoad: false,
    mblAlwaysHideAddressBar: true
};

require({
	paths : {
        coweb : '../lib/coweb',
        org : '../lib/org'
    },
    packages:[{
        name: 'dojo',
        location:'dojo',
        main:'./main',
        lib: '.'
    },
    {
        name: 'dijit',
        location:'dijit',
        main:'./main',
        lib: '.'
    },
    {
        name: 'dojox',
        location:'dojox',
        main:'./main',
        lib: '.'
    }]
}, [
	//Global
	//'org/cometd',  *Uncomment if using Developer Setup
    'dojo', 
	'dijit',
	'dojox',

	//App itself
	'application'
]);
