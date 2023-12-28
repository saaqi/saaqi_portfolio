/* ## Import Styles
--------------------------------------------- */
// IMPORT BOOTSTRAP
// import "../scss/bs-dynamic.scss"
import "./css/bs-compiled.css"

// IMPORT CUSTOM STYLES
import "./style.scss"

// IMPPORT BOXICONS
import "boxicons/css/boxicons.css"




/* ## Import JS
--------------------------------------------- */
const IN_PRODUCTION = process.env.NODE_ENV === "production";

import "./js/interact"
import "./js/animate-counter"
import "./js/skill-waypoints"
import "./js/contact-form"
import "./js/hide-preloader"
import "./js/top-link"
