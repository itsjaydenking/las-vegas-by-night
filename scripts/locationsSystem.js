// Location data structure
const locationData = {
  major: {
    name: "Major Las Vegas",
    description:
      "The heart of Sin City, where the brightest lights cast the darkest shadows. These are the iconic areas that define Las Vegas to the world.",
    areas: {
      "the-strip": {
        name: "The Strip",
        description:
          "The neon-soaked spine of Las Vegas, where casino empires rise like glass and steel monuments to excess. Every major resort is a kingdom unto itself, ruled by Kindred who've learned to hide in plain sight among the tourists and high rollers.",
        locations: [
          {
            id: "bellagio",
            name: "Bellagio",
            type: "Casino Resort",
            shortDescription: "Elegant fountains hide elegant predators.",
            sections: {
              overview:
                "The Bellagio represents the pinnacle of Vegas sophistication, its dancing fountains a mesmerizing facade for the darker dealings within. This is where the city's most refined Kindred conduct business, using art galleries and private gaming rooms as perfect cover for their eternal politics.",
              kindredPresence:
                "Toreador influence runs strong here, with several of the clan using the resort's art collection and cultural events as both feeding grounds and territory markers. The gallery shows provide excellent opportunities for discrete meetings.",
              mortalOperations:
                "High-stakes gambling, world-class dining, and exclusive shopping create a constant flow of wealthy mortals. The casino's surveillance is intense, but old money and older favors ensure certain blind spots remain.",
              plotHooks:
                "Art theft involving cursed paintings, a Toreador's obsession with a mortal artist, or territorial disputes over gallery space during major exhibitions.",
            },
            details: {
              established: "1998",
              owner: "MGM Resorts International",
              keyFeatures: [
                "Conservatory & Botanical Gardens",
                "Bellagio Gallery of Fine Art",
                "Fountains of Bellagio",
                "High-limit gaming areas",
              ],
              securityLevel: "Maximum (with discrete exceptions)",
              kindredAccess: "Limited to established contacts",
            },
          },
          {
            id: "caesars-palace",
            name: "Caesars Palace",
            type: "Casino Resort",
            shortDescription: "Where modern emperors hold court.",
            sections: {
              overview:
                "Built to evoke the grandeur of ancient Rome, Caesars Palace has become a throne room for those who consider themselves the true rulers of Las Vegas. Its labyrinthine layout and multiple towers make it perfect for compartmentalized operations.",
              kindredPresence:
                "Ventrue have maintained a strong presence here since the 1980s, using the Forum Shops and high-roller suites as neutral meeting grounds. The Colosseum provides cover for large gatherings disguised as private events.",
              mortalOperations:
                "Celebrity residencies, championship boxing matches, and convention business bring a steady stream of high-profile mortals. The sheer size of the complex allows for numerous hidden spaces.",
              plotHooks:
                "Corporate espionage during major conventions, gladiatorial contests between Kindred, or ancient Roman artifacts with supernatural properties appearing in the shops.",
            },
            details: {
              established: "1966",
              owner: "Caesars Entertainment",
              keyFeatures: [
                "The Colosseum",
                "Forum Shops",
                "Garden of the Gods Pool",
                "Multiple hotel towers",
              ],
              securityLevel: "High (variable by area)",
              kindredAccess: "Established through long-term arrangements",
            },
          },
        ],
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
  },

  nearby: {
    name: "Nearby Locations",
    description:
      "The sprawling suburbs and neighboring communities that make up the greater Las Vegas metropolitan area. Each has its own character and its own secrets.",
    areas: {
      "centennial-hills": {
        name: "Centennial Hills",
        description:
          "Affluent suburban development in the northwest, where new money builds walls to keep out old problems.",
        locations: [],
      },
      henderson: {
        name: "Henderson",
        description:
          "The second-largest city in Nevada, originally built around industrial chemical production. Some things never wash out.",
        locations: [],
      },
      "historic-westside": {
        name: "Historic Westside",
        description:
          "The traditionally African American community that predates much of modern Vegas, with roots that run deep and memories that run deeper.",
        locations: [],
      },
      "north-las-vegas": {
        name: "North Las Vegas",
        description:
          "A separate municipality with its own government and its own way of handling problems.",
        locations: [],
      },
      "southwest-vegas": {
        name: "Southwest Vegas / Enterprise",
        description:
          "Planned communities and business parks where everything looks new but some residents are very, very old.",
        locations: [],
      },
      "spring-valley": {
        name: "Spring Valley",
        description:
          "Unincorporated community known for upscale neighborhoods and discrete privacy.",
        locations: [],
      },
      summerlin: {
        name: "Summerlin",
        description:
          "Master-planned community offering suburban perfection - for those who can afford the price of admission.",
        locations: [],
      },
      sunrise: {
        name: "Sunrise",
        description:
          "Manor area encompassing several neighborhoods, each with its own carefully maintained image.",
        locations: [],
      },
      whitney: {
        name: "Whitney",
        description:
          "Unincorporated community near Henderson, quiet enough for those who value their privacy.",
        locations: [],
      },
    },
  },

  beyond: {
    name: "Beyond Las Vegas",
    description:
      "The wider world that connects to Las Vegas through blood, history, and ambition. These distant cities cast long shadows across the Nevada desert.",
    areas: {
      "boulder-city": {
        name: "Boulder City",
        description:
          "Historic town built for the Hoover Dam workers, it maintains a unique independence and small-town atmosphere that can hide old secrets.",
        locations: [],
      },
      jean: {
        name: "Jean",
        description:
          "Small community on the border with California, primarily known for its casino and as a stopping point between Las Vegas and Los Angeles.",
        locations: [],
      },
      "los-angeles": {
        name: "Los Angeles",
        description:
          "The City of Angels, where many Vegas Kindred trace their origins. The entertainment industry and sprawling urban landscape provided both opportunities and rivalries that followed them east.",
        locations: [
          {
            id: "la-connection",
            name: "Los Angeles Kindred Network",
            type: "Political Connection",
            shortDescription: "Where the bright lights first called to them.",
            sections: {
              overview:
                "Many of Las Vegas's current Kindred population originated in Los Angeles, fleeing the political upheavals and territorial wars of the larger domain. These connections remain strong, creating a pipeline of information, resources, and sometimes problems.",
              kindredPresence:
                "Former Los Angeles Kindred maintain networks and occasionally return for business. Some never really left, maintaining dual citizenship in both domains.",
              influence:
                "Entertainment industry connections, offshore financial arrangements, and shared blood bonds create ongoing relationships that transcend geographic boundaries.",
              complications:
                "Old grudges, unpaid debts, and territorial disputes that began in California don't always stay there.",
            },
            details: {
              relationship: "Source domain for many current residents",
              influence: "Entertainment, finance, organized crime",
              keyContacts: [
                "Prince Sebastian LaCroix (rumored destroyed)",
                "Various Anarch Barons",
                "Camarilla Archons",
              ],
              currentStatus: "Ongoing but cautious relations",
            },
          },
        ],
      },
      chicago: {
        name: "Chicago",
        description:
          "The Windy City, where old money and older blood built an empire on the shores of Lake Michigan. Political connections here can make or break a Kindred's fortunes.",
        locations: [
          {
            id: "chicago-politics",
            name: "Chicago Political Machine",
            type: "Political Connection",
            shortDescription: "Where power is traded like currency.",
            sections: {
              overview:
                "Chicago's highly structured Camarilla domain represents the old way of doing things - rigid hierarchy, ancient protocols, and power that flows through careful channels. Some Vegas Kindred maintain connections to this traditional structure.",
              kindredPresence:
                "Ventrue Primogen and Nosferatu information brokers maintain regular contact with Chicago counterparts. Banking and political connections require ongoing maintenance.",
              influence:
                "Financial markets, political machinery, industrial infrastructure, and academic institutions provide multiple vectors for influence and information.",
              complications:
                "Chicago's conservative approach to change often conflicts with Vegas's more fluid adaptability. Requests for aid come with strings attached.",
            },
            details: {
              relationship: "Traditional Camarilla ally",
              influence: "Finance, politics, industry, academia",
              keyContacts: [
                "Prince Kevin Jackson",
                "Various Clan Primogen",
                "Academic Tremere",
              ],
              currentStatus: "Formal but distant relations",
            },
          },
        ],
      },
      "clarksdale-mississippi": {
        name: "Clarksdale, Mississippi",
        description:
          "The birthplace of the blues, where music and magic intertwined long before anyone thought to build casinos in the desert. Some melodies carry more than just emotion.",
        locations: [
          {
            id: "delta-blues",
            name: "The Crossroads Legacy",
            type: "Cultural/Mystical Connection",
            shortDescription:
              "Where the blues were born and some souls were sold.",
            sections: {
              overview:
                "The Mississippi Delta's connection to music, mystery, and the supernatural has drawn certain Kindred for generations. Some Vegas residents trace their lineage - or their damnation - to these humid crossroads.",
              kindredPresence:
                "Sparse but significant. Those connected to Clarksdale often carry knowledge of folk magic, blues traditions, and rural Southern supernatural lore that proves surprisingly useful in the desert.",
              influence:
                "Musical heritage, folk traditions, and authentic cultural connections that can't be manufactured or bought. Some things must be inherited.",
              complications:
                "Old debts to entities that aren't strictly Kindred, cultural obligations that transcend clan loyalties, and mysteries that predate the Camarilla.",
            },
            details: {
              relationship: "Cultural and mystical heritage site",
              influence: "Music, folk magic, cultural authenticity",
              keyContacts: [
                "Rural clan Elders",
                "Folk practitioners",
                "Musical spirits",
              ],
              currentStatus: "Rarely visited but deeply respected",
            },
          },
        ],
      },
    },
  },
};

// Initialize the Locations system
function initializeLocationsSystem() {
  const categoryButtons = document.querySelectorAll(
    ".location-nav__category-button"
  );
  const areaNav = document.getElementById("area-nav");
  const areaNavTitle = document.getElementById("area-nav-title");
  const areaNavList = document.getElementById("area-nav-list");
  const locationDisplay = document.getElementById("location-display");
  const specificLocationDisplay = document.getElementById(
    "specific-location-display"
  );

  let currentCategory = null;
  let currentArea = null;
  let currentLocation = null;

  // Add event listeners to category buttons
  categoryButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const categoryId = button.getAttribute("data-category");
      selectCategory(categoryId);
    });
  });

  function selectCategory(categoryId) {
    // Update active button
    categoryButtons.forEach((btn) =>
      btn.classList.remove("location-nav__category-button--active")
    );
    document
      .querySelector(`[data-category="${categoryId}"]`)
      .classList.add("location-nav__category-button--active");

    currentCategory = categoryId;
    currentArea = null;
    currentLocation = null;

    displayCategory(categoryId);
    showAreaNavigation(categoryId);
    specificLocationDisplay.style.display = "none";
  }

  function showAreaNavigation(categoryId) {
    const category = locationData[categoryId];
    if (!category || !category.areas) return;

    areaNavTitle.textContent = `${category.name} - Areas`;

    // Clear existing areas
    areaNavList.innerHTML = "";

    // Add area buttons
    Object.entries(category.areas).forEach(([areaId, area]) => {
      const li = document.createElement("li");
      li.className = "area-nav__item";

      const button = document.createElement("button");
      button.className = "area-nav__button";
      button.setAttribute("data-area", areaId);
      button.textContent = area.name;

      button.addEventListener("click", () => {
        selectArea(categoryId, areaId);
      });

      li.appendChild(button);
      areaNavList.appendChild(li);
    });

    areaNav.style.display = "block";
  }

  function selectArea(categoryId, areaId) {
    // Update active area button
    document
      .querySelectorAll(".area-nav__button")
      .forEach((btn) => btn.classList.remove("area-nav__button--active"));
    document
      .querySelector(`[data-area="${areaId}"]`)
      .classList.add("area-nav__button--active");

    currentArea = areaId;
    currentLocation = null;

    displayArea(categoryId, areaId);
    specificLocationDisplay.style.display = "none";
  }

  function displayCategory(categoryId) {
    const category = locationData[categoryId];
    if (!category) return;

    let html = `
      <div class="location-display__header">
        <h3 class="content__heading">${category.name}</h3>
      </div>
      <div class="location-display__description">
        <p class="content__body">${category.description}</p>
      </div>
    `;

    locationDisplay.innerHTML = html;
  }

  function displayArea(categoryId, areaId) {
    const area = locationData[categoryId].areas[areaId];
    if (!area) return;

    let html = `
      <div class="location-display__header">
        <h3 class="content__heading">${area.name}</h3>
      </div>
      <div class="location-display__description">
        <p class="content__body">${area.description}</p>
      </div>
    `;

    if (area.locations && area.locations.length > 0) {
      html += `
        <div class="specific-location-list">
          <h4 class="specific-location-list__header content__subheading">Locations in ${area.name}</h4>
          <div class="specific-location-list__grid">
      `;

      area.locations.forEach((location) => {
        html += `
          <div class="location-card" data-location="${location.id}" data-category="${categoryId}" data-area="${areaId}">
            <div class="location-card__name">${location.name}</div>
            <div class="location-card__type">${location.type}</div>
            <div class="location-card__description">${location.shortDescription}</div>
          </div>
        `;
      });

      html += `
          </div>
        </div>
      `;

      // Add event listeners to location cards after rendering
      setTimeout(() => {
        const locationCards = document.querySelectorAll(".location-card");
        locationCards.forEach((card) => {
          card.addEventListener("click", () => {
            const locationId = card.getAttribute("data-location");
            const categoryId = card.getAttribute("data-category");
            const areaId = card.getAttribute("data-area");
            selectLocation(categoryId, areaId, locationId);
          });
        });
      }, 0);
    } else {
      html += `
        <div class="specific-location-list">
          <h4 class="specific-location-list__header content__subheading">Locations in ${area.name}</h4>
          <p class="content__body" style="font-style: italic; color: var(--dark-grey);">
            No specific locations have been detailed for this area yet. Check back for updates as we expand the location guide.
          </p>
        </div>
      `;
    }

    locationDisplay.innerHTML = html;
  }

  function selectLocation(categoryId, areaId, locationId) {
    const area = locationData[categoryId].areas[areaId];
    const location = area.locations.find((loc) => loc.id === locationId);
    if (!location) return;

    // Update active location card
    document
      .querySelectorAll(".location-card")
      .forEach((card) => card.classList.remove("location-card--active"));
    document
      .querySelector(`[data-location="${locationId}"]`)
      .classList.add("location-card--active");

    currentLocation = locationId;
    displayLocation(location);
  }

  function displayLocation(location) {
    let html = `
      <div class="specific-location-display__header">
        <div>
          <h3 class="specific-location-display__name">${location.name}</h3>
          <p class="specific-location-display__type">${location.type}</p>
        </div>
      </div>
    `;

    if (location.shortDescription) {
      html += `
        <div class="specific-location-display__quote">
          ${location.shortDescription}
        </div>
      `;
    }

    // Location sections
    if (location.sections) {
      Object.entries(location.sections).forEach(([key, content]) => {
        const title = key
          .replace(/([A-Z])/g, " $1")
          .replace(/^./, (str) => str.toUpperCase());
        html += `
          <h5 class="content__section">${title}</h5>
          <p class="content__body">${content}</p>
        `;
      });
    }

    // Details section
    if (location.details) {
      html += `
        <h5 class="content__section">Location Details</h5>
        <div class="specific-location-display__details">
      `;

      // Basic info
      const basicInfo = [];
      if (location.details.established)
        basicInfo.push(
          `<li><strong>Established:</strong> ${location.details.established}</li>`
        );
      if (location.details.owner)
        basicInfo.push(
          `<li><strong>Owner:</strong> ${location.details.owner}</li>`
        );
      if (location.details.relationship)
        basicInfo.push(
          `<li><strong>Relationship:</strong> ${location.details.relationship}</li>`
        );
      if (location.details.currentStatus)
        basicInfo.push(
          `<li><strong>Current Status:</strong> ${location.details.currentStatus}</li>`
        );

      if (basicInfo.length > 0) {
        html += `
          <div class="detail-block">
            <div class="detail-block__title">Basic Information</div>
            <div class="detail-block__content">
              <ul>${basicInfo.join("")}</ul>
            </div>
          </div>
        `;
      }

      // Key Features
      if (location.details.keyFeatures) {
        html += `
          <div class="detail-block">
            <div class="detail-block__title">Key Features</div>
            <div class="detail-block__content">
              <ul>
                ${location.details.keyFeatures
                  .map((feature) => `<li>${feature}</li>`)
                  .join("")}
              </ul>
            </div>
          </div>
        `;
      }

      // Security & Access
      const securityInfo = [];
      if (location.details.securityLevel)
        securityInfo.push(
          `<li><strong>Security Level:</strong> ${location.details.securityLevel}</li>`
        );
      if (location.details.kindredAccess)
        securityInfo.push(
          `<li><strong>Kindred Access:</strong> ${location.details.kindredAccess}</li>`
        );

      if (securityInfo.length > 0) {
        html += `
          <div class="detail-block">
            <div class="detail-block__title">Security & Access</div>
            <div class="detail-block__content">
              <ul>${securityInfo.join("")}</ul>
            </div>
          </div>
        `;
      }

      // Key Contacts/Influence
      if (location.details.keyContacts || location.details.influence) {
        html += `
          <div class="detail-block">
            <div class="detail-block__title">Influence & Contacts</div>
            <div class="detail-block__content">
        `;

        if (location.details.influence) {
          html += `<p><strong>Primary Influence:</strong> ${location.details.influence}</p>`;
        }

        if (location.details.keyContacts) {
          html += `
            <p><strong>Key Contacts:</strong></p>
            <ul>
              ${location.details.keyContacts
                .map((contact) => `<li>${contact}</li>`)
                .join("")}
            </ul>
          `;
        }

        html += `
            </div>
          </div>
        `;
      }

      html += `</div>`;
    }

    specificLocationDisplay.innerHTML = html;
    specificLocationDisplay.style.display = "block";
  }

  // Load default category on initialization
  selectCategory();
}

// Make function available globally
window.initializeLocationsSystem = initializeLocationsSystem;
