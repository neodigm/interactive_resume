
/*
Install: Open Chrome Dev Tools (Command+option+I on a Mac). Menu > Sources > Snippets
Install: Create a new Snippet named spotADify.js, Paste this script, Save (Command-S).

Usage: Run the Snippet once each time you start the Spotify Web Player.
Usage: Right-Click the name spotADify.js and choose Run from the drop-down.
Usage: Close Chrome Dev Tools.
Play your Jams 🏖️!
*/
let spotADify = (function(_d, _q, _t){
    let eS = _d.querySelector( _q ), bS = true;
    if( eS ){
        setInterval(function(){spotADify.tick();}, _t);
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