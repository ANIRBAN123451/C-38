class Form{

constructor(){
    this.input= createInput("Name");
    this.button= createButton("Play");
    this.greeting= createElement('h2');//text
    this.title= createElement('h2');//text
}

hide(){
    this.input.hide();
    this.button.hide();
    this.greeting.hide();
    this.title.hide();
}

display(){
    this.title.html("CAR RACING GAME");
  //  this.title.position(950,200);
 //   this.input.position(980,350);
 //   this.button.position(1050,400);
  this.title.position(displayWidth/2,displayHeight/2-50);
    this.input.position(displayWidth/2,displayHeight/2);
   this.button.position(displayWidth/2,displayHeight/2+50);
    this.button.mousePressed(()=>{
       
        this.input.hide();
        this.button.hide();
        player.name = this.input.value();//extracts info from html
        playerCount= playerCount+1;
        player.index= playerCount;
        player.updateCount(playerCount);//playercount
        player.update();//name, distance
        this.greeting.html("Hello " + player.name + " It seems like you need a tutorial!!!!!");
        this.greeting.position(displayWidth/2,displayHeight/2-50);







    })
}










}