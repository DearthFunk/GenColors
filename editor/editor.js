angular.module('editorModule', [])

    .directive('editor', function (clr,$timeout) {
        return {
            restrict:'C',
            templateUrl:'editor/editor.html',
            replace: true,
            link: function(scope,element)	{

                var windowPadding = 20;
	            var boundingRect = element[0].getBoundingClientRect();
                var startX, startY, moving, windowSize,right,bottom;
                var clipBoard = new ZeroClipboard( document.getElementById("copyButton") );

	            scope.activeControls = -1;
	            scope.left = windowPadding;
	            scope.top = windowPadding;
	            scope.clr = clr;
	            scope.minimized = true;

                scope.data = [
                    {name:"RANDOM"},
                    {name:"CONVERT"},
                    {name:"BETWEEN",data:{
                        hex:{ c1: clr.random.rgb(), c2: clr.random.rgb(), val:''},
                        rgb:{ c1: clr.random.hex(), c2: clr.random.hex(), val:''},
                        hsl:{ c1: clr.random.rgba(), c2: clr.random.hsl(), val:''},
                        rgba:{c1: clr.random.rgb(), c2: clr.random.hex(), o1: 0, o2: 1, val:''},
                        hsla:{c1: clr.random.rgba(), c2:clr.random.hex(), o1: 0, o2: 1, val:''}}
                    },
                    {name:"ARRAY",data:{
                        hex:{ c1: clr.random.rgb(), c2: clr.random.rgb(), len: 5, val:''},
                        rgb:{ c1: clr.random.hex(), c2: clr.random.hex(), len: 5, val:''},
                        hsl:{ c1: clr.random.rgba(), c2: clr.random.hsl(), len: 5, val:''},
                        rgba:{c1: clr.random.rgb(), c2: clr.random.hex(), len: 5, o1: 0, o2: 1, val:''},
                        hsla:{c1: clr.random.rgba(), c2:clr.random.hex(), len: 5, o1: 0, o2: 1, val:''}}
                    }
                ];

                function adjustWindowSize() {
                    windowSize = {
                        width: document.body.clientWidth,
                        height: document.body.clientHeight
                    };
                    if (scope.left > windowSize.width-windowPadding) { scope.left = windowPadding; }
                    if (scope.top > windowSize.height-windowPadding) { scope.top = windowPadding;  }
                    right = windowSize.width - boundingRect.width - windowPadding;
                    bottom = windowSize.height - boundingRect.height - windowPadding;

                }
                scope.$on('resizeEvent',function(){
                    adjustWindowSize();
                    scope.$apply();
                });
                adjustWindowSize();


                scope.toggleMinimize = function(e) {
                    e.preventDefault();
                    scope.minimized = !scope.minimized;
                };

                scope.selectControls = function(index) {
                    scope.activeControls = scope.activeControls == index ? -1 : index;
                };

                scope.moveModule = function(event) {
                    moving = true;
                    boundingRect = element[0].getBoundingClientRect();
                    startX = event.clientX;
                    startY = event.clientY;
                    right = windowSize.width - boundingRect.width - windowPadding;
                    bottom = windowSize.height - boundingRect.height - windowPadding;
                };

                scope.$on('mouseUpEvent', function() {
                    document.body.style.cursor = "auto";
                    moving = false;
                });

                scope.$on('mouseMoveEvent', function(event, args) {
                    if (moving) {
                        var newTop = boundingRect.top - startY + args.clientY;
                        var newLeft = boundingRect.left - startX + args.clientX;
                        scope.left = newLeft < windowPadding ? windowPadding : (newLeft + boundingRect.width + windowPadding > windowSize.width) ? right : newLeft;
                        scope.top =   newTop < windowPadding ? windowPadding : (newTop + boundingRect.height + (windowPadding*2) > windowSize.height) ? bottom : newTop;
                        scope.$apply();
                    }
                });

           }
        }
    });
