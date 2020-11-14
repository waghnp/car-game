function randomNumber(min, max) {  
    return Math.floor(Math.random() * (max - min + 1)) + min;
} 
function game(){
  var petrolPump=[5,14,26,38,60]
  var petrol=30
  var distance=0
  var i=1;
  var step=0
  console.log("Game started")
  console.log(`Petrol Pumps generated at ${petrolPump.map((pump)=>{
    return pump
})}`)
   
while(distance<100){
    step=randomNumber(0,7)
    distance+=step;
    petrol-=step;
    if(petrolPump.includes(distance)){
        petrol+=20;
    }
    if(petrol<1){
        console.log('game over')
        break;
    }

    console.log(`Move ${i} - Car at ${distance}, petrol remaining ${petrol}`)
    i+=1;
}
if(distance>=100){
    console.log('reached..')
}
return [petrol,distance]
}
function myMove() {
  var elem = document.getElementById("animate");   
  var pos=0;
  var value=game()
  var [petrol,distance]=value;
  var id = setInterval(frame, 5);
  function frame() {
var w=window.innerWidth-80;
var wid=parseInt((distance/100)*window.innerWidth-80);
    if(petrol<1){
      if(wid===pos){
        clearInterval(id);
        alert('Game over......You failed to reach destination....Try Again!')
      }
    }
    if (pos === w) {
      clearInterval(id);
      alert('Congratulations....You reached')
    } else {
      pos++; 
      elem.style.left = pos + "px"; 
    }
  }
}