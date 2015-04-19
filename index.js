require("./index.css")
module.exports = {
  template: require('./template.html'),
  replace: true,
  paramAttributes: ['model'],
  ready:function(){
  	var $=require('wlt-zepto');
  	$(window).on("resize", function(event) {
         var _w = window.innerWidth,
				_h = window.innerHeight;
			var test = document.getElementById("main");
			if (_w != 0) {
				test.style["-webkit-transform"] = "scale(" + (_w / 750) + ")";
				test.style["transform"] = "scale(" + (_w / 750) + ")";
				test.style["height"] = (750 / _w) * _h + "px";
				$(".back").css({
					"height": (750 / _w) * _h + "px"
				})
			}
	}).trigger("resize");

     $(".page").eq(0).attr("style","display:block");
	$("#main").on("click",".next",function(){
		$(".page").eq(1).attr("style","display:block;z-index:12")
	})
			
  }
}