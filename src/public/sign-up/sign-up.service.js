(function () {
	"use strict";

	angular.module('public')
	.service('SignUpService', SignUpService);

	SignUpService.$inject = ['$http', 'ApiPath'];
	function SignUpService($http, ApiPath) {
		var service = this;

		service.saveSignUpInfo = function(userInfo) {
			service.userInfo = userInfo;
	  };

	  service.getSignUpInfo = function() {
	  	return service.userInfo;
	  }
	};
})();


