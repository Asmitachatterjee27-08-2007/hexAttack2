class Box {
    constructor(x, y, width, height) {
      var options = {
          'restitution':0.8,
          'friction':1.0,
          'density':0.8
      }
      this.body = Bodies.rectangle(x, y, width, height, options);
      this.width = width;
      this.height = height;
      this.visibility=255;
      
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
  
      if(this.body.speed<3){
        push()
      translate(pos.x,pos.y);
      rotate(this.body.angle);
      rectMode(CENTER);
      fill("blue");
      stroke("pink");
      strokeWeight(4);
      rect(0, 0, this.width, this.height);
      pop();
      }else{
        World.remove(world,this.body);
        push();
        this.visibility=this.visibility-5;
        tint(255,this.visibility);
        image(this.image,this.body.position.x,this.body.position.y,50,50);
        pop();
      }
      
    }
  }