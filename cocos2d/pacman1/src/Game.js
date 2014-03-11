var background = null;
var layer = null;
var spriteLives = [];

var lifeGame = {
	label: "LIVES", 
	life: 2,
	positionX: 50
};

var scoreGame = {
	label: null, 
	score: 0,
	text: "SCORE"
};

var LG = {KEYS: []};

var gameLayer = cc.Layer.extend({
	spriteFrameCache: cc.SpriteFrameCache.getInstance(),
	gameOver: null,
	_pac: null,	
	_blinky: null,
	
	init:function()
	{
		
		/*if ('keyboard' in sys.capabilities)
	    	this.setKeyboardEnabled(true);
		else if('touches' in sys.capabilities)
	        this.setTouchEnabled(true);
		*/
		/*var map = cc.TMXTiledMap.create(tMap);
		map.setPosition(cc.p(background.width/2, background.height/2));
		this.addChild(map);*/
		
		

		
		this._super();
	    		
		this.setKeyboardEnabled(true);
		
		lifeGame.life = 2;
		scoreGame.score = 0;
		background = cc.Director.getInstance().getWinSizeInPixels();
		livePositionX = 30;
		
		cc.log("chamando game");
		
		/*this._pac = new Pac();
		this._pac.setPosition(new cc.Point(background.width/2, background.height/2));
		this.addChild(this._pac);		
		this._pac.setAnimation("pac", "left", "16-16", 2, "left");        
	    this._pac.getAnimation("left");*/ 
		
	    this._blinky = new Ghost();
		this._blinky.setGhost("blinky");
        this.addChild(this._blinky);
        this._blinky.setPosition(new cc.Point(background.width/2 - 450, background.height - 250));
        this._blinky.setAnimation("blinky", "right", "16-16", 2, "right");        
        this._blinky.getAnimation("right");
		
		this.addLives();
		this.addScore();
		//this.schedule(this.onClick, 3);
		//this.scheduleUpdate();	
		
		this.schedule(this.update);
	
		return true;
	},
	
	update: function()
	{
		//this._pac.setPositionOnScreen("left");		
		
	},
	
	onClick:function (dt) {    	
		if (lifeGame.life != 0){
			this.removeLives();		
			this.plusScore();
		}
			
    },
	
	addLives: function()
	{
		lifeGame.label = cc.LabelTTF.create("LIVES", "fontName", 20);
		lifeGame.label.setPosition( new cc.Point(background.width/2 + 200, background.height - 460) );
		this.addChild( lifeGame.label );	
		
		for(var i = 0; i < lifeGame.life; i++)
		{									
			spriteLives[i] = cc.Sprite.create(sPacLife);			
			spriteLives[i].setPosition(background.width/2 + 200 + lifeGame.positionX, background.height - 460);
            this.addChild( spriteLives[i] );
			lifeGame.positionX += 20;
		}
	},
	
	removeLives: function()
	{		
		lifeGame.life--;
		this.removeChild( spriteLives[lifeGame.life] );	
		if (lifeGame.life == 0){		
			this.gameOver = new losing();				        
	        this.addChild( this.gameOver );		
			cc.Director.getInstance().replaceScene(cc.TransitionFade.create(10,new highScore()));
		}		
	},
	
	addScore:function()
	{			
		scoreGame.label = cc.LabelTTF.create(scoreGame.text + " " + scoreGame.score, "fontName", 20);		
		scoreGame.label.setPosition(new cc.Point(background.width/2 - 300, background.height - 460) );
		this.addChild( scoreGame.label );	

    },	
	
	plusScore: function()
	{		
		scoreGame.score += 10;
		scoreGame.label.setString(scoreGame.text + " " + scoreGame.score);
	},	   

    onKeyUp: function (e) {
        LG.KEYS[e] = true;
    	
    },
    
    onKeyDown: function (e) {
        //LG.KEYS[e] = false;
       
        this._pac.setPositionOnScreen(e);        
    },
    
});

var game = cc.Scene.extend({
    onEnter:function()
	{
        this._super();
        var layer = new gameLayer();
        layer.init();
        this.addChild(layer);
    }
});