const orgTitle = document.title;
const orgDescription = document.querySelector('meta[name="description"]').content;

window.addEventListener("scroll", () => {
  // Define the sections and their corresponding titles and descriptions
  const sections = [
    {
      id: "home",
      title: orgTitle,
      // description: "Description for Section 1",
    },
    {
      id: "about",
      title: "About " + orgTitle,
      // description: "Description for Section 2",
    },
    {
      id: "portfolio",
      title: "Portfolio of " + orgTitle,
      // description: "Description for Section 2",
    },
    {
      id: "contact",
      title: "Contact " + orgTitle,
      // description: "Description for Section 2",
    },
  ];

  // Find the current scrolled section
  let currentSection = "";
  sections.forEach((section) => {
    const sectionElement = document.getElementById(section.id);
    if (
      sectionElement &&
      window.scrollY + 1 >= sectionElement.offsetTop &&
      window.scrollY <= sectionElement.offsetTop + sectionElement.offsetHeight
    ) {
      currentSection = section;
    }
  });

  // Update the title and description
  // const metaDescription = document.querySelector('meta[name="description"]');

  if (currentSection) {
    document.title = currentSection.title;


    const newUrl = `#${currentSection.id}`;
    if (window.location.hash !== newUrl) {
      history.replaceState(null, '', newUrl); // Update URL hash
    }

    // metaDescription.content = currentSection.description;
  }
  else {
    document.title = orgTitle;
    // metaDescription.content = orgDescription;
  }

});

