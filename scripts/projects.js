function preloadImages(imagesArray) {
  imagesArray.forEach((image) => {
    const img = new Image();
    img.src = image;
  });
}

function createSlider(sliderId, imageIds, imagesArray) {
  let currentIndex = 0; // Index of the currently displayed image in the slider

  function showSliderImage(index) {
    const imgElement = document.getElementById(imageIds.sliderImage);
    if (imgElement) {
      imgElement.style.opacity = 0; // Start by making the image transparent
      setTimeout(() => {
        imgElement.src = imagesArray[index];
        imgElement.style.opacity = 1; // Fade the image back in
      }, 500); // The timeout duration should match the CSS transition time
    }
  }

  function nextImage() {
    currentIndex = (currentIndex + 1) % imagesArray.length;
    showSliderImage(currentIndex);
  }

  function previousImage() {
    currentIndex = (currentIndex - 1 + imagesArray.length) % imagesArray.length;
    showSliderImage(currentIndex);
  }

  // Check if the slider elements exist before adding event listeners
  const leftArrow = document.getElementById(imageIds.leftArrow);
  const rightArrow = document.getElementById(imageIds.rightArrow);

  if (leftArrow && rightArrow) {
    // Directly show the first image
    showSliderImage(currentIndex);

    // Add event listeners
    leftArrow.addEventListener("click", previousImage);
    rightArrow.addEventListener("click", nextImage);
  } else {
    console.warn(`Elements for slider ${sliderId} not found`);
  }
}

window.onload = function () {
  // Instantiate sliders
  const webshopImages = [
    "../imgs/webshop/home.png",
    "../imgs/webshop/about.png",
    "../imgs/webshop/contact.png",
    "../imgs/webshop/webshop.png",
    "../imgs/webshop/top5.png",
    "../imgs/webshop/register.png",
    "../imgs/webshop/login.png",
    "../imgs/webshop/shoppingcart.png",
    "../imgs/webshop/popup.png",
    "../imgs/webshop/addproduct.png",
    "../imgs/webshop/editproduct.png",
    "../imgs/webshop/changepassword.png",
    "../imgs/webshop/productdetails.png",
  ];
  createSlider(
    "webshopSlider",
    {
      sliderImage: "webshopSliderImage",
      leftArrow: "webshopLeftArrow",
      rightArrow: "webshopRightArrow",
    },
    webshopImages
  );

  const weatherImages = [
    "../imgs/weather/weather.png",
    "../imgs/weather/weatherresult.png",
  ];
  createSlider(
    "weatherSlider",
    {
      sliderImage: "weatherSliderImage",
      leftArrow: "weatherLeftArrow",
      rightArrow: "weatherRightArrow",
    },
    weatherImages
  );

  const financeImages = [
    "../imgs/finance/register.png",
    "../imgs/finance/login.png",
    "../imgs/finance/simulation.png",
    "../imgs/finance/results.png",
  ];
  createSlider(
    "financeSlider",
    {
      sliderImage: "financeSliderImage",
      leftArrow: "financeLeftArrow",
      rightArrow: "financeRightArrow",
    },
    financeImages
  );

  const ticImages = [
    "../imgs/tic_tac_toe/start.png",
    "../imgs/tic_tac_toe/mid.png",
    "../imgs/tic_tac_toe/finish.png",
  ];
  createSlider(
    "ticSlider",
    {
      sliderImage: "ticSliderImage",
      leftArrow: "ticLeftArrow",
      rightArrow: "ticRightArrow",
    },
    ticImages
  );

  const todoImages = [
    "../imgs/ToDo/start.png",
    "../imgs/ToDo/completed.png",
    "../imgs/ToDo/incomplete.png",
  ];
  createSlider(
    "todoSlider",
    {
      sliderImage: "todoSliderImage",
      leftArrow: "todoLeftArrow",
      rightArrow: "todoRightArrow",
    },
    todoImages
  );

  const carImages = [
    "../imgs/car/start.png",
    "../imgs/car/electric.png",
    "../imgs/car/benzine.png",
  ];
  createSlider(
    "carSlider",
    {
      sliderImage: "carSliderImage",
      leftArrow: "carLeftArrow",
      rightArrow: "carRightArrow",
    },
    carImages
  );

  const cardImages = [
    "../imgs/cardsorting/register.png",
    "../imgs/cardsorting/login.png",
    "../imgs/cardsorting/create.png",
    "../imgs/cardsorting/play.png",
  ];
  createSlider(
    "cardSlider",
    {
      sliderImage: "cardSliderImage",
      leftArrow: "cardLeftArrow",
      rightArrow: "cardRightArrow",
    },
    cardImages
  );

  const flaskImages = [
    "../imgs/crud_flask/home.png",
    "../imgs/crud_flask/add.png",
    "../imgs/crud_flask/edit.png",
    "../imgs/crud_flask/notification.png",
    "../imgs/crud_flask/error.png",
    "../imgs/crud_flask/404.png",
  ];
  createSlider(
    "cardSlider",
    {
      sliderImage: "flaskSliderImage",
      leftArrow: "flaskLeftArrow",
      rightArrow: "flaskRightArrow",
    },
    flaskImages
  );
  const model_freeImages = [
    "../imgs/modelfree/Q-learning.png",
    "../imgs/modelfree/SARSA.png",
    "../imgs/modelfree/Expected-SARSA.png",
    "../imgs/modelfree/Windy_Q-learning.png",
    "../imgs/modelfree/Windy_SARSA.png",
  ];
  createSlider(
    "cardSlider",
    {
      sliderImage: "modelfreeSliderImage",
      leftArrow: "modelfreeLeftArrow",
      rightArrow: "modelfreeRightArrow",
    },
    model_freeImages
  );

  const scrumImages = [
    "../imgs/scrum/home.png",
    "../imgs/scrum/register.png",
    "../imgs/scrum/login.png",
    "../imgs/scrum/help.png",
    "../imgs/scrum/home-dark.png",
    "../imgs/scrum/board.png",
    "../imgs/scrum/create.png",
    "../imgs/scrum/edit.png",
    "../imgs/scrum/manager.png",
    "../imgs/scrum/rights.png",
    "../imgs/scrum/password.png",
    "../imgs/scrum/account.png",
  ];
  createSlider(
    "scrumSlider",
    {
      sliderImage: "scrumSliderImage",
      leftArrow: "scrumLeftArrow",
      rightArrow: "scrumRightArrow",
    },
    scrumImages
  );

  const reactImages = [
    "../imgs/react-weather/NL.png",
    "../imgs/react-weather/EN.png",
    "../imgs/react-weather/DE.png",
  ];
  createSlider(
    "reactSlider",
    {
      sliderImage: "reactSliderImage",
      leftArrow: "reactLeftArrow",
      rightArrow: "reactRightArrow",
    },
    reactImages
  );

  const healthImages = [
    "../imgs/health/home.png",
    "../imgs/health/create-p.png",
    "../imgs/health/login-p.png",
    "../imgs/health/patients-p.png",
    "../imgs/health/edit-p.png",
    "../imgs/health/details-p.png",
    "../imgs/health/delete-p.png",
    "../imgs/health/billings.png",
    "../imgs/health/medical.png",
    "../imgs/health/appointments-p.png",
    "../imgs/health/doctors.png",
    "../imgs/health/edit-d.png",
    "../imgs/health/details-d.png",
    "../imgs/health/delete-d.png",
    "../imgs/health/patients-d.png",
    "../imgs/health/locations.png",
    "../imgs/health/add-appointment.png",
    "../imgs/health/appointments-d.png",
  ];
  createSlider(
    "healthSlider",
    {
      sliderImage: "healthSliderImage",
      leftArrow: "healthLeftArrow",
      rightArrow: "healthRightArrow",
    },
    healthImages
  );

  const dbviewerImages = [
    "../imgs/dbviewer/home.png",
    "../imgs/dbviewer/demo.png",
    "../imgs/dbviewer/edit.png",
    "../imgs/dbviewer/edit_col.png",
    "../imgs/dbviewer/instructions.png",
  ];
  createSlider(
    "dbviewerSlider",
    {
      sliderImage: "dbviewerSliderImage",
      leftArrow: "dbviewerLeftArrow",
      rightArrow: "dbviewerRightArrow",
    },
    dbviewerImages
  );
  preloadImages([
    ...webshopImages,
    ...weatherImages,
    ...financeImages,
    ...ticImages,
    ...todoImages,
    ...carImages,
    ...cardImages,
    ...flaskImages,
    ...model_freeImages,
    ...scrumImages,
    ...reactImages,
    ...healthImages,
    ...dbviewerImages,
  ]);
};
