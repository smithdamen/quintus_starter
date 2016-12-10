// define(['Class'],function(Class){
// 	var Game = Class.extend({
// 		init:function(_title){
// 			document.title = _title;
// 		}
// 	});

// 	return Game;
// });

window.addEventListener("load",function(){
	var Q = window.Q = Quintus({ 
			imagePath: "assets/img/",
			audioPath:"assets/audio/",
			dataPath:"data/",
			development: true
		// Modules to include
		}).include("Scenes, Sprites, 2D, Input, Touch, UI, TMX, Audio")
		// Maximize game to size of browser
		.setup({ 
			width: 640,
			height: 360,
			scaleToFit: true
		}).controls().touch();

});
