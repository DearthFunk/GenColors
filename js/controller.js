var genColors = angular.module('genColors', [
    "clrServiceModule",
    "eventServiceModule",

    "editorModule",
        "arrayDemoModule",
        "betweenDemoModule",
        "convertDemoModule",
        "randomDemoModule"
])

	.directive('body', function($window){
		return {
			link: function(scope)	{
                scope.background = {
                    color:"#FF0000"
                };

                scope.arrayBackground = false;
                scope.sliceWidth = 0;

                scope.getBackground = function() {
                    return angular.isArray(scope.background.color) ? '' : scope.background.color
                };

                scope.$watch('background.color',function(){
                    scope.arrayBackground = angular.isArray(scope.background.color);
                    scope.sliceWidth = $window.innerWidth / scope.background.color.length;
                });

				/*
								console.log('GET.randomNumber :',clr.get.randomNumber(2,5,2),clr.get.randomNumber(-2,-5,5),clr.get.randomNumber(-2,5));
								console.log('GET.roundedNumber:',clr.get.roundedNumber(2.12345,2),clr.get.roundedNumber(2.12345,0));
								console.log('GET.colorType    :',clr.get.colorType('#FFFFFF'), clr.get.colorType('arrayDemo(0,0,0)'), clr.get.colorType('rgba(0,0,0,0)'),clr.get.colorType('hsl(120,50%,0%)'),clr.get.colorType('hsla(120,50%,0%,0.4)'));
								console.log('GET.colorType    :',clr.get.colorType('#FFFFFF'), clr.get.colorType('RGB(0,0,0)'), clr.get.colorType('RGBA(0,0,0,0)'));
								console.log(' ');

								console.log('CONVERT.numberToHex :',clr.convert.numberToHex(255),clr.convert.numberToHex(0),clr.convert.numberToHex(100),clr.convert.numberToHex(-10),clr.convert.numberToHex(455));
								console.log('CONVERT.hexToNumber :',clr.convert.hexToNumber("00"),clr.convert.hexToNumber("fF"),clr.convert.hexToNumber("ZZ"),clr.convert.hexToNumber("$$0"));
								console.log(' ');

								console.log("GET.values");
								console.log('  rgba:',clr.get.values("rgba(10,20,30,0.4)",0),clr.get.values("rgba(10,20,30,0.4)",1),clr.get.values("rgba(10,20,30,0.4)",2));
								console.log('  arrayDemo :',clr.get.values("arrayDemo(10,20,30)",0),clr.get.values("arrayDemo(10,20,30)",1),clr.get.values("arrayDemo(10,20,30)",2));
								console.log('  hsla:',clr.get.values("hsla(120,50%,0%,0.4)",0),clr.get.values("hsla(120,50%,0%,0.4)",1),clr.get.values("hsla(120,50%,0%,0.4)",2));
								console.log('  hsla:',clr.get.values("hsla(120,50%,0%,0.4)",0,true),clr.get.values("hsla(120,50%,0%,0.4)",1,true),clr.get.values("hsla(120,50%,0%,0.4)",2,true));
								console.log('  hsl :',clr.get.values("hsl(120,50%,0%)",0),clr.get.values("hsl(120,50%,0%)",1),clr.get.values("hsl(120,50%,0%)",2));
								console.log('  hsl :',clr.get.values("hsl(120,50%,0%)",0,true),clr.get.values("hsl(120,50%,0%)",1,true),clr.get.values("hsl(120,50%,0%)",2,true));
								console.log('  betweenDemo :',clr.get.values("#00FF00",0),clr.get.values("#00FF00",1),clr.get.values("#00FF00",2));
								console.log('  betweenDemo :',clr.get.values("#F00",0),clr.get.values("#F00",1),clr.get.values("#F00",2));
								console.log(' ');

								console.log("RANDOM");
								console.log('  betweenDemo :',clr.random.betweenDemo(0,false),clr.random.betweenDemo(1,false),clr.random.betweenDemo(2,false),clr.random.betweenDemo(0,true), clr.random.betweenDemo(1,true), clr.random.betweenDemo(2,true));
								console.log('  arrayDemo :',clr.random.arrayDemo(0,false),clr.random.arrayDemo(1,false),clr.random.arrayDemo(2,false),clr.random.arrayDemo(0,true), clr.random.arrayDemo(1,true), clr.random.arrayDemo(2,true));
								console.log('  rgba:',clr.random.rgba(0,false),clr.random.rgba(1,false),clr.random.rgba(2,false),clr.random.rgba(0,true), clr.random.rgba(1,true), clr.random.rgba(2,true));
								console.log('  rgba:',clr.random.rgba(0,true,0.5), clr.random.rgba(1,true,0.5), clr.random.rgba(2,true,0.5),clr.random.rgba(0,false,0.5),clr.random.rgba(1,false,0.5),clr.random.rgba(2,false,0.5));
								console.log('  hsl :',clr.random.hsl(0,false),clr.random.hsl(1,false),clr.random.hsl(2,false),clr.random.hsl(0,true), clr.random.hsl(1,true), clr.random.hsl(2,true));
								console.log('  hsla:',clr.random.hsla(0,false),clr.random.hsla(1,false),clr.random.hsla(2,false),clr.random.hsla(0,true), clr.random.hsla(1,true), clr.random.hsla(2,true));
								console.log('  hsla:',clr.random.hsla(0,true,0.5), clr.random.hsla(1,true,0.5), clr.random.hsla(2,true,0.5),clr.random.hsla(0,false,0.5),clr.random.hsla(1,false,0.5),clr.random.hsla(2,false,0.5));
								console.log(' ');

								console.log("CONVERT.betweenDemo");
								console.log('  betweenDemo :',clr.convert.betweenDemo("#F00"));
								console.log('  betweenDemo :',clr.convert.betweenDemo("#FF00FF"));
								console.log('  arrayDemo :',clr.convert.betweenDemo("arrayDemo(0,255,100)"));
								console.log('  rgba:',clr.convert.betweenDemo("rgba(0,255,100,0.5)"));
								console.log('  hsl :',clr.convert.betweenDemo("hsl(12,100%,80%)"));
								console.log('  hsla:',clr.convert.betweenDemo("hsla(120,100%,50%,0.2)"));
								console.log(' ');

								console.log("CONVERT.arrayDemo");
								console.log('  betweenDemo :',clr.convert.arrayDemo("#F00"));
								console.log('  betweenDemo :',clr.convert.arrayDemo("#6600FF"));
								console.log('  arrayDemo :',clr.convert.arrayDemo("arrayDemo(0,255,100)"));
								console.log('  rgba:',clr.convert.arrayDemo("rgba(10,255,100,0.5)"));
								console.log('  hsl :',clr.convert.arrayDemo("hsl(12,100%,80%)"));
								console.log('  hsla:',clr.convert.arrayDemo("hsla(120,100%,50%,0.2)"));
								console.log(' ');

								console.log("CONVERT.rgba");
								console.log('  betweenDemo :',clr.convert.rgba("#F00"));
								console.log('  betweenDemo :',clr.convert.rgba("#6600FF",0.2));
								console.log('  arrayDemo :',clr.convert.rgba("arrayDemo(0,255,100)",-0.2));
								console.log('  rgba:',clr.convert.rgba("rgba(10,255,100,0.5)"));
								console.log('  hsl :',clr.convert.rgba("hsl(12,100%,80%)",2.2));
								console.log('  hsla:',clr.convert.rgba("hsla(120,100%,50%,0.2)",0.2));
								console.log(' ');

								 console.log("CONVERT.hsl");
								console.log('  betweenDemo :',clr.convert.hsl("#F00"));
								console.log('  betweenDemo :',clr.convert.hsl("#6600FF"));
								console.log('  arrayDemo :',clr.convert.hsl("arrayDemo(0,255,255)"));
								console.log('  rgba:',clr.convert.hsl("rgba(10,255,100,0.5)"));
								console.log('  hsl :',clr.convert.hsl("hsl(12,100%,80%)"));
								console.log('  hsla:',clr.convert.hsl("hsla(120,100%,50%,0.2)"));
								console.log(' ');

								console.log("CONVERT.hsla");
								console.log('  betweenDemo :',clr.convert.hsla("#F00"));
								console.log('  betweenDemo :',clr.convert.hsla("#6600FF",0.2));
								console.log('  arrayDemo :',clr.convert.hsla("arrayDemo(0,255,100)",-0.2));
								console.log('  rgba:',clr.convert.hsla("rgba(10,255,100,0.5)"));
								console.log('  hsl :',clr.convert.hsla("hsl(12,100%,80%)",2.2));
								console.log('  hsla:',clr.convert.hsla("hsla(120,100%,50%,0.2)",0.2));
								console.log(' ');

								console.log("ARRAY.betweenDemo");
								console.log("  betweenDemo-betweenDemo:"  ,clr.array.betweenDemo('#FFFFFF','#000000',5));
								console.log("  arrayDemo-arrayDemo:"  ,clr.array.betweenDemo('arrayDemo(100,200,0)','#FF00FF',3));
								console.log("  rgba-rgba:",clr.array.betweenDemo('rgba(100,200,0,0)','rgba(200,100,126,1)',5));
								console.log("  hsl-hsl:"  ,clr.array.betweenDemo('hsl(100,20%,40%)','hsl(200,100%,50%)',5));
								console.log("  hsla-hsla:",clr.array.betweenDemo('hsla(100,20%,40%,0.5)','hsla(200,100%,50%,0.3)',5));

								console.log("ARRAY.arrayDemo");
								console.log("  betweenDemo-betweenDemo:"  ,clr.array.arrayDemo('#FFFFFF','#000000',5));
								console.log("  arrayDemo-arrayDemo:"  ,clr.array.arrayDemo('arrayDemo(100,200,0)','#FF00FF',3));
								console.log("  rgba-rgba:",clr.array.arrayDemo('rgba(100,200,0,0)','rgba(200,100,126,1)',5));
								console.log("  hsl-hsl:"  ,clr.array.arrayDemo('hsl(100,20%,40%)','hsl(200,100%,50%)',5));
								console.log("  hsla-hsla:",clr.array.arrayDemo('hsla(100,20%,40%,0.5)','hsla(200,100%,50%,0.3)',5));
								console.log(" ");

								console.log("ARRAY.rgba");
								console.log("  betweenDemo-betweenDemo:"  ,clr.array.rgba('#FFFFFF','#000000',5,0,1));
								console.log("  arrayDemo-arrayDemo:"  ,clr.array.rgba('arrayDemo(100,200,0)','#FF00FF',30,-100,10));
								console.log("  rgba-rgba:",clr.array.rgba('rgba(100,200,0,0)','rgba(200,100,126,1)',5));
								console.log("  hsl-hsl:"  ,clr.array.rgba('hsl(100,20%,40%)','hsl(200,100%,50%)',5));
								console.log("  hsla-hsla:",clr.array.rgba('hsla(100,20%,40%,0.5)','hsla(200,100%,50%,0.3)',5));
								console.log(" ");

								console.log("ARRAY.hsl");
								console.log("  betweenDemo-betweenDemo:"  ,clr.array.hsl('#FFFFFF','#000000',5));
								console.log("  arrayDemo-arrayDemo:"  ,clr.array.hsl('arrayDemo(100,200,0)','#FF00FF',30));
								console.log("  rgba-rgba:",clr.array.hsl('rgba(100,200,0,0)','rgba(200,100,126,1)',5));
								console.log("  hsl-hsl:"  ,clr.array.hsl('hsl(100,20%,40%)','hsl(200,100%,50%)',5));
								console.log("  hsla-hsla:",clr.array.hsl('hsla(100,20%,40%,0.5)','hsla(200,100%,50%,0.3)',5));
								console.log(" ");

								console.log("ARRAY.hsla");
								console.log("  betweenDemo-betweenDemo:"  ,clr.array.hsla('#FFFFFF','#000000',5));
								console.log("  arrayDemo-arrayDemo:"  ,clr.array.hsla('arrayDemo(100,200,0)','#FF00FF',30));
								console.log("  rgba-rgba:",clr.array.hsla('rgba(100,200,0,0)','rgba(200,100,126,1)',5));
								console.log("  hsl-hsl:"  ,clr.array.hsla('hsl(100,20%,40%)','hsl(200,100%,50%)',5));
								console.log("  hsla-hsla:",clr.array.hsla('hsla(100,20%,40%,0.5)','hsla(200,100%,50%,0.3)',5));
								console.log(" ");
				*/
			}
		}
	});