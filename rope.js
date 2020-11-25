 

class Rope{
    constructor(bobbody, roofbody,xOffsetX){
        var options = {
            bodyA: bobbody,
			bodyB: roofbody,
			pointB:{x:xOffsetX,y:0}
             
        }
        //this.pointB = pointB;
		//this.rope = Constraint.create(options);
		this.xOffsetX = xOffsetX;
        World.add(world, this.rope);
    }

   
    display(){
         push();
        var pointA = this.rope.bodyA.position;
        var pointB = this.rope.bodyB.position;
    
        line(pointA.x, pointA.y, pointB.x+this.xOffsetX, pointB.y);
         pop();
    }
    
} 

 