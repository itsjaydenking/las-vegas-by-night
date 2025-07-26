import { majorLocations } from "./locations/major.js";
import { nearbyLocations } from "./locations/nearby.js";
import { beyondLocations } from "./locations/beyond.js";
import { stripLocations } from "./locations/strip.js";

// Inject strip locations into major areas
majorLocations.areas["the-strip"].locations = stripLocations;

export const locationData = {
  major: majorLocations,
  nearby: nearbyLocations,
  beyond: beyondLocations,
};
