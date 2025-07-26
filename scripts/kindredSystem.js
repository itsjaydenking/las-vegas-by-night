import { kindredData } from "../data/kindredData.js";
import { KindredDisplay } from "../modules/kindredDisplay.js";
import { KindredNavigation } from "../modules/kindredNavigation.js";
import { KindredSearch } from "../modules/kindredSearch.js"; // Add this import

window.initializeKindredSystem = function () {
  // Initialize kindred display and navigation
  const kindredDisplay = new KindredDisplay(kindredData);
  const kindredNavigation = new KindredNavigation(kindredDisplay);

  // Initialize search after a small delay to ensure DOM is ready
  setTimeout(() => {
    // Check if search elements exist before initializing
    const searchInput = document.getElementById("kindred-search-input");
    if (searchInput) {
      const kindredSearch = new KindredSearch(kindredData, kindredDisplay); // Initialize search
    }
  }, 100);
};
