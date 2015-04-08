angular
	.module('editorModule')
    .directive('convertDemo', convertDemo);

	function convertDemo() {
		var directive = {
			restrict: 'A',
			replace: true,
			templateUrl:'editor/convert/convert.html',
			controller: convertController,
			bindToController: true
		};
		return directive
	}

	convertController.$inject = ['$scope', 'clr'];

	function convertController($scope, clr) {
        $scope.clr = clr;
        $scope.toConvert = '#FF0000';
        $scope.opacity = 1;
    }
