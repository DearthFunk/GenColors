angular
	.module('editorModule')
    .directive('randomDemo', randomDemo);

	function randomDemo() {
		return {
			restrict: 'A',
			replace: true,
			templateUrl:'editor/random/random.html',
			controller: randomController,
			bindToController: true
		};
	}

	randomController.$inject = ['$scope', 'genColors', 'RETURN_TYPE'];

	function randomController($scope, genColors, RETURN_TYPE) {
		$scope.RETURN_TYPE = RETURN_TYPE;
		$scope.genColors = genColors;
		$scope.grey = false;
    }
