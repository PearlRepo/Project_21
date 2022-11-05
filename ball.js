class ball{

    constructor(x, y, r){
        var op={
            isStatic:false,
            restitution:0,
            friction:2,
            Airfriction:10,
            density:7
        }

        this.r=r;
        this.body= Bodies.circle(x, y, r, op);
        World.add(world, this.body);
    }

    display(){
        fill("white")
        ellipseMode(RADIUS);
        ellipse(this.body.position.x, this.body.position.y, this.r)
    }
}