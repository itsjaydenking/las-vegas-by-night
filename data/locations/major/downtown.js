import { LocationBuilder } from "../locationBuilder.js";

export const downtownLocations = [
  LocationBuilder.create()
    .id("the-asylum")
    .name("The Asylum")
    .type("Anarch Club")
    .shortDescription("Where madness and freedom collide in neon-lit chaos.")
    .overview(
      "The infamous nightclub brought from Santa Monica by the Voerman twins serves as the unofficial Anarch headquarters. Its pulsing music and chaotic atmosphere provide perfect cover for blood-drunk revelries and revolutionary planning."
    )
    .kindredPresence(
      "Primarily Anarch territory, with strong Malkavian influences. The club serves as neutral ground for those seeking alternatives to Camarilla structure, though house rules are strictly enforced."
    )
    .mortalOperations(
      "Cutting-edge DJ sets, underground art exhibitions, and a clientele that prides itself on being 'different.' The mortal staff are either ghouls or carefully vetted individuals who know to ask no questions."
    )
    .plotHooks(
      "Anarch cells planning major moves, Malkavian prophesies delivered through performance art, or Second Inquisition agents attempting infiltration."
    )
    .established("2012 (Vegas location)")
    .owner("Jeanette & Therese Voerman")
    .keyFeatures([
      "Multi-level dance floors",
      "Private VIP areas",
      "Underground tunnels",
      "Sound-proof rooms",
    ])
    .securityLevel("Variable (intentionally chaotic)")
    .kindredAccess("Open to Anarchs, case-by-case for others")
    .build(),

  LocationBuilder.create()
    .id("golden-nugget")
    .name("Golden Nugget")
    .type("Casino Resort")
    .shortDescription("Old Vegas charm with new money backing.")
    .overview(
      "The historic casino maintains its vintage appeal while adapting to modern sensibilities. As one of the few remaining original Vegas casinos, it serves as a bridge between the old guard and the new money."
    )
    .kindredPresence(
      "Neutral territory used by various factions for discrete meetings. The casino's long history makes it valuable for those who remember the old days, while its corporate backing ensures modern security."
    )
    .mortalOperations(
      "Classic casino games, vintage shows, and nostalgic tourism. The property attracts both serious gamblers seeking authentic Vegas atmosphere and tourists wanting to experience 'real' Las Vegas history."
    )
    .plotHooks(
      "Hidden passages from prohibition era, vintage artifacts with supernatural properties, old mob connections that never truly disappeared, or territorial negotiations between competing Kindred factions."
    )
    .established("1946")
    .owner("Landry's, Inc.")
    .keyFeatures([
      "Historic casino floor",
      "Shark tank",
      "Vintage architecture",
      "Original neon signage",
    ])
    .securityLevel("High (but with historical blind spots)")
    .kindredAccess("Neutral ground by long-standing agreement")
    .build(),

  LocationBuilder.create()
    .id("fremont-street-experience")
    .name("Fremont Street Experience")
    .type("Entertainment District")
    .shortDescription("A canopy of lights covering streets dark with history.")
    .overview(
      "The pedestrian mall crowned by the massive LED canopy represents downtown's attempt to compete with the Strip. Beneath the light shows and street performers, old Vegas endures in the form of vintage casinos and forgotten corners."
    )
    .kindredPresence(
      "Mixed territory with various Kindred using the crowds and noise as cover. The vintage casinos serve as meeting points for those who remember Vegas before the corporate takeover."
    )
    .mortalOperations(
      "Street performers, zip-lining tourists, and the constant flow of visitors between historic casinos create a carnival atmosphere that never truly stops."
    )
    .plotHooks(
      "Messages hidden in the LED displays, territories marked through street art, conflicts between old-school and new-school Kindred philosophies, or supernatural events disguised as street performances."
    )
    .established("1995 (pedestrian mall)")
    .owner("Fremont Street Experience LLC")
    .keyFeatures([
      "Viva Vision LED canopy",
      "Fremont Street Stage",
      "SlotZilla zip line",
      "Historic casinos",
    ])
    .securityLevel("High (public area, heavy surveillance)")
    .kindredAccess("Public but monitored")
    .build(),

  LocationBuilder.create()
    .id("mob-museum")
    .name("The Mob Museum")
    .type("Museum")
    .shortDescription("Where Vegas remembers its most dangerous residents.")
    .overview(
      "The National Museum of Organized Crime and Law Enforcement occupies a historic courthouse where actual mob trials took place. The irony isn't lost on those who know that some exhibits hit closer to home than others."
    )
    .kindredPresence(
      "Ventrue and Giovanni occasionally visit for 'research purposes.' The museum's focus on historical criminal enterprises provides useful cover for discussing less legal contemporary activities."
    )
    .mortalOperations(
      "Educational exhibits, special events, and a speakeasy-themed bar. Tours focus on the golden age of organized crime, though they barely scratch the surface of what really happened."
    )
    .plotHooks(
      "Stolen mob artifacts with supernatural significance, Giovanni family members recognizing 'inaccurate' exhibits, or Second Inquisition agents using the museum as a front for investigating supernatural crime."
    )
    .established("2012")
    .owner("City of Las Vegas")
    .keyFeatures([
      "Historic courthouse building",
      "Interactive crime lab",
      "Speakeasy bar",
      "Authentic artifacts",
    ])
    .securityLevel("Moderate (public museum)")
    .kindredAccess("Public access during operating hours")
    .build(),

  LocationBuilder.create()
    .id("container-park")
    .name("Downtown Container Park")
    .type("Entertainment District")
    .shortDescription("Where industrial design meets supernatural gatherings.")
    .overview(
      "This unique shopping and entertainment complex built from repurposed shipping containers creates an intimate outdoor space in the heart of downtown. The modular design and artistic installations provide perfect cover for discrete meetings and the family-friendly atmosphere masks more serious business."
    )
    .kindredPresence(
      "Nosferatu appreciate the industrial aesthetic and modular hiding spaces, while Toreador find inspiration in the creative reuse of urban materials. The open-air design allows for quick escapes when needed."
    )
    .mortalOperations(
      "Artisanal shops, craft beer, live music, and family activities create a bohemian atmosphere. The container architecture and artistic installations attract creative types and urban explorers."
    )
    .plotHooks(
      "Supernatural art installations hiding real power, territorial disputes over the creative community, or meetings disguised as artistic collaborations."
    )
    .established("2013")
    .owner("Downtown Project")
    .keyFeatures([
      "Repurposed shipping containers",
      "Playground with giant treehouse",
      "Open-air concert space",
      "Artisanal vendors",
    ])
    .securityLevel("Moderate (open concept with controlled access)")
    .kindredAccess("Through arts community and creative industry connections")
    .build(),

  LocationBuilder.create()
    .id("el-cortez")
    .name("El Cortez Hotel & Casino")
    .type("Historic Casino")
    .shortDescription("Where old Vegas traditions run deeper than most know.")
    .overview(
      "The oldest continuously operating hotel and casino in Las Vegas has witnessed nearly a century of Sin City's evolution. Its vintage charm and family ownership create an atmosphere where old traditions are respected and long memories are valued."
    )
    .kindredPresence(
      "Favored by elder Kindred who remember Vegas before the corporate era. The hotel's long history and family traditions make it a natural gathering place for those who value continuity and old-fashioned hospitality."
    )
    .mortalOperations(
      "Classic casino gaming, vintage dining, and affordable accommodations attract locals and visitors seeking authentic old Vegas atmosphere. The property's small scale creates an intimate, neighborhood feel."
    )
    .plotHooks(
      "Hidden records from Vegas's early supernatural history, elder Kindred maintaining old territorial agreements, or family secrets spanning multiple generations."
    )
    .established("1941")
    .owner("Cortez Family")
    .keyFeatures([
      "Original vintage architecture",
      "Family-owned operation",
      "Classic casino games",
      "Historic bar and restaurant",
    ])
    .securityLevel("Low to Moderate (old-school, personal relationships)")
    .kindredAccess(
      "Through personal relationships and long-standing traditions"
    )
    .build(),

  LocationBuilder.create()
    .id("las-vegas-city-hall")
    .name("Las Vegas City Hall")
    .type("Government Building")
    .shortDescription("Where mortal laws meet supernatural influence.")
    .overview(
      "The seat of municipal government provides a crucial interface between Kindred interests and mortal authority. Its modernist architecture and bureaucratic operations hide a complex web of influence, corruption, and supernatural manipulation."
    )
    .kindredPresence(
      "Ventrue maintain careful influence through ghouls in key positions, while Nosferatu gather intelligence on municipal activities. Various clans coordinate to ensure city policies don't interfere with supernatural operations."
    )
    .mortalOperations(
      "Municipal governance, city planning, licensing, and public services. The building houses the offices that control zoning, permits, and regulations that affect supernatural territories."
    )
    .plotHooks(
      "Supernatural influence on city planning, territorial disputes over municipal contracts, or Second Inquisition agents infiltrating local government."
    )
    .established("1973")
    .owner("City of Las Vegas")
    .keyFeatures([
      "Municipal offices",
      "City council chambers",
      "Public records",
      "Planning department",
    ])
    .securityLevel("High (government security protocols)")
    .kindredAccess("Through ghoul contacts and political influence")
    .build(),

  LocationBuilder.create()
    .id("downtown-arts-district")
    .name("Las Vegas Arts District")
    .type("Cultural District")
    .shortDescription("Where creativity flows and predators find inspiration.")
    .overview(
      "The 18b Arts District represents downtown's cultural renaissance, with galleries, studios, and performance spaces creating a bohemian enclave. The area's mix of established artists and newcomers provides excellent hunting grounds and cultural cover for supernatural activities."
    )
    .kindredPresence(
      "Heavily influenced by Toreador who see the district as their natural domain. The artistic community provides both inspiration and sustenance, while galleries offer perfect venues for supernatural gatherings disguised as art events."
    )
    .mortalOperations(
      "Art galleries, artist studios, performance venues, and creative businesses. First Friday art walks bring large crowds, while smaller events maintain year-round activity."
    )
    .plotHooks(
      "Supernatural influences on artistic works, territorial disputes between creative Kindred, or cursed artworks with real power appearing in galleries."
    )
    .established("2002 (formal district designation)")
    .owner("Various private owners and the city")
    .keyFeatures([
      "Multiple art galleries",
      "Artist studios and lofts",
      "Performance venues",
      "Monthly First Friday events",
    ])
    .securityLevel("Low (open artistic community)")
    .kindredAccess("Through artistic connections and cultural involvement")
    .build(),

  LocationBuilder.create()
    .id("symphony-park")
    .name("Symphony Park")
    .type("Cultural Complex")
    .shortDescription("Where high culture masks higher predators.")
    .overview(
      "This cultural district houses the Smith Center for the Performing Arts and serves as downtown's attempt to bring sophisticated entertainment to compete with Strip venues. The elegant venues and upscale events attract wealthy patrons and cultural elites."
    )
    .kindredPresence(
      "Toreador and Ventrue coordinate to maintain influence over the cultural scene. The sophisticated atmosphere and wealthy patrons provide excellent feeding opportunities and business networking."
    )
    .mortalOperations(
      "Broadway shows, symphony performances, ballet, and high-end cultural events. The venues attract season subscribers and cultural donors from Las Vegas's social elite."
    )
    .plotHooks(
      "Supernatural influences on performances, territorial negotiations during cultural seasons, or ancient Kindred drawn to classical arts."
    )
    .established("2012")
    .owner("Various cultural organizations")
    .keyFeatures([
      "Smith Center for the Performing Arts",
      "Multiple performance venues",
      "Outdoor event spaces",
      "Cultural education facilities",
    ])
    .securityLevel("High (upscale venue security)")
    .kindredAccess("Through cultural patronage and arts industry connections")
    .build(),

  LocationBuilder.create()
    .id("plaza-hotel-casino")
    .name("Plaza Hotel & Casino")
    .type("Historic Casino")
    .shortDescription("Where the rails end and darker journeys begin.")
    .overview(
      "Built at the head of Fremont Street where the railroad once terminated, the Plaza represents the gateway to old Vegas. Its position overlooking the Fremont Street Experience and its transportation connections make it a strategic location for those who need to move quickly and quietly."
    )
    .kindredPresence(
      "Nosferatu use the hotel's transportation connections and basement areas for their network operations. The property's history as a transportation hub makes it valuable for Kindred who need discrete movement in and out of downtown."
    )
    .mortalOperations(
      "Casino gaming, budget accommodations, and event hosting. The property's location at the head of Fremont Street makes it a natural gathering point for downtown visitors."
    )
    .plotHooks(
      "Transportation networks for supernatural smuggling, territorial control over downtown access points, or hidden chambers from the railroad era."
    )
    .established("1971")
    .owner("Tamares Group")
    .keyFeatures([
      "Historic location at head of Fremont Street",
      "Transportation connections",
      "Event facilities",
      "Rooftop venues",
    ])
    .securityLevel("Moderate (standard casino security)")
    .kindredAccess(
      "Through transportation industry and historic preservation connections"
    )
    .build(),
];
