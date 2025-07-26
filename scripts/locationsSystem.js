import { locationData } from "../data/locationData.js";
import { LocationDisplay } from "../modules/locationDisplay.js";
import { LocationNavigation } from "../modules/locationNavigation.js";
import { LocationSearch } from "../modules/locationSearch.js";

window.initializeLocationsSystem = function () {
  // Initialize location display and navigation
  const locationDisplay = new LocationDisplay(locationData);
  const locationNavigation = new LocationNavigation(locationDisplay);

  // Initialize search after a small delay to ensure DOM is ready
  setTimeout(() => {
    // Check if search elements exist before initializing
    const searchInput = document.getElementById("location-search-input");
    if (searchInput) {
      const locationSearch = new LocationSearch(locationData, locationDisplay);
    }
  }, 100);
};
