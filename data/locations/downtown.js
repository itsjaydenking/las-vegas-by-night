import { Templates } from './templates.js';

export const downtownLocations = [
  Templates.club("the-asylum", "The Asylum", "Where madness and freedom collide in neon-lit chaos.")
    .overview("The infamous nightclub brought from Santa Monica by the Voerman twins serves as the unofficial Anarch headquarters.")
    .kindredPresence("Primarily Anarch territory, with strong Malkavian influences.")
    .mortalOperations("Cutting-edge DJ sets, underground art exhibitions, and a clientele that prides itself on being 'different.'")
    .plotHooks("Anarch cells planning major moves, Malkavian prophesies delivered through performance art, or Second Inquisition agents attempting infiltration.")
    .established("2012 (Vegas location)")
    .owner("Jeanette & Therese Voerman")
    .keyFeatures(["Multi-level dance floors", "Private VIP areas", "Underground tunnels", "Sound-proof rooms"])
    .securityLevel("Variable (intentionally chaotic)")
    .kindredAccess("Open to Anarchs, case-by-case for others")
    .build(),

  Templates.casino("golden-nugget", "Golden Nugget", "Old Vegas charm with new money backing.")
    .overview("The historic casino maintains its vintage appeal while adapting to modern sensibilities.")
    .kindredPresence("Neutral territory used by various factions for discrete meetings.")
    .mortalOperations("Classic casino games, vintage shows, and nostalgic tourism.")
    .plotHooks("Hidden passages from prohibition era, vintage artifacts with supernatural properties.")
    .established("1946")
    .owner("Landry's, Inc.")
    .keyFeatures(["Historic casino floor", "Shark tank", "Vintage architecture"])
    .build()
];