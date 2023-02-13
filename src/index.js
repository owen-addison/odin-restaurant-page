import "./styles.css";
import RestaurantImage from "./restaurant_image.jpeg";

function content() {
  const contentDiv = document.querySelector(".content");

  // Create header div
  const header = document.createElement("div");
  header.classList.add("header");

  // Add the image to header
  const myImage = new Image();
  myImage.src = RestaurantImage;
  myImage.setAttribute("id", "main-image");
  myImage.setAttribute("alt", "restaurant-image");
  header.appendChild(myImage);

  // Add header to content div
  contentDiv.appendChild(header);

  // Create main content div
  const mainContentDiv = document.createElement("div");
  mainContentDiv.classList.add("main-content");

  // Add add title to main content div
  const title = document.createElement("h1");
  title.classList.add("title");
  title.textContent = "Odin Restaurant";
  mainContentDiv.appendChild(title);

  // Add intro paragraphs to main content
  const para1 = document.createElement("p");
  para1.classList.add("copy");
  para1.textContent =
    "Discover the ultimate dining experience at Odin Restaurant, where authentic cuisine meets modern twist. Our menu features fresh and locally-sourced ingredients, expertly crafted by our team of talented chefs.";
  mainContentDiv.appendChild(para1);

  const para2 = document.createElement("p");
  para2.classList.add("copy");
  para2.textContent =
    "Whether you're looking for a romantic dinner, night out with friends or a family meal, we have something for everyone.";
  mainContentDiv.appendChild(para2);

  const para3 = document.createElement("p");
  para3.classList.add("copy");
  para3.textContent =
    "Come taste the difference at our warm and inviting atmosphere.";
  mainContentDiv.appendChild(para3);

  const para4 = document.createElement("p");
  para4.classList.add("copy");
  para4.textContent = "Visit us today.";
  mainContentDiv.appendChild(para4);

  // Add main content to content div
  contentDiv.appendChild(mainContentDiv);

  return contentDiv;
}

document.body.appendChild(content());
