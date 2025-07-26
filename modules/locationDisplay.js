export class LocationDisplay {
  constructor(locationData) {
    this.locationData = locationData;
    this.categoryButtons = document.querySelectorAll(
      ".location-nav__category-button"
    );
    this.areaNav = document.getElementById("area-nav");
    this.areaNavTitle = document.getElementById("area-nav-title");
    this.areaNavList = document.getElementById("area-nav-list");
    this.locationDisplay = document.getElementById("location-display");
    this.specificLocationDisplay = document.getElementById(
      "specific-location-display"
    );

    this.currentCategory = null;
    this.currentArea = null;
    this.currentLocation = null;
  }

  displayCategory(categoryKey) {
    const categoryData = this.locationData[categoryKey];

    if (!categoryData) {
      console.error("Category data not found for:", categoryKey);
      return;
    }

    this.currentCategory = categoryKey;
    this.currentArea = null;
    this.currentLocation = null;

    // Hide specific location display
    this.specificLocationDisplay.style.display = "none";

    // Show and populate area navigation
    this.areaNav.style.display = "block";
    this.areaNavTitle.textContent = categoryData.name;

    this.areaNavList.innerHTML = Object.entries(categoryData.areas)
      .map(
        ([areaKey, area]) => `
      <li class="area-nav__item">
        <button class="area-nav__button" data-area="${areaKey}">
          ${area.name}
        </button>
      </li>
    `
      )
      .join("");

    // Show category information
    this.locationDisplay.innerHTML = `
      <div class="location-display__header">
        <h3 class="content__heading">${categoryData.name}</h3>
      </div>
      <div class="location-display__description">
        <p class="content__body">${categoryData.description}</p>
      </div>
    `;

    // Add event listeners to area buttons
    this.areaNavList.querySelectorAll(".area-nav__button").forEach((button) => {
      button.addEventListener("click", (e) => {
        const areaKey = e.target.getAttribute("data-area");
        this.setActiveAreaButton(e.target);
        this.displayArea(this.currentCategory, areaKey);
      });
    });
  }

  displayArea(categoryKey, areaKey) {
    const categoryData = this.locationData[categoryKey];
    const areaData = categoryData.areas[areaKey];

    if (!areaData) {
      console.error("Area data not found");
      return;
    }

    this.currentArea = areaKey;
    this.currentLocation = null;

    // Hide specific location display
    this.specificLocationDisplay.style.display = "none";

    let html = `
      <div class="location-display__header">
        <h3 class="content__heading">${areaData.name}</h3>
      </div>
      <div class="location-display__description">
        <p class="content__body">${areaData.description}</p>
      </div>
    `;

    if (areaData.locations && areaData.locations.length > 0) {
      html += `
        <div class="specific-location-list">
          <div class="specific-location-list__header">
            <h4 class="content__subheading">Specific Locations</h4>
          </div>
          <div class="specific-location-list__grid">
            ${areaData.locations
              .map(
                (location) => `
              <div class="location-card" data-location="${location.id}">
                <div class="location-card__name">${location.name}</div>
                <div class="location-card__type">${location.type}</div>
                <div class="location-card__description">${location.shortDescription}</div>
              </div>
            `
              )
              .join("")}
          </div>
        </div>
      `;
    } else {
      html += `
        <div class="location-display__no-locations">
          <p class="content__body"><em>No specific locations detailed for this area yet. Check back for future updates!</em></p>
        </div>
      `;
    }

    this.locationDisplay.innerHTML = html;

    // Add click listeners to location cards
    this.locationDisplay.querySelectorAll(".location-card").forEach((card) => {
      card.addEventListener("click", (e) => {
        const locationId = card.getAttribute("data-location");
        this.setActiveLocationCard(card);
        this.displaySpecificLocation(categoryKey, areaKey, locationId);
      });
    });
  }

  displaySpecificLocation(categoryKey, areaKey, locationId) {
    const categoryData = this.locationData[categoryKey];
    const areaData = categoryData.areas[areaKey];
    const location = areaData.locations.find((loc) => loc.id === locationId);

    if (!location) {
      console.error("Location not found");
      return;
    }

    this.currentLocation = locationId;

    this.specificLocationDisplay.innerHTML = `
      <div class="specific-location-display__header">
        <div>
          <h3 class="specific-location-display__name">${location.name}</h3>
          <p class="specific-location-display__type">${location.type}</p>
        </div>
      </div>

      <div class="specific-location-display__quote">
        <p class="content__body"><em>"${location.shortDescription}"</em></p>
      </div>

      <div class="specific-location-display__details">
        ${Object.entries(location.sections)
          .map(
            ([sectionKey, content]) => `
          <div class="detail-block">
            <h4 class="detail-block__title">${this.formatSectionTitle(
              sectionKey
            )}</h4>
            <div class="detail-block__content">
              <p class="content__body">${content}</p>
            </div>
          </div>
        `
          )
          .join("")}

        ${
          location.details
            ? `
          <div class="detail-block">
            <h4 class="detail-block__title">Details</h4>
            <div class="detail-block__content">
              ${Object.entries(location.details)
                .map(
                  ([key, value]) => `
                <p class="content__body">
                  <strong>${this.formatDetailKey(key)}:</strong> 
                  ${Array.isArray(value) ? value.join(", ") : value}
                </p>
              `
                )
                .join("")}
            </div>
          </div>
        `
            : ""
        }
      </div>

      <button class="content__button" onclick="document.getElementById('specific-location-display').style.display='none'">
        ← Back to ${areaData.name}
      </button>
    `;

    this.specificLocationDisplay.style.display = "block";
    this.specificLocationDisplay.scrollIntoView({ behavior: "smooth" });
  }

  formatSectionTitle(key) {
    return key
      .replace(/([A-Z])/g, " $1")
      .replace(/^./, (str) => str.toUpperCase())
      .replace(/([a-z])([A-Z])/g, "$1 $2");
  }

  formatDetailKey(key) {
    return key
      .replace(/([A-Z])/g, " $1")
      .replace(/^./, (str) => str.toUpperCase())
      .replace(/([a-z])([A-Z])/g, "$1 $2");
  }

  setActiveCategoryButton(activeButton) {
    this.categoryButtons.forEach((btn) =>
      btn.classList.remove("location-nav__category-button--active")
    );
    activeButton.classList.add("location-nav__category-button--active");
  }

  setActiveAreaButton(activeButton) {
    this.areaNavList
      .querySelectorAll(".area-nav__button")
      .forEach((btn) => btn.classList.remove("area-nav__button--active"));
    activeButton.classList.add("area-nav__button--active");
  }

  setActiveLocationCard(activeCard) {
    this.locationDisplay
      .querySelectorAll(".location-card")
      .forEach((card) => card.classList.remove("location-card--active"));
    activeCard.classList.add("location-card--active");
  }
}
