class Effect1Image {
    constructor(x, y, destX, destY, size, img){
        this.img = img
        this.pos = createVector(x, y)
        this.initPos = createVector(x,y)
        this.destination = createVector(destX, destY)
        this.size = size
        this.velocity = createVector(0,0);
        this.velocity.mult(3);
        this.acceleration = createVector(0,0)
        this.friction = createVector(0.7,0.7)
        this.m = this.size/10
    }

    calculateVelocity(){

    }

    move(){
        this.pos.add(this.velocity)
    }

    render(){
        image(this.img, this.pos.x, this.pos.y, this.size, this.size)
    }

}