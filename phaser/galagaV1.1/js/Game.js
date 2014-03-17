var Game = function(game){
    this.game = game;
    //this.scores = 0;
    this.ship = null;
    //this.asteroid = null;
	//this.groupAsteroids = null;
	//this.livesHud = null;
	//this.loseMSG = null;
	//this.ufo = null;
	//this.score = null;
	//this.scoreText = null;
	//this.nextAddUfo = 0;
	//this.addUfoTime = 10000;
	//this.velAsteroids = null;
};

Game.prototype.preload = function(){
	game.load.image('backgroundGame','assets/screenshots/Game_480-600.png');
	
};

Game.prototype.create = function () {
	backgroundGame = game.add.sprite(0, 0, 'backgroundGame');
	backgroundGame.name = 'backgroundGame';
	game.world.setBounds(0, 0, 480, 600);
    //this.ufo = new Ufo(this);
    //this.asteroid = new Asteroid(this);
    this.ship = new Ship(this);
    //this.ship.setX(this.game/2-15);
    //game.physics.p2.enable([ship], false);
    //fixed.fixedToCamera = true;
    
    //this.groupAsteroids = this.game.add.group();
    //this.initAsteroids();
    //this.velAsteroids = 1;
    //this.score = 0;
    //this.scoreText = game.add.text(game.width - 150, 20 , this.score, {
    //  font: "25px Vector Battle", fill: "#ffffff" , align: "right"
    //});

	//this.livesHud = this.game.add.group();
	//for(var i = 0; i<3; i++){
	//	this.livesHud.create(18 * i + 3, 4, 'sprites', 'ship_14-24.png');
	//}
	
	//this.nextAddUfo = this.game.time.now + this.addUfoTime;
    cur = game.input.keyboard.createCursorKeys();
	

};

Game.prototype.update = function () {

      this.ship.update();
//    this.ufo.update();
      this.ship.stop();
      
     // console.log("game x "+this.game.world.x);
  if(game.input.keyboard.isDown(Phaser.Keyboard.LEFT)){
	  this.ship.move("left");
  }	  	
  else if (game.input.keyboard.isDown(Phaser.Keyboard.RIGHT)){
	  this.ship.move("right");
  }
	  	
  else if((!game.input.keyboard.isDown(Phaser.Keyboard.LEFT)||(!game.input.keyboard.isUp(Phaser.Keyboard.Down))))
		this.ship.move("stop");  
//    
//    if (game.input.keyboard.isDown(Phaser.Keyboard.UP)) {
//        this.spaceShip.accelerate();
//        this.spaceShip.animate();
//    } else{
//        this.spaceShip.stop();
//    }
//    
//    if (game.input.keyboard.isDown(Phaser.Keyboard.DOWN)) {
//        this.spaceShip.teletransport();
//    }
//        	    
//    if (game.input.keyboard.isDown(Phaser.Keyboard.SPACEBAR)){
//        this.spaceShip.shoot();   
//    }
//    
//    if (this.game.time.now > this.nextAddUfo) {
//        this.nextAddUfo = this.game.time.now + this.addUfoTime;
//        this.ufo.appear();
//    }
//    if(this.groupAsteroids.countLiving() == 0){
//    	this.velAsteroids++;
//    	this.initAsteroids();
//    }
                
};

Game.prototype.initAsteroids = function(){
//	for (var i = 0 ; i < 5; i++) {
//    	var px = Math.random() * game.width;
//    	var py = Math.random() * game.height;
//    	if(px > this.spaceShip.sprite.x - 100){
//    		if(px < this.spaceShip.sprite.x + 100){
//    			console.log('px:'+px+' '+'py: '+py);
//    			px += 150;
//    		}
//    	}
//    	if(py > this.spaceShip.sprite.y - 100){
//    		if(py < this.spaceShip.sprite.y + 100){
//    			console.log('px:'+px+' '+'py: '+py);
//    			py += 150;
//    		}
//    	}    		
//    	this.asteroid.create(px, py, 'large', this.velAsteroids);
//    }
};

Game.prototype.outOfBounds = function (object) {

//    var velocityX = object.body.velocity.x;
//    var velocityY = object.body.velocity.y;
//    var angularVelocity = object.body.angularVelocity;
//
//    if (object.x < 0)
//        object.reset(game.world.width, object.y);
//    if (object.x > game.world.width)
//        object.reset(0, object.y);
//    if (object.y < 0)
//        object.reset(object.x, game.world.height);
//    if (object.y > game.world.height + object.height/2)
//        object.reset(object.x, 0);
//
//    object.body.velocity.x = velocityX;
//    object.body.velocity.y = velocityY;
//    object.body.angularVelocity = angularVelocity;

};

Game.prototype.punctuate = function (points) {
//    this.score += points;
//    this.scoreText.setText( this.score );
};

Game.prototype.gameOver = function () {
//    game.score = this.score;
//    game.add.text(this.game.width/2 - 100, this.game.height/2, "Game Over", {
//        font: "40px Vector Battle", fill: "#ffffff", align: "center"
//    });
//    setTimeout(function () { this.game.state.start('HighScoreInput', HighScoreInput) } , 3000 );
};