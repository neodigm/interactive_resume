
🏖️ Inspired Problem Solver 🚀 Visual Storyteller


//  Usage: Save in Chrome Dev Tools > Sources > Snippets
//  Run the Snippet once each time you start the Spotify Web Player
//  Play your jams

let buttify = (function(_d, _q, _t){
    let eS = _d.querySelector( _q ), bS = true;
    if( eS ){
    setInterval(function(){buttify.tick();}, _t);
    return {
        "tick": function(){
          if( (_d.title.indexOf("Adv") != -1) || (_d.title.indexOf("Spot") != -1) ){
              if( bS ){ eS.click(); bS=false; }
          }else{
              if( !bS ){ eS.click(); bS=true; }
          }
        }
      }
    }
  })( document, "[aria-label='Mute'],[aria-label='Unmute']", 286);