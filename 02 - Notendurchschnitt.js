let note_anzahl = Number('0');
let note1_anzahl = Number('0');
let note2_anzahl = Number('0');
let note3_anzahl = Number('0');
let note4_anzahl = Number('0');
let note5_anzahl = Number('0');
let note6_anzahl = Number('0');
let note_insgesamt = Number ('0')


function button1()
{
    
    note_anzahl = note_anzahl + 1 
    note1_anzahl = note1_anzahl + 1
    note_insgesamt = note_insgesamt + 1
    document.getElementById("result_durchschnitt_normal").innerHTML = 'Dein aktueller Durchschnitt beträgt : ';
    document.getElementById("result_durchschnitt_groß").innerHTML = Math.round(note_insgesamt/(note_anzahl) * 100) / 100;
    document.getElementById("result_anzahl_normal1").innerHTML = 'Du hast aktuell ';
    document.getElementById("result_anzahl_groß").innerHTML = note_anzahl;

    if (note_anzahl == 1) {
    
        document.getElementById("result_anzahl_normal2").innerHTML = ' Note angegeben.';}
    else {
    
        document.getElementById("result_anzahl_normal2").innerHTML = ' Noten angegeben.';
    }
    document.getElementById("button21").innerHTML = note1_anzahl;
}

function button2()
{
    note_anzahl = note_anzahl + 1           
    note2_anzahl = note2_anzahl + 1
    note_insgesamt = note_insgesamt + 2
    document.getElementById("result_durchschnitt_normal").innerHTML = 'Dein aktueller Durchschnitt beträgt : ';
    document.getElementById("result_durchschnitt_groß").innerHTML = Math.round(note_insgesamt/(note_anzahl) * 100) / 100;
    document.getElementById("result_anzahl_normal1").innerHTML = 'Du hast aktuell ';
    document.getElementById("result_anzahl_groß").innerHTML = note_anzahl;

    if (note_anzahl == 1) {
    
        document.getElementById("result_anzahl_normal2").innerHTML = ' Note angegeben.';}
    else {
    
        document.getElementById("result_anzahl_normal2").innerHTML = ' Noten angegeben.';
    }
    document.getElementById("button22").innerHTML = note2_anzahl;
}

function button3()
{
    note_anzahl = note_anzahl + 1         
    note3_anzahl = note3_anzahl + 1  
    note_insgesamt = note_insgesamt + 3
    document.getElementById("result_durchschnitt_normal").innerHTML = 'Dein aktueller Durchschnitt beträgt : ';
    document.getElementById("result_durchschnitt_groß").innerHTML = Math.round(note_insgesamt/(note_anzahl) * 100) / 100;
    document.getElementById("result_anzahl_normal1").innerHTML = 'Du hast aktuell ';
    document.getElementById("result_anzahl_groß").innerHTML = note_anzahl;

    if (note_anzahl == 1) {
    
        document.getElementById("result_anzahl_normal2").innerHTML = ' Note angegeben.';}
    else {
    
        document.getElementById("result_anzahl_normal2").innerHTML = ' Noten angegeben.';
    }  
    document.getElementById("button23").innerHTML = note3_anzahl;
}

function button4()
{
    note_anzahl = note_anzahl + 1           
    note4_anzahl = note4_anzahl + 1
    note_insgesamt = note_insgesamt + 4
    document.getElementById("result_durchschnitt_normal").innerHTML = 'Dein aktueller Durchschnitt beträgt : ';
    document.getElementById("result_durchschnitt_groß").innerHTML = Math.round(note_insgesamt/(note_anzahl) * 100) / 100;
    document.getElementById("result_anzahl_normal1").innerHTML = 'Du hast aktuell ';
    document.getElementById("result_anzahl_groß").innerHTML = note_anzahl;

    if (note_anzahl == 1) {
    
        document.getElementById("result_anzahl_normal2").innerHTML = ' Note angegeben.';}
    else {
    
        document.getElementById("result_anzahl_normal2").innerHTML = ' Noten angegeben.';
    }
    document.getElementById("button24").innerHTML = note4_anzahl;
}

function button5()
{
    note_anzahl = note_anzahl + 1         
    note5_anzahl = note5_anzahl + 1  
    note_insgesamt = note_insgesamt + 5
    document.getElementById("result_durchschnitt_normal").innerHTML = 'Dein aktueller Durchschnitt beträgt : ';
    document.getElementById("result_durchschnitt_groß").innerHTML = Math.round(note_insgesamt/(note_anzahl) * 100) / 100;
    document.getElementById("result_anzahl_normal1").innerHTML = 'Du hast aktuell ';
    document.getElementById("result_anzahl_groß").innerHTML = note_anzahl;

    if (note_anzahl == 1) {
    
        document.getElementById("result_anzahl_normal2").innerHTML = ' Note angegeben.';}
    else {
    
        document.getElementById("result_anzahl_normal2").innerHTML = ' Noten angegeben.';
    }
    document.getElementById("button25").innerHTML = note5_anzahl;
}

function button6()
{
    note_anzahl = note_anzahl + 1           
    note6_anzahl = note6_anzahl + 1
    note_insgesamt = note_insgesamt + 6
    document.getElementById("result_durchschnitt_normal").innerHTML = 'Dein aktueller Durchschnitt beträgt : ';
    document.getElementById("result_durchschnitt_groß").innerHTML = Math.round(note_insgesamt/(note_anzahl) * 100) / 100;
    document.getElementById("result_anzahl_normal1").innerHTML = 'Du hast aktuell ';
    document.getElementById("result_anzahl_groß").innerHTML = note_anzahl;

    if (note_anzahl == 1) {
    
        document.getElementById("result_anzahl_normal2").innerHTML = ' Note angegeben.';}
    else {
    
        document.getElementById("result_anzahl_normal2").innerHTML = ' Noten angegeben.';
    }   
    document.getElementById("button26").innerHTML = note6_anzahl;
}
function buttonreset()
{
note_insgesamt = 0
note_anzahl = 0
note1_anzahl = 0
note2_anzahl = 0
note3_anzahl = 0
note4_anzahl = 0
note5_anzahl = 0
note6_anzahl = 0

    document.getElementById("result_anzahl_normal2").innerHTML = ' Noten angegeben.';

    document.getElementById("result_durchschnitt_normal").innerHTML = 'Dein aktueller Durchschnitt beträgt : ';
    document.getElementById("result_durchschnitt_groß").innerHTML = 0;
    document.getElementById("result_anzahl_normal1").innerHTML = 'Du hast aktuell ';
    document.getElementById("result_anzahl_groß").innerHTML = 0;

    document.getElementById("button21").innerHTML = 0
    document.getElementById("button22").innerHTML = 0
    document.getElementById("button23").innerHTML = 0
    document.getElementById("button24").innerHTML = 0
    document.getElementById("button25").innerHTML = 0
    document.getElementById("button26").innerHTML = 0
    
}