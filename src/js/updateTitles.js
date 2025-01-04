const orgTitle = document.title;
const orgDescription = document.querySelector('meta[name="description"]').content;

// Define sections and their titles
const sections = [
  { id: "home", title: orgTitle },
  { id: "about", title: "About " + orgTitle },
  { id: "services", title: "Services Offered By " + orgTitle },
  { id: "portfolio", title: "Portfolio of " + orgTitle },
  { id: "education", title: "Education of " + orgTitle },
  { id: "contact", title: "Contact " + orgTitle },
];

let currentSectionId = ""; // Track the current section
let scrollTimeout = null; // Timeout for scroll event

// Scroll Event Listener
window.addEventListener("scroll", () => {
  // Clear previous timeout if it exists
  if (scrollTimeout) {
    clearTimeout(scrollTimeout);
  }

  // Set a new timeout to run after scrolling stops (200ms delay)
  scrollTimeout = setTimeout(() => {
    // Find the section the user is currently in
    let newSection = "";
    sections.forEach((section) => {
      const sectionElement = document.getElementById(section.id);
      if (
        sectionElement &&
        window.scrollY + 1 >= sectionElement.offsetTop &&
        window.scrollY <= sectionElement.offsetTop + sectionElement.offsetHeight
      ) {
        newSection = section;
      }
    });

    // Only update if the section has changed
    if (newSection && newSection.id !== currentSectionId) {
      currentSectionId = newSection.id; // Update current section
      document.title = newSection.title; // Update the title

      const newUrl = `#${newSection.id}`;
      if (window.location.hash !== newUrl) {
        history.replaceState(null, '', newUrl); // Update URL
      }

      // Uncomment to update meta description if needed
      // const metaDescription = document.querySelector('meta[name="description"]');
      // metaDescription.content = newSection.description;
    } else if (!newSection) {
      // Reset to original if no section matches
      document.title = orgTitle;
      history.replaceState(null, '', '#');
      // metaDescription.content = orgDescription;
    }
  }, 200); // Delay of 200ms
});
