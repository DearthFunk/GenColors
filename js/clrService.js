angular.module('clrServiceModule', [])

	.service('clr', function(){

        var clrScope = this;

        clrScope.get = {
	        colorType: function(color) {
		        var c = color.slice(0,4).toLowerCase();
		        return (color[0] == '#' ? 0 :
			        c == 'rgb(' ? 1 :
				    c == 'rgba' ? 2 :
					c == 'hsl(' ? 3 :
					c == 'hsla' ? 4 :
					false
			    )
	        },
	        values: function(color,returnType,hslPercentage) {
		        color = color.toUpperCase();
		        var obj = {};
		        var returnVal, vals, keys;
		        var colorType = clrScope.get.colorType(color);
		        if (colorType == 0) {
			        vals = color.length < 7 ?
				        [color.substring(1,2)+color.substring(1,2),color.substring(2,3)+color.substring(2,3),color.substring(3,4)+color.substring(3,4)] :
				        [color.substring(1,3),color.substring(3,5),color.substring(5,7)];
			        keys = ['r','g','b'];
		        }
		        else {
			        vals = color.replace(/([(])/g,',').replace(/([)])/g,'').split(',');
			        keys = vals[0].toLowerCase().split('');
			        vals.splice(0,1);
		        }
		        for (var i = 0; i < keys.length; i++) {
			        if (colorType == 0) {
				        obj[keys[i]] = vals[i];
			        }
			        else if ( vals[i].indexOf('%') > -1) {
				        if (hslPercentage) {
					        vals[i] = Number(vals[i].replace('%',''))/100;
				        }
				        obj[keys[i]] = vals[i];
			        }
			        else {
			            obj[keys[i]] =  Number(vals[i]);
			            vals[i] = Number(vals[i]);
			        }
		        }

				switch(returnType) {
					case 0: returnVal = color;break;
					case 1: returnVal = vals;break;
					case 2:	returnVal = angular.copy(obj); break;
					default: returnVal = color;
				}
		        return returnVal
	        },
            randomNumber: function (from,to,decimals) {
                return decimals != undefined ?
	                Number((Math.random()*(Number(to)-Number(from))+Number(from)).toFixed(decimals)) :
	                Number(Math.random()*(to-from)+from,decimals)
            },
            roundedNumber: function(value, decimals) {
                var precision = decimals || 0;
                var neg = value < 0;
                var power = Math.pow(10, precision);
                var newvalue = Math.round(value * power);
                var integral = String((neg ? Math.ceil : Math.floor)(newvalue / power));
                var fraction = String((neg ? -newvalue : newvalue) % power);
                var padding = new Array(Math.max(precision - fraction.length, 0) + 1).join('0');
                return parseFloat(precision ? integral + '.' +  padding + fraction : integral);
            },
	        hue:function(m1, m2, hue, numOrHex) {
		        var v;
		        if (hue < 0)
			        hue += 1;
		        else if (hue > 1)
			        hue -= 1;

		        if (6 * hue < 1)
			        v = m1 + (m2 - m1) * hue * 6;
		        else if (2 * hue < 1)
			        v = m2;
		        else if (3 * hue < 2)
			        v = m1 + (m2 - m1) * (2/3 - hue) * 6;
		        else
			        v = m1;
		        return numOrHex ? clrScope.convert.numberToHex(255 * v) : clrScope.get.roundedNumber(255 * v,0);
	        }
        };
		clrScope.random = {
			hex: function(type,greyScale){
				var returnVal;
				if (greyScale) {
                    var hex = clrScope.get.randomNumber(0,15,0).toString(16).toUpperCase() + clrScope.get.randomNumber(0,15,0).toString(16).toUpperCase();
                    returnVal = '#' + hex+hex+hex;
				}
				else {
                    returnVal = '#' + ('00000'+(Math.random()*16777216<<0).toString(16)).substr(-6).toUpperCase();
				}
				return clrScope.get.values(returnVal,type);
			},
			rgb: function(type,greyScale){
				var r = clrScope.get.randomNumber(0,255,0);
				var g = greyScale ? r : clrScope.get.randomNumber(0,255,0);
				var b = greyScale ? r : clrScope.get.randomNumber(0,255,0);
				return clrScope.get.values('rgb('+r+','+b+','+g+')',type);
			},
			hsl: function(type,greyScale) {
				var h = clrScope.get.randomNumber(0,240,0);
				var s = greyScale ? '0%' : clrScope.get.randomNumber(0,100,0) + '%';
				var l = clrScope.get.randomNumber(0,100,0) + '%';
				return clrScope.get.values('HSL('+h+','+s+','+l+')',type);
			},
			rgba: function(type,greyScale,opacity){
				var r =  clrScope.get.randomNumber(0,255,0);
				var g = greyScale ? r : clrScope.get.randomNumber(0,255,0);
				var b = greyScale ? r : clrScope.get.randomNumber(0,255,0);
				var a = opacity == undefined ? clrScope.get.randomNumber(0,1,4) : opacity;
				return clrScope.get.values('RGBA('+r+','+g+','+b+','+a+')',type);
			},
			hsla: function(type,greyScale,opacity) {
				var returnVal;
				var h = clrScope.get.randomNumber(0,240,0);
				var s = greyScale ? '0%' : clrScope.get.randomNumber(0,100,0) + '%';
				var l = clrScope.get.randomNumber(0,100,0) + '%';
				var a = opacity == undefined ? clrScope.get.randomNumber(0,1,4) : opacity;
				return clrScope.get.values('HSLA('+h+','+s+','+l+','+a+')',type);
			}
		};

		clrScope.convert = {
            numberToHex: function(x) {
	            return x>=0&&x<=255?('0' + parseInt(x).toString(16)).slice(-2).toUpperCase() : '00'; },
            hexToNumber: function(x) {
	            var tmp = x.replace(/[^a-f,0-9]/ig, '');
	            return tmp === '' ? 0 : parseInt(tmp,16);
            },
			hex: function(color) {
				color = color.toUpperCase();
				var returnVal;
				var colorType = clrScope.get.colorType(color);
				var vals = clrScope.get.values(color,1,true);
				if (colorType == 0) {
					if (color.length == 7) {
						returnVal = color;
					}
					else if (color.length == 4) {
						var tmp = color.split('');
						returnVal = '#' + tmp[1] + tmp[1] + tmp[2] + tmp[2] + tmp[3] + tmp[3];
					}
					else {
						returnVal = color;
					}
				}
				else if (colorType == 1 || colorType == 2) {
					returnVal =  '#' + clrScope.convert.numberToHex(vals[0]) + clrScope.convert.numberToHex(vals[1]) + clrScope.convert.numberToHex(vals[2]);
				}
				else if (colorType == 3 || colorType == 4) {
					var m1, m2, hue;
					if (vals[1] == 0) {vals[0] = vals[1] = vals[2] = (vals[2] * 255);}
					else {
						m2 = vals[2] <= 0.5 ? vals[2] * (vals[1] + 1) :vals[2] + vals[1] - vals[2] * vals[1];
						m1 = vals[2] * 2 - m2;
						hue = vals[0] / 360;
					}
					returnVal = '#' +
						clrScope.get.hue(m1, m2, hue + 1/3,true) +
						clrScope.get.hue(m1, m2, hue,true) +
						clrScope.get.hue(m1, m2, hue - 1/3,true);
				}
				else {
					returnVal = color;
				}
				return returnVal
			},
			rgb: function(color) {
				color = color.toUpperCase();
				var returnVal;
				var colorType = clrScope.get.colorType(color);
				var vals = clrScope.get.values(color,1,true);

				if (colorType == 0) {
					returnVal = 'RGB('+
						clrScope.convert.hexToNumber(vals[0]) + ','+
						clrScope.convert.hexToNumber(vals[1]) + ','+
						clrScope.convert.hexToNumber(vals[2]) + ')';
				}
				else if (colorType == 1) {
					returnVal = color;
				}
				else if (colorType == 2) {
					returnVal = 'RGB(' + vals[0] + ',' + vals[1] + ',' + vals[2] + ')';
				}
				else if (colorType == 3 || colorType == 4) {
					var m1, m2, hue;
					if (vals[1] == 0) {vals[0] = vals[1] = vals[2] = (vals[2] * 255);}
					else {
						m2 = vals[2] <= 0.5 ? vals[2] * (vals[1] + 1) :vals[2] + vals[1] - vals[2] * vals[1];
						m1 = vals[2] * 2 - m2;
						hue = vals[0] / 360;
					}
					returnVal = 'RGB(' +
						clrScope.get.hue(m1, m2, hue + 1/3) + ',' +
						clrScope.get.hue(m1, m2, hue) + ',' +
						clrScope.get.hue(m1, m2, hue - 1/3) + ')';
				}
				return returnVal
			},
			rgba: function(color,opacity) {
				color = color.toUpperCase();
				var returnVal;
				var colorType = clrScope.get.colorType(color);
				var vals = clrScope.get.values(color,1,true);
				var o = colorType == 2 || colorType == 4 ? vals[3] : opacity < 0 ? 0 : opacity > 1 || angular.isUndefined(opacity) ? 1 : opacity;
				if (colorType == 0) {
					returnVal = 'RGBA('+
						clrScope.convert.hexToNumber(vals[0]) + ','+
						clrScope.convert.hexToNumber(vals[1]) + ','+
						clrScope.convert.hexToNumber(vals[2]) + ','+
						o + ')';
				}
				else if (colorType == 1) {
					returnVal = 'RGBA(' + vals[0] + ',' + vals[1] + ',' + vals[2] + ',' + o + ')';
				}
				else if (colorType == 2) {
					returnVal = color;
				}
				else if (colorType == 3 || colorType == 4) {
					var m1, m2, hue;
					if (vals[1] == 0) {vals[0] = vals[1] = vals[2] = (vals[2] * 255);}
					else {
						m2 = vals[2] <= 0.5 ? vals[2] * (vals[1] + 1) :vals[2] + vals[1] - vals[2] * vals[1];
						m1 = vals[2] * 2 - m2;
						hue = vals[0] / 360;
					}
					returnVal = 'RGBA(' +
						clrScope.get.hue(m1, m2, hue + 1/3) + ',' +
						clrScope.get.hue(m1, m2, hue) + ',' +
						clrScope.get.hue(m1, m2, hue - 1/3) + ',' + o + ')';
				}
				return returnVal
			},
			hsl: function(color) {
				var returnVal;
				var colorType = clrScope.get.colorType(color);
				var vals = clrScope.get.values(color,1,true);
				if (colorType == 0 || colorType == 1 || colorType == 2) {
					var hexVals = clrScope.get.values(clrScope.convert.rgb(color),1);
					var r = colorType == 0 ? hexVals[0] : vals[0];
					var g = colorType == 0 ? hexVals[1] : vals[1];
					var b = colorType == 0 ? hexVals[2] : vals[2];
					r /= 255, g /= 255, b /= 255;
					var max = Math.max(r, g, b), min = Math.min(r, g, b);
					var h, s, l = (max + min) / 2;
					if(max == min){
						h = s = 0; // achromatic
					}else{
						var d = max - min;
						s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
						switch(max){
							case r: h = (g - b) / d + (g < b ? 6 : 0); break;
							case g: h = (b - r) / d + 2; break;
							case b: h = (r - g) / d + 4; break;
						}
						h /= 6;
					}
					returnVal = 'HSL('+Math.floor(h*360)+','+Math.floor(s*100)+'%,'+Math.floor(l*100)+'%)';
				}
				else if(colorType == 3) {returnVal = color.toUpperCase();}
				else if(colorType == 4) {returnVal = 'HSL('+vals[0]+','+(vals[1]*100)+'%,'+(vals[2]*100)+'%)';}
				return returnVal
			},
			hsla: function(color,opacity) {
				var returnVal;
				var colorType = clrScope.get.colorType(color);
				var vals = clrScope.get.values(color,1,true);
				var o = colorType == 2 || colorType == 4 ? vals[3] : opacity < 0 ? 0 : opacity > 1 || angular.isUndefined(opacity) ? 1 : opacity;
				if (colorType == 0 || colorType == 1 || colorType == 2) {
					var hexVals = clrScope.get.values(clrScope.convert.rgb(color),1);
					var r = colorType == 0 ? hexVals[0] : vals[0];
					var g = colorType == 0 ? hexVals[1] : vals[1];
					var b = colorType == 0 ? hexVals[2] : vals[2];
					r /= 255, g /= 255, b /= 255;
					var max = Math.max(r, g, b), min = Math.min(r, g, b);
					var h, s, l = (max + min) / 2;
					if(max == min){	h = s = 0; }// achromatic
					else{
						var d = max - min;
						s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
						switch(max){
							case r: h = (g - b) / d + (g < b ? 6 : 0); break;
							case g: h = (b - r) / d + 2; break;
							case b: h = (r - g) / d + 4; break;
						}
						h /= 6;
					}
					returnVal = 'HSLA('+Math.floor(h*360)+','+Math.floor(s*100)+'%,'+Math.floor(l*100)+'%,'+o+')';
				}
				else if(colorType == 3) {returnVal = 'HSLA('+vals[0]+','+(vals[1]*100)+'%,'+(vals[2]*100)+'%,'+o+')';}
				else if(colorType == 4) {returnVal = color.toUpperCase()}
				return returnVal
			}
		};

		clrScope.between = {
			hex:  function(c1,c2) {return clrScope.array.hex(c1,c2,3)[1]},
			rgb:  function(c1,c2) {return clrScope.array.rgb(c1,c2,3)[1]},
			hsl:  function(c1,c2) {return clrScope.array.hsl(c1,c2,3)[1]},
			rgba: function(c1,c2,o1,o2) {return clrScope.array.rgba(c1,c2,3,o1,o2)[1]},
			hsla: function(c1,c2,o1,o2) {return clrScope.array.hsla(c1,c2,3,o1,o2)[1]}
		};

		clrScope.array = {
			hex: function(c1,c2,len){
					var steps = [];
					var returnVal = [];
					if (len < 3) {returnVal = [clrScope.convert.hex(c1),clrScope.convert.hex(c2)]}
					else {
					var c1Vals = clrScope.get.values(clrScope.convert.rgb(c1),1);
					var c2Vals = clrScope.get.values(clrScope.convert.rgb(c2),1);
					for (var i = 0; i < c1Vals.length; i++) {
						steps.push( c1Vals[i] == c2Vals[i] ? 0 : (c1Vals[i] - c2Vals[i]) / (len-1) * -1 );
					}
					for (var i = 0; i < len; i++) {
						returnVal.push ( '#' +
							clrScope.convert.numberToHex(Math.floor( steps[0] * i + c1Vals[0] )) +
							clrScope.convert.numberToHex(Math.floor( steps[1] * i + c1Vals[1] )) +
							clrScope.convert.numberToHex(Math.floor( steps[2] * i + c1Vals[2] ))
						)
					}
				}
				return returnVal
			},
			rgb: function(c1,c2,len){
				var steps = [];
				var returnVal = [];
				if (len < 3) {returnVal = [clrScope.convert.rgb(c1),clrScope.convert.rgb(c2)]}
				else {
					var c1Vals = clrScope.get.values(clrScope.convert.rgb(c1),1);
					var c2Vals = clrScope.get.values(clrScope.convert.rgb(c2),1);
					for (var i = 0; i < c1Vals.length; i++) {
						steps.push( c1Vals[i] == c2Vals[i] ? 0 : (c1Vals[i] - c2Vals[i]) / (len-1) * -1 );
					}
					for (var i = 0; i < len; i++) {
						returnVal.push ( 'RGB(' +
							Math.floor( steps[0] * i + c1Vals[0] ) + ',' +
							Math.floor( steps[1] * i + c1Vals[1] ) + ',' +
							Math.floor( steps[2] * i + c1Vals[2] ) + ')'
						)
					}
				}
				return returnVal
			},
			rgba: function(c1,c2,len,op1,op2){
				var steps = [];
				var returnVal = [];
				if (len < 3) {returnVal = [clrScope.convert.rgba(c1,op1),clrScope.convert.hex(c2,op2)]}
				else {
					var c1Vals = clrScope.get.values(clrScope.convert.rgba(c1,op1),1);
					var c2Vals = clrScope.get.values(clrScope.convert.rgba(c2,op2),1);

					for (var i = 0; i < c1Vals.length; i++) {
						steps.push( c1Vals[i] == c2Vals[i] ? 0 : (c1Vals[i] - c2Vals[i]) / (len-1) * -1 );
					}
					for (var i = 0; i < len; i++) {
						returnVal.push ( 'RGBA(' +
							Math.floor( steps[0] * i + c1Vals[0] ) + ',' +
							Math.floor( steps[1] * i + c1Vals[1] ) + ',' +
							Math.floor( steps[2] * i + c1Vals[2] ) + ',' +
							clrScope.get.roundedNumber(Number(steps[3] * i + c1Vals[3]),2) + ')'
						)
					}
				}
				return returnVal
			},
			hsl: function(c1,c2,len){
				var steps = [];
				var returnVal = [];
				if (len < 3) {returnVal = [clrScope.convert.hsl(c1),clrScope.convert.hsl(c2)]}
				else {
                    returnVal = clrScope.array.rgb(c1,c2,len);
                    for (var i = 0; i < returnVal.length; i++) {
                        returnVal[i] = clrScope.convert.hsl(returnVal[i]);
                    }
				}
				return returnVal
			},
			hsla: function(c1,c2,len,o1,o2){
				var steps = [];
				var returnVal = [];
				if (len < 3) {returnVal = [clrScope.convert.hsla(c1),clrScope.convert.hsla(c2)]}
				else {
                    returnVal = clrScope.array.rgba(c1,c2,len,o1,o2);
                    for (var i = 0; i < returnVal.length; i++) {
                        returnVal[i] = clrScope.convert.hsla(returnVal[i]);
                    }
				}
				return returnVal
			}
		};


        clrScope.edit = {
            shade: {
				getShading : function(color,rD,gD,bD) {
					rD = rD == undefined ? 0 : rD;
					gD = gD == undefined ? 0 : gD;
					bD = bD == undefined ? 0 : bD;
				},
                rgb: function(color,rD,gD,bD) {
	                rD = rD == undefined ? 0 : rD;
	                gD = gD == undefined ? 0 : gD;
	                bD = bD == undefined ? 0 : bD;
                    var cArray = clrScope.get.values(color,1);
                    var r = parseInt(cArray[0] * (1 + rD)) > 255 ? 255 : parseInt(cArray[0] * (1 + rD));
                    var g = parseInt(cArray[1] * (1 + gD)) > 255 ? 255 : parseInt(cArray[1] * (1 + gD));
                    var b = parseInt(cArray[2] * (1 + bD)) > 255 ? 255 : parseInt(cArray[2] * (1 + bD));
                    return 'RGB(' + r + ',' + g + ',' + b  +')';
                },
                rgba: function(color,percent) {
                    var cArray = clrScope.get.values(color,1);
	                var r = parseInt(cArray[0] * (1 + percent)) > 255 ? 255 : parseInt(cArray[0] * (1 + percent));
	                var g = parseInt(cArray[1] * (1 + percent)) > 255 ? 255 : parseInt(cArray[1] * (1 + percent));
	                var b = parseInt(cArray[2] * (1 + percent)) > 255 ? 255 : parseInt(cArray[2] * (1 + percent));
                    return 'RGB(' + r + ',' + g + ',' + b  + ',' + cArray[3] + ')';
                },
                hex: function(color,percent) {
                    var cArray = clrScope.get.values(color,1);
                    for (var i = 0; i < cArray.length; i++) {
                        cArray[i] = clrScope.convert.hexToNumber(cArray[i]);
                    }
	                var r = parseInt(cArray[0] * (1 + percent)) > 255 ? 255 : parseInt(cArray[0] * (1 + percent));
	                var g = parseInt(cArray[1] * (1 + percent)) > 255 ? 255 : parseInt(cArray[1] * (1 + percent));
	                var b = parseInt(cArray[2] * (1 + percent)) > 255 ? 255 : parseInt(cArray[2] * (1 + percent));
                    return '#' + clrScope.convert.numberToHex(r) + clrScope.convert.numberToHex(g) + clrScope.convert.numberToHex(b);
                }
            }
        };

    });



