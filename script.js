
// die Methode bekommt als Parameter 
function punkteBerechnen(erreichtePkt, gesamtPkt) {
  let prozent = (erreichtePkt / gesamtPkt)*100;

  let punkte;

  if (prozent >= 95) {
    punkte = "15";
  } else if (prozent >= 90 && prozent < 95) {
    //erweitere den Code
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
  // note = noteBerechnen(punkte);
  
  document.getElementById("sarah_np").innerHTML = punkte;
  document.getElementById("sarah_note").innerHTML = note;
  
}



function noteVonAnton(){
   //erweitere den Code
}

function noteVonKonrad(){
   //erweitere den Code
}
