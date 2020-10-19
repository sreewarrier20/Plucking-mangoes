class mango{
    constructor(x,y){
this.object=Bodies.circle(x,y,60,{isStatic:true});
//this.width=width;
//this.height=height;
this.r=60;
this.img=loadImage("Plucking mangoes/mango.png");
World.add(world,this.object);
    }

    display(){
        push ();
        translate(this.object.position.x,this.object.position.y);
       // rotate (this.object.angle);
        //ellipseMode (RADIUS)
        //ellipse(0,0,20,20);
        imageMode (CENTER);
        image(this.img,0,0,80,80);
        pop ()
    }
}