export const majorLocations = {
  name: "The Heart of Sin City",
  description:
    "The heart of Sin City, where the brightest lights cast the darkest shadows. These are the iconic areas that define Las Vegas to the world.",
  areas: {
    "the-strip": {
      name: "The Strip",
      description:
        "The neon-soaked spine of Las Vegas, where casino empires rise like glass and steel monuments to excess. Every major resort is a kingdom unto itself, ruled by Kindred who've learned to hide in plain sight among the tourists and high rollers.",
      locations: [],
    },
    downtown: {
      name: "Downtown",
      description:
        "Old Vegas, where the city's roots run deep and its shadows run deeper. The Fremont Street Experience may shine bright, but the surrounding blocks hold secrets older than the Strip.",
      locations: [
        {
          id: "the-asylum",
          name: "The Asylum",
          type: "Anarch Club",
          shortDescription:
            "Where madness and freedom collide in neon-lit chaos.",
          sections: {
            overview:
              "The infamous nightclub brought from Santa Monica by the Voerman twins serves as the unofficial Anarch headquarters. Its pulsing music and chaotic atmosphere provide perfect cover for blood-drunk revelries and revolutionary planning.",
            kindredPresence:
              "Primarily Anarch territory, with strong Malkavian influences. The club serves as neutral ground for those seeking alternatives to Camarilla structure, though house rules are strictly enforced.",
            mortalOperations:
              "Cutting-edge DJ sets, underground art exhibitions, and a clientele that prides itself on being 'different.' The mortal staff are either ghouls or carefully vetted individuals who know to ask no questions.",
            plotHooks:
              "Anarch cells planning major moves, Malkavian prophesies delivered through performance art, or Second Inquisition agents attempting infiltration.",
          },
          details: {
            established: "2012 (Vegas location)",
            owner: "Jeanette & Therese Voerman",
            keyFeatures: [
              "Multi-level dance floors",
              "Private VIP areas",
              "Underground tunnels",
              "Sound-proof rooms",
            ],
            securityLevel: "Variable (intentionally chaotic)",
            kindredAccess: "Open to Anarchs, case-by-case for others",
          },
        },
        {
          id: "fremont-street",
          name: "Fremont Street Experience",
          type: "Entertainment District",
          shortDescription:
            "A canopy of lights covering streets dark with history.",
          sections: {
            overview:
              "The pedestrian mall crowned by the massive LED canopy represents downtown's attempt to compete with the Strip. Beneath the light shows and street performers, old Vegas endures in the form of vintage casinos and forgotten corners.",
            kindredPresence:
              "Mixed territory with various Kindred using the crowds and noise as cover. The vintage casinos serve as meeting points for those who remember Vegas before the corporate takeover.",
            mortalOperations:
              "Street performers, zip-lining tourists, and the constant flow of visitors between historic casinos create a carnival atmosphere that never truly stops.",
            plotHooks:
              "Messages hidden in the LED displays, territories marked through street art, or conflicts between old-school and new-school Kindred philosophies.",
          },
          details: {
            established: "1995 (pedestrian mall)",
            owner: "Fremont Street Experience LLC",
            keyFeatures: [
              "Viva Vision LED canopy",
              "Fremont Street Stage",
              "SlotZilla zip line",
              "Historic casinos",
            ],
            securityLevel: "High (public area, heavy surveillance)",
            kindredAccess: "Public but monitored",
          },
        },
      ],
    },
    paradise: {
      name: "Paradise",
      description:
        "An unincorporated township that exists in the shadows of the Strip, Paradise houses much of the metropolitan area's 'invisible' infrastructure - perfect for those who prefer to remain unseen.",
      locations: [
        {
          id: "mccarran-airport",
          name: "Harry Reid International Airport",
          type: "Transportation Hub",
          shortDescription:
            "Where arrivals and departures are carefully monitored.",
          sections: {
            overview:
              "Formerly McCarran International Airport, this massive transportation hub sees millions of travelers annually. For Kindred, it represents both opportunity and danger - a constant stream of potential vessels, but also the highest security in the region.",
            kindredPresence:
              "Carefully managed by a coalition of interests, with Nosferatu handling much of the surveillance and logistics. Various clans maintain feeding arrangements, but strict protocols prevent exposure.",
            mortalOperations:
              "International flights, cargo operations, and the constant flow of tourists and business travelers. TSA and customs provide additional layers of security that work in Kindred favor.",
            plotHooks:
              "Smuggling operations, international Kindred arrivals, or Second Inquisition monitoring of unusual travel patterns.",
          },
          details: {
            established: "1963",
            owner: "Clark County",
            keyFeatures: [
              "Four terminals",
              "International flights",
              "Cargo facilities",
              "Ground transportation hub",
            ],
            securityLevel: "Maximum (federal oversight)",
            kindredAccess: "Extremely limited and carefully coordinated",
          },
        },
      ],
    },
  },
};
