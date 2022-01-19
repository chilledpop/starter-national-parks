// form submissions

// function for handling form submission
const submitHandler = (event) => {
    event.preventDefault();

    const form = event.target;
    const formData = new FormData(form);

    const errors = validateForm(formData);

    const errorElements = document.querySelectorAll(".error");
    for (let element of errorElements) {
        element.style.display = "none";
    }

    Object.keys(errors).forEach((key) => {
        const errorElement = document.querySelector(`#${key}-form .error`);
        errorElement.innerHTML = errors[key];
        errorElement.style.display = "block";
    });
};

// creates event listener
const main = () => {
    //get form element
    const form = document.querySelector("#park-form");
    // attach submit handler
    form.addEventListener("submit", submitHandler);
};

// invokes main function
window.addEventListener("DOMContentLoaded", main);




// validation

function validateExists(value) {
    return value && value.trim();
}

function validateForm(formData) {
    const errors = {};
  
    // Check if name was entered
    if (!validateExists(formData.get("name"))) {
      errors.name = "Please enter a name";
    }
  
    // Check if rating was entered
    if (!validateExists(formData.get("rating"))) {
      errors.rating = "Please enter a rating";
    } else {
        if (!validateNumber(formData.get("rating"))) {
            errors.rating = "Rating must be a number";
        } else {
            const rating = Number.parseFloat(formData.get("rating"));
            if (!validateRange(rating, 1, 5)) {
                errors.rating = "Rating must be between 1 and 5 inclusive";
            }
        }
    }
  
    // Check if description was entered
    if (!validateExists(formData.get("description"))) {
      errors.description = "Please enter short description";
    }
  
    // Check if established date was entered
    if (!validateExists(formData.get("established"))) {
      errors.established = "Please enter date";
    }
  
    // Check if area was entered
    if (!validateExists(formData.get("area"))) {
      errors.area = "Please enter the area of the park";
    }
  
    // Check if location date was entered
    if (!validateExists(formData.get("location"))) {
      errors.location = "Please enter the location of the park";
    }
  
    return errors;
  }


  // check for certain conditions with input values
  
  function validateNumber(value) {
    return !isNaN(value);
  }
  
  function validateRange(value, min, max) {
    return value >= min && value <= max;
  }


// add park to the DOM

if (!Object.keys(errors).length) {
    const parkSection = document.createElement("section");
  
    parkSection.classList.add("park-display");
  
    const content = `
      <h2>${formData.get("name")}</h2>
      <div class="location-display">${formData.get("location")}</div>
      <div class="description-display">${formData.get("description")}</div>
      <button class="rate-button" title="Add to Favourites">&#9734;</button>
      <div class="stats">
        <div class="established-display stat">
          <h3>Established</h3>
          <div class="value">${moment(formData.get("established")).format(
            "MMMM D, YYYY"
          )}</div>
        </div>
        <div class="area-display stat">
          <h3>Area</h3>
          <div class="value">${formData.get("area")}</div>
        </div>
        <div class="rating-display stat">
          <h3>Rating</h3>
          <div class="value">${formData.get("rating")}</div>
        </div>
      </div>
      `;
  
    parkSection.innerHTML = content;
  
    document.querySelector("main").appendChild(parkSection);

}


