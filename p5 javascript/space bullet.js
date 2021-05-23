
class Bullet{
    constructor(x,y,r){
        this.x=x;
        this.y=y;
        this.r=5
    }
     
    //show of bullet
    show(){
        fill(255, 51, 0)
        noStroke()
        circle(this.x,this.y,this.r*2)
    }

     move(){
         this.y+=-5
     }

     hits(enemys){
         let dis=dist(this.x,this.y,enemys.x,enemys.y)
         if(dis<this.r+enemys.r){
             return true
         }
         else{
             return false
         }
         

     }

}
