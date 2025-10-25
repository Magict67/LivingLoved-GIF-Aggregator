## User Story 1- As a user, I want to see a clear search bar so GIFs are easy to find that are related to the 'Living Loved' mission (like "hope,"faith," or "community")

## User Story 2 - As a user, when I type a keyword and click 'Search', I want the website to instantly show me relevant GIFs and images in the form of a grid.

## User Story 3 - As a user, I want the images to look good and be easy to view both on a small phone and a large computer screen.

## Living Loved GIF & Image Aggregator

**Developer:** Chris Thomas

### Overview/Description of the Project
Front-end web app functions as GIF and Image aggregator, complements the "Living Loved" resource platform. Allows users to search for inspirational keywords related to the mission (e.g., "hope," "faith," "community") and displays relevant images from the Giphy API in a grid layout. Demonstrates core skills in client-side development, handling user events, making asynchronous API requests, in a modern responsive user interface.

### How to Use It
1.  **Enter Keyword:** Type an inspirational word or phrase (like "Hope") into the search box.
2.  **Search:** Click the 'Search' button or press Enter.
3.  **View Results:** The application fetches 24 relevant GIFs and displays them in a multi-column grid on desktop automatically stacks into a single column on mobile screens.

### Functionality Offered
* **Keyword Search:** Users can search the Giphy database with any term.
* **Asynchronous API Fetch:** Uses **jQuery/Ajax** to communicate with the Giphy Search Endpoint.
* **Responsive Grid:** Images display in a 3-column layout on desktop, transitioning to a 1-column stack on mobile using a CSS **Flexbox** grid and a **@media query**.
* **DOM Manipulation:** Dynamically adds fetched images to the HTML page using JavaScript.

### Technologies Used
* **HTML5** (index.html)
* **SASS (.scss)** for robust, maintainable styling and variables.
* **CSS3** (style.css, compiled from SASS)
* **Flexbox** for layout (Header, Search Bar, and Image Grid).
* **JavaScript (ES6)** (main.js)
* **jQuery/Ajax** for API interaction.
* **Giphy API**

### Ideas for Future Improvement (Minimum of 3)
1.  **User Login and Preferences:** Implement a mock-up for user sign-up/login to save favorite search terms and/or favorite GIFs, similar to Flipboard's curated experience.
2.  **Pagination/Load More:** Instead of limiting results to 24, add a "Load More" button or implement pagination to retrieve the next set of results from the API.
3.  **Advanced Filtering/Sorting:** Add options (like radio buttons or a dropdown) to allow users to filter by Giphy's rating (G, PG, PG-13) or sort results by date or relevance.