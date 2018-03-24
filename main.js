// Ugly code for use in the constructor function
const colorado = new DestinationCreator("Boulder Canyon", "colorado", "/images/colorado.jpg", "A tyrolean traverse to do some rock climbing in Boulder Canyon, CO.", true);
const yosemite = new DestinationCreator("Yosemite", "yosemite", "/images/yosemite.jpg", "On top of Sentinel Dome with el Capitan in the background.", true);
const traverseCity = new DestinationCreator("Traverse City", "traverse", "/images/traverse-city.jpg", "Climbing Sleeping Bear Sand Dunes near Traverse City, Michigan.", true);
const peru = new DestinationCreator("Machu Picchu", "peru", "/images/peru.jpg", "A 4-day long trek to arrive at Machu Picchu, in Peru.", true);
const china = new DestinationCreator("The Great Wall", "china", "/images/china.jpg", "Descending the steep and broken steps of The Great Wall, outside Beijing.", true);
const tibet = new DestinationCreator("Tibet","tibet",  "/images/tibet.jpg", "Standing at the top of the world, near the sacred Yamdrok Lake.", true);
//want to visit
const bugaboos = new DestinationCreator("The Bugaboos", "bugaboos", "/images/bugaboos.jpg", "I would love to do some alpine climbing on the amazing granite of the Bugaboos, eastern British Columbia.", false);
const costaRica = new DestinationCreator("Costa Rica", "costarica", "/images/costa-rica.jpg", "Visiting the volcanos and coffee bean farmers in Costa Rica is high on my list.", false);
const patagonia = new DestinationCreator("Fitz Roy", "patagonia", "/images/patagonia.jpg", "Alpine climbing in Patagonia with Fitz Roy as the backdrop would be incredible.", false);
const newZealand = new DestinationCreator("New Zealand", "nz", "/images/new-zealand.jpg", "New Zealand, no description necessary.", false);
const slovenia = new DestinationCreator("Slovenia", "slovenia", "/images/slovenia.jpg", "Slovenia, one of the lesser travelled European destinations.", false);
const zion = new DestinationCreator("Zion National Park", "zion", "/images/zion.jpg", "Canyoneering through the maze of slot canyons in Utah.", false);
// End of ugly code for use in the constructor function



//Empty array, which will hold objects representing locations
let destinationsForCards = [];

//Constructor function for creation of destination data
function DestinationCreator(location, id, image, description, visited)  {
  this.location = location,
  this.id = id,
  this.image = image,
  this.description = description,
  this.visited = visited
}

//Generates an array of objects for the destinations
const cardDataGenerator = () => {
  destinationsForCards.push(colorado, yosemite, traverseCity, peru, china, tibet);
  destinationsForCards.push(bugaboos, costaRica, patagonia, newZealand, slovenia, zion);
};

//Generic write to DOM function
const writeToDom = (domString, divId) => {
  document.getElementById(divId).innerHTML += domString;
};

//Writes cards to the DOM from an input array
const cardCreator = (inputArray) => {
  inputArray.forEach((card) => { //iterate through destination data
    let cardOutput =
                  `<div class="card" id="btn-${card.id}">
                    <h2>${card.location}</h2>
                    <img src="${card.image}">
                    <p>${card.description}</p>
                    <textarea name=""></textarea>
                    <button class="button"><strong>Submit Entry</strong></button>
                  </div>`;
    writeToDom(cardOutput, "card-wrapper");
  }
)};


const startUpApplication = () => {
  cardDataGenerator();
  cardCreator(destinationsForCards);
}
startUpApplication();