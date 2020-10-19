class sling{
    constructor(A,B){


var properties={
bodyA:A,
pointB:B,
length:5,
stiffness:0.01
}

this.link=Constraint.create(properties);
World.add(world,this.link);
    }
throw(){
    this.link.bodyA=null;
    
}

attach(a){
   this.link.bodyA=a;
 //  console.log("hello");

Matter .Body.setPosition(a,{x:200, y:200})

}

    display(){
        if(this.link.bodyA){
       stroke ("yellow");
line (this.link.bodyA.position.x,this.link.bodyA.position.y,this.link.pointB.x,this.link.pointB.y);
    }
    }
}