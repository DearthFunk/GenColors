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

	randomController.$inject = ['$scope', 'genColors'];

	function randomController($scope, genColors) {
		$scope.genColors = genColors;
		$scope.grey = false;
    }
