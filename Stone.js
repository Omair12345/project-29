class Stone{
    constructor(x,y,w,h){
        var options={
            restitution:0.8
    }
    this.x=x
    this.y-y
    this.w=w
    this.h=h
    this.body = Bodies.rectangle(x, y, w, h, options);  
    World.add(world,this.body)
    }
  show(){
      var pos= this.body.position

      push()
      translate(pos.x,pos.y)
      strokeWeight(1)
      fill("white")
      ellipseMode(CENTER)
      ellipse(0,0,this.w,this.h)
      pop()
  }

  
}