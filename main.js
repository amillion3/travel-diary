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
                    <a href="${card.image}" target="_blank"><img src="${card.image}"></a>
                    <p>${card.description}</p>
                    <textarea name=""></textarea>
                    <button class="button">Submit Entry</button>
                  </div>`;
    writeToDom(cardOutput, "card-wrapper");
  }
)};

//Writes diarty entries to the DOM when the user submits one
//  inputArray format: location, timestamp, user input
const diaryEntryCreator = (inputArray) => {
  let diaryOutput =
                    `<div class="diary-entry">
                      <h2>${inputArray[0]}</h2>
                      <h5 class="timestamp">${inputArray[1]}</h5>
                      <p>${inputArray[2]}</p>
                      <button class="btn-delete">Delete Entry</button>
                    </div>`
  writeToDom(diaryOutput, "diary-wrapper");
  deleteBtnEvenListeners();
};

// Create timestamp
const getTimeStamp = () => {
  let dt = new Date();  //gets current time
  return dt.toUTCString();  //conerts current time to a UTC string
};

const changeBackgroundColorClicked = (event) => {
  event.target.parentNode.classList.add("papaya");
};

//After submit button click, this generates the
//  array for use in 'diaryEntryCreator' function
const createArrayForDiaryInput = (event) => {
  const clickedLocation = event.target.parentNode.children[0].innerHTML;
  const clickedTextArea = event.target.parentNode.children[3].value;
  if (clickedTextArea !== "") {
    event.target.parentNode.children[3].value = "";  //clear textarea input
    changeBackgroundColorClicked(event);
    diaryEntryCreator([clickedLocation, getTimeStamp(), clickedTextArea]);
  } else {
    alert("Please enter text to create a Travel Diary entry");
  }
};

// Create event listeners on all buttons in the cards
const createEventListeners = () => {
  const submitButtons = document.getElementsByClassName("button");
  //replace with .forEach()
  for (let i = 0; i < submitButtons.length; i++) {
    submitButtons[i].addEventListener('click', createArrayForDiaryInput);
  }
};

// deletes diary entry after 'Delete Entry' button is clicked
const deleteDiaryEntry = (event) => {
  event.target.parentNode.remove()
};

// Delete button event listener(s) in diary entries
const deleteBtnEvenListeners = () => {
  const deleteButtons = document.getElementsByClassName("btn-delete");
  for (let i = 0; i < deleteButtons.length; i++) {
    deleteButtons[i].addEventListener('click', deleteDiaryEntry);
  }
};

const startUpApplication = () => {
  cardDataGenerator();  //generates array of object data
  cardCreator(destinationsForCards);  //generates cards in the DOM
  createEventListeners();  //generates event listeners on buttons in cards
};
startUpApplication();  //runs necessary JS scripts