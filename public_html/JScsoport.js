var tomb = [];
var parosokTomb = [];
var primekdb = 0;
var tombForditott = [];
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
function forditott() {
    szam = 0;
    for (var i = tomb.length; i >= 0; i--) {
        tombForditott[szam] = tomb[i];
        szam++;
    }
    document.getElementById("forditott").innerHTML = "Fordítva: " + tombForditott.join("; ");
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
function negyzetszamVanE() {
    var osszeg = 0;
    var szam = 0;
    var van = "";
    for (var i = 0; i < tomb.length; i++) {
        if (Math.sqrt(tomb[i])%1 === 0) {
            szam = tomb[i];
            osszeg += tomb[i];
        }
    }
    if (szam > 0) {
        van = "Van"
    } else {
        van = "Nincs"
    }
    document.getElementById("negyzetszam").innerHTML = "Négyzetszám : " + van;
    document.getElementById("negyzetszamokOsszege").innerHTML = "Négyzetszámok összege : " + osszeg;
}
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
        for (var i = 0; i < tomb.length; i++) {
            while(szam<tomb[i] && !(tomb[i]%szam == 0)){
                szam++;
                if(szam === tomb[i]){
                    van = "Van";
                }
            }
            szam = 2;
        }
    document.getElementById("primVanE").innerHTML = "Van-e prím?: " + van;
    }

function primszamMegszamlalas(){
    var szam = 2;
    var szam2 = 0;
        for (var i = 0; i < tomb.length; i++) {
            while(szam<tomb[i] && !(tomb[i]%szam == 0)){
                szam++;
                if(szam === tomb[i]){
                    primekdb++;
                    szam2++;
                }
            }
            szam = 2;
        }
    document.getElementById("primszamMegszamlalas2").innerHTML = "Prímek száma: " + primekdb;
    }


function dolgozz() {
    tomb = [];
    parosokTomb = [];
    primekdb = 0;
    var db = document.getElementById("db").value;
    var min = document.getElementById("minimum").value;
    var max = document.getElementById("maximum").value;
    feltolt(db, min, max);
    parosok();
    forditott();
    ottelOszthato();
    legnagyobbSzam();
    harommalEsKettovelOszthato();
    negyzetszamVanE();
    primszamVanE();
    primszamMegszamlalas();
}
function init() {
    document.getElementById("ok").addEventListener("click", dolgozz);
}


window.addEventListener("load", init);