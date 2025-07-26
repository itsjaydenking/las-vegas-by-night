import { majorLocations } from "./locations/major.js";
import { stripLocations } from "./locations/major/strip.js";
import { downtownLocations } from "./locations/major/downtown.js";
import { paradiseLocations } from "./locations/major/paradise.js";

import { nearbyLocations } from "./locations/nearby.js";
import { hendersonLocations } from "./locations/nearby/henderson.js";
import { summerlinLocations } from "./locations/nearby/summerlin.js";
import { centennialHillsLocations } from "./locations/nearby/centennial-hill.js";
import { westsideLocations } from "./locations/nearby/westside.js";
import { northsideLocations } from "./locations/nearby/northside.js";
import { enterpriseLocations } from "./locations/nearby/enterprise.js";
import { springValleyLocations } from "./locations/nearby/spring-valley.js";
import { sunriseLocations } from "./locations/nearby/sunrise.js";
import { whitneyLocations } from "./locations/nearby/whitney.js";

import { beyondLocations } from "./locations/beyond.js";

// Inject locations into major areas
majorLocations.areas["the-strip"].locations = stripLocations;
majorLocations.areas["downtown"].locations = downtownLocations;
majorLocations.areas["paradise"].locations = paradiseLocations;

// Inject locations into nearby areas
nearbyLocations.areas["henderson"].locations = hendersonLocations;
nearbyLocations.areas["summerlin"].locations = summerlinLocations;
nearbyLocations.areas["centennial-hills"].locations = centennialHillsLocations;
nearbyLocations.areas["historic-westside"].locations = westsideLocations; // FIXED: was "westside"
nearbyLocations.areas["north-las-vegas"].locations = northsideLocations; // FIXED: was "northside"
nearbyLocations.areas["enterprise"].locations = enterpriseLocations;
nearbyLocations.areas["spring-valley"].locations = springValleyLocations;
nearbyLocations.areas["sunrise"].locations = sunriseLocations;
nearbyLocations.areas["whitney"].locations = whitneyLocations;

export const locationData = {
  major: majorLocations,
  nearby: nearbyLocations,
  beyond: beyondLocations,
};
