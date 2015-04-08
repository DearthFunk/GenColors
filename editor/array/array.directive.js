angular
	.module('editorModule')
    .directive('arrayDemo', arrayDemo);

	function arrayDemo() {
		return {
			restrict: 'A',
			replace: true,
			templateUrl:'editor/array/array.html',
			controller: arrayDemoController,
			bindToController: true
		}
	}

	arrayDemoController.$inject = ['$scope', 'genColors'];

	function arrayDemoController($scope, genColors) {
        $scope.genColors = genColors;
        $scope.c1 = '#FF0000';
        $scope.c2 = 'rgb(0,0,255)';
        $scope.o1 = 0;
        $scope.o2 = 1;
        $scope.len = 5;
    }
