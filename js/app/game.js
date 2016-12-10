define(['quintus','qScenes','qSprites','qInput','qAnim','q2D','qTouch','qUI','qTMX','qAudio'],
	function(Q){

		var Q = Quintus({ 
				imagePath: "js/app/res/img/",
				audioPath:"js/app/res/audio/",
				dataPath:"js/app/data/",
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