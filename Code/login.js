// hoi dit is test stuff en unsafe overduidelijk ik ga later als ik thuis ben alles connecten via een database (gebruikers moeten xampp installen) ok byeeeeee xxx tristan
const TEST_GEBRUIKER = "admin";
const TEST_WACHTWOORD = "gallifrey123";

function inloggen(event) {
  event.preventDefault();

  const gebruiker = document.getElementById("gebruikersnaam").value;
  const wachtwoord = document.getElementById("wachtwoord").value;

  if (gebruiker === TEST_GEBRUIKER && wachtwoord === TEST_WACHTWOORD) {
    sessionStorage.setItem("ingelogd", "ja");
    location.href = "testpagina.html";
  } else {
    document.getElementById("foutmelding").textContent = "Verkeerde gebruikersnaam of wachtwoord";
  }
}

function checkIngelogd() {
  if (sessionStorage.getItem("ingelogd") !== "ja") {
    location.replace("reallogin.html");
  }
}

function uitloggen() {
  sessionStorage.removeItem("ingelogd");
  location.href = "reallogin.html";
}
