export class LocationSearch {
  constructor(locationData, locationDisplay) {
    this.locationData = locationData;
    this.locationDisplay = locationDisplay;
    this.searchInput = document.getElementById('location-search-input');
    this.clearButton = document.getElementById('location-search-clear');
    this.resultsContainer = document.getElementById('location-search-results');
    
    this.allLocations = this.buildSearchIndex();
    this.init();
  }

  init() {
    // Search input handler with debounce
    let searchTimeout;
    this.searchInput.addEventListener('input', (e) => {
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
    this.clearButton.addEventListener('click', () => {
      this.clearSearch();
    });

    // ESC key to clear search
    this.searchInput.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') {
        this.clearSearch();
      }
    });
  }

  buildSearchIndex() {
    const locations = [];
    
    // Iterate through all categories, areas, and locations
    Object.entries(this.locationData).forEach(([categoryKey, category]) => {
      Object.entries(category.areas).forEach(([areaKey, area]) => {
        if (area.locations && area.locations.length > 0) {
          area.locations.forEach(location => {
            locations.push({
              ...location,
              categoryKey,
              categoryName: category.name,
              areaKey,
              areaName: area.name,
              // Create searchable text combining all relevant content
              searchText: this.createSearchText(location, area.name, category.name)
            });
          });
        }
      });
    });
    
    return locations;
  }

  createSearchText(location, areaName, categoryName) {
    // Combine all searchable text fields
    const textParts = [
      location.name,
      location.type,
      location.shortDescription,
      areaName,
      categoryName,
      ...(location.sections ? Object.values(location.sections) : []),
      ...(location.details ? Object.values(location.details).flat() : [])
    ];
    
    return textParts.join(' ').toLowerCase();
  }

  performSearch(query) {
    const searchTerms = query.toLowerCase().split(' ').filter(term => term.length > 0);
    
    const results = this.allLocations.filter(location => {
      // Location must match ALL search terms (AND logic)
      return searchTerms.every(term => location.searchText.includes(term));
    });

    this.displayResults(results, query);
  }

  displayResults(results, query) {
    if (results.length === 0) {
      this.resultsContainer.innerHTML = `
        <div class="location-search__no-results">
          <p class="content__body">No locations found for "${query}"</p>
        </div>
      `;
    } else {
      this.resultsContainer.innerHTML = `
        <div class="location-search__results-header">
          <p class="content__body">Found ${results.length} location${results.length === 1 ? '' : 's'} for "${query}"</p>
        </div>
        <div class="location-search__results-list">
          ${results.map(location => `
            <div class="search-result-card" data-category="${location.categoryKey}" data-area="${location.areaKey}" data-location="${location.id}">
              <div class="search-result-card__header">
                <h4 class="search-result-card__name">${this.highlightText(location.name, query)}</h4>
                <span class="search-result-card__type">${location.type}</span>
              </div>
              <p class="search-result-card__description">${this.highlightText(location.shortDescription, query)}</p>
              <div class="search-result-card__location">
                <span class="search-result-card__area">${location.areaName}</span>
                <span class="search-result-card__separator">•</span>
                <span class="search-result-card__category">${location.categoryName}</span>
              </div>
            </div>
          `).join('')}
        </div>
      `;

      // Add click handlers to result cards
      this.resultsContainer.querySelectorAll('.search-result-card').forEach(card => {
        card.addEventListener('click', () => {
          const categoryKey = card.dataset.category;
          const areaKey = card.dataset.area;
          const locationId = card.dataset.location;
          
          // Navigate to the location
          this.navigateToLocation(categoryKey, areaKey, locationId);
          this.clearSearch();
        });
      });
    }

    this.showResults();
  }

  highlightText(text, query) {
    if (!query) return text;
    
    const searchTerms = query.toLowerCase().split(' ').filter(term => term.length > 0);
    let highlightedText = text;
    
    searchTerms.forEach(term => {
      const regex = new RegExp(`(${term})`, 'gi');
      highlightedText = highlightedText.replace(regex, '<mark>$1</mark>');
    });
    
    return highlightedText;
  }

  navigateToLocation(categoryKey, areaKey, locationId) {
    // First, activate the category
    const categoryButton = document.querySelector(`[data-category="${categoryKey}"]`);
    if (categoryButton) {
      this.locationDisplay.setActiveCategoryButton(categoryButton);
      this.locationDisplay.displayCategory(categoryKey);
      
      // Then activate the area
      setTimeout(() => {
        const areaButton = document.querySelector(`[data-area="${areaKey}"]`);
        if (areaButton) {
          this.locationDisplay.setActiveAreaButton(areaButton);
          this.locationDisplay.displayArea(categoryKey, areaKey);
          
          // Finally, show the specific location
          setTimeout(() => {
            this.locationDisplay.displaySpecificLocation(categoryKey, areaKey, locationId);
          }, 100);
        }
      }, 100);
    }
  }

  clearSearch() {
    this.searchInput.value = '';
    this.hideResults();
    this.hideClearButton();
    this.searchInput.focus();
  }

  showResults() {
    this.resultsContainer.style.display = 'block';
  }

  hideResults() {
    this.resultsContainer.style.display = 'none';
  }

  showClearButton() {
    this.clearButton.style.display = 'block';
  }

  hideClearButton() {
    this.clearButton.style.display = 'none';
  }
}