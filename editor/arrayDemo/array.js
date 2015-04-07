angular.module('arrayDemoModule', [])

    .directive('arrayDemo', function (clr,$timeout) {
        return {
            restrict:'C',
            templateUrl:'editor/arrayDemo/array.html',
            replace: true,
	        link: function(scope)	{

                scope.clr = clr;
                scope.c1 = "#FF0000";
                scope.c2 = "rgb(0,0,255)";
                scope.o1 = 0;
                scope.o2 = 1;
                scope.len = 5;

            }
        }
    });
