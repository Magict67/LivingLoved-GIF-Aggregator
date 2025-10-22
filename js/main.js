const GIPHY_API_KEY = "UVBmEU4lOuwzYVfQEP5Oal9XcyRfdXSs";
const GIPHY_SEARCH_ENDPOINT = "https://api.giphy.com/v1/gifs/search";
const RESULTS_LIMIT = 24; //15 is enough though
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
imageGrid.empty().append('<p class="placeholder-text">Searching for ' + searchTerm + '...</p>');
fetchGifs(searchTerm);
    });
});
function fetchGifs(searchTerm) {
    const requestURL ={GIPHY_API_KEY}&q=${searchTerm}&limit=${RESULTS_LIMIT};
    console.log("Making API Request to:", requestURL);
  $.ajax({
        url: requestURL,
        method: "GET", // ask for data
        dataType: "json", // data back as JSON object
        success: function(response)
{
            console.log("Giphy Response Received:", response);

            imageGrid.empty();

            // Iterate returned and display
            if (response.data && response.data.length > 0) {
                response.data.forEach(gifObject => {
                    // image URL in returned JSON
                    const imageUrl = gifObject.images.fixed_height.url;
                    const gifTitle = gifObject.title || "Inspirational GIF";
                    
                    // make display image append
                    const htmlContent = `
                        <div class="gif-item">
                            <img src="${imageUrl}" alt="${gifTitle}">
                        </div>
                    `;
                    
                    // Append to the screen
                    imageGrid.append(htmlContent);
            JavaScript        
                });
            }
            } else {
                // display if nothing found
                imageGrid.append('<p class="placeholder-text">Nothing Found. Try another word like "Faith" or "Community."</p>');
            }
        },
        
        // Error function (input incomplete, wrong API key, network error etc.)
        error: function(jqXHR, textStatus, errorThrown) {
            console.error("API Error:", textStatus, errorThrown);
            imageGrid.empty().append('<p class="placeholder-text error-message">Sorry, we found an image connection error. Check your API key!</p>');
        }
    });
}
