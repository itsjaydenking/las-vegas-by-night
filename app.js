document.addEventListener("DOMContentLoaded", () => {
  const viewPanel = document.getElementById("view-panel");
  const navButtons = document.querySelectorAll(".app__nav-button");

  navButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const section = button.getAttribute("data-section");
      loadSection(section);
      setActiveButton(button);
    });
  });

  function setActiveButton(activeButton) {
    navButtons.forEach((btn) =>
      btn.classList.remove("app__nav-button--active")
    );
    activeButton.classList.add("app__nav-button--active");
  }

  function loadExternalContent(url) {
    viewPanel.innerHTML = `<p class="app__view-text">Loading...</p>`;
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
        viewPanel.innerHTML = `<p class="app__view-text">Error loading content: ${error.message}</p>`;
      });
  }

  function loadSection(section) {
    switch (section) {
      case "history":
        loadExternalContent("history.html");
        break;

      case "state":
        viewPanel.innerHTML = `
          <h2 class="app__view-title">🌆 State of the City (2020s)</h2>
          <p class="app__view-text">
            Current domains, rack zones, factions, politics.
          </p>`;
        break;

      case "kindred":
        viewPanel.innerHTML = `
          <h2 class="app__view-title">🩸 Kindred of Las Vegas</h2>
          <p class="app__view-text">
            Clans, SPCs, and major figures.
          </p>`;
        break;

      case "others":
        viewPanel.innerHTML = `
          <h2 class="app__view-title">👥 Other Denizens</h2>
          <p class="app__view-text">
            Mortals, ghouls, and other supernaturals.
          </p>`;
        break;

      case "resources":
        viewPanel.innerHTML = `
          <h2 class="app__view-title">🔗 Resources</h2>
          <p class="app__view-text">
            Links to sourcebooks and tools.
          </p>
          <ul class="app__resources-list">
            <li><a href="https://www.drivethrurpg.com/en/product/256795/vampire-the-masquerade-5th-edition?affiliate_id=2821891" target="_blank">V5 Core Rulebook</a></li>
            <li><a href="https://discord.com/channels/849707537120886814/1384959714638692423" target="_blank">V5 Las Vegas Discord</a></li>
            <li><a href="https://vtm.paradoxwikis.com/VTM_Wiki" target="_blank">VTM Wiki</a></li>
            </ul>`;
        break;

      case "roller":
        renderDiceRoller();
        break;

      case "support":
        viewPanel.innerHTML = `
        <h2 class="app__view-title">🌟 Support</h2>
          <p class="app__view-text">
            Ways to support the project:
          </p>
<a href='https://ko-fi.com/B0B6276FQ' target='_blank'><img height='36' style='border:0px;height:36px;' src='https://storage.ko-fi.com/cdn/kofi1.png?v=6' border='0' alt='Buy Me a Coffee at ko-fi.com' /></a>          `;
        break;

      default:
        viewPanel.innerHTML = `
          <h2 class="app__view-title">Welcome to Las Vegas by Night</h2>
          <p class="app__view-text">
            Select a section from the sidebar to begin exploring.
          </p>`;
    }
  }

  function renderDiceRoller() {
    viewPanel.innerHTML = `
      <h2 class="app__view-title">🎲 Dice Roller</h2>
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
