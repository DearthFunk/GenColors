angular.module('betweenDemoModule', [])

    .directive('betweenDemo', function (clr) {
        return {
            restrict:'C',
            templateUrl:'editor/between/between.html',
            replace: true,
	        link: function(scope)	{

                scope.clr = clr;
                scope.c1 = '#FF0000';
                scope.c2 = 'rgb(0,0,255)';
                scope.o1 = 0;
                scope.o2 = 1;

            }
        }
    });
