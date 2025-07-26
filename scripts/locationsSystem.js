import { locationData } from '../data/locationData.js';
import { LocationDisplay } from '../modules/locationDisplay.js';
import { LocationNavigation } from '../modules/locationNavigation.js';

// Initialize the locations system
function initializeLocationsSystem() {
  console.log("Initializing Locations System");
  
  try {
    // Create display manager
    const locationDisplay = new LocationDisplay(locationData);
    
    // Create navigation manager
    const locationNavigation = new LocationNavigation(locationDisplay);
    
    console.log("Locations System initialized successfully");
  } catch (error) {
    console.error("Error initializing Locations System:", error);
  }
}

// Export for global access
window.initializeLocationsSystem = initializeLocationsSystem;