import { LocationBuilder } from "../locationBuilder.js";

export const springValleyLocations = [
  LocationBuilder.create()
    .id("chinatown-plaza")
    .name("Chinatown Plaza")
    .type("Cultural Shopping Center")
    .shortDescription(
      "Where Eastern traditions hide Western supernatural politics."
    )
    .overview(
      "This Asian cultural and shopping center serves Las Vegas's growing Asian community with authentic restaurants, markets, and services. The cultural enclave creates opportunities for Kindred familiar with Asian traditions and those seeking diverse feeding grounds."
    )
    .kindredPresence(
      "Kindred with Asian connections or those interested in cultural diversity use the plaza for both business and feeding. The tight-knit community nature requires careful relationship building."
    )
    .mortalOperations(
      "Asian restaurants, grocery stores, cultural services, and traditional medicine. The plaza serves as a cultural hub for Asian immigrants and families throughout the Las Vegas valley."
    )
    .plotHooks(
      "Supernatural connections to Asian mystical traditions, territorial disputes over cultural community feeding grounds, or ancient Eastern supernatural entities adapting to Western environments."
    )
    .established("1995")
    .owner("Various Asian business owners")
    .keyFeatures([
      "Authentic Asian restaurants",
      "Cultural grocery stores",
      "Traditional services",
      "Community gathering spaces",
    ])
    .securityLevel("Low to Moderate (community-focused)")
    .kindredAccess("Through cultural connections and community integration")
    .build(),

  LocationBuilder.create()
    .id("meadows-mall")
    .name("Meadows Mall")
    .type("Shopping Mall")
    .shortDescription(
      "Where middle America shops under supernatural surveillance."
    )
    .overview(
      "This traditional shopping mall serves the central Las Vegas valley with department stores, specialty retail, and dining options. The mall's role as a community gathering place and its mix of demographics create opportunities for various Kindred feeding preferences."
    )
    .kindredPresence(
      "Kindred who prefer anonymous feeding in crowd environments use the mall's consistent foot traffic and social atmosphere. The location provides good cover for territorial meetings disguised as casual encounters."
    )
    .mortalOperations(
      "Department stores, specialty retail, food court, and family entertainment. The mall attracts shoppers from throughout the central valley seeking mainstream retail options."
    )
    .plotHooks(
      "Territorial disputes over shopping mall hunting grounds, supernatural influences on consumer behavior, or meetings between competing Kindred factions in neutral commercial territory."
    )
    .established("1978")
    .owner("Macerich")
    .keyFeatures([
      "Department stores",
      "Specialty retail",
      "Food court",
      "Family entertainment options",
    ])
    .securityLevel("Moderate (standard mall security)")
    .kindredAccess(
      "Through retail connections and consumer culture integration"
    )
    .build(),

  LocationBuilder.create()
    .id("desert-rose-golf-course")
    .name("Desert Rose Golf Course")
    .type("Public Recreation")
    .shortDescription("Where public golf hides private supernatural business.")
    .overview(
      "This public golf course provides affordable golf recreation for Las Vegas residents in a desert setting. The course's early morning and late afternoon activity patterns align well with supernatural schedules while providing opportunities for discrete meetings."
    )
    .kindredPresence(
      "Kindred who appreciate outdoor activities and need discrete meeting locations use the golf course's natural isolation and predictable activity patterns. The sport's focus on patience and precision appeals to some supernatural personalities."
    )
    .mortalOperations(
      "Public golf, lessons, tournaments, and casual recreation. The course attracts golfers seeking affordable options and serves as a community recreational resource."
    )
    .plotHooks(
      "Territorial negotiations conducted during golf games, supernatural influences on recreational activities, or ancient Kindred adapting to modern leisure pursuits."
    )
    .established("1963")
    .owner("City of Las Vegas")
    .keyFeatures([
      "18-hole public course",
      "Driving range",
      "Pro shop",
      "Tournament facilities",
    ])
    .securityLevel("Low (public recreation facility)")
    .kindredAccess(
      "Through recreational activities and community golf programs"
    )
    .build(),
];
