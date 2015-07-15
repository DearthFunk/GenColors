angular
	.module('editorModule')
    .directive('convertDemo', convertDemo);

	function convertDemo() {
		return {
			restrict: 'A',
			replace: true,
			templateUrl:'editor/convert/convert.html',
			controller: convertController,
			bindToController: true
		};
	}

	convertController.$inject = ['$scope', 'genColors'];

	function convertController($scope, genColors) {
        $scope.genColors = genColors;
        $scope.toConvert = '#FF0000';
        $scope.opacity = 1;
    }
