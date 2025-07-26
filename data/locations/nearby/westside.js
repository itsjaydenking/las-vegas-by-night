import { LocationBuilder } from "../locationBuilder.js";

export const westsideLocations = [
  LocationBuilder.create()
    .id("historic-westside-school")
    .name("Historic Westside School")
    .type("Historic Site")
    .shortDescription(
      "Where the community's oldest memories are preserved and protected."
    )
    .overview(
      "This preserved schoolhouse represents the heart of Las Vegas's historic African American community. The building serves as a museum and community center, maintaining the cultural heritage of the Westside's founding families."
    )
    .kindredPresence(
      "Elder Kindred with connections to the area's early development occasionally visit to maintain old relationships. The building's historical significance and community respect provide excellent cover for discrete meetings."
    )
    .mortalOperations(
      "Historical exhibits, community meetings, cultural events, and educational programs. The center hosts events celebrating the Westside's rich cultural heritage and serves as a gathering place for longtime residents."
    )
    .plotHooks(
      "Ancient Kindred with connections to early Las Vegas history, territorial disputes over historically significant areas, or family secrets spanning multiple generations of Westside residents."
    )
    .established("1923 (school), 1990s (museum)")
    .owner("City of Las Vegas")
    .keyFeatures([
      "Historic architecture",
      "Community museum",
      "Cultural artifacts",
      "Meeting spaces",
    ])
    .securityLevel("Low (community center with basic security)")
    .kindredAccess("Through community involvement and historical preservation")
    .build(),

  LocationBuilder.create()
    .id("doolittle-community-center")
    .name("Doolittle Community Center")
    .type("Community Facility")
    .shortDescription("Where neighborhood bonds mask supernatural loyalties.")
    .overview(
      "This large community center serves as the social hub for the Westside, offering recreational programs, community services, and gathering spaces. The center's role in daily community life makes it valuable for Kindred who need to understand local social dynamics."
    )
    .kindredPresence(
      "Kindred maintaining community covers use the center to stay connected to local concerns and relationships. The facility's evening programs and community events provide feeding opportunities among familiar faces."
    )
    .mortalOperations(
      "Recreational programs, community services, youth activities, and neighborhood meetings. The center serves multiple generations with programs ranging from senior services to youth sports."
    )
    .plotHooks(
      "Kindred infiltrating community leadership, territorial disputes over neighborhood influence, or supernatural protection of historic community bonds."
    )
    .established("1970s")
    .owner("City of Las Vegas")
    .keyFeatures([
      "Gymnasium",
      "Meeting rooms",
      "Senior center",
      "Youth programs",
      "Community services",
    ])
    .securityLevel("Low (community facility with minimal security)")
    .kindredAccess("Through community service and neighborhood involvement")
    .build(),

  LocationBuilder.create()
    .id("westside-marketplace")
    .name("Westside Marketplace")
    .type("Shopping Center")
    .shortDescription("Where everyday needs hide extraordinary hungers.")
    .overview(
      "This neighborhood shopping center provides essential services and retail for the Westside community. The mix of grocery stores, restaurants, and service businesses creates a microcosm of local life that some Kindred find useful for understanding community patterns."
    )
    .kindredPresence(
      "Kindred who prefer to blend into working-class communities use the marketplace for both feeding and intelligence gathering. The location's role in daily life provides excellent cover for regular presence."
    )
    .mortalOperations(
      "Grocery stores, restaurants, service businesses, and professional offices. The marketplace serves as a convenient shopping destination for residents who prefer to stay in their neighborhood."
    )
    .plotHooks(
      "Kindred maintaining working-class covers, territorial disputes over neighborhood feeding grounds, or supernatural influences on local economic development."
    )
    .established("1980s")
    .owner("Various local business owners")
    .keyFeatures([
      "Grocery stores",
      "Local restaurants",
      "Service businesses",
      "Professional offices",
    ])
    .securityLevel("Low (neighborhood shopping center)")
    .kindredAccess("Through local business ownership and community integration")
    .build(),
];
