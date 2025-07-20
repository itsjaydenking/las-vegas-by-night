document.addEventListener("DOMContentLoaded", () => {
  const viewPanel = document.getElementById("view-panel");
  const navButtons = document.querySelectorAll(".nav__button");

  navButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const section = button.getAttribute("data-section");
      loadSection(section);
      setActiveButton(button);
    });
  });

  function setActiveButton(activeButton) {
    navButtons.forEach((btn) =>
      btn.classList.remove("nav__button--active")
    );
    activeButton.classList.add("nav__button--active");
  }

  function loadExternalContent(url) {
    viewPanel.innerHTML = `<p class="content__body">Loading...</p>`;
    fetch(url)
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.text();
      })
      .then((html) => {
        viewPanel.innerHTML = html;
      })
      .catch((error) => {
        viewPanel.innerHTML = `<p class="content__body">Error loading content: ${error.message}</p>`;
      });
  }

  function loadSection(section) {
    switch (section) {
      case "history":
        loadExternalContent("./sections/history.html");
        break;

      case "state":
        viewPanel.innerHTML = `
          <h2 class="content__title">🌆 State of the City (2020s)</h2>
          <p class="content__body">
            Current domains, rack zones, factions, politics.
          </p>`;
        break;

      case "kindred":
        viewPanel.innerHTML = `
          <h2 class="content__title">🩸 Kindred of Las Vegas</h2>
          <p class="content__body">
            Clans, SPCs, and major figures.
          </p>`;
        break;

      case "others":
        viewPanel.innerHTML = `
          <h2 class="content__title">👥 Other Denizens</h2>
          <p class="content__body">
            Mortals, ghouls, and other supernaturals.
          </p>`;
        break;

      case "resources":
        loadExternalContent("./sections/resources.html");
        break;

      case "roller":
        renderDiceRoller();
        break;

      case "support":
        viewPanel.innerHTML = `
        <h2 class="content__title">🌟 Support</h2>
          <p class="content__body">
            Ways to support the project:
          </p>
<a href='https://ko-fi.com/B0B6276FQ' target='_blank'><img height='36' style='border:0px;height:36px;' src='https://storage.ko-fi.com/cdn/kofi1.png?v=6' border='0' alt='Buy Me a Coffee at ko-fi.com' /></a>
<a href="https://www.dmsguild.com/product/369197?affiliate_id=2821891" target="_blank">She is the Ancient<a> by Beth the Bard          `;
        break;

      default:
        viewPanel.innerHTML = `
          <h2 class="content__title">Welcome to Las Vegas by Night</h2>
          <h3 class="content__heading">A Dark and Twisted City</h3>
          <h4 class="content__subheading">Beneath the Neon Lights</h4>
          <p class="content__body">
            Select a section from the sidebar to begin exploring the city's dark
            underbelly.
          </p>
 `;
    }
  }

  function renderDiceRoller() {
    viewPanel.innerHTML = `
      <h2 class="content__title">🎲 Dice Roller</h2>
<div class="app__roller">
  <label class="app__roller-label">
    Total Dice:
    <input class="app__roller-input" id="total-dice" type="number" min="1" value="6">
  </label>
  <label class="app__roller-label">
    Hunger Dice:
    <input class="app__roller-input" id="hunger-dice" type="number" min="0" value="1">
  </label>
  <label class="app__roller-label">
    Difficulty (optional):
    <input class="app__roller-input" id="difficulty" type="number" min="0" placeholder="e.g. 2">
  </label>
  <button class="app__roller-button" id="roll-button">Roll Dice</button>
  <div id="roller-results" class="app__roller-results"></div>
</div>`;

    // Attach listener *after rendering*
    document.getElementById("roll-button").addEventListener("click", () => {
      const totalDice =
        parseInt(document.getElementById("total-dice").value) || 0;
      const hungerDice =
        parseInt(document.getElementById("hunger-dice").value) || 0;
      rollV5Dice(totalDice, hungerDice);
    });
  }

  function rollV5Dice(totalDice, hungerDice) {
    const resultsDiv = document.getElementById("roller-results");
    const difficultyInput = document.getElementById("difficulty");
    const difficulty = parseInt(difficultyInput?.value);

    if (totalDice < 1) {
      resultsDiv.innerHTML = `<p class="app__roller-text">You must roll at least 1 die!</p>`;
      return;
    }

    if (hungerDice > totalDice) hungerDice = totalDice;

    const normalDiceCount = totalDice - hungerDice;
    const normalRolls = [];
    const hungerRolls = [];

    for (let i = 0; i < normalDiceCount; i++) normalRolls.push(rollDie());
    for (let i = 0; i < hungerDice; i++) hungerRolls.push(rollDie());

    let successes = 0;
    let normalTens = 0;
    let hungerTens = 0;
    let hungerOnes = 0;

    const showDie = (v) => (v === 10 ? "10★" : v);

    normalRolls.forEach((val) => {
      if (val >= 6 && val < 10) successes++;
      if (val === 10) {
        normalTens++;
        successes += 2;
      }
    });

    hungerRolls.forEach((val) => {
      if (val >= 6 && val < 10) successes++;
      if (val === 10) {
        hungerTens++;
        successes += 2;
      }
      if (val === 1) hungerOnes++;
    });

    const totalTens = normalTens + hungerTens;
    const critPairs = Math.floor(totalTens / 2);
    const hasCrit = critPairs >= 1;
    const messyCrit = hasCrit && hungerTens > 0;

    // Determine outcome text
    let outcome = "";
    let failure = false;
    let bestialFailure = false;

    if (!isNaN(difficulty)) {
      if (successes >= difficulty) {
        if (messyCrit) {
          outcome = `✅ Messy Critical Success (>=${difficulty})`;
        } else if (hasCrit) {
          outcome = `✅ Critical Success (>=${difficulty})`;
        } else {
          outcome = `✅ Success (>=${difficulty})`;
        }
      } else {
        failure = true;
        if (hungerOnes > 0) {
          outcome = `❌ Bestial Failure (failed <${difficulty} with Hunger 1)`;
          bestialFailure = true;
        } else {
          outcome = `❌ Failure (<${difficulty})`;
        }
      }
    } else {
      // No difficulty set
      outcome = `Total Successes: ${successes}`;
      if (messyCrit) outcome += `<br>⚠️ Messy Critical Possible!`;
      else if (hasCrit) outcome += `<br>★ Critical Possible!`;
    }

    // Always warn about Hunger 1 even if success
    let hungerOneWarning = "";
    if (hungerOnes > 0 && !failure) {
      hungerOneWarning = `<p class="app__roller-text app__roller-text--bestial">⚠️ Hunger Die rolled 1: Bestial Compulsion possible!</p>`;
    }

    // Display output
    let output = `
    <h3 class="app__roller-subtitle">🎲 Results</h3>
    <p class="app__roller-text">Normal Dice: [ ${normalRolls
      .map(showDie)
      .join(", ")} ]</p>
    <p class="app__roller-text app__roller-text--hunger">Hunger Dice: [ ${hungerRolls
      .map(showDie)
      .join(", ")} ]</p>
    <p class="app__roller-text">Successes Counted: <strong>${successes}</strong></p>
    <p class="app__roller-text app__roller-text--outcome">${outcome}</p>
    ${hungerOneWarning}
  `;

    resultsDiv.innerHTML = output;
  }

  function rollDie() {
    return Math.floor(Math.random() * 10) + 1;
  }
});
