export class LocationNavigation {
  constructor(locationDisplay) {
    this.locationDisplay = locationDisplay;
    this.categoryButtons = document.querySelectorAll(
      ".location-nav__category-button"
    );
    this.init();
  }

  init() {
    this.categoryButtons.forEach((button) => {
      button.addEventListener("click", (e) => {
        const selectedCategory = e.target.getAttribute("data-category");
        this.locationDisplay.setActiveCategoryButton(e.target);
        this.locationDisplay.displayCategory(selectedCategory);
      });
    });
  }
}
