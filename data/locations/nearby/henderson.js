import { LocationBuilder } from "../locationBuilder.js";

export const hendersonLocations = [
  LocationBuilder.create()
    .id("green-valley-ranch")
    .name("Green Valley Ranch Resort & Casino")
    .type("Casino Resort")
    .shortDescription("Where suburban luxury meets supernatural discretion.")
    .overview(
      "This upscale resort serves Henderson's affluent community with luxury amenities and refined gaming. Its location away from tourist crowds and focus on local high-rollers makes it perfect for Kindred who prefer quality over quantity in their feeding."
    )
    .kindredPresence(
      "Ventrue appreciate the upscale clientele and refined atmosphere, while the resort's reputation for discretion attracts Kindred conducting sensitive business away from Strip surveillance."
    )
    .mortalOperations(
      "High-end gaming, spa services, fine dining, and exclusive events for Henderson's wealthy residents. The property caters to locals who demand Strip-quality amenities closer to home."
    )
    .plotHooks(
      "Territorial negotiations in neutral suburban territory, wealthy mortal families with supernatural connections, or corporate espionage involving Henderson's tech companies."
    )
    .established("2001")
    .owner("Station Casinos")
    .keyFeatures([
      "Luxury spa",
      "High-limit gaming",
      "Fine dining",
      "Corporate event facilities",
    ])
    .securityLevel("High (upscale local clientele)")
    .kindredAccess(
      "Through local business connections and resident relationships"
    )
    .build(),

  LocationBuilder.create()
    .id("lake-las-vegas")
    .name("Lake Las Vegas Resort Community")
    .type("Residential Resort")
    .shortDescription("Where artificial paradise hides very real predators.")
    .overview(
      "This master-planned community built around a man-made lake creates an oasis of luxury in the desert. The exclusive residential and resort properties provide perfect cover for Kindred who maintain wealthy mortal identities."
    )
    .kindredPresence(
      "Several elder Kindred maintain elaborate mortal covers as wealthy residents, using the community's privacy and luxury amenities to conduct long-term operations away from the chaos of the Strip."
    )
    .mortalOperations(
      "Luxury homes, resort hotels, championship golf courses, and exclusive dining. The community attracts wealthy retirees and business executives seeking privacy and prestige."
    )
    .plotHooks(
      "Ancient Kindred posing as wealthy retirees, territorial disputes over exclusive feeding grounds, or Second Inquisition surveillance of suspicious 'reclusive millionaires.'"
    )
    .established("1990s")
    .owner("Various developers and HOAs")
    .keyFeatures([
      "Private lake",
      "Luxury residences",
      "Resort hotels",
      "Championship golf",
      "Exclusive marina",
    ])
    .securityLevel("Very High (private community with restricted access)")
    .kindredAccess("Through property ownership and exclusive memberships")
    .build(),

  LocationBuilder.create()
    .id("galleria-at-sunset")
    .name("Galleria at Sunset")
    .type("Shopping Mall")
    .shortDescription(
      "Where suburban families shop under watchful supernatural eyes."
    )
    .overview(
      "Henderson's premier shopping destination serves the growing suburban population with upscale retail and dining. The mall's family-friendly atmosphere and consistent foot traffic make it valuable for Kindred who prefer stable, predictable hunting grounds."
    )
    .kindredPresence(
      "Popular with Kindred who maintain suburban covers, particularly those who feed on families and teenagers. The mall's social environment provides excellent opportunities for longer-term vessel relationships."
    )
    .mortalOperations(
      "Upscale retail stores, restaurants, movie theater, and family entertainment. The mall serves as Henderson's social hub, especially for teenagers and young families."
    )
    .plotHooks(
      "Kindred targeting suburban families, territorial disputes over teenage hunting grounds, or supernatural influences on consumer culture and social media trends."
    )
    .established("1996")
    .owner("General Growth Properties")
    .keyFeatures([
      "Department stores",
      "Specialty retailers",
      "Food court",
      "Movie theater",
      "Family entertainment",
    ])
    .securityLevel("Moderate (standard mall security)")
    .kindredAccess("Through retail connections and community integration")
    .build(),
];
