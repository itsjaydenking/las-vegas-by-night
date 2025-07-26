export class KindredNavigation {
  constructor(kindredDisplay) {
    this.kindredDisplay = kindredDisplay;
    this.clanButtons = document.querySelectorAll(".kindred-nav__button");
    this.init();
  }

  init() {
    this.clanButtons.forEach((button) => {
      button.addEventListener("click", (e) => {
        const selectedClan = e.target.getAttribute("data-clan");
        this.setActiveClanButton(e.target);
        this.kindredDisplay.displayClan(selectedClan);
      });
    });
  }

  setActiveClanButton(activeButton) {
    this.clanButtons.forEach((btn) =>
      btn.classList.remove("kindred-nav__button--active")
    );
    activeButton.classList.add("kindred-nav__button--active");
  }
}
