const $ = require("jquery");
window.$ = $;
import App from "./app.js";
import bannerCarouselComponent from "./banner-carousel.js";
import plasticAccordian from "./services-accordian.js";
// import tabToshow from './tabs.js';
// import scrollTabcontent from './scrolltab.js';
import showOfficeListing from "./office-list.js";
import mapLocations from "./new-maps.js";
import formValidation from "./form-validation.js";
import filterColors from "./color-filter.js";
import ajaxData from "./ajax-data.js";
import Search from "./search.js";

const app = new App();
const bannerCarouselSlider = bannerCarouselComponent();
// const tabs = tabToshow()
const plasticAccordianService = plasticAccordian();
// const scrollContent = scrollTabcontent();

$(document).ready(function () {
  console.log("Jquery is successfully implemented");
});
// tabToshow();
// scrollTabcontent();
mapLocations();
showOfficeListing();
formValidation();
filterColors();
ajaxData();
Search();
