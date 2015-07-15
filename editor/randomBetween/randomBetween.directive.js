angular
	.module('editorModule')
    .directive('randomBetweenDemo', randomBetweenDemo);

	function randomBetweenDemo() {
		return {
			restrict: 'A',
			replace: true,
			templateUrl:'editor/randomBetween/randomBetween.html',
			controller: randomBetweenController,
			bindToController: true
		};
	}

	randomBetweenController.$inject = ['$scope', 'genColors'];

	function randomBetweenController($scope, genColors) {
		$scope.genColors = genColors;
		$scope.c1 = '#FF0000';
		$scope.c2 = 'rgb(0,0,255)';
		$scope.o1 = 0;
		$scope.o2 = 1;
    }
