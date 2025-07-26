export class KindredDisplay {
  constructor(kindredData) {
    this.kindredData = kindredData;
    this.clanDisplay = document.getElementById("clan-display");
    this.characterDisplay = document.getElementById("character-display");

    this.currentClan = null;
    this.currentCharacter = null;
  }

  displayClan(clanId) {
    const clan = this.kindredData[clanId];
    if (!clan) return;

    this.currentClan = clanId;
    this.currentCharacter = null;

    let html = `
      <div class="clan-display__header">
        <h3 class="content__heading">${clan.name}</h3>
      </div>
      <div class="clan-display__description">
        <p class="content__body">${clan.description}</p>
      </div>
    `;

    if (clan.characters.length > 0) {
      html += this.renderCharacterList(clan, clanId);
    } else {
      html += this.renderEmptyCharacterList(clan);
    }

    this.clanDisplay.innerHTML = html;
    this.characterDisplay.style.display = "none";

    // Add event listeners for character cards
    this.attachCharacterCardListeners(clanId);
  }

  renderCharacterList(clan, clanId) {
    let html = `
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

    return html;
  }

  renderEmptyCharacterList(clan) {
    return `
      <div class="character-list">
        <h4 class="character-list__header content__subheading">Notable ${clan.name} in Las Vegas</h4>
        <p class="content__body" style="font-style: italic; color: var(--dark-grey);">
          No specific characters have been detailed for this clan yet. Check back for updates as we expand the roster.
        </p>
      </div>
    `;
  }

  attachCharacterCardListeners(clanId) {
    setTimeout(() => {
      const characterCards = document.querySelectorAll(".character-card");
      characterCards.forEach((card) => {
        card.addEventListener("click", () => {
          const characterId = card.getAttribute("data-character");
          this.selectCharacter(clanId, characterId);
        });
      });
    }, 0);
  }

  selectCharacter(clanId, characterId) {
    const clan = this.kindredData[clanId];
    const character = clan.characters.find((char) => char.id === characterId);
    if (!character) return;

    // Update active character card
    document
      .querySelectorAll(".character-card")
      .forEach((card) => card.classList.remove("character-card--active"));
    document
      .querySelector(`[data-character="${characterId}"]`)
      .classList.add("character-card--active");

    this.currentCharacter = characterId;
    this.displayCharacter(character);
  }

  displayCharacter(character) {
    let html = this.renderCharacterHeader(character);
    html += this.renderCharacterQuote(character);
    html += this.renderCharacterSections(character);
    html += this.renderCharacterStats(character);

    this.characterDisplay.innerHTML = html;
    this.characterDisplay.style.display = "block";
  }

  renderCharacterHeader(character) {
    return `
      <div class="character-display__header">
        <div>
          <h3 class="character-display__name">${character.name}</h3>
          <p class="character-display__clan">"${character.epitaph}"</p>
        </div>
        <div class="character-display__clan">${character.generation}</div>
      </div>
    `;
  }

  renderCharacterQuote(character) {
    if (!character.quote) return "";

    return `
      <div class="character-display__quote">
        "${character.quote}"
      </div>
    `;
  }

  renderCharacterSections(character) {
    let html = "";

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

    return html;
  }

  renderCharacterStats(character) {
    if (!character.stats) return "";

    let html = `
      <h5 class="content__section">V5 Profile</h5>
      <div class="character-display__stats">
    `;

    html += this.renderBasicInfo(character.stats);
    html += this.renderAttributes(character.stats);
    html += this.renderSkills(character.stats);
    html += this.renderDisciplines(character.stats);

    html += `</div>`;
    return html;
  }

  renderBasicInfo(stats) {
    return `
      <div class="stat-block">
        <div class="stat-block__title">Basic Information</div>
        <div class="stat-block__content">
          <ul>
            <li><strong>Sire:</strong> ${stats.sire || "Unknown"}</li>
            <li><strong>Embraced:</strong> ${stats.embraced || "Unknown"}</li>
            <li><strong>Generation:</strong> ${
              stats.generation || "Unknown"
            }</li>
            <li><strong>Blood Potency:</strong> ${
              stats.bloodPotency || "Unknown"
            }</li>
            <li><strong>Humanity:</strong> ${stats.humanity || "Unknown"}</li>
          </ul>
        </div>
      </div>
    `;
  }

  renderAttributes(stats) {
    if (!stats.attributes) return "";

    return `
      <div class="stat-block">
        <div class="stat-block__title">Attributes</div>
        <div class="stat-block__content">
          <strong>Physical:</strong><br>
          ${stats.attributes.physical.join(", ")}<br><br>
          <strong>Social:</strong><br>
          ${stats.attributes.social.join(", ")}<br><br>
          <strong>Mental:</strong><br>
          ${stats.attributes.mental.join(", ")}
        </div>
      </div>
    `;
  }

  renderSkills(stats) {
    if (!stats.skills) return "";

    return `
      <div class="stat-block">
        <div class="stat-block__title">Key Skills</div>
        <div class="stat-block__content">
          <ul>
            ${stats.skills.map((skill) => `<li>${skill}</li>`).join("")}
          </ul>
        </div>
      </div>
    `;
  }

  renderDisciplines(stats) {
    if (!stats.disciplines) return "";

    return `
      <div class="stat-block">
        <div class="stat-block__title">Disciplines</div>
        <div class="stat-block__content">
          <ul>
            ${stats.disciplines
              .map((discipline) => `<li>${discipline}</li>`)
              .join("")}
          </ul>
        </div>
      </div>
    `;
  }

  setActiveClanButton(activeButton) {
    const clanButtons = document.querySelectorAll(".kindred-nav__button");
    clanButtons.forEach((btn) =>
      btn.classList.remove("kindred-nav__button--active")
    );
    activeButton.classList.add("kindred-nav__button--active");
  }
}
