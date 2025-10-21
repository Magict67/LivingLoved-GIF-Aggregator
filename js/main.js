const GIPHY_API_KEY = UVBmEU4lOuwzYVfQEP5Oal9XcyRfdXSs;
const GIPHY_API_URL = https://api.giphy.com/v1/gifs/search;
const results_limit = 15; //15 is enough
const imageGrid = $ ("#image-grid");
$(document) .ready(function() {
    console.log("Website is ready! Listening for search submissions......");
    $("#gif-search-form") .on("submit", function(event) {
        event.preventDefault();
        const searchTerm = $("#search-term") .val().trim();
        if (searchTerm === "") {
            alert("Please enter an inspirational term.");
            return;
        }

