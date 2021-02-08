class Hero{
    constructor(x,y,r){
        var option = {
            density : 1,
            frictionAir : 0.04
        }

        this.hero = Bodies.circle(x,y,r,option)
        this.r = r
        this.image = loadImage("images/Superhero-02.png")
        World.add(world, this.hero)
    }

    display(){
        var pos = this.hero.position
        
        //ellipseMode(CENTER)
        //ellipse(pos.x,pos.y,this.r,this.r)
        
        imageMode(CENTER)
        image(this.image,pos.x,pos.y,this.r,this.r)



    }
}