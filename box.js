class Box {
    
    constructor (x,y,w,h){
        var Options = {
            isStatic:true
        }
        this.body = Bodies.rectangle(x,y,w,h,option);
        this.w = w;
        this.h = h;
        World.add(world,this.body);
    }

    display(){
        var pos = this.body.position;
        fill ("white");
        rectMode(CENTER);
        rect(pos.x,pos.y,this.w,this.h);
        
        }
};