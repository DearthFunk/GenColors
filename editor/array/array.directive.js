angular
	.module('editorModule')
    .directive('arrayDemo', arrayDemo);

	function arrayDemo() {
		var directive = {
			restrict: 'A',
			scope: {},
			replace: true,
			templateUrl:'editor/array/array.html',
			controller: arrayDemoController,
			bindToController: true
		};
		return directive
	}

	arrayDemoController.$inject = ['$scope', 'clr'];

	function arrayDemoController($scope, clr) {
        $scope.clr = clr;
        $scope.c1 = '#FF0000';
        $scope.c2 = 'rgb(0,0,255)';
        $scope.o1 = 0;
        $scope.o2 = 1;
        $scope.len = 5;
    }
