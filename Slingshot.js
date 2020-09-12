class Slingshot

{

constructor(bodyA,pointB)

{

var option=
{

'bodyA':bodyA,
'pointB':pointB,
'stiffness':0.04,
'length': 10


}


this.chain=Constraint.create(option);
World.add(world,this.chain)

}

fly()
{

    this.chain.bodyA=null;


}
attach(){
    this.chain.bodyA = rock1.body;   
}
display()

{
    
if(this.chain.bodyA)    {
var pos=this.chain.bodyA.position;
var pos2=this.chain.pointB;
strokeWeight(5)
line(pos.x,pos.y,pos2.x,pos2.y);
}

}



}