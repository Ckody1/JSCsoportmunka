var tomb = [];
function feltolt(db, min, max){   
    
    for (var i = 0; i < db; i++) {
        var vel = Math.floor(Math.random()*max + min);
        tomb[i] = vel;
    }
    console.log(tomb);
    document.getElementById("szoveg").innerHTML="A tomb elemei: " + tomb.join("; ");    
}

function dolgozz() {
    tomb = [];
    var adat = document.getElementById("adat").value;
    feltolt(adat);
}
function init(){
    document.getElementById("ok").addEventListener("click", dolgozz);
}
window.addEventListener("load", init);