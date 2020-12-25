class Player{

constructor(){
    this.name= null;
    this.index= 0;
    this.distance=0;
}

//read from database

getCount(){
    var getCountRef= database.ref("playerCount");
    getCountRef.on("value", (data)=>{playerCount=data.val()})
}

//update my database with the playerCount
updateCount(count){
database.ref("/").update({playerCount: count});
}
//updatting name and distance of the player into my databse

update(){
    //players/player-1/2/3/4
    var playerIndex ="players/player" +this.index;//path to create in databse
    database.ref(playerIndex).set({
        name: this.name,
        distance: this.distance
    });
}
//static- 
static getPlayerInfo(){
    var playerInfoRef = database.ref("players");
    playerInfoRef.on("value",(data)=>{allPlayers=data.val()}) 
    console.log(allPlayers);
}



}