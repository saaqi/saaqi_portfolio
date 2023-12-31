import React from 'react'
import ReactDOM from 'react-dom/client'

/* ## Import Styles
--------------------------------------------- */
// IMPORT BOOTSTRAP
// import "../scss/bs-dynamic.scss"
import "./css/bs-compiled.css";

// IMPORT CUSTOM STYLES
import "./main.scss";

// IMPPORT BOXICONS
import "boxicons/css/boxicons.css";




// Import React
import App from './App.jsx'
ReactDOM.createRoot(document.getElementById('saaqi')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)

/* ## Import JS
--------------------------------------------- */
import "./js/lightbox"

// Import Bootstrap Modal
import "./js/hide-preloader"
// import "./js/navigation"
