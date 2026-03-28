// variables
let temperatureForecast = [];
let main = document.querySelector("main");
let date = 15;

// Add random numbers to temp array
for (let i = 0; i < 5; i++) {
  let temp = Math.floor(Math.random() * 101);
  temperatureForecast.push(temp);
  console.log(temperatureForecast);
}

// Loop to add each temperature as a card
for (const temperature of temperatureForecast) {
  // create card div and give it a class
  let card = document.createElement("div");
  card.classList.add("card");
  // Add it to the body:
  main.appendChild(card);

  // add dates to cards
  let cardDate = document.createElement("h3");
  cardDate.textContent = "March " + date;
  card.appendChild(cardDate);
  date += 1;

  //  add temperature to card
  let cardTemperature = document.createElement("p");
  cardTemperature.textContent = temperature + "°" + " F";
  card.appendChild(cardTemperature);

  // determine if hot,mild, or cold
  let weatherCat = "";
  if (temperature > 85) {
    weatherCat = "Hot";
  } else if (temperature > 65) {
    weatherCat = "Mild";
  } else {
    weatherCat = "Cold";
  }
  // Add category to card
  let cardWeatherCat = document.createElement("p");
  cardWeatherCat.textContent = "Weather type: " + weatherCat;
  card.appendChild(cardWeatherCat);

  // change background style based on category
  card.classList.add(weatherCat);
}
