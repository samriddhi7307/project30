class box
{
	constructor(x, y,width,height)
	{
		var options={
			restitution: 1,
			friction:0.3,
			density:0.01
			
			}
		
		this.body=Bodies.rectangle(x, y,width,height, options);
		this.width = width;
		this.height = height;
		this.y = y;
		this.x = x;
		World.add(world, this.body);
        this.visibility  = 255;
	}
	display()
	{
		console.log(this.body.speed);
		if(this.body.speed<10.6){
		var pos =this.body.position;
		push();
      rectMode(CENTER);
     strokeWeight(3);
	  rect(pos.x, pos.y, this.width, this.height);
	  pop();
		}
		else{
			World.remove(world,this.body);
			push();
		 this.visibility = this.visibility -1;
		 tint(255,this.visibility);
			pop();
		}
	}

} 

 
