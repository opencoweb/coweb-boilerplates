#Coweb + Dojo1.7 Boilerplate

##About

This boilerplate is a working, generic, AMD-formatted web application that has the OpenCoweb, RequireJS, and Dojo frameworks already configured and working. It is meant to serve as a starting point for any future applications developed for the OpenCoweb framework using Dojo 1.7 with RequireJS so that minimal or no setup is required.

##Quick Start

1. If you haven't already, follow [these instructions](http://opencoweb.org/ocwdocs/tutorial/install.html) to deploy a Coweb instance.
2. Clone repository and initialize Dojo submodules in the coweb deployment directory:

```console
$ git clone git@github.com:opencoweb/coweb-boilerplates
$ cd coweb-boilerplates/dojo1.7-boilerplate
$ git submodule init
$ git submodule update
```
3. Start a coweb server instance.
4. Visit the app in your browser.

##A Brief Tour

The structure of this directory is extremely straight forward. The following files are all you need to worry about when developing:

* ```index.html``` : serves as the main html file of the application
* ```application.js``` : serves as the main javascript file of the application
* ```application.css``` : serves as the main CSS of the application
* ```main.js``` : serves as the bootstrap file for the application (holds dependency list)

The following files are simply part of the configuration and shouldn't be modified:

* ```i18n.js``` : the current Dojo i18n.js isn't supported by requireJS and AMD loading in general, so this i18n script file is AMD-specific plugin that allows for internationalization.

##Important Development Notes

* In the bootstrap file, ```main.js``` , the global dependency 'org/cometd' should be uncommented only if you are using a [Developer's Setup](https://github.com/opencoweb/coweb/wiki/Developer-Setup).
* The file ```dojo/i18n.js``` currently has a bug (Dojo's, not ours) and needs to be patched before this boilerplate will function: on line 148, the change the following line from:

```
return require.toAbsMid(mid);
```

to:

```
return mid;
```

##License

Copyright (c) The Dojo Foundation 2011. All Rights Reserved.
