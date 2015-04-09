describe("GenColors service", function(){

	var genColors, COLOR_TYPE;
	var hex = '#99FF00';
	var rgb = 'rgb(100,100,100)';
	var rgba = 'rgba(100,100,100,0.5)';
	var hsl = 'hsl(0,100%,50%)';
	var hsla = 'hsla(0,100%,50%,0.5)';

	beforeEach(module('genColorsServiceModule'));

	beforeEach(inject(function(_genColors_, _COLOR_TYPE_){
		COLOR_TYPE = _COLOR_TYPE_;
		genColors = _genColors_;


	}));

	it(".get.color type should return a color type", function(){
		var rgbType = genColors.get.colorType(rgb);
		expect(genColors.get.colorType(hex)).toBe(COLOR_TYPE.HEX);
		expect(genColors.get.colorType(rgb)).toEqual(COLOR_TYPE.RGB);
		expect(genColors.get.colorType(rgba)).toBe(COLOR_TYPE.RGBA);
		expect(genColors.get.colorType(hsl)).toBe(COLOR_TYPE.HSL);
		expect(genColors.get.colorType(hsla)).toBe(COLOR_TYPE.HSLA);
	});
	it(".get.values should return the values for the different color types", function() {

	})
});
