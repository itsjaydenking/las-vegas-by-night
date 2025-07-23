// Clan data structure
const kindredData = {
  ventrue: {
    name: "Ventrue",
    description:
      "The Blue Bloods of Las Vegas maintain their grip on the city's corporate infrastructure. Despite the Sheepfold purge, surviving Ventrue have quietly rebuilt their influence through legitimate business channels and careful political maneuvering.",
    characters: [
      {
        id: "carlton-everett",
        name: "Carlton Lance Everett",
        epitaph: "The Silver Fox",
        generation: "9th Generation",
        quote: "In the game of power, the only rule is to win.",
        sections: {
          background:
            "Carlton Lance Everett is a prominent member of the Ventrue clan, known for his sharp business acumen and political savvy. He has a reputation for being ruthless in his pursuit of power and influence within the Kindred society of Las Vegas.",
          mortalDays:
            "Details about Carlton's mortal life remain shrouded in mystery, with little known about his origins or the events that led to his embrace.",
          kindredNights:
            "Carlton's nights are spent navigating the complex web of Kindred politics, often leveraging his wealth and connections to maintain his position of power.",
          domain:
            "Carlton's domain is primarily centered around the Las Vegas Strip, where he exerts significant influence over various businesses and establishments.",
          relationships:
            "Carlton maintains a complex web of relationships within the Kindred community, often using charm and manipulation to achieve his goals.",
        },
        stats: {
          sire: "Unknown",
          embraced: "1987 (Born 1952)",
          ambition: "Control the Strip's financial infrastructure",
          convictions: "Business before blood",
          humanity: "6",
          generation: "9th",
          bloodPotency: "3",
          attributes: {
            physical: ["Strength: 2", "Dexterity: 3", "Stamina: 2"],
            social: ["Charisma: 4", "Manipulation: 5", "Composure: 3"],
            mental: ["Intelligence: 3", "Wits: 4", "Resolve: 3"],
          },
          skills: [
            "Etiquette (Court): 4",
            "Intimidation: 5",
            "Persuasion: 3",
            "Finance: 4",
          ],
          disciplines: ["Dominate: 3", "Fortitude: 2", "Presence: 4"],
        },
      },
    ],
  },

  nosferatu: {
    name: "Nosferatu",
    description:
      "The Sewer Rats have survived the purge better than most, their network of tunnels and information brokers proving invaluable. They now serve as neutral parties in the new power structure, trading secrets for safety.",
    characters: [
      {
        id: "data-ghost",
        name: "The Data Ghost",
        epitaph: "Information Broker",
        generation: "11th Generation",
        quote: "Knowledge is the only currency that matters in the new Vegas.",
        sections: {
          background:
            "Known only as the Data Ghost, this Nosferatu has built an empire on information in post-Sheepfold Vegas.",
          mortalDays:
            "Their mortal identity is completely unknown, lost in the digital maze they've created.",
          kindredNights:
            "Operates from the old server farms beneath the city, monitoring every digital transaction.",
          domain: "The abandoned tech infrastructure beneath downtown Vegas.",
          relationships:
            "Maintains strict neutrality, selling information to all factions equally.",
        },
        stats: {
          sire: "Unknown",
          embraced: "2003 (Born 1981)",
          ambition: "Create the ultimate information network",
          convictions: "Information should flow freely (for a price)",
          humanity: "5",
          generation: "11th",
          bloodPotency: "2",
          attributes: {
            physical: ["Strength: 1", "Dexterity: 4", "Stamina: 3"],
            social: ["Charisma: 1", "Manipulation: 4", "Composure: 4"],
            mental: ["Intelligence: 5", "Wits: 4", "Resolve: 3"],
          },
          skills: [
            "Technology: 5",
            "Investigation: 4",
            "Stealth: 4",
            "Streetwise: 3",
          ],
          disciplines: ["Obfuscate: 4", "Potence: 1", "Animalism: 2"],
        },
      },
    ],
  },

  toreador: {
    name: "Toreador",
    description:
      "The Dégustateurs have found new purpose in Vegas's entertainment industry. They've embedded themselves in social media, influencer culture, and the city's vibrant nightlife scene.",
    characters: [],
  },

  brujah: {
    name: "Brujah",
    description:
      "The Rabble have embraced Vegas's anarchic potential. They lead the resistance against any attempt to restore the old Camarilla order, fighting for a truly free city.",
    characters: [],
  },

  malkavian: {
    name: "Malkavian",
    description:
      "The Lunatics navigate the city's madness with an understanding that others lack. Many believe they foresaw the Sheepfold purge and prepared accordingly.",
    characters: [],
  },

  tremere: {
    name: "Tremere",
    description:
      "The Warlocks' chantry was destroyed in the purge, but scattered survivors work to rebuild their mystical infrastructure in the desert.",
    characters: [],
  },

  gangrel: {
    name: "Gangrel",
    description:
      "The Outlanders thrive in the desert surrounding Vegas, maintaining their independence while occasionally venturing into the city.",
    characters: [],
  },

  "thin-blood": {
    name: "Thin-Bloods",
    description:
      "The Duskborn have found unexpected acceptance in post-purge Vegas. Their alchemy and adaptability make them valuable in the new order.",
    characters: [],
  },

  ministry: {
    name: "The Ministry",
    description:
      "The Setites see opportunity in Vegas's spiritual vacuum. They've established mobile temples and digital cults throughout the city.",
    characters: [],
  },

  hecata: {
    name: "Hecata",
    description:
      "The Necromancers, particularly the Rothstein family, maintain their hold on certain casino operations while dealing with the city's restless dead.",
    characters: [],
  },

  lasombra: {
    name: "Lasombra",
    description:
      "Former Sabbat members have found refuge in Vegas's shadows, some seeking redemption, others planning their return to power.",
    characters: [],
  },

  "banu-haqim": {
    name: "Banu Haqim",
    description:
      "The Judges serve as neutral arbiters in the new Vegas, their code of honor making them trusted mediators between factions.",
    characters: [],
  },

  ravnos: {
    name: "Ravnos",
    description:
      "The Charlatans drift through Vegas like desert winds, their illusions perfectly suited to a city built on dreams and deception.",
    characters: [],
  },

  tzimisce: {
    name: "Tzimisce",
    description:
      "The Fiends maintain hidden laboratories in the desert, experimenting with new forms suited to the digital age.",
    characters: [],
  },

  salubri: {
    name: "Salubri",
    description:
      "The Healers work quietly to tend the wounded souls of post-purge Vegas, offering solace to those who've lost everything.",
    characters: [],
  },

  caitiff: {
    name: "Caitiff",
    description:
      "The Clanless have found unexpected freedom in the new Vegas, no longer bound by the old hierarchies that once oppressed them.",
    characters: [],
  },
};

// Initialize the Kindred system
function initializeKindredSystem() {
  const clanButtons = document.querySelectorAll(".kindred-nav__button");
  const clanDisplay = document.getElementById("clan-display");
  const characterDisplay = document.getElementById("character-display");

  let currentClan = null;
  let currentCharacter = null;

  // Add event listeners to clan buttons
  clanButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const clanId = button.getAttribute("data-clan");
      selectClan(clanId);
    });
  });

  function selectClan(clanId) {
    // Update active button
    clanButtons.forEach((btn) =>
      btn.classList.remove("kindred-nav__button--active")
    );
    document
      .querySelector(`[data-clan="${clanId}"]`)
      .classList.add("kindred-nav__button--active");

    currentClan = clanId;
    currentCharacter = null;

    displayClan(clanId);
    characterDisplay.style.display = "none";
  }

  function displayClan(clanId) {
    const clan = kindredData[clanId];
    if (!clan) return;

    let html = `
      <div class="clan-display__header">
        <h3 class="content__heading">${clan.name}</h3>
      </div>
      <div class="clan-display__description">
        <p class="content__body">${clan.description}</p>
      </div>
    `;

    if (clan.characters.length > 0) {
      html += `
        <div class="character-list">
          <h4 class="character-list__header content__subheading">Notable ${clan.name} in Las Vegas</h4>
          <div class="character-list__grid">
      `;

      clan.characters.forEach((character) => {
        html += `
          <div class="character-card" data-character="${character.id}" data-clan="${clanId}">
            <div class="character-card__name">${character.name}</div>
            <div class="character-card__epitaph">"${character.epitaph}"</div>
            <div class="character-card__generation">${character.generation}</div>
              </div>
        `;
      });

      html += `
          </div>
        </div>
      `;

      // Add event listeners to character cards after rendering
      setTimeout(() => {
        const characterCards = document.querySelectorAll(".character-card");
        characterCards.forEach((card) => {
          card.addEventListener("click", () => {
            const characterId = card.getAttribute("data-character");
            const clanId = card.getAttribute("data-clan");
            selectCharacter(clanId, characterId);
          });
        });
      }, 0);
    } else {
      html += `
        <div class="character-list">
          <h4 class="character-list__header content__subheading">Notable ${clan.name} in Las Vegas</h4>
          <p class="content__body" style="font-style: italic; color: var(--dark-grey);">
            No specific characters have been detailed for this clan yet. Check back for updates as we expand the roster.
          </p>
        </div>
      `;
    }

    clanDisplay.innerHTML = html;
  }

  function selectCharacter(clanId, characterId) {
    const clan = kindredData[clanId];
    const character = clan.characters.find((char) => char.id === characterId);
    if (!character) return;

    // Update active character card
    document
      .querySelectorAll(".character-card")
      .forEach((card) => card.classList.remove("character-card--active"));
    document
      .querySelector(`[data-character="${characterId}"]`)
      .classList.add("character-card--active");

    currentCharacter = characterId;
    displayCharacter(character);
  }

  function displayCharacter(character) {
    let html = `
      <div class="character-display__header">
        <div>
          <h3 class="character-display__name">${character.name}</h3>
          <p class="character-display__clan">"${character.epitaph}"</p>
        </div>
        <div class="character-display__clan">${character.generation}</div>
      </div>
    `;

    if (character.quote) {
      html += `
        <div class="character-display__quote">
          "${character.quote}"
        </div>
      `;
    }

    // Character sections
    if (character.sections) {
      Object.entries(character.sections).forEach(([key, content]) => {
        const title = key
          .replace(/([A-Z])/g, " $1")
          .replace(/^./, (str) => str.toUpperCase());
        html += `
          <h5 class="content__section">${title}</h5>
          <p class="content__body">${content}</p>
        `;
      });
    }

    // Stats section
    if (character.stats) {
      html += `
        <h5 class="content__section">V5 Profile</h5>
        <div class="character-display__stats">
      `;

      // Basic info
      html += `
        <div class="stat-block">
          <div class="stat-block__title">Basic Information</div>
          <div class="stat-block__content">
            <ul>
              <li><strong>Sire:</strong> ${
                character.stats.sire || "Unknown"
              }</li>
              <li><strong>Embraced:</strong> ${
                character.stats.embraced || "Unknown"
              }</li>
              <li><strong>Generation:</strong> ${
                character.stats.generation || "Unknown"
              }</li>
              <li><strong>Blood Potency:</strong> ${
                character.stats.bloodPotency || "Unknown"
              }</li>
              <li><strong>Humanity:</strong> ${
                character.stats.humanity || "Unknown"
              }</li>
            </ul>
          </div>
        </div>
      `;

      // Attributes
      if (character.stats.attributes) {
        html += `
          <div class="stat-block">
            <div class="stat-block__title">Attributes</div>
            <div class="stat-block__content">
              <strong>Physical:</strong><br>
              ${character.stats.attributes.physical.join(", ")}<br><br>
              <strong>Social:</strong><br>
              ${character.stats.attributes.social.join(", ")}<br><br>
              <strong>Mental:</strong><br>
              ${character.stats.attributes.mental.join(", ")}
            </div>
          </div>
        `;
      }

      // Skills
      if (character.stats.skills) {
        html += `
          <div class="stat-block">
            <div class="stat-block__title">Key Skills</div>
            <div class="stat-block__content">
              <ul>
                ${character.stats.skills
                  .map((skill) => `<li>${skill}</li>`)
                  .join("")}
              </ul>
            </div>
          </div>
        `;
      }

      // Disciplines
      if (character.stats.disciplines) {
        html += `
          <div class="stat-block">
            <div class="stat-block__title">Disciplines</div>
            <div class="stat-block__content">
              <ul>
                ${character.stats.disciplines
                  .map((discipline) => `<li>${discipline}</li>`)
                  .join("")}
              </ul>
            </div>
          </div>
        `;
      }

      html += `</div>`;
    }

    characterDisplay.innerHTML = html;
    characterDisplay.style.display = "block";
  }

  // Load default clan on initialization
  selectClan();
}

// Make function available globally
window.initializeKindredSystem = initializeKindredSystem;
