class Game{
    constructor(){

    }
    getState(){
        database.ref("gameState").on("value",()=>{
            gameState=data.val()
        })
    
    }
    update(state){
     database.ref("/").update({ 
         gameState:state
     })
    }
    start(){
        if (gameState===0){
            form=new Form();
            form.display();
        }
    }

}