let savedHeroes = [];
let url = "https://akabab.github.io/superhero-api/api/all.json";
let heroImage = document.getElementById("hero-avatar");
let heroTitle = document.getElementById("hero-title");
let heroDescription = document.getElementById("hero-description");
let heroGender = document.getElementById("hero-gender");
let heroRace = document.getElementById("hero-race");
let heroHeight = document.getElementById("hero-height");
let heroInt = document.getElementById("hero-intelligence");
let heroStr = document.getElementById("hero-strength");
let heroSpeed = document.getElementById("hero-speed");
let heroDura = document.getElementById("hero-durability");
let heroPower = document.getElementById("hero-power");
let heroCombat = document.getElementById("hero-combat");

async function fetchAllHeroes(){
    try{
        let response = await fetch(url);
        let heroes = await response.json();
        savedHeroes = heroes;
        let randomIndex = Math.floor(Math.random() * heroes.length);
        let firstHero = heroes[randomIndex];
        console.log(firstHero);
        
        heroTitle.innerText = firstHero.name;
        heroDescription.innerText ="Wow where I saw u: " + firstHero.biography.firstAppearance;
        heroGender.innerText = "Which gender: " + firstHero.appearance.gender;
        heroRace.innerText = "Race (Racist?!): " + firstHero.appearance.race;
        heroHeight.innerText = "Height: " + firstHero.appearance.height;
        heroInt.style.width = firstHero.powerstats.intelligence + "%";
        document.getElementById("intelligence-value").innerText = firstHero.powerstats.intelligence;
        heroStr.style.width = firstHero.powerstats.strength + "%";
        document.getElementById("strength-value").innerText = firstHero.powerstats.strength;
        heroSpeed.style.width = firstHero.powerstats.speed + "%";
        document.getElementById("speed-value").innerText = firstHero.powerstats.speed;
        heroDura.style.width = firstHero.powerstats.durability + "%";
        document.getElementById("durability-value").innerText = firstHero.powerstats.durability;
        heroPower.style.width = firstHero.powerstats.power + "%";
        document.getElementById("power-value").innerText = firstHero.powerstats.power;
        heroCombat.style.width = firstHero.powerstats.combat + "%";
        document.getElementById("combat-value").innerText = firstHero.powerstats.combat;
        heroImage.setAttribute("src", firstHero.images.md); 
    }
    catch(error){
        console.log(`Getting some error: ${error}`);
    }
}

document.addEventListener("DOMContentLoaded", fetchAllHeroes);

function markAnswer(choice) {
    console.log(`Button clicked: ${choice}`);
    let yesButton = document.getElementById("yes-button");
    let noButton = document.getElementById("no-button");

    // Сбрасываем состояние обеих кнопок
    yesButton.classList.remove("active-yes");
    noButton.classList.remove("active-no");

    // Добавляем активный класс в зависимости от выбора
    if (choice === "yes") {
        yesButton.classList.add("active-yes");
        showAlert("yeah buddy thats great lets see another (u need find button yourself)");
    } else if (choice === "no") {
        noButton.classList.add("active-no");
        showAlert("oh hell, that's sound bad, we will train this hero, lets check others (u need find button yourself)");
    }
}

function showAlert(message) {
    const alertContainer = document.getElementById("custom-alert");
    const alertMessage = document.getElementById("alert-message");
    alertMessage.innerText = message;
    alertContainer.style.display = "block";
    setTimeout(function() {
        alertContainer.style.display = "none";
    }, 5000); // Скрыть через 5 секунд
}

document.getElementById('yes-button').addEventListener('click', function() {
    document.getElementById('yes-message').style.display = 'block';
    document.getElementById('no-message').style.display = 'none';
    document.getElementById('message-container').style.display = 'block';
});

document.getElementById('no-button').addEventListener('click', function() {
    document.getElementById('no-message').style.display = 'block';
    document.getElementById('yes-message').style.display = 'none';
    document.getElementById('message-container').style.display = 'block';
});
