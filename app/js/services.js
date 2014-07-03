'use strict';

/* Services */


// Demonstrate how to register services
// In this case it is a simple value service.
angular.module('myApp.services', []).
  value('version', '0.1')
.value('settings', {
	maxDescriptionLength : 50,
	maxResults : 3
});