// V5 Dice Roller Implementation
function initializeDiceRoller() {
  const rollButton = document.getElementById("roll-button");

  if (rollButton) {
    rollButton.addEventListener("click", handleDiceRoll);
  }
}

function handleDiceRoll() {
  const totalDice = parseInt(document.getElementById("total-dice").value) || 0;
  const hungerDice =
    parseInt(document.getElementById("hunger-dice").value) || 0;
  const difficulty =
    parseInt(document.getElementById("difficulty").value) || null;

  rollV5Dice(totalDice, hungerDice, difficulty);
}

function rollV5Dice(totalDice, hungerDice, difficulty = null) {
  const resultsDiv = document.getElementById("roller-results");

  // Validation
  if (totalDice < 1) {
    resultsDiv.innerHTML =
      '<p class="roller__error">You must roll at least 1 die!</p>';
    return;
  }

  if (hungerDice > totalDice) {
    resultsDiv.innerHTML =
      '<p class="roller__error">Hunger dice cannot exceed total dice!</p>';
    return;
  }

  if (hungerDice > 5) {
    resultsDiv.innerHTML =
      '<p class="roller__error">Hunger dice cannot exceed 5!</p>';
    return;
  }

  // Calculate dice counts
  const normalDiceCount = totalDice - hungerDice;
  const normalRolls = [];
  const hungerRolls = [];

  // Roll the dice
  for (let i = 0; i < normalDiceCount; i++) {
    normalRolls.push(rollDie());
  }

  for (let i = 0; i < hungerDice; i++) {
    hungerRolls.push(rollDie());
  }

  // Count successes and special results
  let successes = 0;
  let normalTens = 0;
  let hungerTens = 0;
  let hungerOnes = 0;

  // Process normal dice
  normalRolls.forEach((val) => {
    if (val >= 6 && val < 10) successes++;
    if (val === 10) {
      normalTens++;
      successes += 2;
    }
  });

  // Process hunger dice
  hungerRolls.forEach((val) => {
    if (val >= 6 && val < 10) successes++;
    if (val === 10) {
      hungerTens++;
      successes += 2;
    }
    if (val === 1) hungerOnes++;
  });

  // Determine critical success
  const totalTens = normalTens + hungerTens;
  const critPairs = Math.floor(totalTens / 2);
  const hasCrit = critPairs >= 1;
  const messyCrit = hasCrit && hungerTens > 0;

  // Determine outcome
  let outcome = "";
  let outcomeClass = "";

  if (difficulty !== null) {
    if (successes >= difficulty) {
      if (messyCrit) {
        outcome = `✅ Messy Critical Success (${successes}/${difficulty})`;
        outcomeClass = "roller__outcome--messy-success";
      } else if (hasCrit) {
        outcome = `✅ Critical Success (${successes}/${difficulty})`;
        outcomeClass = "roller__outcome--critical";
      } else {
        outcome = `✅ Success (${successes}/${difficulty})`;
        outcomeClass = "roller__outcome--success";
      }
    } else {
      if (hungerOnes > 0) {
        outcome = `❌ Bestial Failure (${successes}/${difficulty})`;
        outcomeClass = "roller__outcome--bestial-failure";
      } else {
        outcome = `❌ Failure (${successes}/${difficulty})`;
        outcomeClass = "roller__outcome--failure";
      }
    }
  } else {
    outcome = `Total Successes: ${successes}`;
    outcomeClass = "roller__outcome--neutral";

    if (messyCrit) {
      outcome += "<br>⚠️ Messy Critical Possible!";
    } else if (hasCrit) {
      outcome += "<br>★ Critical Possible!";
    }
  }

  // Format dice display
  const formatDie = (value) => (value === 10 ? "⚡10" : value.toString());

  // Build results HTML
  let html = '<div class="roller__result-section">';

  if (normalRolls.length > 0) {
    html += `<p class="roller__dice-result">
      <span class="roller__dice-label">Normal Dice:</span>
      <span class="roller__dice-values">[${normalRolls
        .map(formatDie)
        .join(", ")}]</span>
    </p>`;
  }

  if (hungerRolls.length > 0) {
    html += `<p class="roller__dice-result roller__dice-result--hunger">
      <span class="roller__dice-label">Hunger Dice:</span>
      <span class="roller__dice-values">[${hungerRolls
        .map(formatDie)
        .join(", ")}]</span>
    </p>`;
  }

  html += `<p class="roller__success-count">Successes: <strong>${successes}</strong></p>`;
  html += `<p class="roller__outcome ${outcomeClass}">${outcome}</p>`;

  // Add hunger warning if needed
  if (hungerOnes > 0 && successes >= (difficulty || 0)) {
    html += `<p class="roller__warning">⚠️ Hunger die rolled 1: Bestial Compulsion possible!</p>`;
  }

  html += "</div>";

  resultsDiv.innerHTML = html;
}

function rollDie() {
  return Math.floor(Math.random() * 10) + 1;
}

// Initialize immediately when script loads
initializeDiceRoller();

// Export for use in other modules if needed
window.rollV5Dice = rollV5Dice;
window.initializeDiceRoller = initializeDiceRoller;
