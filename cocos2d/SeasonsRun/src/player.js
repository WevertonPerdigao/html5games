var Player = cc.Armature.extend({

    id: null,
    body: null,
    tag: null,
    onGround: null,

    ctor: function (posX,posY) {
        this._super();
        this.init("Runner");
        this.tag = "Player";
        this.onGround = true;
        this.getAnimation().play("run");
        this.setScale(0.5);
        this.setAnchorPoint(cc.p(0.5, 0.5));
        this.setPosition(cc.p(posX, posY));
        var shape = new b2PolygonShape();
        shape.SetAsBox(20/PTM_RATIO,35/PTM_RATIO);
        this.body = createBody(cc.p(posX, posY), shape, this, "dynamic", { density: 1.0, friction: 0.5, restitution: 0.0 }, PLAYER_GROUP);
        this.body.SetFixedRotation(true);
        this.body.SetSleepingAllowed(false);
    },

    land: function () {
        this.onGround = true;
        this.getAnimation().play("land");
    },
        
    jump: function () {
        if (this.onGround) {
            this.getAnimation().play("jump");
            this.body.ApplyImpulse(new b2Vec2(0, this.body.GetMass() * 10), this.body.GetWorldCenter());
            this.onGround = false;
        }
    },  

});