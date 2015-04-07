angular.module('randomDemoModule', [])

    .directive('randomDemo', function (clr) {
        return {
            restrict:'C',
            templateUrl:'editor/random/random.html',
            replace: true,
	        link: function(scope)	{

                scope.clr = clr;
                scope.grey = false;

            }
        }
    });
