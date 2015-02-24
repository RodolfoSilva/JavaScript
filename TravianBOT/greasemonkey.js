// ==UserScript==
// @name        TRAVIAN BOT
// @include     http*
// @grant       GM_getValue
// @grant       GM_setValue
// ==/UserScript==


var counter = GM_getValue('counter', 0);
var id = GM_getValue('id', 0);
var ida = GM_getValue('ida', 0);
var main = GM_getValue('main', 0);
var grany = GM_getValue('grany', 0);
var mill = GM_getValue('mill', 0);
var warehouse = GM_getValue('warehouse', 0);
var market = GM_getValue('market', 0);
var palace = GM_getValue('palace', 0);
console.log('This script has been run ' + main + ' main.');
console.log('This script has been run ' + counter + ' counter.');
console.log('This script has been run ' + id + ' id.');
console.log('This script has been run ' + ida + ' ida.');

/*
GM_setValue('counter', 0);
GM_setValue('id', 0);
GM_setValue('ida', 0);
GM_setValue('main', 0);
GM_setValue('grany', 0);
GM_setValue('mill', 0);
GM_setValue('warehouse', 0);
GM_setValue('market', 0);
GM_setValue('palace', 0);
*/


setTimeout(function(){
    //GRANUARY
    if(ida==0){
        setTimeout(function(){
            GM_setValue('ida',++ida);
            var build = document.querySelectorAll('a.build');
            window.location = build[1].href;
        }, 100);
        setTimeout(function(){
            window.location = "build.php?id=19";
        }, 0);
    }
    //END GRANUARY
    
    //FLOUR MILL
    if(ida==1){
        setTimeout(function(){
            GM_setValue('ida',++ida);
            var build = document.querySelectorAll('a.build');
            window.location = build[1].href;
        }, 100);
        setTimeout(function(){
            window.location = "build.php?id=20";
        }, 0); 
    }
    //END FLOUR MILL
    
    //WAREHOUSE
    if(ida==2){
        setTimeout(function(){
            GM_setValue('ida',++ida);
            var build = document.querySelectorAll('a.build');
            window.location = build[1].href;
        }, 100);
        setTimeout(function(){
            window.location = "build.php?id=21";
        }, 0); 
    }
    //END WAREHOUSE
    
    //FULL GRANY
    if(ida==3){
        setTimeout(function(){
            var build = document.querySelector('a.build');
            window.location = build.href;
        }, 100);
        setTimeout(function(){
            window.location = "build.php?id=19";
        }, 0);
        if(document.querySelector('p.none') && grany>0){
            GM_setValue('ida',++ida);
            window.location = "build.php?id=19";
        }
        GM_setValue('grany',++grany);
    }
    //END FULL GRANY

    //FULL MILL
    if(ida==4){
        setTimeout(function(){
            var build = document.querySelector('a.build');
            window.location = build.href;
        }, 100);
        setTimeout(function(){
            window.location = "build.php?id=20";
        }, 0);
        if(document.querySelector('p.none') && mill>0){
            GM_setValue('ida',++ida);
            window.location = "build.php?id=20";
        }
        GM_setValue('mill',++mill);
    }
    //END FULL MILL

    //FULL WAREHOUSE
    if(ida==5){
        setTimeout(function(){
            var build = document.querySelector('a.build');
            window.location = build.href;
        }, 100);
        setTimeout(function(){
            window.location = "build.php?id=21";
        }, 0);
        if(document.querySelector('p.none') && warehouse>0){
            GM_setValue('ida',++ida);
            window.location = "build.php?id=21";
        }
        GM_setValue('warehouse',++warehouse);
    }
    //END FULL WAREHOUSE
    
    if(ida==6){
        GM_setValue('id',++id);
        GM_setValue('ida',++ida);
    }

    //BEGIN RESOURCES
    if(id<19 && id>0){ 
        setTimeout(function(){
            var build = document.querySelector('a.build');
            window.location = build.href;
        }, 100);
        setTimeout(function(){
           window.location = "build.php?id="+id;
        }, 0);
        if(document.querySelector('p.none')){
            GM_setValue('id',++id);
         }
    }
    // END RESOURCES
    
    //MAIN BUILDING
    if(id==19){
        setTimeout(function(){
            var build = document.querySelector('a.build');
            window.location = build.href;
        }, 100);
        setTimeout(function(){
            window.location = "build.php?id=26";
        }, 0);
        if(document.querySelector('p.none') && main>0){
            GM_setValue('id',++id);
            window.location = "build.php?id=26";
        }
        GM_setValue('main',++main);
    }
    //END MAIN BUILDING
    
    //MARKET
    if(id==20){
        setTimeout(function(){
            var build = document.querySelectorAll('a.build');
            window.location = build[2].href;
            GM_setValue('id',++id);
        }, 100);
        setTimeout(function(){
            window.location = "build.php?id=22";
        }, 0); 
    }

    if(id==21){
        setTimeout(function(){
            var build = document.querySelector('a.build');
            window.location = build.href;
        }, 100);
        setTimeout(function(){
            window.location = "build.php?id=22";
        }, 0);
        if(document.querySelector('p.none') && market>0){
            GM_setValue('id',++id);
            window.location = "build.php?id=22";
        }
        GM_setValue('market',++market);
    }
    //END MARKET
    
    //RALLY POINT
    if(id==22){
        setTimeout(function(){
            var build = document.querySelector('a.build');
            window.location = build.href;
            GM_setValue('id',++id);
        }, 200);
        setTimeout(function(){
            window.location = "build.php?id=39";
        }, 0); 
    }
    //END RALLY POINT
    
    //PALACE
    if(id==23){
        setTimeout(function(){
            GM_setValue('id',++id);
            var build = document.querySelectorAll('a.build');
            window.location = build[8].href;
        }, 100);
        setTimeout(function(){
            window.location = "build.php?id=23";
        }, 0);
    }

    if(id==24){
        setTimeout(function(){
            var build = document.querySelector('a.build');
            window.location = build.href;
        }, 100);
        setTimeout(function(){
            window.location = "build.php?id=23";
        }, 0);
        if(document.querySelector('p.none') && palace>0){
            GM_setValue('id',++id);
            window.location = "build.php?id=23";
        }
        GM_setValue('palace',++palace);
    }
    //END PALACE
    
}, 1000);

