class tree{
    constructor(x,y){
this.object=Bodies.rectangle(x,y,50,200,{isStatic:true});
this.width=50;
this.height=200;
this.img=loadImage("Plucking mangoes/tree.png");
World.add(world,this.object);
    }

    display(){
        push ();
        translate(this.object.position.x,this.object.position.y);
        rotate (this.object.angle);
        //rectMode (CENTER)
        //rect(0,0,this.width,this.height);
        imageMode (CENTER);
        image(this.img,0,0,this.width,this.height);
        pop ()
    }
}