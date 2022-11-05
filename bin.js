class bin{

    constructor(x, y, w, h){
        var op= {
            isStatic: true
        };

        this.w= w;
        this.h=h;

        this.body= Bodies.rectangle(x, y, w, h, op);
         World.add(world, this.body);
    }

    display(){
        rect(this.body.position.x, this.body.position.y, this.w, this.h)
    }
}