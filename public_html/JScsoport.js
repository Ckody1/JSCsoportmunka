var tomb = [];
var parosokTomb = [];
function feltolt(db, min, max){
    
    for (var i = 0; i < db; i++) {
        var vel = Math.floor(Math.random()*(max - parseInt(min)+1) + parseInt(min));
        tomb[i] = vel;
    }
    console.log(tomb);
    console.log(parosokTomb);
    document.getElementById("szoveg").innerHTML="A tomb elemei: " + tomb.join("; ");
}
function parosok(){
    szam = 0;
    for (var i = 0; i < tomb.length; i++) {
        if(tomb[i]%2 == 0){
            parosokTomb[szam] = tomb[i];
        szam++;
        }
    }
    document.getElementById("parosok").innerHTML="Párosok: " + parosokTomb.join("; ");
}
function ottelOszthato(){
    db = 0;
    for (var i = 0; i < tomb.length; i++) {
        if(tomb[i]%5 == 0){          
        db++;
        }
    }
    document.getElementById("ottelOsztható").innerHTML="Öttel oszthatók: "+ db;
}
function legnagyobbSzam(){
    legnagyobb = 0;
    for (var i = 0; i < tomb.length; i++) {
        if(tomb[i]>legnagyobb){          
            legnagyobb = tomb[i];
        }
    }
    document.getElementById("legnagyobb").innerHTML="A legnagyobb szám: "+ legnagyobb;
}
function harommalEsKettovelOszthato(){
    szam = 0;
    van = "";
    for (var i = 0; i < tomb.length; i++) {
        if(tomb[i]%3 == 0 && tomb[i]%2 == 0){
            szam++;
        }
    }
    if (szam > 0) {
        van = "Van"
    }
    else{
        van = "Nincs"
    }
    document.getElementById("harommalEsKettovelOszthato").innerHTML="Hárommal és kettővel osztható: "+ van;
}

function dolgozz() {
    tomb = [];
    var db = document.getElementById("db").value;
    var min = document.getElementById("minimum").value;
    var max = document.getElementById("maximum").value; 
    feltolt(db, min, max);
    parosok();
    ottelOszthato();
    legnagyobbSzam();
    harommalEsKettovelOszthato();
}
function init(){
    document.getElementById("ok").addEventListener("click", dolgozz);
}


window.addEventListener("load", init);