class Snow{
    constructor(x, y){
        var options = {
            isStatic : false
        }
        this.image = loadImage("snow4.webp");
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = 60;
        this.height = 60;
        this.Visiblity = 255;

        World.add(world, this.body);
    }
    display(){
        var pos = this.body.position;
        var angle = this.body.angle;
        push();
        translate(pos.x, pos.y);
        rotate(angle);
        fill("white");
        image(this.image, 0, 0, this.width, this.height);
        pop();
    }
}