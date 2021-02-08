class Ground{
    constructor(x,y,width,height){
        var option = {
            isStatic : true, 
            density : 0.1
        }

        this.ground = Bodies.rectangle(x,y,width,height,option)
        this.w = width
        this.h = height
        World.add(world, this.ground)
    }

    display(){
        var pos = this.ground.position
        rectMode(CENTER)
        fill("white")
        stroke("black")
        rect(pos.x, pos.y, this.w, this.h)
    }
}