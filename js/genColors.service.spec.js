describe("GenColors service", function(){

	var genColors, COLOR_TYPE, RETURN_TYPE;
	var hex = '#99FF00';
	var rgb = 'rgb(100,100,100)';
	var rgba = 'rgba(100,100,100,0.5)';
	var hsl = 'hsl(0,100%,50%)';
	var hsla = 'hsla(0,100%,50%,0.5)';

	beforeEach(module('genColorsServiceModule'));

	beforeEach(inject(function(_genColors_, _COLOR_TYPE_, _RETURN_TYPE_){
		COLOR_TYPE = _COLOR_TYPE_;
		RETURN_TYPE = _RETURN_TYPE_;
		genColors = _genColors_;


	}));

	// GET.COLOR
	it(".get.color type should return a color type", function(){
		expect(genColors.get.colorType(hex)).toEqual(COLOR_TYPE.HEX);
		expect(genColors.get.colorType(rgb)).toEqual(COLOR_TYPE.RGB);
		expect(genColors.get.colorType(rgba)).toEqual(COLOR_TYPE.RGBA);
		expect(genColors.get.colorType(hsl)).toEqual(COLOR_TYPE.HSL);
		expect(genColors.get.colorType(hsla)).toEqual(COLOR_TYPE.HSLA);
	});

	//GET.VALUES
	it(".get.values should return the values in a string", function() {
		expect(genColors.get.values(hex, RETURN_TYPE.STRING)).toEqual(hex.toUpperCase());
		expect(genColors.get.values(rgb, RETURN_TYPE.STRING)).toEqual(rgb.toUpperCase());
		expect(genColors.get.values(rgba, RETURN_TYPE.STRING)).toEqual(rgba.toUpperCase());
		expect(genColors.get.values(hsl, RETURN_TYPE.STRING)).toEqual(hsl.toUpperCase());
		expect(genColors.get.values(hsla, RETURN_TYPE.STRING)).toEqual(hsla.toUpperCase());
	});
	it(".get.values should return the values in an array", function() {
		expect(genColors.get.values(hex, RETURN_TYPE.ARRAY)).toEqual(['99','FF','00']);
		expect(genColors.get.values(rgb, RETURN_TYPE.ARRAY)).toEqual([100,100,100]);
		expect(genColors.get.values(rgba, RETURN_TYPE.ARRAY)).toEqual([100,100,100,0.5]);
		expect(genColors.get.values(hsl, RETURN_TYPE.ARRAY)).toEqual([0,'100%','50%']);
		expect(genColors.get.values(hsla, RETURN_TYPE.ARRAY)).toEqual([0,'100%','50%',0.5]);
	});
	it(".get.values should return the values in an object", function() {
		expect(genColors.get.values(hex, RETURN_TYPE.OBJECT)).toEqual({r:'99',g:'FF',b:'00'});
		expect(genColors.get.values(rgb, RETURN_TYPE.OBJECT)).toEqual({r:100,g:100,b:100});
		expect(genColors.get.values(rgba, RETURN_TYPE.OBJECT)).toEqual({r:100,g:100,b:100,a:0.5});
		expect(genColors.get.values(hsl, RETURN_TYPE.OBJECT)).toEqual({h:0,s:'100%',l:'50%'});
		expect(genColors.get.values(hsla, RETURN_TYPE.OBJECT)).toEqual({h:0,s:'100%',l:'50%',a:0.5});
	});

	//GET.RANDOMNUMBER
	it(".get.randomNumber should return", function() {
	});

	//GET.ROUNDEDNUMBER
	it(".get.roundedNumber should return", function() {
	});

	//GET.HUE
	it(".get.hue should return", function() {
	});

	//RANDOM.HEX
	it(".random.hex should generate a random hex value", function() {
	});
	it(".random.hex should generate a random grey hex value", function() {
	});

	//RANDOM.RGB
	it(".random.rgb should generate a random rgb value", function() {
	});
	it(".random.rgb should generate a random grey rgb value", function() {
	});

	//RANDOM.RGBA
	it(".random.rgba should generate a random rgba value", function() {
	});
	it(".random.rgba should generate a random grey rgba value", function() {
	});
	it(".random.rgba should generate a random rgba value with defined opacity", function() {
	});

	//RANDOM.HSL
	it(".random.hsl should generate a random hsl value", function() {
	});
	it(".random.hsl should generate a random grey hsl value", function() {
	});

	//RANDOM.HSLA
	it(".random.hsla should generate a random hsla value", function() {
	});
	it(".random.hsla should generate a random grey hsla value", function() {
	});
	it(".random.hsla should generate a random hsla value with defined opacity", function() {
	});

	//CONVERT.NUMBERTOHEX
	it(".convert.numberToHex should convert a number to hex value", function() {
	});

	//CONVERT.HEXTONUMBER
	it(".convert.hexToNumber should convert a hex value to a number", function() {
	});

	//CONVERT.HEX
	it(".convert.hex should return the hex value it was sent", function() {
	});
	it(".convert.hex should convert a rgb value to a hex", function() {
	});
	it(".convert.hex should convert a rgba value to a hex", function() {
	});
	it(".convert.hex should convert a hsl value to a hex", function() {
	});
	it(".convert.hex should convert a hsla value to a hex", function() {
	});

	//CONVERT.RGB
	it(".convert.rgb should convert a hex value to rgb", function() {
	});
	it(".convert.rgb should return the rgb value it was sent", function() {
	});
	it(".convert.rgb should convert a rgba value to a rgb", function() {
	});
	it(".convert.rgb should convert a hsl value to a rgb", function() {
	});
	it(".convert.rgb should convert a hsla value to a rgb", function() {
	});

	//CONVERT.RGBA
	it(".convert.rgba should convert a hex value to rgba", function() {
	});
	it(".convert.rgba should convert a rgb value to a rgba", function() {
	});
	it(".convert.rgba should return the rgba value it was sent", function() {
	});
	it(".convert.rgba should convert a hsl value to a rgba", function() {
	});
	it(".convert.rgba should convert a hsla value to a rgba", function() {
	});
	it(".convert.rgba should convert a hex value to rgba with a defined opacity", function() {
	});
	it(".convert.rgba should convert a rgb value to a rgba with a defined opacity", function() {
	});
	it(".convert.rgba should return the rgba value it was sent with a defined opacity", function() {
	});
	it(".convert.rgba should convert a hsl value to a rgba with a defined opacity", function() {
	});
	it(".convert.rgba should convert a hsla value to a rgba with a defined opacity", function() {
	});

	//CONVERT.HSL
	it(".convert.hsl should convert a hex value to hsl", function() {
	});
	it(".convert.hsl should convert a rgb value to a hsl", function() {
	});
	it(".convert.hsl should convert a rgba value to a hsl", function() {
	});
	it(".convert.hsl should return the hsl value it was sent", function() {
	});
	it(".convert.hsl should convert a hsla value to a hsl", function() {
	});

	//CONVERT.HSLA
	it(".convert.hsla should convert a hex value to hsla", function() {
	});
	it(".convert.hsla should convert a rgb value to a hsla", function() {
	});
	it(".convert.hsla should convert a rgba value to a hsla", function() {
	});
	it(".convert.hsla should convert a hsl value to a hsla", function() {
	});
	it(".convert.hsla should return the hsla value it was sent", function() {
	});
	it(".convert.hsla should convert a hex value to hsla with a defined opacity", function() {
	});
	it(".convert.hsla should convert a rgb value to a hsla with a defined opacity", function() {
	});
	it(".convert.hsla should convert a rgba value to a hsla with a defined opacity", function() {
	});
	it(".convert.hsla should convert a hsl value to a hsla with a defined opacity", function() {
	});
	it(".convert.hsla should return the hsla value it was sent with a defined opacity", function() {
	});

	//BETWEEN.HEX
	//BETWEEN.RGB
	//BETWEEN.RGBA
	//BETWEEN.HSL
	//BETWEEN.HSLA

	//ARRAY.HEX
	//ARRAY.RGB
	//ARRAY.RGBA
	//ARRAY.HSL
	//ARRAY.HSLA

});
