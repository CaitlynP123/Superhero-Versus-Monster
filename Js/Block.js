class Block{
    constructor(x,y,width,height){
        var option = {
            isStatic : false,
            restitution : 0.08,
            friction : 1.0,
            density : 20
        }

        this.block = Bodies.rectangle(x,y,width,height,option)
        World.add(world, this.block)
        this.h = height
        this.w = width
    }

    display() {
        var pos = this.block.position
        var angle = this.block.angle

        push()
        translate(pos.x, pos.y)
        rotate(angle)
        rectMode(CENTER)
        fill("red")
        stroke("black")
        strokeWeight(1)
        rect(0,0,this.w,this.h)
        pop()
    }
}
