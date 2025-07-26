import { LocationBuilder } from "../locationBuilder.js";

export const stripLocations = [
  LocationBuilder.create()
    .id("bellagio")
    .name("Bellagio")
    .type("Casino Resort")
    .shortDescription("Elegant fountains hide elegant predators.")
    .overview(
      "The Bellagio represents the pinnacle of Vegas sophistication, its dancing fountains a mesmerizing facade for the darker dealings within."
    )
    .kindredPresence(
      "Toreador influence runs strong here, with several of the clan using the resort's art collection and cultural events as both feeding grounds and territory markers."
    )
    .mortalOperations(
      "High-stakes gambling, world-class dining, and exclusive shopping create a constant flow of wealthy mortals."
    )
    .plotHooks(
      "Art theft involving cursed paintings, a Toreador's obsession with a mortal artist, or territorial disputes over gallery space during major exhibitions."
    )
    .established("1998")
    .owner("MGM Resorts International")
    .keyFeatures([
      "Conservatory & Botanical Gardens",
      "Bellagio Gallery of Fine Art",
      "Fountains of Bellagio",
      "High-limit gaming areas",
    ])
    .securityLevel("Maximum (with discrete exceptions)")
    .kindredAccess("Limited to established contacts")
    .build(),

  LocationBuilder.create()
    .id("caesars-palace")
    .name("Caesars Palace")
    .type("Casino Resort")
    .shortDescription("Where modern emperors hold court.")
    .overview(
      "Built to evoke the grandeur of ancient Rome, Caesars Palace has become a throne room for those who consider themselves the true rulers of Las Vegas."
    )
    .kindredPresence(
      "Ventrue have maintained a strong presence here since the 1980s, using the Forum Shops and high-roller suites as neutral meeting grounds."
    )
    .mortalOperations(
      "Celebrity residencies, championship boxing matches, and convention business bring a steady stream of high-profile mortals."
    )
    .plotHooks(
      "Corporate espionage during major conventions, gladiatorial contests between Kindred, or ancient Roman artifacts with supernatural properties appearing in the shops."
    )
    .established("1966")
    .owner("Caesars Entertainment")
    .keyFeatures([
      "The Colosseum",
      "Forum Shops",
      "Garden of the Gods Pool",
      "Multiple hotel towers",
    ])
    .securityLevel("High (variable by area)")
    .kindredAccess("Established through long-term arrangements")
    .build(),

  LocationBuilder.create()
    .id("the-venetian")
    .name("The Venetian Resort")
    .type("Casino Resort")
    .shortDescription("Where Italian elegance masks ancient bloodlines.")
    .overview(
      "The Venetian's recreation of Venice provides the perfect atmosphere for those who remember the old country. Its gondola rides, elaborate architecture, and focus on luxury shopping create an environment where Old World sensibilities feel at home in New World excess."
    )
    .kindredPresence(
      "Primary stronghold of Giovanni and Hecata operations in Las Vegas. The resort's Italian theming and private suites provide perfect cover for necromantic rituals and family business. The Doge's Palace suite serves as an unofficial Giovanni embassy."
    )
    .mortalOperations(
      "Luxury shopping at Grand Canal Shoppes, gondola rides, high-end dining, and convention space. The property's focus on European elegance attracts wealthy international visitors and business travelers."
    )
    .plotHooks(
      "Giovanni family reunions disguised as corporate retreats, necromantic rituals in replica Venetian architecture, territorial disputes with other clans over lucrative feeding grounds, or ancient Giovanni enemies tracking the family to their Las Vegas stronghold."
    )
    .established("1999")
    .owner("Las Vegas Sands Corporation")
    .keyFeatures([
      "Grand Canal Shoppes",
      "Gondola rides",
      "Doge's Palace suite",
      "St. Mark's Square replica",
      "Multiple convention facilities",
    ])
    .securityLevel("Maximum (Giovanni-controlled areas)")
    .kindredAccess("Giovanni/Hecata territory - others by invitation only")
    .build(),

  LocationBuilder.create()
    .id("aria-resort")
    .name("ARIA Resort & Casino")
    .type("Casino Resort")
    .shortDescription("Where cutting-edge technology meets timeless hunger.")
    .overview(
      "ARIA represents the pinnacle of modern Las Vegas engineering, with its sustainable design and technological integration. The resort's emphasis on contemporary art and high-tech amenities attracts a younger, more sophisticated clientele."
    )
    .kindredPresence(
      "Favored by tech-savvy Kindred and those who embrace modern innovations. Nosferatu find the resort's extensive digital infrastructure useful for surveillance, while Tremere appreciate the property's emphasis on precision and control."
    )
    .mortalOperations(
      "High-tech gaming, contemporary art exhibitions, fine dining, and business conferences. The property's focus on sustainability and innovation attracts environmentally conscious and technology-focused visitors."
    )
    .plotHooks(
      "Supernatural influences on cutting-edge technology, digital surveillance systems detecting unusual activities, Tremere experiments with modern alchemy, or cyber-warfare between competing Kindred factions."
    )
    .established("2009")
    .owner("MGM Resorts International")
    .keyFeatures([
      "Sky Suites",
      "ARIA Fine Art Collection",
      "High-tech gaming floors",
      "Sustainable design features",
      "Conference and meeting facilities",
    ])
    .securityLevel("Very High (advanced surveillance systems)")
    .kindredAccess(
      "Through technological connections and modern business arrangements"
    )
    .build(),

  LocationBuilder.create()
    .id("circus-circus")
    .name("Circus Circus")
    .type("Casino Resort")
    .shortDescription(
      "Where family fun provides perfect camouflage for ancient predators."
    )
    .overview(
      "The oldest continuously operating casino on the Strip maintains its carnival atmosphere and family-friendly facade. Beneath the circus acts and carnival games, darker entertainments play out in areas tourists never see."
    )
    .kindredPresence(
      "Popular with Malkavians who appreciate the chaotic atmosphere and Nosferatu who use the property's maze-like layout for discrete meetings. The constant noise and sensory overload provide excellent cover for supernatural activities."
    )
    .mortalOperations(
      "Circus acts, carnival games, family dining, and budget-friendly gambling. The property's focus on affordable entertainment brings a constant stream of middle-class families and budget-conscious tourists."
    )
    .plotHooks(
      "Malkavian prophesies delivered through circus performances, disappearances blamed on carnival accidents, territorial disputes in the property's forgotten areas, or ancient Kindred hiding among the permanent carnival staff."
    )
    .established("1968")
    .owner("Phil Ruffin")
    .keyFeatures([
      "Free circus acts",
      "Midway carnival games",
      "AdventureDome theme park",
      "Budget-friendly amenities",
      "Maze-like interior layout",
    ])
    .securityLevel("Moderate (family-focused, less intensive surveillance)")
    .kindredAccess("Easy through carnival connections and staff integration")
    .build(),

  LocationBuilder.create()
    .id("excalibur")
    .name("Excalibur Hotel & Casino")
    .type("Casino Resort")
    .shortDescription("Where medieval fantasy meets supernatural reality.")
    .overview(
      "The castle-themed resort's medieval atmosphere and Arthurian legends create an environment where talks of ancient bloodlines and eternal quests don't seem out of place. Its family-friendly exterior masks more serious activities in its private areas."
    )
    .kindredPresence(
      "Ventrue appreciate the castle theming and concepts of nobility, while some older Kindred find comfort in the medieval aesthetic that reminds them of their mortal days. The property serves as neutral ground for discussions of honor and tradition."
    )
    .mortalOperations(
      "Medieval dinner shows, family entertainment, affordable gambling, and themed restaurants. The property's focus on fantasy and spectacle attracts families and tourists seeking an immersive experience."
    )
    .plotHooks(
      "Ancient Kindred drawn to familiar medieval symbolism, territorial disputes resolved through codes of chivalric honor, supernatural artifacts hidden in plain sight as 'props,' or Second Inquisition agents investigating reports of 'too realistic' medieval reenactments."
    )
    .established("1990")
    .owner("MGM Resorts International")
    .keyFeatures([
      "Castle architecture",
      "Tournament of Kings dinner show",
      "Medieval theming throughout",
      "Family entertainment options",
      "Affordable gaming",
    ])
    .securityLevel("Moderate (family resort with standard casino security)")
    .kindredAccess(
      "Through themed entertainment connections and medieval enthusiast groups"
    )
    .build(),

  LocationBuilder.create()
    .id("mgm-grand")
    .name("MGM Grand Las Vegas")
    .type("Casino Resort")
    .shortDescription(
      "The emerald city where Sin City's true rulers hold court."
    )
    .overview(
      "One of the largest hotels in the world, the MGM Grand serves as the unofficial seat of power for Las Vegas's Kindred leadership. Its massive size, multiple towers, and endless private spaces make it the perfect location for high-level supernatural politics and the operations of the city's ruling council."
    )
    .kindredPresence(
      "Primary residence and headquarters for Las Vegas's Prince and ruling council. The property's Chairman Suite and private conference facilities serve as the formal court of the domain. Multiple clans maintain permanent presence here, with strict protocols governing access and behavior."
    )
    .mortalOperations(
      "Major boxing matches, headline entertainment, extensive gaming floors, and convention facilities. The property's size and reputation attract high-profile visitors from around the world, providing excellent cover for supernatural gatherings."
    )
    .plotHooks(
      "Court politics and Princely edicts, inter-clan negotiations in neutral territory, challenges to domain leadership, ancient visitors paying respects to the current Prince, or Second Inquisition attempts to infiltrate the highest levels of Kindred society."
    )
    .established("1993")
    .owner("MGM Resorts International")
    .keyFeatures([
      "Chairman Suite (Princely haven)",
      "Grand Garden Arena",
      "Multiple private conference facilities",
      "Emerald City theme",
      "Extensive security infrastructure",
      "Private elevators and secure areas",
    ])
    .securityLevel("Maximum (Princely domain security)")
    .kindredAccess(
      "Court members by right, others by Princely invitation or formal presentation"
    )
    .customSection(
      "princely-domain",
      "The MGM Grand serves as the official seat of the Prince of Las Vegas. The Chairman Suite on the top floor has been converted into a secure haven with multiple escape routes, advanced security systems, and facilities for holding court. The Grand Conference Center hosts the monthly clan meetings and formal presentations to the Prince."
    )
    .customDetail("politicalSignificance", "Seat of Kindred power in Las Vegas")
    .customDetail("securityFeatures", [
      "Bulletproof glass",
      "Multiple escape routes",
      "Advanced surveillance",
      "Ghoul security staff",
      "Warded against supernatural intrusion",
    ])
    .build(),

  LocationBuilder.create()
    .id("stratosphere")
    .name("The STRAT Hotel, Casino & Tower")
    .type("Casino Resort")
    .shortDescription(
      "Where the city spreads below like a glittering web of potential."
    )
    .overview(
      "The tallest freestanding observation tower in the United States offers unparalleled views of Las Vegas and the surrounding desert. For Kindred, the tower represents both strategic advantage and symbolic power - a literal throne above the city they seek to control."
    )
    .kindredPresence(
      "Nosferatu use the tower's height for surveillance operations, while ambitious Kindred from various clans see occupying the top floors as a status symbol. The tower's isolation from other Strip properties makes it useful for discrete meetings."
    )
    .mortalOperations(
      "Observation decks, thrill rides, dining with panoramic views, and budget-friendly gaming. The property attracts tourists seeking spectacular views and adrenaline junkies looking for extreme experiences."
    )
    .plotHooks(
      "Surveillance operations monitoring the entire city, territorial disputes over the symbolic 'high ground,' Second Inquisition agents using the tower for their own observation purposes, or ancient Kindred drawn to the tower's resemblance to medieval keeps."
    )
    .established("1996")
    .owner("Golden Entertainment")
    .keyFeatures([
      "1,149-foot observation tower",
      "Thrill rides at 900+ feet",
      "360-degree city views",
      "Multiple observation levels",
      "Sky-high dining venues",
    ])
    .securityLevel("High (controlled access to upper levels)")
    .kindredAccess(
      "Through hospitality industry connections and private event bookings"
    )
    .build(),

  LocationBuilder.create()
    .id("sahara")
    .name("Sahara Las Vegas")
    .type("Casino Resort")
    .shortDescription(
      "Where classic Vegas style meets modern supernatural needs."
    )
    .overview(
      "Recently renovated and rebranded, the Sahara combines vintage Vegas charm with contemporary amenities. Its position at the north end of the Strip and connection to the monorail make it a strategic location for those who value both accessibility and tradition."
    )
    .kindredPresence(
      "Popular with Kindred who appreciate the property's blend of old and new Vegas aesthetics. The recently renovated spaces provide modern security while maintaining the intimate scale that some prefer over mega-resorts."
    )
    .mortalOperations(
      "Classic casino gaming, contemporary dining, nightlife venues, and convention space. The property attracts visitors seeking authentic Vegas atmosphere without the overwhelming scale of larger resorts."
    )
    .plotHooks(
      "Territorial negotiations between old-school and modern Kindred factions, hidden chambers from the property's earlier incarnations, or business dealings conducted away from the scrutiny of larger Strip operations."
    )
    .established("1952 (current incarnation 2019)")
    .owner("Meruelo Gaming")
    .keyFeatures([
      "Historic Vegas location",
      "Las Vegas Monorail station",
      "Renovated amenities",
      "Intimate scale",
      "Multiple entertainment venues",
    ])
    .securityLevel("Moderate to High (recently upgraded systems)")
    .kindredAccess("Through gaming industry relationships and event hosting")
    .build(),

  LocationBuilder.create()
    .id("luxor")
    .name("Luxor Las Vegas")
    .type("Casino Resort")
    .shortDescription(
      "Where ancient mysteries hide in plain sight beneath a pyramid of glass."
    )
    .overview(
      "The distinctive black pyramid and sphinx create an atmosphere steeped in ancient Egyptian symbolism. For Kindred with connections to antiquity, the Luxor offers both thematic resonance and practical benefits - its unique architecture provides numerous hidden spaces and its Egyptian theming masks discussions of ancient bloodlines and eternal existence."
    )
    .kindredPresence(
      "Particularly favored by older Kindred and those with connections to ancient Egypt. The pyramid's symbolism of death and rebirth resonates with vampire nature, while the property's numerous hidden passages and themed areas provide excellent cover for supernatural activities."
    )
    .mortalOperations(
      "Egyptian-themed gaming, dinner shows, attractions, and exhibits. The property's unique architecture and theming attract tourists seeking an immersive ancient Egyptian experience in the heart of modern Vegas."
    )
    .plotHooks(
      "Ancient Egyptian artifacts with real supernatural power, Kindred claiming pharaonic lineage, mummy-themed shows hiding actual undead, territorial disputes framed as ancient dynastic conflicts, or archaeological 'discoveries' that threaten the Masquerade."
    )
    .established("1993")
    .owner("MGM Resorts International")
    .keyFeatures([
      "30-story black pyramid",
      "Great Sphinx replica",
      "Egyptian theming throughout",
      "Atrium with inclined elevators",
      "Multiple entertainment venues",
      "Hidden passages and chambers",
    ])
    .securityLevel(
      "High (unique architecture creates natural security advantages)"
    )
    .kindredAccess(
      "Through themed entertainment connections and archaeological interests"
    )
    .customSection(
      "ancientConnections",
      "The Luxor's Egyptian theming attracts Kindred with ancient connections, and rumors persist that some of the 'replica' artifacts are actually genuine pieces with supernatural significance."
    )
    .build(),

  LocationBuilder.create()
    .id("new-york-new-york")
    .name("New York-New York Hotel & Casino")
    .type("Casino Resort")
    .shortDescription(
      "Where the Big Apple's skyline hides supernatural predators among its peaks."
    )
    .overview(
      "The property's recreation of New York City's skyline and urban atmosphere provides perfect cover for Kindred who prefer the anonymity of city life. Its roller coaster, dense theming, and multiple levels create a complex environment ideal for discrete activities and quick escapes."
    )
    .kindredPresence(
      "Popular with younger Kindred and those who appreciate urban hunting grounds. The property's New York theming and dense, multi-level layout appeal to Kindred who prefer the complexity and anonymity of major metropolitan areas over typical casino environments."
    )
    .mortalOperations(
      "Urban-themed gaming, thrill rides, street-style dining, and entertainment that recreates the New York experience. The property attracts tourists seeking big-city energy and excitement in a controlled Vegas environment."
    )
    .plotHooks(
      "Territorial disputes over 'neighborhoods' within the property, supernatural criminals using the urban theming as cover, connections to actual New York Kindred operations, or Second Inquisition agents familiar with real New York using their knowledge to investigate supernatural activities."
    )
    .established("1997")
    .owner("MGM Resorts International")
    .keyFeatures([
      "Replica NYC skyline",
      "The Big Apple Coaster",
      "Greenwich Village-themed areas",
      "Brooklyn Bridge replica",
      "Multiple 'neighborhood' themed sections",
    ])
    .securityLevel("High (complex layout requires extensive surveillance)")
    .kindredAccess(
      "Through urban connections and entertainment industry relationships"
    )
    .build(),

  LocationBuilder.create()
    .id("paris-las-vegas")
    .name("Paris Las Vegas")
    .type("Casino Resort")
    .shortDescription(
      "Where Parisian elegance provides cover for ancient European bloodlines."
    )
    .overview(
      "The half-scale Eiffel Tower and French theming create an atmosphere of European sophistication and old-world charm. For Kindred with European origins or connections, Paris Las Vegas offers both nostalgic comfort and practical advantages for conducting business with continental associates."
    )
    .kindredPresence(
      "Favored by European Kindred and those maintaining connections to Old World domains. The French theming and elegant atmosphere provide appropriate settings for formal meetings and traditional protocols, while the property's romantic reputation offers excellent cover for intimate supernatural dealings."
    )
    .mortalOperations(
      "French-themed dining, romantic entertainment, wedding venues, and gaming in a Parisian atmosphere. The property attracts couples, tourists seeking European elegance, and visitors drawn to French culture and sophistication."
    )
    .plotHooks(
      "European Kindred conducting business with American domains, territorial disputes reflecting historical French-English conflicts, romantic entanglements between immortal lovers, or smuggling operations using the property's connections to French luxury brands."
    )
    .established("1999")
    .owner("Caesars Entertainment")
    .keyFeatures([
      "Half-scale Eiffel Tower",
      "Le Boulevard shopping",
      "French-themed restaurants",
      "Romantic atmosphere",
      "European-style gaming areas",
    ])
    .securityLevel("High (elegant but secure)")
    .kindredAccess("Through European connections and cultural associations")
    .build(),

  LocationBuilder.create()
    .id("treasure-island")
    .name("Treasure Island Hotel & Casino")
    .type("Casino Resort")
    .shortDescription(
      "Where pirate legends mask modern-day plunder and supernatural treasures."
    )
    .overview(
      "Originally themed around pirates and treasure hunting, TI has evolved into a more sophisticated adult destination while maintaining its adventurous spirit. The property's history of spectacular shows and its island theming provide excellent cover for Kindred who appreciate dramatic flair in their operations."
    )
    .kindredPresence(
      "Appeals to Kindred with theatrical sensibilities and those who appreciate the romance of piracy and adventure. The property's evolution from family-friendly to adult entertainment mirrors the sophistication many Kindred develop over centuries."
    )
    .mortalOperations(
      "Gaming, adult entertainment, dining, and shows that emphasize spectacle and adventure. The property attracts visitors seeking excitement and fantasy in a more adult-oriented environment than family resorts."
    )
    .plotHooks(
      "Supernatural 'treasures' hidden in plain sight, territorial battles framed as pirate conflicts, ancient maritime Kindred feeling at home with the nautical theming, or smuggling operations using the property's adventure theming as cover."
    )
    .established("1993")
    .owner("Phil Ruffin")
    .keyFeatures([
      "Pirate/nautical theming",
      "Spectacular show venues",
      "Adult entertainment focus",
      "Adventure-themed attractions",
      "Intimate scale compared to mega-resorts",
    ])
    .securityLevel("Moderate to High (adult-focused with appropriate security)")
    .kindredAccess(
      "Through entertainment industry connections and adult hospitality arrangements"
    )
    .build(),
];
