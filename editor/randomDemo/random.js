angular.module('randomDemoModule', [])

    .directive('randomDemo', function (clr) {
        return {
            restrict:'C',
            templateUrl:'editor/randomDemo/random.html',
            replace: true,
	        link: function(scope)	{

                scope.clr = clr;
                scope.grey = false;

            }
        }
    });
