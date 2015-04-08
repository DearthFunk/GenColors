angular
	.module('genColors', [
        'clrServiceModule',
        'eventServiceModule',
	    'editorModule'
	])
	.controller('genColorsController', genColorsController);

	genColorsController.$inject = ['$scope', '$window'];

	function genColorsController($scope, $window) {

		$scope.sliceWidth = 0;
		$scope.arrayBackground = false;
		$scope.background = { color:'#FF0000' };
	
		$scope.getBackground = getBackground;
		$scope.updateBackground = updateBackground;
		$scope.$watch('background.color', $scope.updateBackground);

		///////////////////////////////////////

		function getBackground() {
			return angular.isArray($scope.background.color) ? '' : $scope.background.color
		}
	
		function updateBackground(){
			$scope.arrayBackground = angular.isArray($scope.background.color);
			$scope.sliceWidth = $window.innerWidth / $scope.background.color.length;
		}
	}