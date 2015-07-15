angular
	.module('editorModule')
    .directive('betweenDemo', betweenDemo);

	function betweenDemo() {
		return {
			restrict: 'A',
			replace: true,
			templateUrl:'editor/between/between.html',
			controller: betweenController,
			bindToController: true
		};
	}

	betweenController.$inject = ['$scope', 'genColors'];

	function betweenController($scope, genColors) {
        $scope.genColors = genColors;
        $scope.c1 = '#FF0000';
        $scope.c2 = 'rgb(0,0,255)';
        $scope.o1 = 0;
        $scope.o2 = 1;
    }
