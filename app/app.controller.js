angular
	.module('genColors', [
        'clrServiceModule',
        'eventServiceModule',
	    'editorModule',
            'arrayDemoModule',
            'betweenDemoModule',
            'convertDemoModule',
            'randomDemoModule'
	])
	.controller('genColorsController', genColorsController);

	genColorsController.$inject = ['$scope', '$window'];

	function genColorsController($scope, $window) {

		$scope.sliceWidth = 0;
		$scope.arrayBackground = false;
		$scope.background = { color:'#FF0000' };
	
		$scope.getBackground = getBackground;
		$scope.$watch('background.color', updateBackground);

		///////////////////////////////////////

		function getBackground() {
			return angular.isArray($scope.background.color) ? '' : $scope.background.color
		}
	
		function updateBackground(){
			$scope.arrayBackground = angular.isArray($scope.background.color);
			$scope.sliceWidth = $window.innerWidth / $scope.background.color.length;
		}
	}