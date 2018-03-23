// Ugly code for use in the constructor function
const colorado = new DestinationCreator("Boulder Canyon", "/images/colorado", "A tyrolean traverse to do some rock climbing in Boulder Canyon, CO.", true);
const yosemite = new DestinationCreator("Yosemite", "/images/yosemite.jpg", "On top of Sentinel Dome with el Capitan in the background.", true);
const traverseCity = new DestinationCreator("Traverse City", "/images/traverse-city.jpg", "Climbing Sleeping Bear Sand Dunes near Traverse City, Michigan.", true);
const peru = new DestinationCreator("Machu Picchu", "/images/peru.jpg", "A 4-day long trek to arrive at Machu Picchu, in Peru.", true);
const china = new DestinationCreator("The Great Wall", "/images/china.jpg", "Descending the steep and broken steps of The Great Wall, outside Beijing.", true);
const tibet = new DestinationCreator("Tibet", "/images/tibet.jpg", "Standing at the top of the world, near the sacred Yamdrok Lake.", true);
//want to visit
const bugaboos = new DestinationCreator("The Bugaboos", "/images/bugaboos.jpg", "I would love to do some alpine climbing on the amazing granite of the Bugaboos, eastern British Columbia.", false);
const costaRica = new DestinationCreator("Costa Rica", "/images/costa-rica.jpg", "Visiting the volcanos and coffee bean farmers in Costa Rica is high on my list.", false);
const patagonia = new DestinationCreator("Fitz Roy", "/images/patagonia.jpg", "Alpine climbing in Patagonia with Fitz Roy as the backdrop would be incredible.", false);
const newZealand = new DestinationCreator("New Zealand", "/images/new-zealand.jpg", "New Zealand, no description necessary.", false);
const slovenia = new DestinationCreator("Slovenia", "/images/slovenia.jpg", "Slovenia, one of the lesser travelled European destinations.", false);
const zion = new DestinationCreator("Zion National Park", "/images/zion.jpg", "Canyoneering through the maze of slot canyons in Utah.", false);




//Empty array, which will hold objects representing locations
let destinationsForCards = [];

//Constructor function for creation of destination data
function DestinationCreator(location, image, description, visited)  {
  this.location = location,
  this.image = image,
  this.description = description,
  this.visited = visited
}

//Generates an array of objects for the destinations
const cardDataGenerator = () => {
  destinationsForCards.push(colorado, yosemite, traverseCity, peru, china, tibet);
  destinationsForCards.push(bugaboos, costaRica, patagonia, newZealand, slovenia, zion);
};
cardDataGenerator();
