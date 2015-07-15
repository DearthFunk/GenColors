# GenColors
GenColors is an angular service you can plug into your angular application to help with color conversion, generation, etc.. Currently HEX, RGB, RGBA, HSL, and HSLA color formats are supported. To use genColors, simply <a href="/js/genColors.service.js">download the genColors.service.js file</a> and include "genColors" in your main angular app. The unit tests for the service are located in that same directory. All other files in the repo are for the actual demo of the services functions.
<br><br>
Live Demo: <a href="http://gencolors.dearthfunk.com/">http://gencolors.dearthfunk.com/</a>
<br>
##TODO'S##
1) complete unit tests<br>
2) some general error checking in the functions (ie. functions requires 2 colors, but you pass in one)<br>
3) add CMYK support<br>

##CURRENT FUNCTIONS##

###GET###
get.colorType:<br>
get.values:<br>
get.randomNumber:<br>
get.roundedNumber:<br>

###RANDOM###
random.hex:<br>
random.rgb:<br>
random.rgba:<br>
random.hsl:<br>
random.hsla:<br>

###RANDOMBETWEEN###
randomBetween.hex:<br>
randomBetween.rgb:<br>
randomBetween.rgba:<br>
randomBetween.hsl:<br>
randomBetween.hsla:<br>

###CONVERT###
convert.numberToHex:<br>
convert.hexToNumber:<br>
convert.hex:<br>
convert.rgb:<br>
convert.rgba:<br>
convert.hsl:<br>
convert.hsla:<br>

###BETWEEN###
between.hex:<br>
between.rgb:<br>
between.rgba:<br>
between.hsl:<br>
between.hsla:<br>

###ARRAY###
array.hex:<br>
array.rgb:<br>
array.rgba:<br>
array.hsl:<br>
array.hsla:<br>
