//Updating the DOM

// querySelector and querySelectorAll 

const value = document.querySelector(".value");

const button = document.querySelector("button");

const area = document.querySelector(".area");

const divstat = document.querySelector("div .stat");

const hello = document.querySelector(".hello");

const buttons = document.querySelectorAll("button");

const allDivElementsContainingRatings = document.querySelectorAll("div .rating-display");

// using values to log each value of querySelectorAll 
for (let element of allDivElementsContainingRatings.values()) {
    console.log(element);
}

// using for loop 
const allDivElementsContainingAreas = document.querySelectorAll("div .area-display");

for (let i = 0; i < allDivElementsContainingAreas.length; i++) {
    const element = allDivElementsContainingAreas[i];
    console.log(element);
}

// logging each description using innerText 
const descriptions = document.querySelectorAll(".description-display");

// log each description using innerText, truncate text, and add ellipses if over 250 characters 

for (let desc of descriptions.values()) {
    let content = desc.innerText;
    
    if (content.length > 250) {
        content = content.slice(0,250);
        content = content + "...";
    }

    console.log(content);
}

// update HTMLElement 

for (let desc of descriptions.values()) {
    let content = desc.innerText;
    
    if (content.length > 250) {
        content = content.slice(0,250);
        content = content + "...";
    }

    desc.innerText = content;
}

// innerHTML property 

for (let desc of descriptions.values()) {
    let content = desc.innerText;
    
    if (content.length > 250) {
        content = content.slice(0,250);
        content = content + '<a href="#">...</a>';
    }

    desc.innerHTML = content;
}


// changing the styles 

const ratings = document.querySelectorAll(".rating-display .value");

for (let rating of ratings) {
    let ratingValue = parseFloat(rating.innerText);
  
    if (ratingValue > 4.7) {
      rating.style.fontWeight = "bold";
      rating.style.color = "#3ba17c";
    }
}


// adding classList from CSS 

for (let rating of ratings) {
    let ratingValue = parseFloat(rating.innerText);
  
    if (ratingValue > 4.7) {
      rating.classList.add("high-rating");
      rating.classList.remove("value");
    }
}


// creating DOM elements 

// selects parks on page using park class as a selector 
const parks = document.querySelectorAll(".park-display");
// get number of parks using length property 
const numberParks = parks.length;
// create new element which is empty 
const newElement = document.createElement("div");
// set the text of the element
newElement.innerText = `${numberParks} exciting parks to visit`;
// add style and classes
newElement.classList.add("header-statement");
// add element to page
const header = document.querySelector("header");
header.appendChild(newElement);


// removing DOM elements

const main = document.querySelector("main");
const park = main.querySelector(".park-display");
main.removeChild(park);



// event listeners

const firstBtn = document.querySelector("button");

firstBtn.addEventListener("click", (event) => {
    console.log("You clicked the button", event);
});


// complete example of event listener which sorts parks

// refactored code with external functions for event handler and sorting 

const sortByName = (parkA, parkB) => {
    const parkAName = parkA.querySelector("h2").innerText;
    const parkBName = parkB.querySelector("h2").innerText;
    if (parkAName < parkBName) {
      return -1;
    } else if (parkAName > parkBName) {
      return 1;
    } else {
      return 0;
    }
};
  
const nameSorterClickHandler = (event) => {
    event.preventDefault();
  
    const main = document.querySelector("main");
  
    const parksList = main.querySelectorAll(".park-display");
  
    main.innerHTML = "";
  
    const parksArray = Array.from(parksList);
  
    parksArray.sort(sortByName);
  
    parksArray.forEach((park) => {
      main.appendChild(park);
    });
};
  
const nameSorter = document.querySelector("#name-sorter");
  
nameSorter.addEventListener("click", nameSorterClickHandler);


// sorting parks by rating

const ratingSorter = document.querySelector("#rating-sorter");

const sortByRating = (parkA, parkB) => {
  const parkARating = parseFloat(parkA.querySelector(".rating-display > .value").innerText);
  const parkBRating = parseFloat(parkB.querySelector(".rating-display > .value").innerText);
  return parkBRating - parkARating;
};

const ratingSorterClickHandler = (event) => {
    event.preventDefault();

    const main = document.querySelector("main");
  
    const parksList = main.querySelectorAll(".park-display");
  
    main.innerHTML = "";
  
    const parksArray = Array.from(parksList);
  
    parksArray.sort(sortByRating);
  
    parksArray.forEach((park) => {
      main.appendChild(park);
    });
  };
  

ratingSorter.addEventListener("click", ratingSorterClickHandler);


// DOMContentLoaded

console.log("Before!");

window.addEventListener("DOMContentLoaded", (event) => {
  console.log("Loaded!");
});

console.log("After!");


// refactoring the DOM manipulation code

const main = () => {
  const nameSorter = document.querySelector("#name-sorter");

  nameSorter.addEventListener("click", nameSorterClickHandler);

  const ratingSorter = document.querySelector("#rating-sorter");

  ratingSorter.addEventListener("click", ratingSorterClickHandler);
}

window.addEventListener("DOMContentLoaded", main);
