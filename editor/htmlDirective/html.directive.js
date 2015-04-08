angular
	.module('editorModule')
	.directive('html', html);

	function html() {
		return {
			restrict: 'E',
			controller: htmlController,
			bindToController: true
		};
	}

	htmlController.$inject = ['$element', '$window', '$rootScope'];

	function htmlController($element, $window, $rootScope){
		$window.onblur = onBlur;
		$window.onresize = onResize;
		$window.onbeforeunload = onBeforeUnload;

		$element.bind('mousemove',mouseMove);
		$element.bind('mousedown',mouseDown);
		$element.bind('mousewheel',mouseWheel);
		$element.bind('mouseup',mouseUp);
		$element.bind('keydown', keyDown);
		$element.bind('keyup', keyUp);

		//////////////////////////////////////////

		function onBlur(e){
			$rootScope.$broadcast('loseFocusEvent',e);
		}
		function onResize(e){
			$rootScope.$broadcast('resizeEvent',e);
		}
		function onBeforeUnload(e){
			$rootScope.$broadcast('unloadEvent',e);
		}
		function mouseMove(e){
			$rootScope.$broadcast('mouseMoveEvent',e);
		}
		function mouseDown(e){
			$rootScope.$broadcast('mouseDownEvent',e);
		}
		function mouseWheel(e){
			$rootScope.$broadcast('mouseWheelEvent',e);
		}
		function mouseUp(e){
			$rootScope.$broadcast('mouseUpEvent',e);
		}
		function keyDown(e){
			if (e.target.localName !== 'input') {
				e.preventDefault();
				$rootScope.$broadcast('keyDownEvent',e);
			}
		}
		function keyUp(e){
			if (e.target.localName !== 'input'){
				e.preventDefault();
				$rootScope.$broadcast('keyUpEvent',e);
			}
		}
	}