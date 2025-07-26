import { LocationBuilder } from "../locationBuilder.js";

export const paradiseLocations = [
  LocationBuilder.create()
    .id("mccarran-airport")
    .name("Harry Reid International Airport")
    .type("Transportation Hub")
    .shortDescription("Where arrivals and departures are carefully monitored.")
    .overview(
      "Formerly McCarran International Airport, this massive transportation hub sees millions of travelers annually. For Kindred, it represents both opportunity and danger - a constant stream of potential vessels, but also the highest security in the region."
    )
    .kindredPresence(
      "Carefully managed by a coalition of interests, with Nosferatu handling much of the surveillance and logistics. Various clans maintain feeding arrangements, but strict protocols prevent exposure."
    )
    .mortalOperations(
      "International flights, cargo operations, and the constant flow of tourists and business travelers. TSA and customs provide additional layers of security that work in Kindred favor."
    )
    .plotHooks(
      "Smuggling operations, international Kindred arrivals, or Second Inquisition monitoring of unusual travel patterns."
    )
    .established("1963")
    .owner("Clark County")
    .keyFeatures([
      "Four terminals",
      "International flights",
      "Cargo facilities",
      "Ground transportation hub",
    ])
    .securityLevel("Maximum (federal oversight)")
    .kindredAccess("Extremely limited and carefully coordinated")
    .build(),

  LocationBuilder.create()
    .id("hard-rock-hotel")
    .name("Hard Rock Hotel & Casino")
    .type("Casino Resort")
    .shortDescription("Where rock and roll meets supernatural politics.")
    .overview(
      "The iconic guitar-shaped hotel towers over Paradise Road, catering to a younger, more rebellious crowd than the traditional Strip resorts. Its music-themed atmosphere provides perfect cover for those who prefer to conduct business with a soundtrack."
    )
    .kindredPresence(
      "Popular with younger Kindred and those embracing modern culture. Toreador and Brujah frequently use the venue's concerts and parties as feeding opportunities and neutral meeting grounds."
    )
    .mortalOperations(
      "Live music venues, celebrity chef restaurants, and a casino floor that never sleeps. The constant stream of musicians, tourists, and industry professionals creates a diverse feeding ground."
    )
    .plotHooks(
      "Supernatural influences on famous musicians, territorial disputes during major concerts, or ancient Kindred struggling to understand modern music culture."
    )
    .established("1995")
    .owner("Virgin Hotels (as of 2021)")
    .keyFeatures([
      "The Joint concert venue",
      "Multiple restaurant concepts",
      "Pool parties",
      "Music memorabilia",
    ])
    .securityLevel("High (entertainment industry security)")
    .kindredAccess("Through entertainment industry connections")
    .build(),

  LocationBuilder.create()
    .id("palms-casino")
    .name("Palms Casino Resort")
    .type("Casino Resort")
    .shortDescription("Where new money meets old secrets in off-Strip luxury.")
    .overview(
      "The Palms offers a more intimate luxury experience compared to the mega-resorts of the Strip. Its off-Strip location and celebrity-focused amenities make it a favorite for those seeking privacy and discretion."
    )
    .kindredPresence(
      "Ventrue and Toreador with entertainment industry connections frequently use the Palms for private gatherings. The resort's reputation for celebrity privacy extends to supernatural guests."
    )
    .mortalOperations(
      "High-limit gaming, celebrity suites, and exclusive restaurants. The property's focus on VIP service creates an environment where unusual requests rarely raise eyebrows."
    )
    .plotHooks(
      "Celebrity ghouls managing mortal careers, exclusive supernatural gatherings in penthouse suites, or territorial negotiations between entertainment industry Kindred."
    )
    .established("2001")
    .owner("Station Casinos")
    .keyFeatures([
      "Fantasy Tower suites",
      "Pearl Concert Theater",
      "Ghostbar",
      "High-limit gaming salon",
    ])
    .securityLevel("Very High (celebrity-focused)")
    .kindredAccess("VIP arrangements and entertainment connections")
    .build(),

  LocationBuilder.create()
    .id("thomas-mack-center")
    .name("Thomas & Mack Center")
    .type("Arena")
    .shortDescription(
      "Where thousands gather under one roof, unaware of what watches from the rafters."
    )
    .overview(
      "Located on the UNLV campus, this multi-purpose arena hosts everything from basketball games to major concerts and conventions. The large crowds and varied events provide excellent cover for supernatural activities."
    )
    .kindredPresence(
      "Used occasionally by various clans for large gatherings disguised as private events. The arena's size and multiple access points make it useful for meetings requiring significant security."
    )
    .mortalOperations(
      "UNLV basketball, major concerts, conventions, and graduation ceremonies. The constant rotation of different event types brings diverse crowds throughout the year."
    )
    .plotHooks(
      "Supernatural influences on college athletics, large-scale Kindred gatherings during major events, or academic research into supernatural phenomena at the adjacent university."
    )
    .established("1983")
    .owner("University of Nevada, Las Vegas")
    .keyFeatures([
      "18,000-seat capacity",
      "Multiple event configurations",
      "Adjacent to UNLV campus",
      "Premium hospitality areas",
    ])
    .securityLevel("High (public venue security)")
    .kindredAccess("Through event sponsorship and university connections")
    .build(),

  LocationBuilder.create()
    .id("orleans-casino")
    .name("The Orleans Hotel & Casino")
    .type("Casino Resort")
    .shortDescription(
      "Where locals come to play, and locals know to ask no questions."
    )
    .overview(
      "A locals-focused casino that maintains a more relaxed, neighborhood atmosphere compared to the tourist-heavy Strip properties. Its bowling center, movie theater, and casual dining options create a community feel that some Kindred find refreshing."
    )
    .kindredPresence(
      "Popular with Kindred who prefer to blend in with local mortal communities rather than tourist crowds. The property's regular customers provide stable, long-term feeding relationships."
    )
    .mortalOperations(
      "Local gambling, bowling leagues, movie screenings, and community events. The property's focus on locals rather than tourists creates a more predictable, routine environment."
    )
    .plotHooks(
      "Kindred integration into mortal community activities, territorial disputes over local feeding grounds, or Second Inquisition surveillance of 'normal' community centers."
    )
    .established("1996")
    .owner("Boyd Gaming")
    .keyFeatures([
      "70-lane bowling center",
      "18-screen movie theater",
      "Arena for concerts and events",
      "Local-focused amenities",
    ])
    .securityLevel("Moderate (local community focus)")
    .kindredAccess("Through community integration and regular patronage")
    .build(),

  LocationBuilder.create()
    .id("unlv-campus")
    .name("University of Nevada, Las Vegas")
    .type("University Campus")
    .shortDescription(
      "Where young minds are shaped, and some are claimed forever."
    )
    .overview(
      "UNLV's sprawling campus serves as both an academic institution and a hunting ground for those who prefer their vessels young, idealistic, and far from home. The university's research facilities, late-night study sessions, and constant flow of students create perfect opportunities for discrete feeding and recruitment."
    )
    .kindredPresence(
      "Tremere maintain a strong presence through academic connections, using research facilities for their studies while Toreador cultivate relationships within the arts programs. Several professors are ghouls who help identify promising students for their masters."
    )
    .mortalOperations(
      "Undergraduate and graduate education, research programs, athletic events, and campus activities. The 24/7 nature of university life provides cover for nocturnal activities, while academic conferences and guest lectures bring in visitors from around the world."
    )
    .plotHooks(
      "Tremere experiments disguised as research projects, Toreador grooming talented art students, territorial disputes over feeding rights in dormitories, or Second Inquisition agents posing as researchers investigating supernatural phenomena."
    )
    .established("1957")
    .owner("Nevada System of Higher Education")
    .keyFeatures([
      "Research facilities and laboratories",
      "Student dormitories and housing",
      "Libraries open late into the night",
      "Art and performance venues",
      "Academic conference facilities",
      "Campus security with known blind spots",
    ])
    .securityLevel(
      "Moderate (campus security, but large and difficult to monitor)"
    )
    .kindredAccess(
      "Through academic appointments, research partnerships, and student organizations"
    )
    .customSection(
      "academicInfluence",
      "Several key faculty positions are held by ghouls who help maintain the Masquerade while providing access to cutting-edge research. The university's psychology and sociology departments unknowingly contribute to Kindred understanding of human behavior."
    )
    .customDetail(
      "feedingOpportunities",
      "Large student population, late-night study culture, off-campus housing"
    )
    .customDetail(
      "researchValue",
      "Access to scientific equipment, academic databases, and research collaboration"
    )
    .build(),

  LocationBuilder.create()
    .id("town-square")
    .name("Town Square Las Vegas")
    .type("Shopping District")
    .shortDescription("Where suburban normalcy masks supernatural suburbia.")
    .overview(
      "This outdoor shopping center creates the illusion of a quaint town square in the heart of the desert. Its mix of chain stores, restaurants, and family entertainment provides perfect cover for Kindred who prefer to blend into middle-class American life rather than the glitz of the Strip."
    )
    .kindredPresence(
      "Popular with Kindred who maintain suburban covers and those who feed on middle-class families. The outdoor layout and family-friendly atmosphere make it ideal for Kindred who prefer longer-term relationships with their vessels."
    )
    .mortalOperations(
      "Chain retail stores, family restaurants, movie theater, and seasonal events. The center attracts local families and suburban residents seeking convenient shopping and dining."
    )
    .plotHooks(
      "Kindred maintaining suburban family covers, territorial disputes over middle-class feeding grounds, or Second Inquisition surveillance of 'normal' family activities."
    )
    .established("2007")
    .owner("Turnberry Associates")
    .keyFeatures([
      "Outdoor shopping center",
      "Family entertainment",
      "Chain restaurants",
      "Movie theater",
      "Seasonal events",
    ])
    .securityLevel("Low to Moderate (suburban mall security)")
    .kindredAccess("Through suburban community integration")
    .build(),

  LocationBuilder.create()
    .id("nevada-state-college")
    .name("Nevada State College")
    .type("Educational Institution")
    .shortDescription("Where higher education meets higher predators.")
    .overview(
      "This smaller state college serves as an alternative to UNLV, focusing on undergraduate education and professional programs. Its more intimate campus environment and commuter student population create different opportunities than the larger research university."
    )
    .kindredPresence(
      "Tremere use the college for recruiting teaching assistants and accessing specialized professional programs. The smaller scale allows for more personal relationships with faculty and students."
    )
    .mortalOperations(
      "Undergraduate programs, professional training, continuing education, and community outreach. The college's focus on working students and career changers brings diverse age groups to campus."
    )
    .plotHooks(
      "Professional program infiltration, adult student recruitment, or using the college as a front for supernatural education programs."
    )
    .established("2002")
    .owner("Nevada System of Higher Education")
    .keyFeatures([
      "Professional programs",
      "Adult education focus",
      "Smaller campus",
      "Community partnerships",
    ])
    .securityLevel("Low (small college environment)")
    .kindredAccess(
      "Through professional development and continuing education programs"
    )
    .build(),

  LocationBuilder.create()
    .id("las-vegas-motor-speedway")
    .name("Las Vegas Motor Speedway")
    .type("Entertainment Venue")
    .shortDescription("Where speed demons gather under desert stars.")
    .overview(
      "The massive racing complex hosts NASCAR events and other motorsports, drawing crowds who appreciate speed, danger, and spectacle. The combination of high-octane entertainment and camping facilities creates unique opportunities for supernatural activities."
    )
    .kindredPresence(
      "Brujah and younger Kindred are drawn to the excitement and energy of racing events. The massive crowds, camping areas, and focus on adrenaline create excellent feeding opportunities for those who prefer their vessels excited."
    )
    .mortalOperations(
      "NASCAR races, drag racing, driving experiences, and special events. The facility's isolation and focus on extreme experiences attract visitors seeking thrills."
    )
    .plotHooks(
      "Supernatural influences on racing performance, territorial disputes during major race weekends, or using racing events as cover for high-speed smuggling operations."
    )
    .established("1996")
    .owner("Speedway Motorsports")
    .keyFeatures([
      "1.5-mile superspeedway",
      "Drag strip",
      "Road course",
      "Camping facilities",
      "Corporate hospitality",
    ])
    .securityLevel("High during events (crowd control and safety)")
    .kindredAccess("Through motorsports industry and corporate hospitality")
    .build(),

  LocationBuilder.create()
    .id("red-rock-casino")
    .name("Red Rock Casino Resort & Spa")
    .type("Casino Resort")
    .shortDescription("Where desert luxury meets ancient stone.")
    .overview(
      "Located at the edge of Red Rock Canyon, this resort combines modern luxury with natural beauty. Its position between civilization and wilderness makes it perfect for Kindred who appreciate both comfort and the call of the wild."
    )
    .kindredPresence(
      "Gangrel and nature-oriented Kindred use the resort as a base for exploring the nearby wilderness, while other clans appreciate the luxury amenities and local clientele. The spa facilities provide excellent cover for unusual dietary needs."
    )
    .mortalOperations(
      "Locals casino, luxury spa, fine dining, and outdoor recreation coordination. The property serves as a gateway to Red Rock Canyon and other natural attractions."
    )
    .plotHooks(
      "Wilderness expeditions hiding supernatural purposes, territorial disputes between urban and wild Kindred, or ancient spirits dwelling in the nearby red rocks."
    )
    .established("2006")
    .owner("Station Casinos")
    .keyFeatures([
      "Luxury spa and wellness center",
      "Local-focused gaming",
      "Red Rock Canyon proximity",
      "Outdoor recreation services",
      "Fine dining",
    ])
    .securityLevel("High (luxury resort standards)")
    .kindredAccess(
      "Through outdoor recreation and wellness industry connections"
    )
    .customSection(
      "wildernessAccess",
      "The resort's location provides easy access to Red Rock Canyon and the Mojave Desert, making it valuable for Kindred who need to access wilderness areas or conduct activities away from urban surveillance."
    )
    .build(),

  LocationBuilder.create()
    .id("mcmullans-irish-pub")
    .name("McMullan's Irish Pub")
    .type("Irish Pub")
    .shortDescription("Where Irish tradition meets Las Vegas nights.")
    .overview(
      "An authentic Irish pub that brings genuine Celtic atmosphere to Paradise Road. The pub's commitment to traditional Irish culture, live music, and community atmosphere creates a gathering place for both locals and visitors seeking something beyond typical Vegas entertainment."
    )
    .kindredPresence(
      "Kindred who appreciate old-world traditions and intimate social environments frequent McMullan's. The pub's evening hours, live music, and loyal regular customers provide excellent cover for supernatural activities and feeding opportunities."
    )
    .mortalOperations(
      "Traditional Irish food and drink, live Celtic music, community events, and cultural celebrations. The pub hosts regular Irish music sessions, soccer matches, and cultural events that attract both Irish expatriates and locals interested in Celtic culture."
    )
    .plotHooks(
      "Ancient Kindred with Celtic connections feeling nostalgic for the old country, territorial disputes over traditional gathering spaces, supernatural influences on Irish music and folklore, or connections to European Kindred domains through cultural networks."
    )
    .established("1996")
    .owner("Irish ownership and management")
    .keyFeatures([
      "Authentic Irish atmosphere",
      "Live Celtic music",
      "Traditional Irish food and drink",
      "Community gathering space",
      "Cultural events",
    ])
    .securityLevel("Low to Moderate (neighborhood pub atmosphere)")
    .kindredAccess("Through cultural connections and regular patronage")
    .build(),
];
