document.addEventListener("DOMContentLoaded", () => {
  const viewPanel = document.getElementById("view-panel");
  const navButtons = document.querySelectorAll(".nav__button");

  navButtons.forEach((button) => {
    button.addEventListener("click", (e) => {
      const section = e.target.getAttribute("data-section");
      setActiveButton(e.target);
      loadSection(section);
    });
  });

  function setActiveButton(activeButton) {
    navButtons.forEach((btn) => btn.classList.remove("nav__button--active"));
    activeButton.classList.add("nav__button--active");
  }

  function loadExternalContent(url) {
    return fetch(url)
      .then((response) => response.text())
      .then((html) => {
        viewPanel.innerHTML = html;

        // Load dice roller script if it's the dice roller section
        if (url.includes("diceroller")) {
          loadScript("./scripts/diceRoller.js").then(() => {
            // Initialize dice roller after script loads
            if (window.initializeDiceRoller) {
              window.initializeDiceRoller();
            }
          });
        }
      })
      .catch((error) => {
        console.error("Error loading content:", error);
        viewPanel.innerHTML = "<p>Error loading content.</p>";
      });
  }

  function loadScript(src) {
    return new Promise((resolve, reject) => {
      const script = document.createElement("script");
      script.src = src;
      script.onload = resolve;
      script.onerror = reject;
      document.head.appendChild(script);
    });
  }

  function loadSection(section) {
    switch (section) {
      case "history":
        loadExternalContent("./sections/history.html");
        break;
      case "characters":
        loadExternalContent("./sections/characters.html");
        break;
      case "locations":
        loadExternalContent("./sections/locations.html");
        break;
      case "diceroller":
        loadExternalContent("./sections/diceroller.html");
        break;
      case "resources":
        loadExternalContent("./sections/resources.html");
        break;
      default:
        renderDefaultContent();
    }
  }

  function renderDefaultContent() {
    viewPanel.innerHTML = `
      <section class="content scrollbar">
        <h2 class="content__title">🌃 Welcome to Las Vegas by Night</h2>
        <p class="content__body">Select a section from the navigation to begin exploring the dark secrets of Sin City...</p>
      </section>
    `;
  }

  // Load default content
  loadSection("default");
});
