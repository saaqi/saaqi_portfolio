// Import Styles -
import "../styles/sectionHero.scss"

// Import the socialMediaLists function from the functions directory
import socialMediaLists from "./functions/socialMediaLists"

// Attach socialMediaLists to 'hero-social-links'
socialMediaLists('hero-social-links', false, 'var(--bs-primary)')