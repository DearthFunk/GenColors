angular.module('convertDemoModule', [])

    .directive('convertDemo', function (clr) {
        return {
            restrict:'C',
            templateUrl:'editor/convert/convert.html',
            replace: true,
	        link: function(scope)	{

		        scope.clr = clr;
                scope.toConvert = '#FF0000';
                scope.opacity = 1;


            }
        }
    });
