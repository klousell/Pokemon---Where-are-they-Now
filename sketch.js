var font;
var x = windowWidth/2;
var pokedata;
var nasdaqdata;
var industrydata;
var condimentdata;
var genredata;
var instrumentdata;
var netflixdata;

function preload() {
  
  font = loadFont('adventpro-medium.ttf');
  pokedata = loadJSON("pokemon.json");
  nasdaqdata = loadJSON("nasdaq.json");
  netflixdata = loadJSON("netflix-categories.json");
  industrydata = loadJSON("industries.json");
 	condimentdata = loadJSON("condiments.json");
  genredata = loadJSON("genres.json");
  instrumentdata = loadJSON("instruments.json");

}


function setup() {
  createCanvas(windowWidth, windowHeight);
  background(0);
  textFont(font);
  textSize(40);
  
  var pokemon = pokedata.pokemon;
  var corporations = nasdaqdata.corporations;
  var categories = netflixdata.categories;
  var industries = industrydata.industries;
  var condiments = condimentdata.condiments;
  var genres = genredata.genres;
  var instruments = instrumentdata.instruments;
  
  var randomPokemon1 = pokemon[Math.floor(Math.random() * pokemon.length)];
  var randomPokemon2 = pokemon[Math.floor(Math.random() * pokemon.length)];
  var randomPokemon3 = pokemon[Math.floor(Math.random() * pokemon.length)];
  var randomPokemon4 = pokemon[Math.floor(Math.random() * pokemon.length)];
  var randomPokemon5 = pokemon[Math.floor(Math.random() * pokemon.length)];
  var randomPokemon6 = pokemon[Math.floor(Math.random() * pokemon.length)];
  var randomPokemon7 = pokemon[Math.floor(Math.random() * pokemon.length)];
  var randomPokemon8 = pokemon[Math.floor(Math.random() * pokemon.length)];
  var randomPokemon9 = pokemon[Math.floor(Math.random() * pokemon.length)];
  
  var randomJob = corporations[Math.floor(Math.random() * corporations.length)];
  var randomGenre = categories[Math.floor(Math.random() * categories.length)];
  var randomIndustry = industries[Math.floor(Math.random() * industries.length)];
  var randomCondiment = condiments[Math.floor(Math.random() * condiments.length)];
  var randomMGenre = genres[Math.floor(Math.random() * genres.length)];
  var randomInstrument = instruments[Math.floor(Math.random() * instruments.length)];
  
  fill(255);
 text(randomPokemon1.name + " and " + randomPokemon2.name + " got jobs at " + randomJob.name + ".", x, 50);
 text(randomPokemon3.name + " is watching " + randomGenre + " on Netflix.", x, 150);
 text(randomPokemon4.name + " is studying " + randomIndustry + " in college. ", x, 250);
 text(randomPokemon5.name + " caught " + randomPokemon6.name + " eating " + randomCondiment + " straight from the bottle.", x, 350);
 text(randomPokemon7.name + " is listening to " + randomMGenre + " on full blast. " + randomPokemon8.name + " is annoyed.", x, 450);
 text(randomPokemon9.name + " is learning to play the " + randomInstrument + "." + " They have a long way to go.", x, 550);
  
}



