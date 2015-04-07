angular
	.module('editorModule')
    .directive('betweenDemo', betweenDemo);

	function betweenDemo() {
		var directive = {
			restrict: 'A',
			scope: {},
			replace: true,
			templateUrl:'editor/between/between.html',
			controller: betweenController,
			bindToController: true
		};
		return directive
	}

	betweenController.$inject = ['$scope', 'clr'];

	function betweenController($scope, clr) {
        $scope.clr = clr;
        $scope.c1 = '#FF0000';
        $scope.c2 = 'rgb(0,0,255)';
        $scope.o1 = 0;
        $scope.o2 = 1;
    }
