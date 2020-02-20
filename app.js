

var scores,roundscore,activeplayer,gameplayer;

init();

document.querySelector('.dice').style.display='none';

document.querySelector('.btn-roll').addEventListener('click',function(){
   if(gameplayer){
       var dice=Math.floor(Math.random()*6)+1; 
       
       var diceDOM=document.querySelector('.dice');
       diceDOM.style.display='block';
       diceDOM.src='dice-'+dice+'.png';
    
       if(dice!==1){
          roundscore += dice;
          document.querySelector('#current-'+activeplayer).textContent=roundscore;
        }else{
          nextplayer();
        }
   }    
   });
 
document.querySelector('.btn-hold').addEventListener('click', function(){
    if(gameplayer){
        scores[activeplayer] += roundscore;
    
    document.querySelector('#score-'+activeplayer).textContent=scores[activeplayer];
    
    if(scores[activeplayer] >=20){
        document.querySelector('#name-'+activeplayer).textContent='Winnner:)';
        document.querySelector('.dice').style.display='none';
        document.querySelector('.player-'+activeplayer+'-panel').classList.add("Winner:)");
        document.querySelector('.player-'+activeplayer+'-panel').classList.remove("active"); 
        gameplayer=false;
    }else{
        nextplayer();
    }
    
    }    
});

function nextplayer(){
    activeplayer === 0 ? activeplayer=1 : activeplayer=0; 
        roundscore=0;
        
        document.getElementById('current-0').textContent='0';
        document.getElementById('current-1').textContent='0';
        
        document.querySelector('.player-0-panel').classList.toggle("active");
        document.querySelector('.player-1-panel').classList.toggle("active");
        
        document.querySelector('.dice').style.display='none';    
}

document.querySelector('.btn-new').addEventListener('click', init);

function init(){
    scores=[0,0];
roundscore=0;
activeplayer=0;
    gameplayer=true;

document.getElementById('score-0').textContent='0';
document.getElementById('score-1').textContent='0';
document.getElementById('current-0').textContent='0';
document.getElementById('current-1').textContent='0';
document.getElementById('name-0').textContent='Player 0';    
document.getElementById('name-1').textContent='Player 1';    
    
    document.querySelector('.player-0-panel').classList.remove("Winner:)");
    document.querySelector('.player-1-panel').classList.remove("Winner:)");
    
    document.querySelector('.player-0-panel').classList.remove('active');
    document.querySelector('.player-1-panel').classList.remove('active');
    
    document.querySelector('.player-0-panel').classList.add('active');
    

}

























