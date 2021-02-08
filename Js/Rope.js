class Rope {
    constructor(body1, point2){
        var option = {
            bodyA : body1,
            pointB : point2,
            stiffness : 0.3,
            length : 250
        }

        this.point2 = point2
        this.rope = Constraint.create(option)
        World.add(world, this.rope)
    }
    display(){
      if(this.rope.bodyA){
            var point1 = this.rope.bodyA.position
        var point2 = this.point2

        strokeWeight(0)
        line(point1.x,point1.y,point2.x,point2.y)
      }
    }
    fly(){
        this.rope.bodyA = null
        console.log("working")
    }

    attach(hero){
        this.rope.bodyA = hero
    }
}