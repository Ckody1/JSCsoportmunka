var tomb = [];
function feltolt(db, min, max){   
    
    for (var i = 0; i < db; i++) {
        var vel = Math.floor(Math.random()*(max - parseInt(min)+1) + parseInt(min));
        tomb[i] = vel;
    }
    console.log(tomb);
    document.getElementById("szoveg").innerHTML="A tomb elemei: " + tomb.join("; ");    
}

function dolgozz() {
    tomb = [];
    var db = document.getElementById("db").value;
    var min = document.getElementById("minimum").value;
    var max = document.getElementById("maximum").value; 
    feltolt(db, min, max);
}
function init(){
    document.getElementById("ok").addEventListener("click", dolgozz);
}
window.addEventListener("load", init);