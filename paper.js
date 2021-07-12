
class paper{
    constructor(x,y,r){
    var options = {

         isStatic:false,
        'restitution':0.3,
        'friction':0,
        'density':1.2
    }
    
    
    this.body = Bodies.circle(x,y,(r-20)/2,options);
    this.r = r;
    this.x = x;
    this.y = y;
    this.image = loadImage("paper.png");
    World.add(world, this.body);

    
  }
display(){
    
        var paperpos=this.body.position;	
        //var paperangle =this.body.angle;	
        push()
        translate(paperpos.x, paperpos.y);
        //rotate (paperangle);
        fill(255,0,255);
        imageMode (CENTER);
        image(this.image,0,0,this.r,this.r);
        pop()
        }
    }
       