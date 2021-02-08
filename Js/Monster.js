class Monster{
    constructor(x,y,width,height){
        var option = {
            isStatic : false,
            density : 1.2
        }

        this.monster = Bodies.rectangle(x,y,width,height,option)
        this.w = width
        this.h = height
        this.image = loadImage("images/Monster-01.png")
        World.add(world, this.monster)
    }

    display(){
        var pos = this.monster.position

        imageMode(CENTER)
        image(this.image,pos.x,pos.y,this.w,this.h)

    }
}