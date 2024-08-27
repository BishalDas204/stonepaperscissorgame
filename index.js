var st=0;
var cc="";
var hc="";
var ims=['gem-solid.svg','note-sticky-regular.svg','scissors-solid.svg'];
var ii=0;
var cg; 
// sound varable
var vol=1;
//crete backgroung music
var bm=new Audio("game-music-loop-7-145285.mp3");
//time variable for image interval
var t;
//creating image element
var ci=document.createElement("img");
var cci=document.createElement("img");
//setting an attribute for image element
ci.setAttribute("width", "80px");
cci.setAttribute("width", "80px");
// start & stop image
var bn1=document.getElementById("bn1");
//sound controller
var bn3=document.getElementById("bn3");
//start & stop game
function stg() {
    if (st==0) {
        st=1;
        document.getElementById("gs").innerHTML="Game has been started";
        document.getElementById("gs").style.color="Green";
        document.getElementById("but").style.backgroundColor="red";
        bn1.setAttribute("src", "stop-solid.svg");
        document.getElementById("pc").style.visibility="visible";
        document.getElementById("plm1").style.visibility="visible";
        document.getElementsByClassName("main").item(0).style.visibility="visible";
        document.getElementsByClassName("plm").item(0).style.visibility="visible";
        document.getElementsByClassName("plm").item(1).style.visibility="visible";
        document.getElementById("player").style.borderColor="darkorange";
        document.getElementById("comp").style.borderColor="darkorange";
        document.getElementById("rmsg").innerHTML="";
        document.getElementById("rg").style.visibility="visible";
        document.getElementById("arg").style.visibility="visible";
        // background music
        if(vol==1){
        bg_music_st();
        }
        //start button sound
        if(vol==1){
        st_sd();
        }
        // computer turn
        comp_turn();
        //image changing
        cim();
        // time interval
        t=setInterval(cim, 1000);
    } else {
        st=0;
        document.getElementById("gs").innerHTML="Game has been stopped";
        bn1.setAttribute("src", "play-solid.svg");
        document.getElementById("but").style.backgroundColor="green";
        document.getElementById("gs").style.color="red";
        document.getElementById("pc").style.visibility="hidden";
        document.getElementById("plm1").style.visibility="hidden";
        document.getElementsByClassName("main").item(0).style.visibility="hidden";
        document.getElementsByClassName("plm").item(0).style.visibility="hidden";
        document.getElementsByClassName("plm").item(1).style.visibility="hidden";
        document.getElementById("player").style.borderColor="gray";
        document.getElementById("comp").style.borderColor="gray";
        cc="";
        document.getElementById("res2").innerHTML="";
        document.getElementById("rg").style.visibility="hidden";
        document.getElementById("arg").style.visibility="hidden";
        //stop background music
        if (vol==1) {
            bg_music_sp();  
        }
        //stop button sound
        if (vol==1) {
            qt_sd();
        }
        //stop time interval
        clearInterval(t);
        // remove image
        ci.remove();
        cci.remove();
        ii=0;
    }

}
//sound driver
function volume() {
    if (vol==1) {
        document.getElementById("sound").style.backgroundColor="red";
        bn3.setAttribute("src", "volume-xmark-solid.svg");
        vol=0;
        bg_music_sp();
    }
    else{
        vol=1;
        document.getElementById("sound").style.backgroundColor="green";
        bn3.setAttribute("src", "volume-high-solid.svg");
        if (st==1) {
            bg_music_st();   
        }
    }
}



//computer choosing
function comp_turn(){
    cg=Math.floor(Math.random() * 3);
    // 0 = stone
    // 1 = paper
    // 2 = scissor
    if(cg==0){
        cc="Stone";
        
    }
    else if(cg==1){
        cc="Paper";
        
    }
    else{
        cc="Scissor";
      
    }

}
// Player Choosing
function play_but1() {
// stone
document.getElementById("pc").style.visibility="hidden";
document.getElementById("plm1").style.visibility="hidden";
document.getElementsByClassName("plm").item(0).style.visibility="hidden";
document.getElementsByClassName("plm").item(1).style.visibility="hidden";
hc="Stone";
clearInterval(t);
pwld();
window.scrollBy(0, 500);
// image result
ci.setAttribute("src", ims[0]);
document.getElementById("pchoose").appendChild(ci);
if(cg==2){
    cci.setAttribute("src", ims[cg]);
    cci.style.transform="scaleX(-1)";
    document.getElementById("cchoose").appendChild(cci);
}
else{
cci.setAttribute("src", ims[cg]);
document.getElementById("cchoose").appendChild(cci);
}
}
function play_but2() {
// Paper
document.getElementById("pc").style.visibility="hidden";
document.getElementById("plm1").style.visibility="hidden";
document.getElementsByClassName("plm").item(0).style.visibility="hidden";
document.getElementsByClassName("plm").item(1).style.visibility="hidden";
hc="Paper";
clearInterval(t);
pwld();
window.scrollBy(0, 500);
ci.setAttribute("src", ims[1]);
document.getElementById("pchoose").appendChild(ci);
if(cg==2){
    // scissor flip
    cci.setAttribute("src", ims[cg]);
    cci.style.transform="scaleX(-1)";
    document.getElementById("cchoose").appendChild(cci);
}
else{
cci.setAttribute("src", ims[cg]);
document.getElementById("cchoose").appendChild(cci);
}
}
function play_but3() {
// Scissor
document.getElementById("pc").style.visibility="hidden";
document.getElementById("plm1").style.visibility="hidden";
document.getElementsByClassName("plm").item(0).style.visibility="hidden";
document.getElementsByClassName("plm").item(1).style.visibility="hidden";
hc="Scissor";
clearInterval(t);
pwld();
window.scrollBy(0, 500);
ci.setAttribute("src", ims[2]);
document.getElementById("pchoose").appendChild(ci);
if(cg==2){
    cci.setAttribute("src", ims[cg]);
    cci.style.transform="scaleX(-1)";
    document.getElementById("cchoose").appendChild(cci);
}
else{
cci.setAttribute("src", ims[cg]);
document.getElementById("cchoose").appendChild(cci);
}
}
// Result
function pwld(){
    // Draw
    if (hc==cc) {
        document.getElementById("res2").innerHTML="You choose "+hc+" & computer choose "+cc+"<br>"+"Draw";
        document.getElementById("res2").style.color="white";
        document.getElementById("player").style.borderColor="white";
        document.getElementById("comp").style.borderColor="white";
        if (vol==1) {
            draw_sd(); 
        }
    } else {
        // Player win
        if (hc=="Stone" && cc=="Scissor") {
            document.getElementById("res2").innerHTML="You choose "+hc+" & computer choose "+cc+"<br>"+"You win";
            document.getElementById("res2").style.color="green";
            document.getElementById("player").style.borderColor="green";
            document.getElementById("comp").style.borderColor="red";
            if (vol==1) {
                win_sd(); 
            }
        }
        else if(hc=="Paper" && cc=="Stone"){
            document.getElementById("res2").innerHTML="You choose "+hc+" & computer choose "+cc+"<br>"+"You win";
            document.getElementById("res2").style.color="green";
            document.getElementById("player").style.borderColor="green";
            document.getElementById("comp").style.borderColor="red";
            if (vol==1) {
                win_sd();
            }
        }
        else if(hc=="Scissor" && cc=="Paper"){
            document.getElementById("res2").innerHTML="You choose "+hc+" & computer choose "+cc+"<br>"+"You win";
            document.getElementById("res2").style.color="green";
            document.getElementById("player").style.borderColor="green";
            document.getElementById("comp").style.borderColor="red";
            if (vol==1) {
                win_sd();
            }
        }
        // player lose
        else if (cc=="Stone" && hc=="Scissor") {
            document.getElementById("res2").innerHTML="You choose "+hc+" & computer choose "+cc+"<br>"+"You lose";
            document.getElementById("res2").style.color="red";
            document.getElementById("player").style.borderColor="red";
            document.getElementById("comp").style.borderColor="green";
            if (vol==1) {
                lose_sd();
            }
        }
        else if (cc=="Paper" && hc=="Stone"){
            document.getElementById("res2").innerHTML="You choose "+hc+" & computer choose "+cc+"<br>"+"You lose";
            document.getElementById("res2").style.color="red";
            document.getElementById("player").style.borderColor="red";
            document.getElementById("comp").style.borderColor="green";
            if (vol==1) {
                lose_sd();
            }
        }
        else if (cc=="Scissor" && hc=="Paper"){
            document.getElementById("res2").innerHTML="You choose "+hc+" & computer choose "+cc+"<br>"+"You lose";
            document.getElementById("res2").style.color="red";
            document.getElementById("player").style.borderColor="red";
            document.getElementById("comp").style.borderColor="green";
            if (vol==1) {
                lose_sd();
            }
        }
    }

}
// image chnaging
function cim(){
    ci.setAttribute("src", ims[ii]);
    cci.setAttribute("src", ims[ii]);
    document.getElementById("pchoose").appendChild(ci);
    document.getElementById("cchoose").appendChild(cci);
    if(ii<2){
        ii++;
    }
    else{
        // fliping scissor
        cci.style.transform="scaleX(-1)";
        document.getElementById("cchoose").appendChild(cci);
        ii=0;
    }
}
// game sound
function st_sd() {
    var sd=new Audio("game-start-6104.mp3");
    sd.play();
}
function qt_sd() {
    var sd=new Audio("achievement-video-game-type-1-230515.mp3");
    sd.play();
}
function win_sd(){
    var sd=new Audio("good-6081.mp3");
    sd.play();
}
function lose_sd() {
    var sd=new Audio("game-over-arcade-6435.mp3");
    sd.play();
}
function draw_sd() {
    var sd=new Audio("game-level-complete-143022.mp3");
    sd.play();
}
//background music start
function bg_music_st(){
bm.play();
bm.loop=true;
bm.autoplay=true;
}
//background music stop
function bg_music_sp(){
    bm.pause();
    bm.currentTime=0;
}
//restart sound
function res_sd() {
    var rd=new Audio("90s-game-ui-6-185099.mp3");
    rd.play();
}
//restart game
function restart(){
    if (vol==1) {
        res_sd();
    }
    if (st==1) {
        //stopping point
        cc="";
        document.getElementById("res2").innerHTML="";
        if (vol==1) {
            bg_music_sp(); 
        }
        clearInterval(t);
        ci.remove();
        cci.remove();
        ii=0;
        //strating point
        document.getElementById("pc").style.visibility="visible";
        document.getElementById("plm1").style.visibility="visible";
        document.getElementsByClassName("main").item(0).style.visibility="visible";
        document.getElementsByClassName("plm").item(0).style.visibility="visible";
        document.getElementsByClassName("plm").item(1).style.visibility="visible";
        document.getElementById("player").style.borderColor="darkorange";
        document.getElementById("comp").style.borderColor="darkorange";
        if (vol==1) {
            bg_music_st();
        }
        comp_turn();
        cim();
        t=setInterval(cim, 1000);
    }
} 
// restart msg is removing 
function remove_msg(){
    document.getElementById("rmsg").innerHTML="";
}
