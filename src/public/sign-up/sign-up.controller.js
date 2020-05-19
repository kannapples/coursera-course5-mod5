(function () {
	"use strict";

	angular.module('public')
	.controller('SignUpController', SignUpController);

	// SignUpController.$inject = ['SignUpService'];
		SignUpController.$inject = ['$http', 'ApiPath', 'SignUpService'];
	function SignUpController($http, ApiPath, SignUpService){
		var $ctrl = this;

		$ctrl.saveSignUpInfo = function(){
	    return $http
	    	.get(ApiPath + '/menu_items/'+$ctrl.userInfo.favdish.short_name+'.json')
	    	.then(function (response) {
	    		$ctrl.favdisherror = false;

	    		$ctrl.userInfo.favdish = response.data;
	    		SignUpService.saveSignUpInfo($ctrl.userInfo);
	    		$ctrl.infoSaved = true;
		      return response.data;
	    	})
	    	.catch(function (response) {
	    		$ctrl.favdisherror = true;
	    		throw response;
	    	})
			// SignUpService.saveSignUpInfo($ctrl.favDish);
		};

	};
})();