import "bootstrap";
import "../components/form";
import "../components/payment-form";
import "../components/result";
import "../components/project-index";
import "../components/title";
import "../components/dashboard";
import { hideFlashAfter5sec } from '../components/flashes';
hideFlashAfter5sec();

import { autocomplete } from "../components/autocomplete";
if (document.querySelector(".autocomp")) {
  autocomplete();
};

import { loadDynamicBannerText } from '../components/banner';
if (document.getElementById("banner-typed-text")) {
  loadDynamicBannerText();
}

// import "../components/tabs";
// import "../components/progress-bar";
