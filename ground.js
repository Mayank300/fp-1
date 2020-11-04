class Ground {
    constructor(x,y,width,height,imageName) {
      var options = {
          isStatic: true,
           //angle: Math.PI * 0.06
      }
      this.image=loadImage(imageName);
      this.body = Bodies.rectangle(x,y,width,height,options);
      this.width = width;
      this.height = height;
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      rectMode(CENTER);
      fill("brown");
      rect(pos.x, pos.y, this.width, this.height);
      // imageMode(CENTER);
      // fill("brown");
      // image(this.image,pos.x, pos.y, this.width, this.height);
    }
  };
