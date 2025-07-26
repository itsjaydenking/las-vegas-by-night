export const beyondLocations = {
name: "Beyond Sin City",
    description: "The wider world that connects to Las Vegas through blood, history, and ambition. These distant cities cast long shadows across the Nevada desert.",
    areas: {
      "boulder-city": {
        name: "Boulder City",
        description: "Historic town built for the Hoover Dam workers, it maintains a unique independence and small-town atmosphere that can hide old secrets.",
        locations: []
      },
      jean: {
        name: "Jean",
        description: "Small community on the border with California, primarily known for its casino and as a stopping point between Las Vegas and Los Angeles.",
        locations: []
      },
      "los-angeles": {
        name: "Los Angeles",
        description: "The City of Angels, where many Vegas Kindred trace their origins. The entertainment industry and sprawling urban landscape provided both opportunities and rivalries that followed them east.",
        locations: [
          {
            id: "la-connection",
            name: "Los Angeles Kindred Network",
            type: "Political Connection",
            shortDescription: "Where the bright lights first called to them.",
            sections: {
              overview: "Many of Las Vegas's current Kindred population originated in Los Angeles, fleeing the political upheavals and territorial wars of the larger domain. These connections remain strong, creating a pipeline of information, resources, and sometimes problems.",
              kindredPresence: "Former Los Angeles Kindred maintain networks and occasionally return for business. Some never really left, maintaining dual citizenship in both domains.",
              influence: "Entertainment industry connections, offshore financial arrangements, and shared blood bonds create ongoing relationships that transcend geographic boundaries.",
              complications: "Old grudges, unpaid debts, and territorial disputes that began in California don't always stay there."
            },
            details: {
              relationship: "Source domain for many current residents",
              influence: "Entertainment, finance, organized crime",
              keyContacts: [
                "Prince Sebastian LaCroix (rumored destroyed)",
                "Various Anarch Barons",
                "Camarilla Archons"
              ],
              currentStatus: "Ongoing but cautious relations"
            }
          }
        ]
      },
      chicago: {
        name: "Chicago",
        description: "The Windy City, where old money and older blood built an empire on the shores of Lake Michigan. Political connections here can make or break a Kindred's fortunes.",
        locations: [
          {
            id: "chicago-politics",
            name: "Chicago Political Machine",
            type: "Political Connection",
            shortDescription: "Where power is traded like currency.",
            sections: {
              overview: "Chicago's highly structured Camarilla domain represents the old way of doing things - rigid hierarchy, ancient protocols, and power that flows through careful channels. Some Vegas Kindred maintain connections to this traditional structure.",
              kindredPresence: "Ventrue Primogen and Nosferatu information brokers maintain regular contact with Chicago counterparts. Banking and political connections require ongoing maintenance.",
              influence: "Financial markets, political machinery, industrial infrastructure, and academic institutions provide multiple vectors for influence and information.",
              complications: "Chicago's conservative approach to change often conflicts with Vegas's more fluid adaptability. Requests for aid come with strings attached."
            },
            details: {
              relationship: "Traditional Camarilla ally",
              influence: "Finance, politics, industry, academia",
              keyContacts: [
                "Prince Kevin Jackson",
                "Various Clan Primogen",
                "Academic Tremere"
              ],
              currentStatus: "Formal but distant relations"
            }
          }
        ]
      },
      "clarksdale-mississippi": {
        name: "Clarksdale, Mississippi",
        description: "The birthplace of the blues, where music and magic intertwined long before anyone thought to build casinos in the desert. Some melodies carry more than just emotion.",
        locations: [
          {
            id: "delta-blues",
            name: "The Crossroads Legacy",
            type: "Cultural/Mystical Connection",
            shortDescription: "Where the blues were born and some souls were sold.",
            sections: {
              overview: "The Mississippi Delta's connection to music, mystery, and the supernatural has drawn certain Kindred for generations. Some Vegas residents trace their lineage - or their damnation - to these humid crossroads.",
              kindredPresence: "Sparse but significant. Those connected to Clarksdale often carry knowledge of folk magic, blues traditions, and rural Southern supernatural lore that proves surprisingly useful in the desert.",
              influence: "Musical heritage, folk traditions, and authentic cultural connections that can't be manufactured or bought. Some things must be inherited.",
              complications: "Old debts to entities that aren't strictly Kindred, cultural obligations that transcend clan loyalties, and mysteries that predate the Camarilla."
            },
            details: {
              relationship: "Cultural and mystical heritage site",
              influence: "Music, folk magic, cultural authenticity",
              keyContacts: [
                "Rural clan Elders",
                "Folk practitioners", 
                "Musical spirits"
              ],
              currentStatus: "Rarely visited but deeply respected"
            }
          }
        ]
      }
    }
  };