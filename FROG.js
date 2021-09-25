(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"FROG_atlas_1", frames: [[1828,152,128,64],[1828,218,126,64],[1792,440,253,168],[1026,440,254,281],[1282,440,259,172],[1543,440,247,178],[1828,0,146,150],[0,0,1024,621],[1026,0,800,438]]}
];


(lib.AnMovieClip = function(){
	this.actionFrames = [];
	this.gotoAndPlay = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndPlay.call(this,positionOrLabel);
	}
	this.play = function(){
		cjs.MovieClip.prototype.play.call(this);
	}
	this.gotoAndStop = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndStop.call(this,positionOrLabel);
	}
	this.stop = function(){
		cjs.MovieClip.prototype.stop.call(this);
	}
}).prototype = p = new cjs.MovieClip();
// symbols:



(lib.CachedBmp_9 = function() {
	this.initialize(ss["FROG_atlas_1"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_8 = function() {
	this.initialize(ss["FROG_atlas_1"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_7 = function() {
	this.initialize(ss["FROG_atlas_1"]);
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_6 = function() {
	this.initialize(ss["FROG_atlas_1"]);
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_5 = function() {
	this.initialize(ss["FROG_atlas_1"]);
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_4 = function() {
	this.initialize(ss["FROG_atlas_1"]);
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_3 = function() {
	this.initialize(ss["FROG_atlas_1"]);
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.pngwingcom2 = function() {
	this.initialize(ss["FROG_atlas_1"]);
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.pngwingcom4 = function() {
	this.initialize(ss["FROG_atlas_1"]);
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.stopbtn = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2
	this.instance = new lib.CachedBmp_9();
	this.instance.setTransform(-34.9,-15.3,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(4));

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#6666FF").ss(4,1,1).p("AoUjgQIsDAHji2QANgFAOgFQBFAAAwBBQAxBBAABcIAAAEQAABcgxBCQgwBBhFAAQgOgDgNgDQoSh+n9CEQgyAAgngiQgQgNgNgSQgfgpgLgzQgHgfAAgjIAAgEQAAgjAHgeQALg0AfgoQANgSAQgNQAngiAyAAg");
	this.shape.setTransform(0,0.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.rf(["#655B5B","#CFCACA"],[0,1],0,0,0,0,0,70.7).s().p("AH7DaQoRh9n+CEQgyAAgngiQgPgNgOgSQgfgpgLgzQgHgfAAgjIAAgDQAAgkAHgeQALg0AfgoQAOgSAPgNQAngiAyAAQIsDBHji3IAbgKQBFAAAwBBQAxBCAABcIAAADQAABcgxBCQgwBBhFAAIgbgHg");
	this.shape_1.setTransform(0,0.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#666666").s().p("AH7DaQoRh9n+CEQgyAAgngiQgPgNgOgSQgfgpgLgzQgHgfAAgjIAAgDQAAgkAHgeQALg0AfgoQAOgSAPgNQAngiAyAAQIsDBHji3IAbgKQBFAAAwBBQAxBCAABcIAAADQAABcgxBCQgwBBhFAAIgbgHg");
	this.shape_2.setTransform(0,0.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.rf(["#9D7E7E","#C7BCBC"],[0,1],0,0,0,0,0,70.7).s().p("AH7DaQoRh9n+CEQgyAAgngiQgPgNgOgSQgfgpgLgzQgHgfAAgjIAAgDQAAgkAHgeQALg0AfgoQAOgSAPgNQAngiAyAAQIsDBHji3IAbgKQBFAAAwBBQAxBCAABcIAAADQAABcgxBCQgwBBhFAAIgbgHg");
	this.shape_3.setTransform(0,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_2},{t:this.shape}]},1).to({state:[{t:this.shape_2},{t:this.shape}]},1).to({state:[{t:this.shape_3},{t:this.shape}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-72,-24,144,49);


(lib.playbtn = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// chu
	this.instance = new lib.CachedBmp_8();
	this.instance.setTransform(167.3,-6.3,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(4));

	// nut
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#6666FF").ss(4,1,1).p("AoUjgQIsDBHji3QANgFAOgFQBFAAAwBBQAxBBAABdIAAADQAABcgxBCQgwBBhFAAQgOgDgNgDQoRh+n+CEQgyAAgngiQgQgNgNgSQgegpgMgzQgHgfAAgjIAAgDQAAgjAHgfQAMg0AegoQANgSAQgNQAngiAyAAg");
	this.shape.setTransform(198.7,9.55);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.rf(["#FF0000","#FFFFFF"],[0,1],0,0,0,0,0,70.7).s().p("AH7DbQoSh+n9CEQgxAAgogiQgPgNgOgTQgegogMgzQgHgfAAgjIAAgEQAAgiAHgfQAMg0AegoQAOgSAPgNQAogiAxAAQIsDAHji1IAbgLQBFAAAwBBQAxBCAABbIAAAEQAABcgxBBQgxBChEAAIgbgGg");
	this.shape_1.setTransform(198.7,9.55);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FF6666").s().p("AH7DbQoSh+n9CEQgxAAgogiQgPgNgOgTQgegogMgzQgHgfAAgjIAAgEQAAgiAHgfQAMg0AegoQAOgSAPgNQAogiAxAAQIsDAHji1IAbgLQBFAAAwBBQAxBCAABbIAAAEQAABcgxBBQgxBChEAAIgbgGg");
	this.shape_2.setTransform(198.7,9.55);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#CCCCCC").s().p("AH7DbQoSh+n9CEQgxAAgogiQgPgNgOgTQgegogMgzQgHgfAAgjIAAgEQAAgiAHgfQAMg0AegoQAOgSAPgNQAogiAxAAQIsDAHji1IAbgLQBFAAAwBBQAxBCAABbIAAAEQAABcgxBBQgxBChEAAIgbgGg");
	this.shape_3.setTransform(198.7,9.55);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#66FFFF").s().p("AH7DbQoSh+n9CEQgxAAgogiQgPgNgOgTQgegogMgzQgHgfAAgjIAAgEQAAgiAHgfQAMg0AegoQAOgSAPgNQAogiAxAAQIsDAHji1IAbgLQBFAAAwBBQAxBCAABbIAAAEQAABcgxBBQgxBChEAAIgbgGg");
	this.shape_4.setTransform(198.7,9.55);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_2},{t:this.shape}]},1).to({state:[{t:this.shape_3},{t:this.shape}]},1).to({state:[{t:this.shape_4},{t:this.shape}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(126.7,-14.9,144,49);


(lib.frog5 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.CachedBmp_7();
	this.instance.setTransform(-63.35,-41.95,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-63.3,-41.9,126.5,84);


(lib.frog4 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.CachedBmp_6();
	this.instance.setTransform(-63.75,-70.2,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-63.7,-70.2,127,140.5);


(lib.frog3 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.CachedBmp_5();
	this.instance.setTransform(299.5,12,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(299.5,12,129.5,86);


(lib.frog2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.CachedBmp_4();
	this.instance.setTransform(-61.7,-44.5,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-61.7,-44.5,123.5,89);


(lib.frog1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.CachedBmp_3();
	this.instance.setTransform(40.9,393,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(40.9,393,73,75);


(lib.hoatcanh = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_0 = function() {
		/* Click to Go to Frame and Play
		Clicking on the specified symbol instance moves the playhead to the specified frame in the timeline and continues playback from that frame.
		Can be used on the main timeline or on movie clip timelines.
		
		Instructions:
		1. Replace the number 5 in the code below with the frame number you would like the playhead to move to when the symbol instance is clicked.
		2.Frame numbers in EaselJS start at 0 instead of 1
		*/
		
		this.button_1.addEventListener("click", fl_ClickToGoToAndPlayFromFrame.bind(this));
		
		function fl_ClickToGoToAndPlayFromFrame()
		{
			this.gotoAndPlay();
		}
		
		
		/* Click to Go to Frame and Stop
		Clicking on the specified symbol instance moves the playhead to the specified frame in the timeline and stops the movie.
		Can be used on the main timeline or on movie clip timelines.
		
		Instructions:
		1. Replace the number 5 in the code below with the frame number you would like the playhead to move to when the symbol instance is clicked.
		2.Frame numbers in EaselJS start at 0 instead of 1
		*/
		
		
		this.button_2.addEventListener("click", fl_ClickToGoToAndStopAtFrame.bind(this));
		
		function fl_ClickToGoToAndStopAtFrame()
		{
			this.gotoAndStop();
		}
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(66));

	// stopbtn
	this.button_2 = new lib.stopbtn();
	this.button_2.name = "button_2";
	this.button_2.setTransform(506.45,87.4);
	new cjs.ButtonHelper(this.button_2, 0, 1, 2, false, new lib.stopbtn(), 3);

	this.timeline.addTween(cjs.Tween.get(this.button_2).wait(66));

	// playbtn
	this.button_1 = new lib.playbtn();
	this.button_1.name = "button_1";
	this.button_1.setTransform(108.55,77.45);
	new cjs.ButtonHelper(this.button_1, 0, 1, 2, false, new lib.playbtn(), 3);

	this.timeline.addTween(cjs.Tween.get(this.button_1).wait(66));

	// frog
	this.instance = new lib.frog1("synched",0);
	this.instance.setTransform(58.15,321,1,1,0,0,0,77.4,430.4);

	this.instance_1 = new lib.frog2("synched",0);
	this.instance_1.setTransform(149.2,219.8);

	this.instance_2 = new lib.frog3("synched",0);
	this.instance_2.setTransform(334.45,166.05,1,1,0,0,0,364.4,55.1);

	this.instance_3 = new lib.frog4("synched",0);
	this.instance_3.setTransform(418.5,237.8);

	this.instance_4 = new lib.frog5("synched",0);
	this.instance_4.setTransform(522.55,273.95,1,1,0,0,0,-0.1,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance_1}]},14).to({state:[{t:this.instance_2}]},16).to({state:[{t:this.instance_3}]},16).to({state:[{t:this.instance_4}]},4).wait(15));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(21.7,62.5,564.0999999999999,296.1);


// stage content:
(lib.FROG = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// hoat_canh
	this.instance = new lib.hoatcanh();
	this.instance.setTransform(58.15,322,1,1,0,0,0,58.1,321.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// bg
	this.instance_1 = new lib.pngwingcom4();
	this.instance_1.setTransform(211,-22,0.4422,0.4422);

	this.instance_2 = new lib.pngwingcom2();
	this.instance_2.setTransform(0,220,0.7813,0.4509);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FCE9E1").s().p("Eg+fAnEMAAAhOHMB8/AAAMAAABOHg");
	this.shape.setTransform(400,250);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.instance_2},{t:this.instance_1}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(400,228,400,272);
// library properties:
lib.properties = {
	id: '6D1EFC7873B2F04BB9D1061F6080B141',
	width: 800,
	height: 500,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/FROG_atlas_1.png?1632233934702", id:"FROG_atlas_1"}
	],
	preloads: []
};



// bootstrap callback support:

(lib.Stage = function(canvas) {
	createjs.Stage.call(this, canvas);
}).prototype = p = new createjs.Stage();

p.setAutoPlay = function(autoPlay) {
	this.tickEnabled = autoPlay;
}
p.play = function() { this.tickEnabled = true; this.getChildAt(0).gotoAndPlay(this.getTimelinePosition()) }
p.stop = function(ms) { if(ms) this.seek(ms); this.tickEnabled = false; }
p.seek = function(ms) { this.tickEnabled = true; this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000); }
p.getDuration = function() { return this.getChildAt(0).totalFrames / lib.properties.fps * 1000; }

p.getTimelinePosition = function() { return this.getChildAt(0).currentFrame / lib.properties.fps * 1000; }

an.bootcompsLoaded = an.bootcompsLoaded || [];
if(!an.bootstrapListeners) {
	an.bootstrapListeners=[];
}

an.bootstrapCallback=function(fnCallback) {
	an.bootstrapListeners.push(fnCallback);
	if(an.bootcompsLoaded.length > 0) {
		for(var i=0; i<an.bootcompsLoaded.length; ++i) {
			fnCallback(an.bootcompsLoaded[i]);
		}
	}
};

an.compositions = an.compositions || {};
an.compositions['6D1EFC7873B2F04BB9D1061F6080B141'] = {
	getStage: function() { return exportRoot.stage; },
	getLibrary: function() { return lib; },
	getSpriteSheet: function() { return ss; },
	getImages: function() { return img; }
};

an.compositionLoaded = function(id) {
	an.bootcompsLoaded.push(id);
	for(var j=0; j<an.bootstrapListeners.length; j++) {
		an.bootstrapListeners[j](id);
	}
}

an.getComposition = function(id) {
	return an.compositions[id];
}


an.makeResponsive = function(isResp, respDim, isScale, scaleType, domContainers) {		
	var lastW, lastH, lastS=1;		
	window.addEventListener('resize', resizeCanvas);		
	resizeCanvas();		
	function resizeCanvas() {			
		var w = lib.properties.width, h = lib.properties.height;			
		var iw = window.innerWidth, ih=window.innerHeight;			
		var pRatio = window.devicePixelRatio || 1, xRatio=iw/w, yRatio=ih/h, sRatio=1;			
		if(isResp) {                
			if((respDim=='width'&&lastW==iw) || (respDim=='height'&&lastH==ih)) {                    
				sRatio = lastS;                
			}				
			else if(!isScale) {					
				if(iw<w || ih<h)						
					sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==1) {					
				sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==2) {					
				sRatio = Math.max(xRatio, yRatio);				
			}			
		}
		domContainers[0].width = w * pRatio * sRatio;			
		domContainers[0].height = h * pRatio * sRatio;
		domContainers.forEach(function(container) {				
			container.style.width = w * sRatio + 'px';				
			container.style.height = h * sRatio + 'px';			
		});
		stage.scaleX = pRatio*sRatio;			
		stage.scaleY = pRatio*sRatio;
		lastW = iw; lastH = ih; lastS = sRatio;            
		stage.tickOnUpdate = false;            
		stage.update();            
		stage.tickOnUpdate = true;		
	}
}
an.handleSoundStreamOnTick = function(event) {
	if(!event.paused){
		var stageChild = stage.getChildAt(0);
		if(!stageChild.paused){
			stageChild.syncStreamSounds();
		}
	}
}


})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;