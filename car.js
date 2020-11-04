class Car{
    constructor(x, y, width, height) {
        var options = {
            'restitution':0.8,
            'friction':1.0,
            'density':1.0
        }
       this.body = Bodies.rectangle(x, y, width, height,options);
      
        this.x=x;
        this.y=y;
        this.width = width;
        this.height = height;
        this.image = loadImage("images/car.png");
        World.add(world, this.body);
      }
    

      moveRight(){
        this.body.position.x = this.body.position.x+5;
        //this.body.position.y= this.body.position.y-Math.random(1,2);
        console.log(this.body.position.y);
        
      }
      moveLeft(){
        this.body.position.x = this.body.position.x-20;
       // this.body.position.y= this.body.position.y-Math.random(-1,-2);
        console.log(this.x);
        
      }
      display(){
        var angle = this.body.angle;
        push();
        translate(this.body.position.x, this.body.position.y);
        rotate(angle);
        imageMode(CENTER);
        image(this.image, 50, 150, this.width, this.height);
        pop();
      }
}