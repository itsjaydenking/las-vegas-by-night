import { LocationBuilder } from "../locationBuilder.js";

export const northsideLocations = [
  LocationBuilder.create()
    .id("aliante-casino")
    .name("Aliante Casino + Hotel + Spa")
    .type("Casino Resort")
    .shortDescription(
      "Where northern valley residents find their supernatural overseen."
    )
    .overview(
      "This locals-focused casino serves the rapidly growing North Las Vegas area with gaming, dining, and entertainment. Its position in the expanding suburban frontier makes it valuable territory for Kindred establishing presence in new developments."
    )
    .kindredPresence(
      "Newer Kindred and those seeking to establish territory in growing areas compete for influence here. The casino's focus on local residents rather than tourists creates different feeding dynamics than Strip properties."
    )
    .mortalOperations(
      "Local gaming, casual dining, entertainment, and community events. The casino serves as a social hub for North Las Vegas residents and hosts events for the growing suburban population."
    )
    .plotHooks(
      "Territorial disputes between established and newer Kindred, supernatural influences on rapid suburban development, or conflicts over feeding rights in expanding neighborhoods."
    )
    .established("2008")
    .owner("Station Casinos")
    .keyFeatures([
      "Local gaming focus",
      "Community event spaces",
      "Casual dining",
      "Entertainment venues",
    ])
    .securityLevel("Moderate (local casino security)")
    .kindredAccess(
      "Through local resident connections and community involvement"
    )
    .build(),

  LocationBuilder.create()
    .id("silver-nugget")
    .name("Silver Nugget Casino")
    .type("Local Casino")
    .shortDescription(
      "Where old-school Vegas values survive in a changing landscape."
    )
    .overview(
      "This small, family-owned casino represents traditional Las Vegas gaming culture in an increasingly corporate environment. Its loyal local clientele and personal atmosphere appeal to Kindred who prefer intimate, long-term relationships over anonymous feeding."
    )
    .kindredPresence(
      "Elder Kindred who remember Las Vegas before corporate ownership appreciate the casino's traditional values and personal relationships. The intimate scale allows for closer control over mortal interactions."
    )
    .mortalOperations(
      "Traditional casino gaming, basic dining, and regular customer programs. The casino maintains old-Vegas atmosphere with personal service and community connections."
    )
    .plotHooks(
      "Conflicts between traditional and modern Kindred values, territorial disputes over loyal customer bases, or family secrets connecting to Las Vegas's early supernatural history."
    )
    .established("1959")
    .owner("Family-owned")
    .keyFeatures([
      "Traditional gaming",
      "Local loyalty programs",
      "Personal service",
      "Community connections",
    ])
    .securityLevel("Low to Moderate (family-owned, personal relationships)")
    .kindredAccess("Through personal relationships and community loyalty")
    .build(),

  LocationBuilder.create()
    .id("north-las-vegas-airport")
    .name("North Las Vegas Airport")
    .type("Transportation Hub")
    .shortDescription(
      "Where private flights carry more than just wealthy passengers."
    )
    .overview(
      "This general aviation airport handles private aircraft, flight training, and specialty aviation services. The facility's focus on private and charter flights makes it valuable for Kindred who need discrete transportation options."
    )
    .kindredPresence(
      "Nosferatu coordinate with other clans to maintain influence over private aviation services. The airport's 24-hour operations and minimal security compared to commercial airports make it useful for supernatural transportation needs."
    )
    .mortalOperations(
      "Private aviation, flight training, aircraft maintenance, and charter services. The airport serves wealthy individuals, businesses, and aviation enthusiasts who prefer private flight options."
    )
    .plotHooks(
      "Supernatural cargo smuggling, discrete transportation for visiting Kindred, or territorial disputes over aviation industry connections."
    )
    .established("1941")
    .owner("City of North Las Vegas")
    .keyFeatures([
      "Private aircraft services",
      "Flight training",
      "24-hour operations",
      "Minimal commercial security",
    ])
    .securityLevel("Moderate (general aviation security)")
    .kindredAccess(
      "Through aviation industry connections and private flight arrangements"
    )
    .build(),
];
