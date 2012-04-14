var cowebConfig = { 
	adminUrl: './admin', 
	cacheState : true,
    sessionImpl: 'app/Session',
    listenerImpl: 'app/Listener',
    collabImpl: 'app/Collab'
};

var zazlConfig = {
	directInject: true,
	paths : {
	   coweb : 'lib/coweb',
	   cowebx: 'lib/cowebx',
	   org : 'lib/org'
	},
	packages: [
		{
			name: 'dojo',
			location: 'lib/dojo'
		},
		{
			name: 'dijit',
			location: 'lib/dijit'
		},
		{
			name: 'dojox',
			location: 'lib/dojox'
		}
	]
};

require(["app/application"]);
