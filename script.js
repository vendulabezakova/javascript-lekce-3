/*const vyplata = Number(prompt("Zadej výplatu:"))
const odmena = Number(prompt("Zadej odměnu:"))

document.body.innerHTML += "<p>Vyplata: " + vyplata + "</p>"
document.body.innerHTML += "<p>Výplata s odměnou je " + (vyplata + odmena) + "</p>"*/

//Cvičení covid
/*
const fullname = prompt("Zadej své jméno:")
const age = Number(prompt("Zadej svůj věk:"))

document.body.innerHTML += "<p>" + fullname + ", věk: " + age + "</p>"*/

//Cvičení výplata
/*const sazba = Number(prompt("Hodinová sazba:"))
const hodiny = Number(prompt("Odpracováno hodin:"))
const dny = Number(prompt("Odpracováno dní:"))

document.body.innerHTML += "<p>Vaše výplata činí " + (hodiny*sazba*dny) + " Kč.</p>"*/

//OBJEKTY
/*const adresa = {
    ulice: "Tišnovská",
    cisloPopisne: 119,
    psc: 61300,
    mesto: "Brno,"
}

document.body.innerHTML = "<p>" + adresa.cisloPopisne + "</p>"*/

/*const pizzerie = {
    jmeno: "U Žofie",
    hodnoceni: 4.3,
    adresa: {
        ulice: "Venhudova",
        cisloPopisne: "1245",
        mesto: "Brno",
        psc: "61300",
    },
    nejPizza: "Diavola",
}

document.body.innerHTML += "<p>" + pizzerie.jmeno + "</p>"
document.body.innerHTML += "<p>" + pizzerie.hodnoceni + "</p>"
document.body.innerHTML += "<p>" + pizzerie.adresa.ulice + "</p>"*/

//Cvičení realitka
/*const apartment = {
    type: 'rent',
    disposition: '3+1',
    area: {
      floorage: 100,
      balcony: 2,
      units: 'sqm',
    },
    city: 'Prague',
    district: 'Old Town',
    price: {
      rent: 28000,
      fees: {
        water: 1000,
        energy: 2500,
        services: 560,
      },
      currency: 'czk',
    },
    ownership: 'personal',
    condition: 'renovated',
    status: 'free',
    floor: 3,
  };

const city = apartment.city
const district = apartment.district
  
  
document.body.innerHTML += "<p>Dispozice bytu je " + apartment.disposition + "</p>"
document.body.innerHTML += "<p>Nájem bez poplatků je " + apartment.price.rent + " Kč.</p>"
//document.body.innerHTML += "<p>Výměra bytu činí " + (apartment.area.floorage+apartment.area.balcony) + units + "</p>"
document.body.innerHTML += city + ", " + district

apartment.status = "taken"
document.body.innerHTML += "<p>Stav inzerátu: "+ apartment.status +"</p>"*/

//Cvičení knihovna
/*const book = {
    title: {
        czech: "Tulák po hvězdách",
        english: "The Star Rover",
        polish: "Włóczęga wśród gwiazd",
    }
    author: "Jack London",
    publicated: 1915,
    pages: 329,
    genre: "novel",
    mainCharacter: "Darrell Standing",
}*/

//Cvičení Očkování


const person = {
    fullname:  prompt("Zadej své jméno:"),
    age: Number(prompt("Zadej svůj věk:")),
    language: window.navigator.language,
};

document.body.innerHTML += "<p>Zadané jméno: " + person.fullname + ", váš věk: " + person.age + "</p>";
document.body.innerHTML += "<p>Váš jazyk: " + person.language + "</p>";
document.body.innerHTML += "<p>Byli jste zaregistrováni na očkování.</p>";
