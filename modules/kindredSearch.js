export class KindredSearch {
  constructor(kindredData, kindredDisplay) {
    this.kindredData = kindredData;
    this.kindredDisplay = kindredDisplay;
    this.searchInput = document.getElementById("kindred-search-input");
    this.clearButton = document.getElementById("kindred-search-clear");
    this.resultsContainer = document.getElementById("kindred-search-results");

    this.allCharacters = this.buildSearchIndex();
    this.init();
  }

  init() {
    // Search input handler with debounce
    let searchTimeout;
    this.searchInput.addEventListener("input", (e) => {
      clearTimeout(searchTimeout);
      const query = e.target.value.trim();

      if (query.length === 0) {
        this.hideResults();
        this.hideClearButton();
        return;
      }

      this.showClearButton();

      // Debounce search for better performance
      searchTimeout = setTimeout(() => {
        this.performSearch(query);
      }, 300);
    });

    // Clear button handler
    this.clearButton.addEventListener("click", () => {
      this.clearSearch();
    });

    // ESC key to clear search
    this.searchInput.addEventListener("keydown", (e) => {
      if (e.key === "Escape") {
        this.clearSearch();
      }
    });
  }

  buildSearchIndex() {
    const characters = [];

    // Iterate through all clans and their characters
    Object.entries(this.kindredData).forEach(([clanKey, clan]) => {
      if (clan.characters && clan.characters.length > 0) {
        clan.characters.forEach((character) => {
          characters.push({
            ...character,
            clanKey,
            clanName: clan.name,
            // Create searchable text combining all relevant content
            searchText: this.createSearchText(character, clan.name),
          });
        });
      }
    });

    return characters;
  }

  createSearchText(character, clanName) {
    // Combine all searchable text fields
    const textParts = [
      character.name,
      character.epitaph,
      character.generation,
      character.quote,
      clanName,
      ...(character.sections ? Object.values(character.sections) : []),
      ...(character.stats
        ? [
            character.stats.sire,
            character.stats.embraced,
            character.stats.ambition,
            character.stats.convictions,
            ...(character.stats.skills || []),
            ...(character.stats.disciplines || []),
          ].filter(Boolean)
        : []),
    ];

    return textParts.join(" ").toLowerCase();
  }

  performSearch(query) {
    const searchTerms = query
      .toLowerCase()
      .split(" ")
      .filter((term) => term.length > 0);

    const results = this.allCharacters.filter((character) => {
      // Character must match ALL search terms (AND logic)
      return searchTerms.every((term) => character.searchText.includes(term));
    });

    this.displayResults(results, query);
  }

  displayResults(results, query) {
    if (results.length === 0) {
      this.resultsContainer.innerHTML = `
        <div class="kindred-search__no-results">
          <p class="content__body">No kindred found for "${query}"</p>
        </div>
      `;
    } else {
      this.resultsContainer.innerHTML = `
        <div class="kindred-search__results-header">
          <p class="content__body">Found ${
            results.length
          } kindred for "${query}"</p>
        </div>
        <div class="kindred-search__results-list">
          ${results
            .map(
              (character) => `
            <div class="kindred-search-result-card" data-clan="${
              character.clanKey
            }" data-character="${character.id}">
              <div class="kindred-search-result-card__header">
                <h4 class="kindred-search-result-card__name">${this.highlightText(
                  character.name,
                  query
                )}</h4>
                <span class="kindred-search-result-card__clan">${
                  character.clanName
                }</span>
              </div>
              <p class="kindred-search-result-card__epitaph">"${this.highlightText(
                character.epitaph,
                query
              )}"</p>
              <div class="kindred-search-result-card__details">
                <span class="kindred-search-result-card__generation">${
                  character.generation
                }</span>
                ${
                  character.quote
                    ? `<span class="kindred-search-result-card__separator">•</span>
                <span class="kindred-search-result-card__quote">${this.highlightText(
                  character.quote.substring(0, 50),
                  query
                )}${character.quote.length > 50 ? "..." : ""}</span>`
                    : ""
                }
              </div>
            </div>
          `
            )
            .join("")}
        </div>
      `;

      // Add click handlers to result cards
      this.resultsContainer
        .querySelectorAll(".kindred-search-result-card")
        .forEach((card) => {
          card.addEventListener("click", () => {
            const clanKey = card.dataset.clan;
            const characterId = card.dataset.character;

            // Navigate to the character
            this.navigateToCharacter(clanKey, characterId);
            this.clearSearch();
          });
        });
    }

    this.showResults();
  }

  highlightText(text, query) {
    if (!query || !text) return text;

    const searchTerms = query
      .toLowerCase()
      .split(" ")
      .filter((term) => term.length > 0);
    let highlightedText = text;

    searchTerms.forEach((term) => {
      const regex = new RegExp(`(${term})`, "gi");
      highlightedText = highlightedText.replace(regex, "<mark>$1</mark>");
    });

    return highlightedText;
  }

  navigateToCharacter(clanKey, characterId) {
    // First, activate the clan
    const clanButton = document.querySelector(`[data-clan="${clanKey}"]`);
    if (clanButton) {
      this.kindredDisplay.setActiveClanButton(clanButton);
      this.kindredDisplay.displayClan(clanKey);

      // Then select the specific character
      setTimeout(() => {
        this.kindredDisplay.selectCharacter(clanKey, characterId);
      }, 100);
    }
  }

  clearSearch() {
    this.searchInput.value = "";
    this.hideResults();
    this.hideClearButton();
    this.searchInput.focus();
  }

  showResults() {
    this.resultsContainer.style.display = "block";
  }

  hideResults() {
    this.resultsContainer.style.display = "none";
  }

  showClearButton() {
    this.clearButton.style.display = "block";
  }

  hideClearButton() {
    this.clearButton.style.display = "none";
  }

  setActiveClanButton(activeButton) {
    const clanButtons = document.querySelectorAll(".kindred-nav__button");
    clanButtons.forEach((btn) =>
      btn.classList.remove("kindred-nav__button--active")
    );
    activeButton.classList.add("kindred-nav__button--active");
  }
}
