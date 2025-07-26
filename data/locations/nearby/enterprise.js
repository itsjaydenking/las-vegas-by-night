import { LocationBuilder } from "../locationBuilder.js";

export const enterpriseLocations = [
  LocationBuilder.create()
    .id("south-point-casino")
    .name("South Point Hotel Casino & Spa")
    .type("Casino Resort")
    .shortDescription(
      "Where southern hospitality meets supernatural oversight."
    )
    .overview(
      "This locals-focused resort caters to Las Vegas residents with a wide range of amenities including gaming, dining, entertainment, and recreational facilities. Its position in the southern valley and focus on local customers creates a different atmosphere than tourist-heavy Strip properties."
    )
    .kindredPresence(
      "Popular with Kindred who prefer the less chaotic atmosphere of locals casinos. The resort's extensive facilities and loyal customer base provide excellent opportunities for long-term feeding relationships."
    )
    .mortalOperations(
      "Local gaming, bowling, movie theater, extensive dining options, and live entertainment. The property serves as a comprehensive entertainment destination for southern valley residents."
    )
    .plotHooks(
      "Territorial disputes over loyal local customer bases, supernatural influences on southern valley development, or conflicts between Strip-focused and locals-focused Kindred factions."
    )
    .established("2005")
    .owner("Michael Gaughan")
    .keyFeatures([
      "Comprehensive local amenities",
      "Bowling center",
      "Movie theater",
      "Live entertainment",
      "Extensive dining",
    ])
    .securityLevel("Moderate (locals casino with standard security)")
    .kindredAccess(
      "Through local resident relationships and recreational facility connections"
    )
    .build(),

  LocationBuilder.create()
    .id("ikea-las-vegas")
    .name("IKEA Las Vegas")
    .type("Retail Store")
    .shortDescription(
      "Where Swedish efficiency meets supernatural home improvement."
    )
    .overview(
      "This massive furniture and home goods store serves the entire Las Vegas valley with affordable design solutions. The store's warehouse scale, maze-like layout, and family-focused atmosphere create unique opportunities for Kindred activities."
    )
    .kindredPresence(
      "Kindred maintaining suburban covers use the store for both practical home furnishing needs and as a meeting place. The store's size and layout provide excellent cover for discrete conversations."
    )
    .mortalOperations(
      "Furniture retail, home goods, restaurant, and children's play area. The store attracts families and individuals setting up homes throughout the Las Vegas valley."
    )
    .plotHooks(
      "Supernatural influences on modern domestic life, territorial meetings disguised as shopping trips, or cursed furniture items appearing among regular merchandise."
    )
    .established("2016")
    .owner("IKEA Group")
    .keyFeatures([
      "Massive warehouse retail space",
      "Restaurant and café",
      "Children's play area",
      "Home delivery services",
    ])
    .securityLevel("Low to Moderate (retail security)")
    .kindredAccess(
      "Through retail industry connections and suburban lifestyle integration"
    )
    .build(),

  LocationBuilder.create()
    .id("town-square-park")
    .name("Town Square Park")
    .type("Public Recreation")
    .shortDescription(
      "Where suburban families gather under ancient desert stars."
    )
    .overview(
      "This large community park provides recreational facilities and open space for the growing Enterprise area. Its sports fields, walking trails, and family events create a center of suburban community life."
    )
    .kindredPresence(
      "Kindred maintaining family covers use the park for community integration, while the predictable patterns of suburban recreational life provide feeding opportunities."
    )
    .mortalOperations(
      "Youth sports leagues, community events, fitness activities, and family gatherings. The park serves as a focal point for suburban community life and outdoor recreation."
    )
    .plotHooks(
      "Kindred infiltrating youth sports organizations, territorial disputes over suburban family hunting grounds, or supernatural influences on community development."
    )
    .established("2007")
    .owner("Clark County")
    .keyFeatures([
      "Sports fields",
      "Walking trails",
      "Playground equipment",
      "Community event spaces",
    ])
    .securityLevel("Low (public park with basic security)")
    .kindredAccess("Through community involvement and recreational activities")
    .build(),
];
