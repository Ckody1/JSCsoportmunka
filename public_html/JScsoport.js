var tomb = [];
var parosokTomb = [];
function feltolt(db, min, max) {

    for (var i = 0; i < db; i++) {
        var vel = Math.floor(Math.random() * (max - parseInt(min) + 1) + parseInt(min));
        tomb[i] = vel;
    }
    console.log(tomb);
    console.log(parosokTomb);
    document.getElementById("szoveg").innerHTML = "A tomb elemei: " + tomb.join("; ");
}
function parosok() {
    var szam = 0;
    for (var i = 0; i < tomb.length; i++) {
        if (tomb[i] % 2 == 0) {
            parosokTomb[szam] = tomb[i];
            szam++;
        }
    }
    document.getElementById("parosok").innerHTML = "Párosok: " + parosokTomb.join("; ");
}
function ottelOszthato() {
    var db = 0;
    for (var i = 0; i < tomb.length; i++) {
        if (tomb[i] % 5 == 0) {
            db++;
        }
    }
    document.getElementById("ottelOsztható").innerHTML = "Öttel oszthatók: " + db;
}
function legnagyobbSzam() {
    var legnagyobb = 0;
    for (var i = 0; i < tomb.length; i++) {
        if (tomb[i] > legnagyobb) {
            legnagyobb = tomb[i];
        }
    }
    document.getElementById("legnagyobb").innerHTML = "A legnagyobb szám: " + legnagyobb;
}
//function negyzetszamVanE() {
//    var szam = 0;
//    var van = "";
//    for (var i = 0; i < tomb.length; i++) {
//        if (Math.sqrt(tomb[i])) {
//            szam = tomb[i];
//        }
//    }
//    if (szam > 0) {
//        van = "Van"
//    } else {
//        van = "Nincs"
//    }
//    document.getElementById("negyzetszam").innerHTML = "Négyzetszám : " + szam;
//}
function harommalEsKettovelOszthato() {    
    var van = "Nincs";
    var szam = 0;
    while (szam == 0) {
        for (var i = 0; i < tomb.length; i++) {
            if (tomb[i] % 3 == 0 && tomb[i] % 2 == 0) {
                szam++;
                van = "Van";
            }
        }
        szam++;
    }
    document.getElementById("harommalEsKettovelOszthato").innerHTML = "Hárommal és kettővel osztható: " + van;
}
function primszamVanE(){
    var szam = 2;
    var van = "Nincs";
    var vanE = false;
    while(!vanE){
        for (var i = 0; i < tomb.length; i++) {
            while(szam<tomb[i] && !(tomb[i]%szam == 0)){
                szam++;
                if(szam < tomb.length){
                    vanE = true;
                    van = "Van";
                }
            }
        }
        vanE = true;
    }
    document.getElementById("primVanE").innerHTML = "Van-e prím?: " + van;
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
    //negyzetszamVanE();
    primszamVanE();
}
function init() {
    document.getElementById("ok").addEventListener("click", dolgozz);
}


window.addEventListener("load", init);