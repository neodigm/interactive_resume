let eSearch = document.querySelector("INPUT[name='q']");
let getLinks = ( ( _d, _q ) =>{
    let naLinks = _d.querySelectorAll( _q );
    return {
        "getJson": function(){
            let aL = [];
            naLinks.forEach( ( el ) => {
                let oL = {}, eA = el.querySelector("a");
                if( eA ){
                    let oTg = [], naTg = el.querySelectorAll(".tags a");
                    naTg.forEach((el) =>{
                        oTg.push( el.textContent );
                    });
                    oL.comment = oL.name = eA.title;
                    oL.uri = eA.href;
                    oL.cat = "blogfolio";
                    oL.tags = oTg;
                    aL.push( oL );
                }
            });
            console.log( aL.length );
            console.log( JSON.stringify( aL ) );
            eSearch.outerHTML = "<pre>" + JSON.stringify( aL ) + "</pre>";
        }
    }
})( document, "main article" );
getLinks.getJson();