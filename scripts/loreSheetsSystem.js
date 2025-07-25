// Lore Sheets data structure
const loreSheetData = {
  locations: {
    name: "Location-Based Lore Sheets",
    description:
      "These Lore Sheets connect your character to specific places in Las Vegas, providing territorial advantages and local connections.",
    sheets: {
      "strip-insider": {
        name: "Strip Insider",
        description:
          "You have deep connections to the Las Vegas Strip's casino empire, whether through legitimate business ties or supernatural influence.",
        category: "Location-Based",
        benefits: [
          "• Strip Surveillance: Add 2 dice to Technology rolls involving Strip security systems",
          "•• High Roller Access: Gain access to VIP areas and private gaming rooms",
          "••• Casino Influence: You have allies among casino management and security",
          "•••• Corporate Connections: You have influence over major casino operations",
          "••••• Strip Baron: You effectively control significant Strip territory",
        ],
        restrictions:
          "Must have legitimate reason for Strip access (Resources ••+ or appropriate Background)",
        plotHooks: [
          "Rival coteries seek to muscle in on your territory",
          "FBI investigation into money laundering threatens your operations",
          "A new mega-resort development threatens established power structures",
          "Second Inquisition agents are using your casinos for surveillance",
        ],
        quote: "In Vegas, the house always wins - and I am the house.",
      },
      "fremont-street": {
        name: "Fremont Street Survivor",
        description:
          "You're connected to the gritty, historic heart of Las Vegas - downtown Fremont Street and its surrounding neighborhoods.",
        category: "Location-Based",
        benefits: [
          "• Street Connections: Add 2 dice to Streetwise rolls in downtown Vegas",
          "•• Old Vegas Knowledge: You know the hidden history of pre-Strip Las Vegas",
          "••• Underground Network: Access to tunnels and forgotten spaces beneath the city",
          "•••• Downtown Authority: Significant influence over Fremont Street operations",
          "••••• Urban Legend: You're a mythical figure in downtown Vegas folklore",
        ],
        restrictions:
          "Character must have spent significant time in downtown Las Vegas",
        plotHooks: [
          "Gentrification threatens your longtime allies and hunting grounds",
          "Ancient caches hidden during Prohibition-era are being discovered",
          "Homeless population in tunnels needs protection from supernatural threats",
          "City development plans threaten to expose vampire havens",
        ],
        quote: "They built their neon palaces, but this was Vegas first.",
      },
      "red-rock": {
        name: "Red Rock Wanderer",
        description:
          "You're tied to the desert wilderness surrounding Las Vegas, particularly the Red Rock Canyon area.",
        category: "Location-Based",
        benefits: [
          "• Desert Navigation: Add 2 dice to Survival rolls in Mojave Desert",
          "•• Wildlife Connection: Easier feeding from desert animals (Animalism bonus)",
          "••• Hidden Caches: You maintain secret supply caches in the desert",
          "•••• Territorial Knowledge: You know every cave, wash, and hidden spot for miles",
          "••••• Desert Guardian: Supernatural connection to the Mojave ecosystem",
        ],
        restrictions:
          "Must be Gangrel, have Animalism ••+, or justify desert connection",
        plotHooks: [
          "Nuclear waste disposal threatens your territory",
          "Werewolf pack disputes your desert claims",
          "Hiking tourists discover supernatural evidence you must contain",
          "Government black sites operate in your territory",
        ],
        quote: "The desert remembers everything - and forgives nothing.",
      },
    },
  },
  organizations: {
    name: "Organizations",
    description:
      "These Lore Sheets represent your character's involvement with groups, corporations, or institutions that shape Las Vegas.",
    sheets: {
      "casino-consortium": {
        name: "The Casino Consortium",
        description:
          "You're connected to a secret alliance of vampire-controlled casinos that coordinate Strip operations.",
        category: "Organizations",
        benefits: [
          "• Information Network: Access to surveillance data from multiple casinos",
          "•• Resource Sharing: Reduced cost for Resources purchases related to gambling",
          "••• Security Coordination: Allied casino security will assist you",
          "•••• Executive Access: You sit on the Consortium's inner council",
          "••••• Shadow CEO: You effectively run the Consortium's operations",
        ],
        restrictions:
          "Must have Status (Camarilla) •+ or own significant casino interests",
        plotHooks: [
          "Anarch coteries plan to expose the Consortium to authorities",
          "Internal power struggle threatens the alliance",
          "FBI task force investigating organized crime connections",
          "Rival supernatural factions seek to infiltrate member casinos",
        ],
        quote:
          "What happens in Vegas stays in Vegas - because we make sure of it.",
      },
      "second-inquisition": {
        name: "Second Inquisition Infiltrator",
        description:
          "You have connections within federal agencies conducting anti-supernatural operations in Las Vegas.",
        category: "Organizations",
        benefits: [
          "• Inside Information: Early warning about Second Inquisition operations",
          "•• False Documentation: Access to legitimate government IDs and credentials",
          "••• Operational Influence: You can misdirect some investigations",
          "•••• Deep Cover: You hold a significant position within a federal agency",
          "••••• Double Agent: You run your own supernatural investigation unit",
        ],
        restrictions:
          "Extremely dangerous - requires Storyteller approval and ongoing complications",
        plotHooks: [
          "Your handler suspects your true nature",
          "Fellow agents are getting too close to discovering vampires",
          "You must eliminate kindred to maintain cover",
          "A vampire hunter joins your unit",
        ],
        quote:
          "Know your enemy - become your enemy - destroy your enemy from within.",
      },
      "thin-blood-underground": {
        name: "Thin-Blood Underground",
        description:
          "You're part of the network of Thin-Bloods who've created their own society beneath notice of full vampires.",
        category: "Organizations",
        benefits: [
          "• Safe Houses: Access to hidden Thin-Blood havens throughout the city",
          "•• Alchemy Network: Easier access to Blood Alchemy formulas and ingredients",
          "••• Information Trading: Thin-Bloods share intel that full vampires miss",
          "•••• Underground Railroad: You help newly-Embraced Thin-Bloods survive",
          "••••• Revolutionary Leader: You coordinate Thin-Blood resistance activities",
        ],
        restrictions:
          "Must be Thin-Blood or have compelling reason for acceptance",
        plotHooks: [
          "Full vampires discover and target the Underground",
          "Schism develops between accommodation and revolution factions",
          "New Thin-Blood alchemy threatens vampire hierarchy",
          "Government agencies attempt to recruit Thin-Blood assets",
        ],
        quote: "They think we're weak - that's their first mistake.",
      },
    },
  },
  events: {
    name: "Historical Events",
    description:
      "These Lore Sheets connect your character to significant events in Las Vegas supernatural history.",
    sheets: {
      "sheepfold-survivor": {
        name: "Sheepfold Survivor",
        description:
          "You survived the Second Inquisition purge that devastated Las Vegas' vampire population in the 2010s.",
        category: "Historical Events",
        benefits: [
          "• Paranoid Preparation: Add 2 dice to rolls detecting surveillance or ambushes",
          "•• False Identity Network: You maintain multiple convincing cover identities",
          "••• Purge Knowledge: You understand Second Inquisition tactics and methods",
          "•••• Underground Connections: Links to other survivors across multiple cities",
          "••••• Phoenix Rising: You're rebuilding vampire society with hard-earned wisdom",
        ],
        restrictions:
          "Character must have been in Las Vegas during the Sheepfold Purge (2010-2015)",
        plotHooks: [
          "Another survivor betrayed you during the purge and has returned",
          "You discover evidence that another wave of purges is coming",
          "Second Inquisition agents recognize you from their old files",
          "Fellow survivors blame you for deaths during the purge",
        ],
        quote:
          "I died twice - once when Embraced, once in the fire. I won't burn again.",
      },
      "atomic-witness": {
        name: "Atomic Witness",
        description:
          "You were present during the Nevada Test Site's nuclear testing era and witnessed supernatural effects of atomic power.",
        category: "Historical Events",
        benefits: [
          "• Radiation Resistance: Take less damage from radiation and certain supernatural effects",
          "•• Atomic Secrets: Knowledge of government black projects and their supernatural implications",
          "••• Test Site Access: You know ways into restricted Nevada Test Site areas",
          "•••• Nuclear Network: Connections to scientists, military, and government officials",
          "••••• Atomic Prophet: Your experiences grant insight into apocalyptic supernatural events",
        ],
        restrictions:
          "Character must be old enough to have witnessed 1950s-1990s nuclear testing",
        plotHooks: [
          "Government agents seek to silence witnesses to supernatural nuclear incidents",
          "Atomic testing awakened something in the desert that still hunts",
          "New nuclear research threatens to repeat past supernatural disasters",
          "Your radiation exposure created unexpected vampiric mutations",
        ],
        quote:
          "They split the atom and cracked open doors that should have stayed closed.",
      },
      "mob-era": {
        name: "Mob Era Veteran",
        description:
          "You were part of Las Vegas during its golden age of organized crime, when the Mob built the modern Strip.",
        category: "Historical Events",
        benefits: [
          "• Old School Network: Connections to surviving organized crime families",
          "•• Hidden Assets: Access to forgotten caches and safe houses from the Mob era",
          "••• Omertà Respect: Traditional criminals give you respect and cooperation",
          "•••• Sin City Knowledge: You know where all the bodies are buried (literally)",
          "••••• Criminal Legend: Your reputation opens doors throughout the underworld",
        ],
        restrictions:
          "Character must have been active during 1940s-1980s Vegas",
        plotHooks: [
          "Federal investigators reopen cold cases that could expose you",
          "Modern criminals lack the old codes of honor and respect",
          "Hidden Mob treasure attracts dangerous attention",
          "Rival vampires seek to eliminate witnesses to their past crimes",
        ],
        quote: "We built this city on more than just sand and dreams.",
      },
    },
  },
  bloodlines: {
    name: "Bloodlines & Lineages",
    description:
      "These Lore Sheets connect your character to specific vampiric bloodlines or family connections in Las Vegas.",
    sheets: {
      "rothstein-legacy": {
        name: "Rothstein Legacy",
        description:
          "You're connected to the Rothstein family of Hecata who maintain interests in several Las Vegas casinos.",
        category: "Bloodlines & Lineages",
        benefits: [
          "• Family Connections: Access to Rothstein family resources and information",
          "•• Necromantic Knowledge: Easier learning of Necromancy and Oblivion powers",
          "••• Casino Influence: The family's casino holdings provide advantages",
          "•••• Hecata Status: Recognized position within the clan hierarchy",
          "••••• Family Heir: You're being groomed to inherit significant family assets",
        ],
        restrictions: "Must be Hecata or have compelling family connection",
        plotHooks: [
          "Rival Hecata families dispute the Rothsteins' territorial claims",
          "Government investigation threatens family casino operations",
          "Ancient family enemies resurface seeking revenge",
          "Young family members reject traditional ways",
        ],
        quote:
          "The house always wins - because we've been playing this game for centuries.",
      },
      "native-blood": {
        name: "Native Blood",
        description:
          "You have connections to the Southern Paiute people who originally inhabited the Las Vegas valley.",
        category: "Bloodlines & Lineages",
        benefits: [
          "• Ancestral Knowledge: Understanding of the land's pre-colonial supernatural history",
          "•• Spirit Connections: Easier interaction with local spirits and nature entities",
          "••• Sacred Sites: Access to hidden places of power in the desert",
          "•••• Tribal Relations: Respect and cooperation from modern Native communities",
          "••••• Land's Guardian: Supernatural connection to the original spirit of the valley",
        ],
        restrictions:
          "Must have legitimate Native American heritage or supernatural adoption",
        plotHooks: [
          "Development projects threaten sacred sites you're bound to protect",
          "Ancient spirits demand justice for centuries of displacement",
          "Government agencies seek to exploit your spiritual connections",
          "Other supernatural beings don't respect your territorial claims",
        ],
        quote:
          "This land remembers its children - and I remember what was taken.",
      },
      "hollywood-connection": {
        name: "Hollywood Connection",
        description:
          "You're tied to the Toreador networks that connect Las Vegas entertainment to Los Angeles film industry.",
        category: "Bloodlines & Lineages",
        benefits: [
          "• Industry Access: Connections in both Vegas entertainment and Hollywood film",
          "•• Artistic Resources: Access to high-quality artists, musicians, and performers",
          "••• Media Influence: You can shape entertainment industry narratives",
          "•••• Celebrity Status: You're a recognized figure in entertainment circles",
          "••••• Cultural Icon: Your influence shapes trends across multiple media",
        ],
        restrictions:
          "Must be Toreador or have significant entertainment industry background",
        plotHooks: [
          "Rival artists seek to destroy your reputation and influence",
          "Social media exposes supernatural activities to millions",
          "Industry investigations threaten vampire-controlled productions",
          "Young Kindred reject traditional artistic values",
        ],
        quote: "All the world's a stage - and I own several theaters.",
      },
    },
  },
  characters: {
    name: "Character Connections",
    description: "These Lore Sheets represent your character's personal relationships, mentorships, or rivalries with specific notable Kindred in Las Vegas.",
    sheets: {
      "everett-protege": {
        name: "Prince Everett's Protégé",
        description: "You have a direct connection to Prince Carlton Everett, whether as a student of his business empire, a political ally, or someone he's personally invested in developing.",
        category: "Character Connections",
        benefits: [
          "• Royal Access: Add 2 dice to Resources rolls related to Strip business ventures",
          "•• Political Backing: Prince Everett occasionally intervenes on your behalf in Camarilla politics",
          "••• Inner Circle: You attend private meetings and have advance knowledge of major political decisions",
          "•••• Heir Apparent: You're being groomed for significant responsibility within the Camarilla hierarchy",
          "••••• Right Hand: You serve as Prince Everett's most trusted advisor and proxy in critical matters"
        ],
        restrictions: "Must have Status (Camarilla) •+ and compelling reason for Prince's interest",
        plotHooks: [
          "Rival Primogen attempt to turn you against the Prince or vice versa",
          "Your close connection makes you a target for the Prince's enemies",
          "Political decisions you influence have far-reaching consequences you didn't anticipate",
          "The Prince's expectations and demands on your time create personal complications"
        ],
        quote: "Power shared is power multiplied - but loyalty tested is loyalty proven."
      },
      "data-ghost-network": {
        name: "Data Ghost's Network",
        description: "You're part of the information network run by the mysterious Data Ghost, gaining access to digital intelligence and surveillance capabilities.",
        category: "Character Connections",
        benefits: [
          "• Digital Eyes: Access to basic surveillance footage and digital records throughout Vegas",
          "•• Information Trading: You can exchange secrets for favors with other network members",
          "••• Deep Web Access: Obtain deleted records, encrypted communications, and hidden digital assets",
          "•••• Ghost Protocol: The Data Ghost personally handles your most sensitive information needs",
          "••••• Network Administrator: You help run part of the information network and recruit new assets"
        ],
        restrictions: "Must have Technology •+ or compelling reason for network acceptance",
        plotHooks: [
          "Information you gather puts innocent people in danger",
          "Second Inquisition agents attempt to trace network connections back to you",
          "Rival information brokers try to turn you or eliminate network members",
          "The Data Ghost requests increasingly morally questionable tasks"
        ],
        quote: "In the digital age, information doesn't just flow - it floods."
      },
      "ashford-legacy": {
        name: "Ashford Family Debt",
        description: "Your family has a generations-old connection to the Ashford bloodline, whether through business partnerships, blood bonds, or ancient favors.",
        category: "Character Connections",
        benefits: [
          "• Family History: Knowledge of Ashford business operations and hidden assets",
          "•• Old Contracts: Access to legitimate business fronts and financial resources",
          "••• Blood Memory: The Ashfords share family secrets and strategic intelligence with you",
          "•••• Legacy Guardian: You're entrusted with protecting specific Ashford interests",
          "••••• Chosen Heir: The Ashfords consider you family and include you in major decisions"
        ],
        restrictions: "Must have compelling family history or blood bond connection to Ashfords",
        plotHooks: [
          "Ancient family enemies resurface seeking revenge against the Ashfords",
          "Modern business deals conflict with traditional Ashford values",
          "You discover dark secrets about your family's original connection to the Ashfords",
          "Rival vampire families attempt to use you against the Ashfords"
        ],
        quote: "Blood runs deeper than water, and debts deeper than blood."
      },
      "casino-baron": {
        name: "Casino Baron's Favor",
        description: "You've earned the respect and patronage of one of Las Vegas's major casino-owning vampires through exceptional service or mutual benefit.",
        category: "Character Connections",
        benefits: [
          "• House Credit: Free access to casino services and limited financial backing",
          "•• VIP Treatment: Priority reservations, private gaming rooms, and exclusive events",
          "••• Business Partner: Joint ventures and shared profits from casino operations",
          "•••• Protected Investment: The Baron ensures your safety and success in casino-related endeavors",
          "••••• Silent Partner: You effectively co-own significant casino interests with the Baron"
        ],
        restrictions: "Must have proven value to casino operations or compelling mutual interest",
        plotHooks: [
          "Federal investigations threaten to expose your casino connections",
          "Rival casinos attempt to poach you or sabotage your relationships",
          "The Baron's enemies target you to hurt their business empire",
          "Moral conflicts arise between casino profits and innocent victims"
        ],
        quote: "In Vegas, the house always wins - unless you become the house."
      },
      "thin-blood-mentor": {
        name: "Thin-Blood Revolutionary",
        description: "You're connected to the underground movement of Thin-Bloods fighting for recognition and rights in vampire society.",
        category: "Character Connections",
        benefits: [
          "• Underground Railway: Safe houses and escape routes throughout the city",
          "•• Alchemy Secrets: Access to Blood Alchemy formulas and rare ingredients",
          "••• Revolutionary Network: Coordination with Thin-Blood cells in other cities",
          "•••• Movement Leader: You help organize and direct Thin-Blood resistance activities",
          "••••• True Revolutionary: Your actions inspire Thin-Bloods across multiple domains"
        ],
        restrictions: "Must be Thin-Blood or have compelling reason for acceptance by the movement",
        plotHooks: [
          "Full-blood vampires infiltrate the movement to destroy it from within",
          "Government agencies attempt to recruit Thin-Blood revolutionaries",
          "Philosophical splits emerge between accommodation and violent revolution",
          "Your revolutionary activities endanger innocent Thin-Bloods"
        ],
        quote: "They call us weak blood, but we are the future they fear."
      },
      "gangrel-pack": {
        name: "Desert Pack Bond",
        description: "You're accepted into a pack of Gangrel who control territory in the desert surrounding Las Vegas.",
        category: "Character Connections",
        benefits: [
          "• Pack Hunting: Add 2 dice to Survival rolls in desert environments",
          "•• Territorial Knowledge: Detailed knowledge of hidden routes and safe zones in the Mojave",
          "••• Pack Protection: Other pack members will come to your aid when called",
          "•••• Alpha Trust: Pack leaders consult you on important territorial decisions",
          "••••• Pack Alpha: You lead a significant portion of Gangrel desert operations"
        ],
        restrictions: "Must have Animalism •+ or proven ability to survive in desert conditions",
        plotHooks: [
          "Government black sites in pack territory threaten supernatural secrecy",
          "Werewolf packs dispute Gangrel territorial claims",
          "Pack members are hunted by Second Inquisition desert patrols",
          "Internal pack politics create dangerous leadership challenges"
        ],
        quote: "The desert provides for those who understand its ways."
      },
      "sire-legacy": {
        name: "Prestigious Lineage",
        description: "Your sire is a renowned figure in vampire society, and their reputation opens doors while creating expectations.",
        category: "Character Connections",
        benefits: [
          "• Famous Name: Recognition and initial respect from other vampires",
          "•• Inherited Contacts: Access to your sire's network of allies and resources",
          "••• Legacy Resources: Financial assets and properties left for your use",
          "•••• Bloodline Prestige: Major figures in vampire society seek your favor",
          "••••• Living Legend: Your sire's reputation makes you a significant political figure"
        ],
        restrictions: "Must have compelling backstory explaining prestigious sire",
        plotHooks: [
          "Your sire's ancient enemies transfer their hatred to you",
          "High expectations from vampire society create constant pressure",
          "You discover dark secrets about your sire's past that threaten their reputation",
          "Rival bloodlines attempt to eliminate your lineage entirely"
        ],
        quote: "Great names cast long shadows - and darker secrets."
      },
      "malkavian-oracle": {
        name: "Prophet's Chosen",
        description: "A powerful Malkavian oracle has taken special interest in you, sharing visions and cryptic guidance.",
        category: "Character Connections",
        benefits: [
          "• Prophetic Warnings: Occasional advance knowledge of dangers or opportunities",
          "•• Oracle's Wisdom: Add 2 dice to Investigation rolls when researching supernatural mysteries",
          "••• Vision Sharing: Direct communication with the oracle through shared madness",
          "•••• Fate's Agent: Your actions consistently align with prophetic visions",
          "••••• Prophet's Voice: Other vampires seek your interpretations of the oracle's visions"
        ],
        restrictions: "Must have Auspex •+ or compelling reason for oracle's interest",
        plotHooks: [
          "False prophets spread competing visions to create confusion",
          "The oracle's visions predict catastrophic events you feel compelled to prevent",
          "Government psychics attempt to study your connection to supernatural prophecy",
          "Following prophetic visions leads to morally questionable actions"
        ],
        quote: "Madness and truth dance together in the space between heartbeats."
      }
    }
  },
  mysteries: {
    name: "Mysteries & Secrets",
    description:
      "These Lore Sheets involve your character in the supernatural mysteries and hidden secrets of Las Vegas.",
    sheets: {
      "underground-vegas": {
        name: "Underground Vegas",
        description:
          "You know the secrets of the vast tunnel system beneath Las Vegas, including its supernatural inhabitants.",
        category: "Mysteries & Secrets",
        benefits: [
          "• Tunnel Navigation: Add 2 dice to movement and stealth in underground Vegas",
          "•• Hidden Communities: Access to homeless populations and underground societies",
          "••• Forgotten Spaces: You know chambers and passages others have forgotten",
          "•••• Underworld Authority: Recognized leadership among tunnel dwellers",
          "••••• City's Hidden Heart: You understand the supernatural geography beneath Vegas",
        ],
        restrictions: "Must have spent significant time in the tunnel systems",
        plotHooks: [
          "City expansion threatens to expose supernatural tunnel communities",
          "Something ancient stirs in the deepest tunnels",
          "Government agents map the tunnels for unknown purposes",
          "Territorial war erupts between different tunnel factions",
        ],
        quote: "They see the glittering surface - I know what crawls beneath.",
      },
      "neon-prophet": {
        name: "Neon Prophet",
        description:
          "You've experienced visions and prophecies connected to Las Vegas' supernatural destiny.",
        category: "Mysteries & Secrets",
        benefits: [
          "• Prophetic Dreams: Occasional visions of future supernatural events",
          "•• Pattern Recognition: Add 2 dice to rolls predicting supernatural complications",
          "••• Oracle's Wisdom: Other supernaturals seek your insights and predictions",
          "•••• Fate's Agent: Your actions consistently align with supernatural destiny",
          "••••• Prophet of Sin City: Your visions shape supernatural politics across the city",
        ],
        restrictions:
          "Must have Auspex ••+ or compelling reason for prophetic ability",
        plotHooks: [
          "Your visions predict a catastrophic supernatural war in Vegas",
          "Government psychics attempt to study and exploit your abilities",
          "False prophets spread competing visions to create chaos",
          "Your prophecies create self-fulfilling disasters",
        ],
        quote: "In the city of illusions, I see the truth behind the neon.",
      },
      "digital-ghost": {
        name: "Digital Ghost",
        description:
          "You're connected to the supernatural phenomena emerging from Las Vegas' dense digital infrastructure.",
        category: "Mysteries & Secrets",
        benefits: [
          "• Digital Intuition: Add 2 dice to Technology rolls involving supernatural digital phenomena",
          "•• Electronic Communion: You can sense supernatural presences through digital networks",
          "••• Data Archaeology: Access to deleted or hidden digital information",
          "•••• Virtual Sanctum: You maintain havens within digital space",
          "••••• Digital Deity: Your consciousness can exist independently in cyber-space",
        ],
        restrictions:
          "Must have compelling explanation for supernatural digital connection",
        plotHooks: [
          "AI entities in casino systems develop independent supernatural awareness",
          "Digital hauntings manifest through social media and gaming platforms",
          "Cyber-warfare between supernatural factions threatens city infrastructure",
          "Your digital presence attracts attention from unknown entities",
        ],
        quote:
          "They built a digital nervous system for the city - and something is learning to think.",
      },
    },
  },

};

// Initialize the lore sheets system
function initializeLoreSheetsSystem() {
  console.log("Initializing Lore Sheets System");

  const categoryButtons = document.querySelectorAll(
    ".lore-nav__category-button"
  );
  const typeNav = document.getElementById("lore-type-nav");
  const typeNavTitle = document.getElementById("lore-type-nav-title");
  const typeNavList = document.getElementById("lore-type-nav-list");
  const loreSheetDisplay = document.getElementById("lore-sheet-display");
  const specificLoreDisplay = document.getElementById("specific-lore-display");

  if (!categoryButtons.length || !loreSheetDisplay) {
    console.error("Required lore sheet elements not found");
    return;
  }

  // Add event listeners to category buttons
  categoryButtons.forEach((button) => {
    button.addEventListener("click", (e) => {
      const selectedCategory = e.target.getAttribute("data-category");
      setActiveCategoryButton(e.target);
      displayCategory(selectedCategory);
    });
  });

  function setActiveCategoryButton(activeButton) {
    categoryButtons.forEach((btn) =>
      btn.classList.remove("lore-nav__category-button--active")
    );
    activeButton.classList.add("lore-nav__category-button--active");
  }

  function displayCategory(categoryKey) {
    const categoryData = loreSheetData[categoryKey];

    if (!categoryData) {
      console.error("Category data not found for:", categoryKey);
      return;
    }

    // Hide specific lore display
    specificLoreDisplay.style.display = "none";

    // Show and populate type navigation
    typeNav.style.display = "block";
    typeNavTitle.textContent = categoryData.name;

    const typeButtons = Object.entries(categoryData.sheets)
      .map(
        ([key, sheet]) => `
      <li class="lore-type-nav__item">
        <button class="lore-type-nav__button" data-category="${categoryKey}" data-sheet="${key}">
          ${sheet.name}
        </button>
      </li>
    `
      )
      .join("");

    typeNavList.innerHTML = typeButtons;

    // Add event listeners to type buttons
    const newTypeButtons = typeNavList.querySelectorAll(
      ".lore-type-nav__button"
    );
    newTypeButtons.forEach((button) => {
      button.addEventListener("click", (e) => {
        const categoryKey = button.getAttribute("data-category");
        const sheetKey = button.getAttribute("data-sheet");
        setActiveTypeButton(button);
        displayLoreSheet(categoryKey, sheetKey);
      });
    });

    // Show category information
    loreSheetDisplay.innerHTML = `
      <div class="lore-category-info">
        <h3 class="content__heading">${categoryData.name}</h3>
        <p class="content__body">${categoryData.description}</p>
        
        <h4 class="content__subheading">Available Lore Sheets</h4>
        <div class="lore-sheet-list">
          ${Object.entries(categoryData.sheets)
            .map(
              ([key, sheet]) => `
            <div class="lore-sheet-preview" data-category="${categoryKey}" data-sheet="${key}">
              <h5 class="lore-sheet-preview__name">${sheet.name}</h5>
              <p class="lore-sheet-preview__description">${sheet.description}</p>
            </div>
          `
            )
            .join("")}
        </div>
      </div>
    `;

    // Add click listeners to preview cards
    const previewCards = loreSheetDisplay.querySelectorAll(
      ".lore-sheet-preview"
    );
    previewCards.forEach((card) => {
      card.addEventListener("click", (e) => {
        const categoryKey = card.getAttribute("data-category");
        const sheetKey = card.getAttribute("data-sheet");
        displayLoreSheet(categoryKey, sheetKey);
      });
    });
  }

  function setActiveTypeButton(activeButton) {
    const typeButtons = typeNavList.querySelectorAll(".lore-type-nav__button");
    typeButtons.forEach((btn) =>
      btn.classList.remove("lore-type-nav__button--active")
    );
    activeButton.classList.add("lore-type-nav__button--active");
  }

  function displayLoreSheet(categoryKey, sheetKey) {
    const categoryData = loreSheetData[categoryKey];
    const sheet = categoryData.sheets[sheetKey];

    if (!sheet) {
      console.error("Lore sheet not found");
      return;
    }

    // Show specific lore display
    specificLoreDisplay.style.display = "block";
    specificLoreDisplay.innerHTML = `
      <div class="specific-lore-info">
        <h3 class="content__heading">${sheet.name}</h3>
        <p class="lore-sheet-category">${sheet.category}</p>
        
        <div class="lore-sheet-description">
          <h4 class="content__subheading">Description</h4>
          <p class="content__body">${sheet.description}</p>
        </div>

        <div class="lore-sheet-quote">
          <blockquote class="content__body">"${sheet.quote}"</blockquote>
        </div>

        <div class="lore-sheet-details">
          <div class="lore-detail">
            <h4 class="content__subheading">Benefits by Level</h4>
            <ul class="lore-benefits">
              ${sheet.benefits
                .map(
                  (benefit) => `<li class="content__list-item">${benefit}</li>`
                )
                .join("")}
            </ul>
          </div>

          <div class="lore-detail">
            <h4 class="content__subheading">Restrictions</h4>
            <p class="content__body">${sheet.restrictions}</p>
          </div>

          <div class="lore-detail">
            <h4 class="content__subheading">Story Hooks & Complications</h4>
            <ul class="content__list">
              ${sheet.plotHooks
                .map((hook) => `<li class="content__list-item">${hook}</li>`)
                .join("")}
            </ul>
          </div>
        </div>

        <button class="content__button" onclick="document.getElementById('specific-lore-display').style.display='none'">
          ← Back to ${categoryData.name}
        </button>
      </div>
    `;

    // Scroll to specific lore display
    specificLoreDisplay.scrollIntoView({ behavior: "smooth" });
  }

  console.log("Lore Sheets System initialized successfully");
}

// Export for global access
window.initializeLoreSheetsSystem = initializeLoreSheetsSystem;
