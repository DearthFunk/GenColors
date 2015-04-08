angular
	.module('editorModule', [])
	.directive('editor', editor);

function editor() {
	var directive = {
		restrict: 'A',
		replace: true,
		templateUrl:'editor/editor.html',
		controller: editorController,
		bindToController: true
	};
	return directive
}

editorController.$inject = ['$scope', '$element', '$window', 'genColors'];

function editorController($scope, $element, $window, genColors) {

	var windowPadding = 20;
	var boundingRect = $element[0].getBoundingClientRect ();
	var startX, startY, moving, windowSize, right, bottom;
	var clipBoard = new ZeroClipboard (document.getElementById ('copyButton'));

	$scope.activeControls = -1;
	$scope.left = windowPadding;
	$scope.top = windowPadding;
	$scope.selectControls = selectControls;
	$scope.moveModule = moveModule;
	$scope.data = [
		{name: 'RANDOM'},
		{name: 'CONVERT'},
		{name: 'BETWEEN', data: {
			hex: {c1: genColors.random.rgb (), c2: genColors.random.rgb (), val: ''},
			rgb: {c1: genColors.random.hex (), c2: genColors.random.hex (), val: ''},
			hsl: {c1: genColors.random.rgba (), c2: genColors.random.hsl (), val: ''},
			rgba: {c1: genColors.random.rgb (), c2: genColors.random.hex (), o1: 0, o2: 1, val: ''},
			hsla: {c1: genColors.random.rgba (), c2: genColors.random.hex (), o1: 0, o2: 1, val: ''}}
		},
		{name: 'ARRAY', data: {
			hex: {c1: genColors.random.rgb (), c2: genColors.random.rgb (), len: 5, val: ''},
			rgb: {c1: genColors.random.hex (), c2: genColors.random.hex (), len: 5, val: ''},
			hsl: {c1: genColors.random.rgba (), c2: genColors.random.hsl (), len: 5, val: ''},
			rgba: {c1: genColors.random.rgb (), c2: genColors.random.hex (), len: 5, o1: 0, o2: 1, val: ''},
			hsla: {c1: genColors.random.rgba (), c2: genColors.random.hex (), len: 5, o1: 0, o2: 1, val: ''}}
		}
	];

	$scope.$on ('resizeEvent', adjustWindowSize);
	$scope.$on ('mouseUpEvent', mouseUpEvent);
	$scope.$on ('mouseMoveEvent', mouseMoveEvent);

	adjustWindowSize();

	///////////////////////////////////////////////////////////

	function adjustWindowSize () {
		windowSize = {
			width: $window.innerWidth,
			height: $window.innerHeight
		};
		right = windowSize.width - boundingRect.width - windowPadding;
		bottom = windowSize.height - boundingRect.height - windowPadding;
	}
	function selectControls(index) {
		$scope.activeControls = $scope.activeControls === index ? -1 : index;
	}

	function moveModule(e) {
		moving = true;
		boundingRect = $element[0].getBoundingClientRect ();
		startX = e.clientX;
		startY = e.clientY;
		right = windowSize.width - boundingRect.width - windowPadding;
		bottom = windowSize.height - boundingRect.height - windowPadding;
	}

	function mouseUpEvent() {
		moving = false;
	}

	function mouseMoveEvent(e, args) {
		e.preventDefault();
		if (moving) {
			var newTop = boundingRect.top - startY + args.clientY;
			var newLeft = boundingRect.left - startX + args.clientX;
			$scope.left = newLeft < windowPadding ? windowPadding : (newLeft + boundingRect.width + windowPadding > windowSize.width) ? right : newLeft;
			$scope.top = newTop < windowPadding ? windowPadding : (newTop + boundingRect.height + (windowPadding * 2) > windowSize.height) ? bottom : newTop;
			$scope.$apply ();
		}
	}
}