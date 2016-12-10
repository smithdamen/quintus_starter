define(['quintus','qScenes','qSrites','qInput','qAnim','q2D','qTouch','qUI','qTMX','qAudio'],
	function(){
	var Q = Quintus({ 
			imagePath: "res/img/",
			audioPath:"res/audio/",
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

	// Turn off image smoothing because we are making a tile-based game
	Q.setImageSmoothing(false);

	// Define the stage
	Q.scene("level", function(stage){
		Q.stageTMX("test.tmx", stage);
		console.log("stage created");
	});

	// Load assets
	Q.loadTMX("test.tmx", function(){
		// Tell the game what to do when the levels are loaded
		Q.stageScene("level");
		console.log("levels loaded");
	});
});


