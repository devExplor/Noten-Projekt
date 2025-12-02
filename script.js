
// die Methode bekommt als Parameter 
function punkteBerechnen(erreichtePkt, gesamtPkt) {
  let prozent = (erreichtePkt / gesamtPkt)*100;

  let punkte;

  if (prozent >= 95) {
    punkte = "15";
  } else if (prozent >= 90 && prozent < 95) {
    //erweitere den Code
    punkte = "14";
  } else if (prozent >= 85 && prozent < 90) {
    //erweitere den Code
    punkte = "13";
  } else if (prozent >= 80 && prozent < 85) {
    //erweitere den Code
    punkte = "12";
  } else if (prozent >= 75 && prozent < 80) {
    //erweitere den Code
    punkte = "11";
  } else if (prozent >= 70 && prozent < 75) {
    //erweitere den Code
    punkte = "10";
  } else if (prozent >= 65 && prozent < 70) {
    //erweitere den Code
    punkte = "9";
  } else if (prozent >= 60 && prozent < 65) {
    //erweitere den Code
    punkte = "8";
  }  else if (prozent >= 55 && prozent < 60) {
    //erweitere den Code
    punkte = "7";
  } else if (prozent >= 50 && prozent < 55) {
    //erweitere den Code
    punkte = "6";
  } else if (prozent >= 45 && prozent < 50) {
    //erweitere den Code
    punkte = "5";
  } else if (prozent >= 36 && prozent < 45) {
    //erweitere den Code
    punkte = "4";
  } else if (prozent >= 27 && prozent < 36) {
    //erweitere den Code
    punkte = "3";
  } else if (prozent >= 18 && prozent < 27) {
    //erweitere den Code
    punkte = "2";
  } else if (prozent >= 9 && prozent < 18) {
    //erweitere den Code
    punkte = "1";
  } else if (prozent < 9){
    punkte = "0";
  }else{
    punkte = "Es ist ein Fehler aufgetreten";
  }

  //erweitere den Code

  return punkte;
}


function noteBerechnen(notenPkt) {
  let note; //string

  if (notenPkt == 15) {
    note = "1+";
  } else if (notenPkt == 14) {
    //erweitere den Code
    note = "1";
  } else if (notenPkt == 13) {
    //erweitere den Code
    note = "1-";
  } else if (notenPkt == 12) {
    //erweitere den Code
    note = "2+";
  } else if (notenPkt == 11) {
    //erweitere den Code
    note = "2";
  } else if (notenPkt == 10) {
    //erweitere den Code
    note = "2-";
  } else if (notenPkt == 9) {
    //erweitere den Code
    note = "3+";
  } else if (notenPkt == 8) {
    //erweitere den Code
    note = "3";
  } else if (notenPkt == 7) {
    //erweitere den Code
    note = "3-";
  } else if (notenPkt == 6) {
    //erweitere den Code
    note = "4+";
  } else if (notenPkt == 5) {
    //erweitere den Code
    note = "4";
  } else if (notenPkt == 4) {
    //erweitere den Code
    note = "4-";
  } else if (notenPkt == 3) {
    //erweitere den Code
    note = "5+";
  } else if (notenPkt == 2) {
    //erweitere den Code
    note = "5";
  } else if (notenPkt == 1) {
    //erweitere den Code
    note = "5-";
  } else if (notenPkt == 0) {
    //erweitere den Code
    note = "6";
  }

  //erweitere den Code

  return note;
}


// Hier werden die drei Button programmiert

function noteVonSarah(){
  let eP = 36;
  let gP = 80;
  
  // nutze die oberen Funktionen und erweitere den Code
  punkte = punkteBerechnen(eP, gP);
  note = noteBerechnen(punkte);
  
  
  document.getElementById("sarah_np").innerHTML = punkte;
  document.getElementById("sarah_note").innerHTML = note;
  
}



function noteVonAnton(){
  //erweitere den Code
  let eP = 59;
  let gP = 80;
  // nutze die oberen Funktionen und erweitere den Code
  punkte = punkteBerechnen(eP, gP);
  note = noteBerechnen(punkte);
  document.getElementById("anton_np").innerHTML = punkte;
  document.getElementById("anton_note").innerHTML = note;
}

function noteVonKonrad(){
  //erweitere den Code
  let eP = 63;
  let gP = 80;
  
  // nutze die oberen Funktionen und erweitere den Code
  punkte = punkteBerechnen(eP, gP);
  note = noteBerechnen(punkte);
  
  document.getElementById("konrad_np").innerHTML = punkte;
  document.getElementById("konrad_note").innerHTML = note;
}
