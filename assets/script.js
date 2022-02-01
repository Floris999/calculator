import {verhuurderInfo} from "./data";
// Adrem data
let adremName = verhuurderInfo._verhuurder[0];
let adremBus = verhuurderInfo._bus[0];
let adremPpd = verhuurderInfo._ppd[0];
let adremPpk = verhuurderInfo._ppk[0];
let adremData = `Verhuurder: ${adremName}<br> Bus: ${adremBus}<br> Prijs per dag: ${adremPpd}<br> Prijs per km: ${adremPpk}`;
// End Adrem data

// Bo-Rent data
let borentName = verhuurderInfo._verhuurder[1];
let borentBus = verhuurderInfo._bus[1];
let borentPpd = verhuurderInfo._ppd[1];
let borentPpk = verhuurderInfo._ppk[1];
let borentData = `Verhuurder: ${borentName}<br> Bus: ${borentBus}<br> Prijs per dag: ${borentPpd }<br> Prijs per km: ${borentPpk}`;
// End Bo-Rent data

// Hertz data
let hertzName = verhuurderInfo._verhuurder[2];
let hertzBus = verhuurderInfo._bus[2];
let hertzPpd = verhuurderInfo._ppd[2];
let hertzPpk = verhuurderInfo._ppk[2];
let hertzData = `Verhuurder: ${hertzName}<br> Bus: ${hertzBus}<br> Prijs per dag: ${hertzPpd}<br> Prijs per km: ${hertzPpk}`;
// End Hertz

//start of innerhtml cards
let setDataInHtml = () => {
  document.getElementById("adrem").innerHTML = adremData;
  document.getElementById("borent").innerHTML = borentData;
  document.getElementById("hertz").innerHTML = hertzData;

}
setDataInHtml();
// end of innerhtml cards

//start of selected name function
let selectName = () => {
  if(document.getElementById('bus').value === "citroën") {
     document.getElementById("bus-name-adrem").innerHTML = verhuurderInfo._bus[0];
  }else if(document.getElementById('bus').value === "volkswagen") {
     document.getElementById("bus-name-borent").innerHTML = verhuurderInfo._bus[1];
  }else if(document.getElementById('bus').value === "toyota") {
     document.getElementById("bus-name-hertz").innerHTML = verhuurderInfo._bus[2];
  }
}
//end of selected name function

//start of selected days function
let selectPeriode = () => {
  let userPeriode = document.getElementById("periode").value;
  if(document.getElementById('bus').value === "citroën") {
      document.getElementById("adrem-dag").innerHTML = "Totaal aantal dagen: " + "€ " + verhuurderInfo._ppd[0] * parseInt(userPeriode);
  }else if(document.getElementById('bus').value === "volkswagen") {
      document.getElementById("borent-dag").innerHTML = "Totaal aantal dagen: " + "€ " + verhuurderInfo._ppd[1] * parseInt(userPeriode);
  }else if(document.getElementById('bus').value === "toyota") {
      document.getElementById("hertz-dag").innerHTML = "Totaal aantal dagen: " + "€ " + verhuurderInfo._ppd[2] * parseInt(userPeriode);
  }
}
//end of selected days function

//start of selected km function
let selectKm = () => {
  let userKm = document.getElementById("km").value;
  if(document.getElementById('bus').value === "citroën") {
      document.getElementById("adrem-km").innerHTML = "Totaal aantal km: " + "€ " + verhuurderInfo._ppk[0] * parseInt(userKm);
  }else if (document.getElementById('bus').value === "volkswagen") {
      document.getElementById("borent-km").innerHTML = "Totaal aantal km: " + "€ " + verhuurderInfo._ppk[1] * parseInt(userKm);
  }else if(document.getElementById('bus').value === "toyota") {
      document.getElementById("hertz-km").innerHTML = "Totaal aantal km: " + "€ " + verhuurderInfo._ppk[2] * parseInt(userKm);
  }
}
//end of selected km function
