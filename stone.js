class stone{
    constructor(x,y){
this.object=Bodies.circle(x,y,30,{isStatic: false,restitution:0.1,friction:1,density:1.2});
//this.width=width;
//this.height=height;
this.r=30;
this.img=loadImage("Plucking mangoes/stone.png");
World.add(world,this.object);
    }

    display(){
       // this.object.position.x=mouseX;
       // this.object.position.y=mouseY;
        push ();
        translate(this.object.position.x,this.object.position.y);
       // rotate (this.object.angle);
        //ellipseMode (RADIUS)
        //ellipse(0,0,20,20);
        imageMode (CENTER);
        image(this.img,0,0,60,60);
        pop ()
    }
}