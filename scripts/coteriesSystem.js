// Coterie data structure
const coterieData = {
  "blood-cult": {
    name: "Blood Cult",
    description: "Formally condemned as violations of the Masquerade, blood cults have nevertheless resurged with the coming of Gehenna. This coterie entices mortal worshippers, feeding them vitae or just enslaving them.",
    defaultTraits: {
      domain: "Lien (•) and Portillon (••)",
      herd: "(•••)",
      flaws: "Status Flaw: (•) Suspect"
    },
    possibleExtras: ["Enemies (••)", "Haven (cult church or compound)", "Mask Flaw (••) (on the Second Inquisition radar)", "Retainers"],
    coteries: [
      {
        name: "The Crimson Congregation",
        members: ["Sarah Chen (Malkavian)", "Father Rodriguez (Lasombra)", "Marcus Webb (Thin-Blood)"],
        agenda: "Spread vampiric influence through a legitimate church, using religious fervor to mask blood addiction among the congregation.",
        customs: "Sunday evening 'communion' ceremonies, blood-sharing rituals disguised as religious practices, recruitment through spiritual counseling.",
        background: "Formed after the Sheepfold Purge when three survivors realized they needed mortal shields. They took over St. Augustine's Chapel in North Las Vegas.",
        domain: "St. Augustine's Chapel and surrounding residential area in North Las Vegas",
        complications: "Second Inquisition has them under surveillance, rival Catholic church becoming suspicious",
        quote: "The blood is the life, and through communion, we achieve eternal salvation."
      }
    ]
  },
  "cerberus": {
    name: "Cerberus",
    description: "The coterie exists to protect or guard a certain spot or important location, such as a grave, a portal, or the vault of a priceless relic. Cerberus coteries often become 'legacy coteries', with membership passed down to generations of new vampires.",
    defaultTraits: {
      domain: "Chasse (•) and Portillon (•••)",
      haven: "(••)"
    },
    possibleExtras: ["Adversary", "Haunted flaw in Haven", "Status (for legacies)"],
    coteries: [
      {
        name: "The Neon Vault Guardians",
        members: ["Elena Vasquez (Nosferatu)", "Tommy 'Keys' Morrison (Gangrel)", "Dr. Yuki Tanaka (Tremere)"],
        agenda: "Protect the underground Tremere sanctum beneath the Bellagio fountains, containing pre-Sheepfold magical artifacts.",
        customs: "Rotating 8-hour guard shifts, encrypted radio communications, monthly inventory of protected items, blood oath renewals every new moon.",
        background: "Established in 1998 when the Bellagio opened, this coterie has guarded Tremere secrets through three regime changes. The vault contains irreplaceable magical components and ritual items.",
        domain: "Bellagio basement levels and select fountain maintenance areas",
        complications: "Hotel security upgrades threaten their concealment, rival vampires seek the vault's contents",
        quote: "What lies beneath must never see the light of day... or night."
      }
    ]
  },
  "champions": {
    name: "Champions",
    description: "The coterie exists to fight for a cause, possibly even one that mortals might recognize as worthy: clean up the neighborhood by devouring drug dealers, for example. Thin-bloods often begin their unlives as champions.",
    defaultTraits: {
      domain: "Chasse (•) and Lien (•••)",
      allies: "(•)",
      enemies: "(••)"
    },
    possibleExtras: ["Adversary", "Contacts"],
    coteries: [
      {
        name: "Sin City Cleaners",
        members: ["Maria Santos (Thin-Blood)", "Jake 'Cleaner' Williams (Brujah)", "Nina Cross (Caitiff)"],
        agenda: "Eliminate human traffickers and drug dealers in East Las Vegas, feeding on criminals to protect innocent mortals.",
        customs: "Weekly target identification meetings, sharing information with local police (anonymously), maintaining a 'clean kills only' policy - no innocent casualties.",
        background: "Formed by three vampires who lost mortal family to crime. They operate in East Las Vegas, coordinating with Detective Morrison (unknowing ally) in LVMPD.",
        domain: "East Las Vegas neighborhoods, particularly around Maryland Parkway and Charleston Boulevard",
        complications: "Some targets are protected by corrupt police, rival criminals seek revenge, maintaining Masquerade during violent operations",
        quote: "Justice doesn't sleep, and neither do we."
      }
    ]
  },
  "commando": {
    name: "Commando",
    description: "The coterie exists to fight its master's enemies: the vampiric equivalent of a SWAT or special operations team. You may even disguise yourself as a squad of the city's tactical police.",
    defaultTraits: {
      domain: "Chasse (•) and Portillon (••)",
      mawla: "(•••) (whoever tasks you for your missions)",
      status: "(•)",
      enemies: "(••)"
    },
    possibleExtras: ["Adversary", "Haven (base of operations)", "Mask"],
    coteries: [
      {
        name: "Strike Team Echo",
        members: ["Captain Rachel Stone (Ventrue)", "Sergeant Mike Torres (Gangrel)", "Specialist Liu Wei (Banu Haqim)", "Tech Specialist Amy Park (Nosferatu)"],
        agenda: "Execute high-priority elimination and extraction missions for Prince Everett, specializing in dealing with Sabbat infiltrators and Second Inquisition threats.",
        customs: "Military-style briefings, tactical gear maintenance, encrypted communications, post-mission debriefings, maintaining cover as private security consultants.",
        background: "Formed by Prince Everett after the Sheepfold Purge to handle situations requiring specialized skills. They operate with military precision and maintain covers in various security sectors.",
        domain: "Mobile operations throughout Las Vegas, staging area in Industrial District warehouse",
        complications: "Second Inquisition has identified some members, rival princes want to poach their services, maintaining military discipline with vampiric nature",
        quote: "Swift, silent, final."
      }
    ]
  },
  "day-watch": {
    name: "Day Watch",
    description: "The coterie guards the undead city from mortals, especially during the day when most Kindred sleep. Each member must be a thin-blood with the Day Drinker Merit, or have another means of remaining active by day.",
    defaultTraits: {
      domain: "Chasse (•) and Portillon (••)",
      influence: "(••)",
      enemies: "(•••)"
    },
    possibleExtras: ["Allies", "Contacts", "Haven", "Mawla", "a shared relic or ritual allowing activity by day"],
    coteries: [
      {
        name: "Daylight Sentinels",
        members: ["Alex Rivera (Thin-Blood Day Drinker)", "Sam Chen (Thin-Blood Day Drinker)", "Morgan Taylor (Thin-Blood Day Drinker)"],
        agenda: "Monitor Second Inquisition activity during daylight hours, protect vampire havens from daytime raids, coordinate emergency responses for sleeping Kindred.",
        customs: "Daily patrol schedules, sunglasses and protective clothing protocols, encrypted radio check-ins every 2 hours, emergency response drills.",
        background: "Established after the Sheepfold Purge when it became clear that vampires needed daytime protection. These Thin-Bloods proved their worth and gained respect from the traditional clans.",
        domain: "Mobile patrols throughout Las Vegas, with focus on known vampire territories",
        complications: "Constant Second Inquisition surveillance, thin-blood limitations against serious threats, maintaining alertness during natural sleep hours",
        quote: "While others rest, we guard the night's children from the harsh light of day."
      }
    ]
  },
  "fang-gang": {
    name: "Fang Gang",
    description: "The coterie operates as a criminal gang, or possibly as a crew of burglars or con artists. The fang gang may disguise itself as part of the city's organized crime syndicate.",
    defaultTraits: {
      domain: "Chasse (•), Lien (•), and Portillon (•)",
      contacts: "(•) (fence or other criminal middleman)",
      enemies: "(••)"
    },
    possibleExtras: ["Haven (clubhouse)", "Herd (human members/victims of your gang)", "Influence (organized crime)", "Retainers", "Status (likely with Anarchs)"],
    coteries: [
      {
        name: "The Midnight Heist Crew",
        members: ["Vincent 'Vinny' Romano (Lasombra)", "Katie 'Ghost' Sullivan (Nosferatu)", "Diego Mendez (Ravnos)", "Tasha 'Smoke' Johnson (Gangrel)"],
        agenda: "High-end casino heists and art theft, fencing stolen goods through criminal networks, maintaining territorial control in Downtown Las Vegas.",
        customs: "Weekly planning sessions at their clubhouse, percentage-based profit sharing, maintaining covers as legitimate business operators, blood oaths of loyalty.",
        background: "Formed from survivors of various criminal organizations decimated during the Sheepfold Purge. They've rebuilt operations focusing on supernatural-assisted crimes.",
        domain: "Downtown Las Vegas, particularly around Fremont Street and older casinos",
        complications: "FBI organized crime task force, competition from mortal criminals, managing supernatural abilities without exposing vampiric nature",
        quote: "What happens in Vegas... disappears without a trace."
      }
    ]
  },
  "hunting-party": {
    name: "Hunting Party",
    description: "The coterie specializes in hunting and capturing humans with particular qualities of the blood. With knowledge of and tastes for humors and Resonances spreading among thin-blood cookers and Toreador gourmands alike.",
    defaultTraits: {
      domain: "Chasse (•••)",
      allies: "(•) or Mawla: (•) (blood broker)"
    },
    possibleExtras: ["Herd", "Influence (organized crime)"],
    coteries: [
      {
        name: "The Crimson Sommelier Society",
        members: ["Isabella Montclair (Toreador)", "Dr. Hassan Al-Rashid (Banu Haqim)", "Jenny 'Nose' O'Brien (Nosferatu)"],
        agenda: "Source and supply rare blood resonances to high-paying Kindred clients, specializing in emotional and artistic resonances from Vegas performers.",
        customs: "Weekly tastings to identify resonance quality, maintaining detailed records of sources, ethical feeding protocols (no killing), client confidentiality agreements.",
        background: "Founded by Isabella after losing her previous herd in the Purge. They've rebuilt by focusing on the entertainment industry's rich emotional landscape.",
        domain: "The Strip entertainment district, with access to theaters, concert venues, and performer housing",
        complications: "Competition from less ethical suppliers, maintaining willing vessel relationships, avoiding Second Inquisition attention",
        quote: "The finest vintage is not aged in barrels, but in the human soul."
      }
    ]
  },
  "marechal": {
    name: "Maréchal",
    description: "This coterie serves and guards the Prince or Baron, doing their bidding as attendants and hatchet-men. Their direct access to the ruler means that influential elders attempt to insert their childer into the coterie.",
    defaultTraits: {
      domain: "Chasse (••) and Portillon (••)",
      status: "(•••)"
    },
    possibleExtras: ["Adversaries", "Influence", "Mawla (Prince/Baron)", "Retainers"],
    coteries: [
      {
        name: "The Silver Court Guard",
        members: ["Lady Catherine Pembroke (Ventrue)", "Dmitri Volkov (Tremere)", "Jonathan Cross (Toreador)", "Sister Mary Katherine (Lasombra)"],
        agenda: "Serve as Prince Everett's personal guard and executive council, handle sensitive diplomatic missions, eliminate threats to Camarilla authority in Las Vegas.",
        customs: "Daily briefings with the Prince, formal court protocols, rotation of personal protection duties, weekly strategic planning sessions, monthly reports to Camarilla leadership.",
        background: "Handpicked by Prince Everett after claiming praxis, these four represent the traditional Camarilla clans and serve as both advisors and enforcers.",
        domain: "Caesars Palace penthouse levels and VIP areas, with authority throughout Camarilla territory",
        complications: "Constant political maneuvering from other Primogen, pressure from Camarilla hierarchy, balancing personal loyalty with clan interests",
        quote: "The Prince's will is our command, the Camarilla's future our sacred duty."
      }
    ]
  },
  "nomads": {
    name: "Nomads",
    description: "The coterie travels from place to place. It might pose as (or actually be) a band, theater troupe, or other itinerant artists. This coterie might perform exclusively for Kindred audiences at Princely courts.",
    defaultTraits: {
      domain: "None",
      contacts: "(•••) (audience, promoters, travel brokers, etc.)",
      retainers: "(••) (at least one adult to handle daytime travel problems)",
      flaws: "Status Flaw: (•) Suspect"
    },
    possibleExtras: ["Herd (fellow travelers)"],
    coteries: [
      {
        name: "The Midnight Carnival",
        members: ["Maximilian Cross (Ravnos)", "Luna the Mystic (Malkavian)", "Dante Fierro (Toreador)", "Shadow (Nosferatu)"],
        agenda: "Travel between vampire courts providing entertainment and information brokering, maintain neutrality between factions, preserve traveling carnival traditions.",
        customs: "Monthly destination votes, shared profits from performances, maintaining carnival personas, protecting mortal performers who travel with them.",
        background: "Survivors of a traditional traveling carnival that was destroyed during the Gehenna War. They rebuilt as a supernatural entertainment troupe serving vampire courts.",
        domain: "Mobile operations, currently based in Las Vegas for winter season",
        complications: "Suspicion from local authorities everywhere they go, maintaining Masquerade during public performances, protecting mortal carnival workers",
        quote: "The show must go on, from court to court, from night to night eternal."
      }
    ]
  },
  "plumaire": {
    name: "Plumaire",
    description: "Birds of a feather flock together, and social coteries like plumaires ('feathered ones') exemplify this adage. United by ties of social prominence or simple common enthusiasms, social coteries appear in Camarilla courts and Anarch alleys alike.",
    defaultTraits: {
      domain: "Chasse (••) and Lien (••)",
      contacts: "(•••) (fellow members of your subculture)"
    },
    possibleExtras: ["Adversary or Enemy (rival fashionista)", "Status (for high society Plumaires)"],
    coteries: [
      {
        name: "The Neon Gothic Society",
        members: ["Raven Blackthorne (Toreador)", "Sebastian Vale (Lasombra)", "Lily Crimson (Malkavian)", "Viktor Steel (Tzimisce)"],
        agenda: "Promote gothic and alternative culture within vampire society, host exclusive parties and art exhibitions, maintain influence in Las Vegas underground art scene.",
        customs: "Monthly themed gatherings, collaborative art projects, sharing resources for elaborate costumes and venues, mentoring newly embraced vampires in gothic traditions.",
        background: "Formed around shared aesthetic preferences and artistic vision, they've become influential in both mortal and vampire cultural scenes in Las Vegas.",
        domain: "Arts District venues, underground clubs, and alternative culture spaces throughout Las Vegas",
        complications: "Rivalry with more traditional vampire social circles, maintaining relevance in changing cultural landscape, balancing artistic expression with Masquerade",
        quote: "Beauty in darkness, elegance in shadow, art in the spaces between life and death."
      }
    ]
  },
  "questari": {
    name: "Questari",
    description: "The coterie exists to accomplish a great enterprise or objective. Questari coteries often form of their own volition, pursuing their purpose out of desire rather than by edict. They may chase a target, hunt a relic, or solve a mystery.",
    defaultTraits: {
      domain: "Chasse (•) and Lien (•••)",
      contacts: "(••)"
    },
    possibleExtras: ["Haven with Library", "Mawla", "Resources (research budget)"],
    coteries: [
      {
        name: "The Lost Chronicle Seekers",
        members: ["Professor Eleanor Thorne (Tremere)", "Marcus Stone (Gangrel)", "Dr. Aria Vasquez (Nosferatu)", "Father Michael O'Brien (Lasombra)"],
        agenda: "Locate and recover the Chronicle of Las Vegas - a lost historical record of the city's supernatural history, believed hidden before the Sheepfold Purge.",
        customs: "Weekly research sessions, careful documentation of all findings, sharing information equally among members, monthly progress reports to interested parties.",
        background: "United by their scholarly interests and belief that understanding the past is key to surviving the future. Each member brings unique research skills and access to different information sources.",
        domain: "UNLV Library access, various historical sites around Las Vegas",
        complications: "Competition from other groups seeking the Chronicle, false leads and deliberate misinformation, pressure from Kindred who want certain history to remain buried",
        quote: "The past holds the keys to our future, if we have the wisdom to seek them."
      }
    ]
  },
  "regency": {
    name: "Regency",
    description: "An elder of the Camarilla chose or created the coterie to guard their legacy as they were Beckoned into the Middle East. They hold the elder's vote among the Primogen.",
    defaultTraits: {
      domain: "Chasse (••) and Portillon (•••)",
      mawla: "(••) (major-domo or zampolit)",
      status: "(••••) (or ••• for Anarch Regencies)",
      advantages: "Select up to 10 dots shared among Haven, Herd, Influence, Resources, and/or Retainers",
      flaws: "Select the same amount of dots worth of Flaws as Advantages, above"
    },
    possibleExtras: [],
    coteries: [
      {
        name: "The Ashford Legacy Council",
        members: ["Victoria Ashford-Winters (Ventrue)", "Charles Montgomery (Toreador)", "Dr. Sarah Mitchell (Tremere)", "James Blackwood (Nosferatu)"],
        agenda: "Maintain Elder Ashford's business empire and political influence while he's Beckoned to the Middle East, preserve his eventual return and secure his interests.",
        customs: "Weekly board meetings, quarterly reports to Elder Ashford via encrypted channels, maintaining his various mortal businesses, formal protocols for decision-making.",
        background: "Chosen by Elder William Ashford before his Beckoning, they control his vast financial empire and hold his vote in Primogen meetings.",
        domain: "Ashford Tower (downtown Las Vegas), multiple business properties throughout the city",
        complications: "Pressure from other elders to change Ashford's standing positions, managing complex business operations, uncertainty about Ashford's eventual return",
        quote: "We are the stewards of his legacy, the guardians of his return."
      }
    ]
  },
  "sbirri": {
    name: "Sbirri",
    description: "This coterie disguises itself as one type of coterie, while secretly serving another Prince or Baron than they feign allegiance to. Their patron hand-picks a group of Kindred and dispatches them to another city.",
    defaultTraits: {
      mawla: "(••) (handler or messenger)",
      mask: "(•)"
    },
    possibleExtras: ["Adversaries on target city's Primogen", "other Advantages from the coterie's supposed cover type"],
    coteries: [
      {
        name: "The Chicago Infiltrators",
        members: ["Anthony 'Tony' Marcelli (Ventrue)", "Sofia Reyes (Toreador)", "David Kim (Tremere)"],
        agenda: "Secretly report on Las Vegas Camarilla activities to Prince Jackson of Chicago, identify weaknesses in Las Vegas defenses, recruit local assets.",
        customs: "Maintain cover as loyal Las Vegas Camarilla members, encrypted communications with Chicago handler, monthly intelligence reports, emergency extraction protocols.",
        background: "Sent by Chicago's Prince Jackson to monitor Las Vegas after the Sheepfold Purge, they pose as refugees seeking sanctuary while secretly serving their true master.",
        domain: "Operate throughout Las Vegas under cover identities",
        complications: "Risk of discovery by local Camarilla, conflicting loyalties, maintaining cover stories, pressure from Chicago for results",
        quote: "Loyalty is a luxury we cannot afford... at least not to the obvious master."
      }
    ]
  },
  "vehme": {
    name: "Vehme",
    description: "Named for the vigilante secret society in medieval Germany, Primogen task this coterie to protect the Masquerade at all costs. The Vehme has the authority to arrest and subdue violators.",
    defaultTraits: {
      domain: "Chasse (•)",
      influence: "(•••) (especially in police and media)",
      status: "(•••)"
    },
    possibleExtras: ["Adversaries", "Mawla (on Primogen or Anarch Councils)"],
    coteries: [
      {
        name: "The Masquerade Enforcement Division",
        members: ["Detective Rebecca Martinez (Ventrue)", "Media Liaison Patricia Wong (Toreador)", "Tech Specialist Alan Brooks (Nosferatu)", "Field Agent Maria Santos (Banu Haqim)"],
        agenda: "Identify and eliminate Masquerade breaches, coordinate cover-ups with mortal authorities, maintain extensive surveillance network, enforce Camarilla law regarding secrecy.",
        customs: "Daily briefings on potential breaches, coordination with police and media contacts, interrogation protocols for violators, evidence suppression procedures.",
        background: "Formed after several near-Masquerade breaches in the post-Purge period, they have broad authority to act in defense of vampire secrecy.",
        domain: "Authority throughout Las Vegas, with focus on high-risk areas like The Strip",
        complications: "Balancing enforcement with politics, dealing with powerful violators, maintaining mortal agent loyalty, Second Inquisition counter-surveillance",
        quote: "The Masquerade is not a suggestion - it is the law that keeps us all from Final Death."
      }
    ]
  },
  "watchmen": {
    name: "Watchmen",
    description: "The coterie patrols the city and protects it from intruders, especially Anarchs and werewolves. Camarilla coteries established in border cities to repel Sabbat influence also count as Watchmen.",
    defaultTraits: {
      domain: "Chasse (•), Lien (••) and Portillon (•)",
      status: "(••) (Camarilla)"
    },
    possibleExtras: ["Contacts", "Retainers"],
    coteries: [
      {
        name: "The Desert Patrol",
        members: ["Captain Sarah Fletcher (Gangrel)", "Scout Tommy Rodriguez (Nosferatu)", "Tracker Lisa Chen (Ravnos)", "Communications Officer Mike Turner (Ventrue)"],
        agenda: "Patrol Las Vegas borders and surrounding desert, monitor for supernatural threats, coordinate with other cities' Watchmen, maintain early warning systems.",
        customs: "Rotating patrol schedules, encrypted radio communications, weekly intelligence briefings, maintaining vehicles and equipment for desert operations.",
        background: "Established to monitor the vast desert approaches to Las Vegas, they serve as the city's first line of defense against external supernatural threats.",
        domain: "Las Vegas metropolitan borders and surrounding desert areas",
        complications: "Vast territory to cover with limited personnel, extreme desert conditions, distinguishing between threats and innocent supernaturals",
        quote: "The desert keeps its secrets, but we keep the city safe."
      }
    ]
  }
};

// Initialize the coteries system
function initializeCoteriesSystem() {
  console.log("Initializing Coteries System");
  
  const typeButtons = document.querySelectorAll('.coterie-nav__type-button');
  const typeDisplay = document.getElementById('coterie-type-display');
  const specificCoterieDisplay = document.getElementById('specific-coterie-display');

  if (!typeButtons.length || !typeDisplay) {
    console.error("Required coterie elements not found");
    return;
  }

  // Add event listeners to type buttons
  typeButtons.forEach(button => {
    button.addEventListener('click', (e) => {
      const selectedType = e.target.getAttribute('data-type');
      setActiveTypeButton(e.target);
      displayCoterieType(selectedType);
    });
  });

  function setActiveTypeButton(activeButton) {
    typeButtons.forEach(btn => btn.classList.remove('coterie-nav__type-button--active'));
    activeButton.classList.add('coterie-nav__type-button--active');
  }

  function displayCoterieType(typeKey) {
    const typeData = coterieData[typeKey];
    
    if (!typeData) {
      console.error("Type data not found for:", typeKey);
      return;
    }

    // Hide specific coterie display
    specificCoterieDisplay.style.display = 'none';

    // Show type information
    typeDisplay.innerHTML = `
      <div class="coterie-type-info">
        <h3 class="content__heading">${typeData.name}</h3>
        <p class="content__body">${typeData.description}</p>
        
        <h4 class="content__subheading">Default Traits</h4>
        <div class="coterie-traits">
          ${typeData.defaultTraits.domain ? `<p class="content__body"><strong>Domain:</strong> ${typeData.defaultTraits.domain}</p>` : ''}
          ${typeData.defaultTraits.haven ? `<p class="content__body"><strong>Haven:</strong> ${typeData.defaultTraits.haven}</p>` : ''}
          ${typeData.defaultTraits.herd ? `<p class="content__body"><strong>Herd:</strong> ${typeData.defaultTraits.herd}</p>` : ''}
          ${typeData.defaultTraits.allies ? `<p class="content__body"><strong>Allies:</strong> ${typeData.defaultTraits.allies}</p>` : ''}
          ${typeData.defaultTraits.contacts ? `<p class="content__body"><strong>Contacts:</strong> ${typeData.defaultTraits.contacts}</p>` : ''}
          ${typeData.defaultTraits.mawla ? `<p class="content__body"><strong>Mawla:</strong> ${typeData.defaultTraits.mawla}</p>` : ''}
          ${typeData.defaultTraits.status ? `<p class="content__body"><strong>Status:</strong> ${typeData.defaultTraits.status}</p>` : ''}
          ${typeData.defaultTraits.influence ? `<p class="content__body"><strong>Influence:</strong> ${typeData.defaultTraits.influence}</p>` : ''}
          ${typeData.defaultTraits.retainers ? `<p class="content__body"><strong>Retainers:</strong> ${typeData.defaultTraits.retainers}</p>` : ''}
          ${typeData.defaultTraits.enemies ? `<p class="content__body"><strong>Enemies:</strong> ${typeData.defaultTraits.enemies}</p>` : ''}
          ${typeData.defaultTraits.mask ? `<p class="content__body"><strong>Mask:</strong> ${typeData.defaultTraits.mask}</p>` : ''}
          ${typeData.defaultTraits.advantages ? `<p class="content__body"><strong>Advantages:</strong> ${typeData.defaultTraits.advantages}</p>` : ''}
          ${typeData.defaultTraits.flaws ? `<p class="content__body"><strong>Flaws:</strong> ${typeData.defaultTraits.flaws}</p>` : ''}
        </div>

        <h4 class="content__subheading">Possible Extras</h4>
        <ul class="content__list">
          ${typeData.possibleExtras.map(extra => `<li class="content__list-item">${extra}</li>`).join('')}
        </ul>
      </div>
    `;

    // Show coteries of this type if any exist
    if (typeData.coteries && typeData.coteries.length > 0) {
      const coterieList = `
        <div class="coterie-list">
          <h4 class="content__subheading">Active Coteries in Las Vegas</h4>
          <div class="coterie-list__grid">
            ${typeData.coteries.map((coterie, index) => `
              <div class="coterie-card" data-type="${typeKey}" data-index="${index}">
                <h5 class="coterie-card__name">${coterie.name}</h5>
                <p class="coterie-card__members"><strong>Members:</strong> ${coterie.members.join(', ')}</p>
                <p class="coterie-card__agenda">${coterie.agenda}</p>
              </div>
            `).join('')}
          </div>
        </div>
      `;
      typeDisplay.innerHTML += coterieList;

      // Add click listeners to coterie cards
      const coterieCards = typeDisplay.querySelectorAll('.coterie-card');
      coterieCards.forEach(card => {
        card.addEventListener('click', (e) => {
          const typeKey = card.getAttribute('data-type');
          const index = card.getAttribute('data-index');
          displaySpecificCoterie(typeKey, index);
        });
      });
    }
  }

  function displaySpecificCoterie(typeKey, index) {
    const typeData = coterieData[typeKey];
    const coterie = typeData.coteries[index];
    
    if (!coterie) {
      console.error("Coterie not found");
      return;
    }

    // Show specific coterie display
    specificCoterieDisplay.style.display = 'block';
    specificCoterieDisplay.innerHTML = `
      <div class="specific-coterie-info">
        <h3 class="content__heading">${coterie.name}</h3>
        
        <div class="specific-coterie-details">
          <div class="coterie-detail">
            <h4 class="content__subheading">Members</h4>
            <ul class="content__list">
              ${coterie.members.map(member => `<li class="content__list-item">${member}</li>`).join('')}
            </ul>
          </div>

          <div class="coterie-detail">
            <h4 class="content__subheading">Agenda</h4>
            <p class="content__body">${coterie.agenda}</p>
          </div>

          <div class="coterie-detail">
            <h4 class="content__subheading">Customs & Practices</h4>
            <p class="content__body">${coterie.customs}</p>
          </div>

          <div class="coterie-detail">
            <h4 class="content__subheading">Background</h4>
            <p class="content__body">${coterie.background}</p>
          </div>

          <div class="coterie-detail">
            <h4 class="content__subheading">Domain</h4>
            <p class="content__body">${coterie.domain}</p>
          </div>

          <div class="coterie-detail">
            <h4 class="content__subheading">Current Complications</h4>
            <p class="content__body">${coterie.complications}</p>
          </div>

          <div class="coterie-quote">
            <h4 class="content__subheading">Coterie Motto</h4>
            <blockquote class="content__body">"${coterie.quote}"</blockquote>
          </div>
        </div>

        <button class="content__button" onclick="document.getElementById('specific-coterie-display').style.display='none'">
          ← Back to ${typeData.name} Overview
        </button>
      </div>
    `;

    // Scroll to specific coterie display
    specificCoterieDisplay.scrollIntoView({ behavior: 'smooth' });
  }

  console.log("Coteries System initialized successfully");
}

// Export for global access
window.initializeCoteriesSystem = initializeCoteriesSystem;