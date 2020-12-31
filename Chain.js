class Chain{

    constructor(p,q){
     var options={
        bodyA:p,
        pointB:q,
        lenght:10
 
     }

   this.chain=Constraint.create(options)
   World.add(world,this.chain);

}
display(){


if(this.chain.bodyA){
   line (this.chain.bodyA.position.x-32,this.chain.bodyA.position.y,this.chain.pointB.x,this.chain.pointB.y)
   line (this.chain.bodyA.position.x+52,this.chain.bodyA.position.y,this.chain.pointB.x+40,this.chain.pointB.y)
}
}
disconnectBird(){
   this.chain.bodyA=null
}


}