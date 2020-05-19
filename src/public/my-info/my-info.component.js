(function () {
	"use strict";

	angular.module('public')
	.component('myInfoCtrl', {
		templateUrl: 'src/public/my-info/my-info.html',
		bindings: {
			userInfo: '<'
		}
	})
})();