angular
	.module('eventServiceModule',[])
	.directive('html', function(eventService, $window){
		return {
			restrict: 'E',
			link: function(scope,element){
				window.onblur = function()                { eventService.loseFocus();       };
				element.bind('mousemove', function(event) {	eventService.mouseMove(event);	});
				element.bind('mousedown', function(event) {	eventService.mouseDown(event);	});
				element.bind('mousewheel', function(event){	eventService.mouseWheel(event);	});
				element.bind('mouseup', function(event)   {	eventService.mouseUp(event);	    });

				//event.target.localName checks to prevent any triggers when you are typing into an input box
				element.bind('keydown', function(event)   {	 if (event.target.localName != 'input') {event.preventDefault(); eventService.keyDown(event);} });
				element.bind('keyup', function(event)     {	 if (event.target.localName != 'input') {event.preventDefault(); eventService.keyUp(event);}	});

                $window.onresize = function(event) {
                    eventService.resize(event);
                };


                $window.onbeforeunload = function(){

                };
            }
		}
	})

	.service('eventService', function($rootScope){
		this.mouseDown =  function(event) { $rootScope.$broadcast('mouseDownEvent',  event); };
		this.mouseUp   =  function(event) { $rootScope.$broadcast('mouseUpEvent',    event); };
		this.mouseMove =  function(event) { $rootScope.$broadcast('mouseMoveEvent',  event); };
		this.mouseWheel = function(event) { $rootScope.$broadcast('mouseWheelEvent', event); };
		this.loseFocus =  function(event) { $rootScope.$broadcast('loseFocusEvent',  event); };
		this.keyDown =    function(event) { $rootScope.$broadcast('keyDownEvent',    event); };
		this.keyUp =      function(event) { $rootScope.$broadcast('keyUpEvent',      event); };
        this.resize =      function(event) { $rootScope.$broadcast('resizeEvent',      event); };
	});