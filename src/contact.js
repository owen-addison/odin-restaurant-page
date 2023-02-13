const contactContent = () => {
  const contentDiv = document.getElementById("content");

  // Create contact container div
  const contactContainer = document.createElement("div");
  contactContainer.classList.add("contact-container", "menu");

  // Add contact heading
  const headerSection = document.createElement("div");
  headerSection.classList.add("contact-section");
  const contactHeading = document.createElement("h1");
  contactHeading.classList.add("title");
  contactHeading.textContent = "Contact";
  headerSection.appendChild(contactHeading);
  contactContainer.appendChild(headerSection);

  // Add contact container div to content div
  contentDiv.appendChild(contactContainer);

  document.body.appendChild(contentDiv);
};

export default contactContent;
