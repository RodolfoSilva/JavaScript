// GREASEMONKEY

// ==UserScript==
// @name        TRAVIAN BOT
// @include     http://neect.ieeta.pt/*
// @grant       GM_getValue
// @grant       GM_setValue
// ==/UserScript==

setTimeout(function(){
    window.location = "http://neect.ieeta.pt/forum/posting.php?mode=reply&f=15&t=2303";
}, 6000);

setTimeout(function(){
    var elem = document.getElementById("message");
    elem.value = '[youtube]https://www.youtube.com/embed/DfrSd8toss8[/youtube]';
    
    var d = new Date();
    var n = d.getHours();
    console.log(n);
}, 0);

setTimeout(function(){
    document.getElementsByTagName("input")[26].click();
}, 3000);