describe("GenColors service", function(){

	var genColors;
	var rgb = 'rgb(100,100,100)';
	var rgba = 'rgba(100,100,100,0.5)';

	beforeEach(module('genColorsServiceModule'));

	beforeEach(inject(function(_genColors_){
		genColors = _genColors_;
	}));


	it(".get.color type should return a color type", function(){
		var rgbType = genColors.get.colorType(rgb);
		expect(genColors.get.colorType(rgb)).toBe(1);
		expect(genColors.get.colorType(rgba)).toBe(2);


	});
});