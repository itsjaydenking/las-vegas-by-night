function loadExternalContent(url) {
  return fetch(url)
    .then((response) => response.text())
    .then((html) => {
      viewPanel.innerHTML = html;

      // Load dice roller script if it's the dice roller section
      if (url.includes("diceroller")) {
        return loadScript("./scripts/diceSystem.js");
        // Remove the .then() call to initializeDiceRoller()
      }
    })
    .catch((error) => {
      console.error("Error loading content:", error);
    });
}

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
          loadScript("./scripts/diceSystem.js").then(() => {
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

  function loadScript(src, type = "text/javascript") {
    return new Promise((resolve, reject) => {
      const script = document.createElement("script");
      script.src = src;
      script.type = type;
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
      case "locations":
        loadExternalContent("./sections/locations.html").then(() => {
          loadScript("./scripts/locationsSystem.js", "module").then(() => {
            if (window.initializeLocationsSystem) {
              window.initializeLocationsSystem();
            }
          });
        });
        break;
      case "kindred":
        loadExternalContent("./sections/kindred.html").then(() => {
          loadScript("./scripts/kindredSystem.js", "module").then(() => {
            if (window.initializeKindredSystem) {
              window.initializeKindredSystem();
            }
          });
        });
        break;
      case "lore-sheets":
        loadExternalContent("./sections/lore-sheets.html").then(() => {
          loadScript("./scripts/loreSheetsSystem.js").then(() => {
            if (window.initializeLoreSheetsSystem) {
              window.initializeLoreSheetsSystem();
            }
          });
        });
        break;
      case "diceroller":
        loadExternalContent("./sections/diceroller.html");
        break;
      case "resources":
        loadExternalContent("./sections/resources.html");
        break;
      case "changelog":
        loadExternalContent("./sections/changelog.html");
        break;
      case "home":
        loadExternalContent("./sections/home.html");
        break;
      case "additional":
        loadExternalContent("./sections/additional-reading.html").then(() => {
          loadScript("./scripts/additionalReadingSystem.js").then(() => {
            if (window.initializeAdditionalReadingSystem) {
              window.initializeAdditionalReadingSystem();
            }
          });
        });
        break;
      case "coteries":
        loadExternalContent("./sections/coteries.html").then(() => {
          loadScript("./scripts/coteriesSystem.js").then(() => {
            if (window.initializeCoteriesSystem) {
              window.initializeCoteriesSystem();
            }
          });
        });
        break;
      default:
        loadExternalContent("./sections/default.html");
    }
  }

  // Load default content
  loadSection("home");
});
