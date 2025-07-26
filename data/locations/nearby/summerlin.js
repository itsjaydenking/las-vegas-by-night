import { LocationBuilder } from "../locationBuilder.js";

export const summerlinLocations = [
  LocationBuilder.create()
    .id("red-rock-resort")
    .name("Red Rock Casino Resort & Spa")
    .type("Casino Resort")
    .shortDescription(
      "Where affluent locals play under ancient red stone's shadow."
    )
    .overview(
      "Catering to Summerlin's wealthy residents, this luxury resort combines high-end gaming with stunning views of Red Rock Canyon. Its focus on locals and upscale amenities creates an atmosphere of refined excess."
    )
    .kindredPresence(
      "Ventrue and Toreador who appreciate both luxury and natural beauty frequent the resort. The spa facilities and private gaming areas provide excellent cover for supernatural activities."
    )
    .mortalOperations(
      "Locals-focused gaming, luxury spa treatments, fine dining, and outdoor recreation planning. The resort serves as Summerlin's social center for the affluent community."
    )
    .plotHooks(
      "Territorial disputes over wealthy suburban hunting grounds, supernatural influences on the area's rapid development, or ancient spirits disturbed by urban expansion into the desert."
    )
    .established("2006")
    .owner("Station Casinos")
    .keyFeatures([
      "Luxury spa",
      "Local gaming focus",
      "Red Rock views",
      "Outdoor recreation center",
    ])
    .securityLevel("High (upscale local resort)")
    .kindredAccess(
      "Through local resident connections and outdoor recreation industry"
    )
    .build(),

  LocationBuilder.create()
    .id("downtown-summerlin")
    .name("Downtown Summerlin")
    .type("Shopping & Entertainment District")
    .shortDescription("Where planned perfection masks supernatural planning.")
    .overview(
      "This master-planned shopping and entertainment district represents the pinnacle of suburban development. Its outdoor mall, restaurants, and entertainment venues create a sanitized version of urban life for affluent suburbanites."
    )
    .kindredPresence(
      "Kindred who maintain upper-middle-class covers use the area for both feeding and business. The planned nature of the development makes it easier to predict and control mortal behavior patterns."
    )
    .mortalOperations(
      "Upscale shopping, dining, movie theater, and seasonal events. The district serves as Summerlin's town center, hosting community events and providing retail therapy for wealthy residents."
    )
    .plotHooks(
      "Supernatural influences on urban planning and development, territorial control over affluent suburban populations, or conflicts between Kindred who prefer natural wilderness versus controlled suburban environments."
    )
    .established("2014")
    .owner("Howard Hughes Corporation")
    .keyFeatures([
      "Outdoor shopping center",
      "Entertainment venues",
      "Seasonal events",
      "Community gathering spaces",
    ])
    .securityLevel("Moderate (upscale suburban center)")
    .kindredAccess("Through community involvement and retail partnerships")
    .build(),

  LocationBuilder.create()
    .id("angel-park-golf-club")
    .name("Angel Park Golf Club")
    .type("Recreation Facility")
    .shortDescription(
      "Where business deals are made under desert sun and moonlight."
    )
    .overview(
      "Two championship golf courses provide a prestigious venue for business networking and recreational activities. The club's reputation attracts wealthy locals and visiting executives, creating opportunities for both feeding and intelligence gathering."
    )
    .kindredPresence(
      "Ventrue use the golf club for business meetings and networking with mortal contacts. The early morning and late afternoon activity patterns align well with Kindred schedules."
    )
    .mortalOperations(
      "Championship golf, corporate events, business networking, and high-end dining. The club serves as a meeting place for Las Vegas's business elite and visiting executives."
    )
    .plotHooks(
      "Corporate espionage on the golf course, territorial negotiations disguised as golf games, or Ventrue elders maintaining business empires through mortal proxies."
    )
    .established("1989")
    .owner("Angel Park Golf Club")
    .keyFeatures([
      "Two championship courses",
      "Corporate event facilities",
      "High-end clubhouse",
      "Business networking venue",
    ])
    .securityLevel("High (exclusive private club)")
    .kindredAccess("Through corporate memberships and business connections")
    .build(),
];
