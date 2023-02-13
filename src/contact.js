const contactContent = () => {
  const contentDiv = document.getElementById("content");

  // Create contact container div
  const contactContainer = document.createElement("div");
  contactContainer.classList.add("contact-container", "menu");

  // Add contact heading
  const titleSection = document.createElement("div");
  titleSection.classList.add("title-section");
  const contactHeading = document.createElement("h1");
  contactHeading.classList.add("title");
  contactHeading.textContent = "Contact";
  titleSection.appendChild(contactHeading);
  contentDiv.appendChild(titleSection);

  // Add address, phone and email details
  const contactObject = {
    Address: "123 Main Street, London, UK",
    Phone: "+44 207123 4567",
    Email: "info@odinrestaurant.co.uk",
  };
  const keys = Object.keys(contactObject);

  keys.forEach((key, index) => {
    const type = document.createElement("p");
    type.classList.add("contact-type");
    type.textContent = `${key}:`;
    const details = document.createElement("p");
    details.classList.add("contact-details");
    details.textContent = contactObject[key];
    contactContainer.appendChild(type);
    contactContainer.appendChild(details);
  });

  // Add contact container div to content div
  contentDiv.appendChild(contactContainer);

  document.body.appendChild(contentDiv);
};

export default contactContent;
