const menuContent = () => {
  const contentDiv = document.getElementById("content");

  // Create menu container div
  const menuContainer = document.createElement("div");
  menuContainer.classList.add("menu-container", "menu");

  /* STARTERS */
  // Starters section with heading
  const startersSection = document.createElement("div");
  startersSection.classList.add("menu-section");
  const startersHeading = document.createElement("h2");
  startersHeading.classList.add("menu-heading");
  startersHeading.textContent = "Starters";
  startersSection.appendChild(startersHeading);

  // Starters list and items
  const startersList = document.createElement("ul");
  startersList.classList.add("menu-list");
  const startersArray = [
    "Smoked salmon Rillettes - £8.00",
    "Gravlax with Horseradish Cream - £9.00",
    "Herbed Meatballs with Lingonberry Sauce - £7.00",
    "Swedish Pickled Vegetables - £5.00",
  ];
  startersArray.forEach((element) => {
    const starter = document.createElement("li");
    starter.textContent = element;
    startersList.appendChild(starter);
  });
  startersSection.appendChild(startersList);

  // Starters section to menu container
  menuContainer.appendChild(startersSection);

  /* ENTREES */
  // Entrees section with heading
  const entreesSection = document.createElement("div");
  entreesSection.classList.add("menu-section");
  const entreesHeading = document.createElement("h2");
  entreesHeading.classList.add("menu-heading");
  entreesHeading.textContent = "Entrees";
  entreesSection.appendChild(entreesHeading);

  // Add entrees list and items
  const entreesList = document.createElement("ul");
  entreesList.classList.add("menu-list");
  const entreesArray = [
    "Grilled Reindeer Steak with Juniper Butter - £25.00",
    "Pan-Seared Arctic Char with Potato Rosti and Caper Butter - £22.00",
    "Slow-Roasted Pork Belly with Apple and Sage - £20.00",
    "Nordic Vegetable Stew with Barley and Carrots - £18.00",
  ];
  entreesArray.forEach((element) => {
    const entree = document.createElement("li");
    entree.textContent = element;
    entreesList.appendChild(entree);
  });
  entreesSection.appendChild(entreesList);

  // Add entrees section to menu container
  menuContainer.appendChild(entreesSection);

  /* DESSERTS */
  // Dessert section with heading
  const dessertSection = document.createElement("div");
  dessertSection.classList.add("menu-section");
  const dessertHeading = document.createElement("h2");
  dessertHeading.classList.add("menu-heading");
  dessertHeading.textContent = "Desserts";
  dessertSection.appendChild(dessertHeading);

  // Add dessert list and items
  const dessertList = document.createElement("ul");
  dessertList.classList.add("menu-list");
  const dessertArray = [
    "Rhubarb and Strawberry Crumble with Vanilla Ice Cream - £7.00",
    "Classic Rice Pudding with Cinnamon and Sugar - £6.00",
    "Cardamom and Gingerbread Trifle with Whipped Cream - £8.00",
    "Cloudberry Sorbet with Shortbread Cookies - £7.00",
  ];
  dessertArray.forEach((element) => {
    const dessert = document.createElement("li");
    dessert.textContent = element;
    dessertList.appendChild(dessert);
  });
  dessertSection.appendChild(dessertList);

  // Add dessert section to menu container
  menuContainer.appendChild(dessertSection);

  /* DRINKS */
  // Drinks section with heading
  const drinksSection = document.createElement("div");
  drinksSection.classList.add("menu-section");
  const drinksHeading = document.createElement("h2");
  drinksHeading.classList.add("menu-heading");
  drinksHeading.textContent = "Drinks";
  drinksSection.appendChild(drinksHeading);

  // Add drinks list and items
  const drinksList = document.createElement("ul");
  drinksList.classList.add("menu-list");
  const drinksArray = [
    "Rhubarb and Strawberry Crumble with Vanilla Ice Cream - £7.00",
    "Classic Rice Pudding with Cinnamon and Sugar - £6.00",
    "Cardamom and Gingerbread Trifle with Whipped Cream - £8.00",
    "Cloudberry Sorbet with Shortbread Cookies - £7.00",
  ];
  drinksArray.forEach((element) => {
    const drinks = document.createElement("li");
    drinks.textContent = element;
    drinksList.appendChild(drinks);
  });
  drinksSection.appendChild(drinksList);

  // Add dessert section to menu container
  menuContainer.appendChild(drinksSection);

  // Add menu container div to content div
  contentDiv.appendChild(menuContainer);

  document.body.appendChild(contentDiv);
};

export default menuContent;
