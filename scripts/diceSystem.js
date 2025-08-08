// V5 Dice Roller Implementation
let currentRolls = { normal: [], hunger: [] };
let currentDifficulty = null;
let rerollMode = false;
let selectedDice = [];
let isInitialized = false;

function initializeDiceRoller() {
  if (isInitialized) {
    return;
  }

  // Use event delegation on the container
  const viewPanel = document.getElementById("view-panel");
  if (viewPanel) {
    viewPanel.addEventListener("click", handleDiceRollerClicks);
  }

  isInitialized = true;
}

function handleDiceRollerClicks(event) {
  const target = event.target;

  switch (target.id) {
    case "roll-button":
      handleDiceRoll();
      break;
    case "rouse-button":
      handleRouseCheck();
      break;
    case "clear-button":
      clearDice();
      break;
    case "willpower-reroll-button":
      startWillpowerReroll();
      break;
    case "execute-reroll-button":
      executeReroll();
      break;
    case "cancel-reroll-button":
      cancelReroll();
      break;
    case "add-normal-button":
      addDie(false);
      break;
    case "add-hunger-button":
      addDie(true);
      break;
  }
}

function handleDiceRoll() {
  const totalDice = parseInt(document.getElementById("total-dice").value) || 0;
  const hungerDice =
    parseInt(document.getElementById("hunger-dice").value) || 0;
  const difficulty =
    parseInt(document.getElementById("difficulty").value) || null;

  currentDifficulty = difficulty;
  rollV5Dice(totalDice, hungerDice, difficulty);
}

function handleRouseCheck() {
  // Automatically set values for Rouse Check
  currentDifficulty = 1;
  rollV5Dice(1, 1, 1); // 1 total die, 1 hunger die, difficulty 1
}

function clearDice() {
  currentRolls = { normal: [], hunger: [] };
  currentDifficulty = null;
  rerollMode = false;
  selectedDice = [];

  const resultsDiv = document.getElementById("roller-results");
  const postControls = document.getElementById("post-controls");
  const clearButton = document.getElementById("clear-button");

  resultsDiv.innerHTML =
    '<p class="roller__placeholder">Click "Roll Dice" to see results</p>';
  if (postControls) {
    postControls.style.display = "none";
  }
  clearButton.disabled = true;

  exitRerollMode();
}

function startWillpowerReroll() {
  if (currentRolls.normal.length === 0) {
    alert("No normal dice to reroll!");
    return;
  }

  rerollMode = true;
  selectedDice = [];

  document.getElementById("reroll-instructions").style.display = "block";
  document.getElementById("execute-reroll-button").style.display =
    "inline-block";
  document.getElementById("cancel-reroll-button").style.display =
    "inline-block";
  document.getElementById("willpower-reroll-button").disabled = true;

  // Make normal dice clickable
  updateDiceDisplay();
}

function cancelReroll() {
  exitRerollMode();
  updateDiceDisplay();
}

function exitRerollMode() {
  rerollMode = false;
  selectedDice = [];

  document.getElementById("reroll-instructions").style.display = "none";
  document.getElementById("execute-reroll-button").style.display = "none";
  document.getElementById("cancel-reroll-button").style.display = "none";
  document.getElementById("willpower-reroll-button").disabled = false;
}

function executeReroll() {
  if (selectedDice.length === 0) {
    alert("Please select at least one die to reroll!");
    return;
  }

  // Reroll selected dice
  selectedDice.forEach((index) => {
    currentRolls.normal[index] = rollDie();
  });

  exitRerollMode();
  updateDiceDisplay();
}

function addDie(isHunger) {
  const newRoll = rollDie();

  if (isHunger) {
    if (currentRolls.hunger.length >= 5) {
      alert("Cannot have more than 5 hunger dice!");
      return;
    }
    currentRolls.hunger.push(newRoll);
  } else {
    currentRolls.normal.push(newRoll);
  }

  updateDiceDisplay();
}

function rollV5Dice(totalDice, hungerDice, difficulty = null) {
  const resultsDiv = document.getElementById("roller-results");
  const postControls = document.getElementById("post-controls");
  const clearButton = document.getElementById("clear-button");

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
  currentRolls.normal = [];
  currentRolls.hunger = [];

  // Roll the dice
  for (let i = 0; i < normalDiceCount; i++) {
    currentRolls.normal.push(rollDie());
  }

  for (let i = 0; i < hungerDice; i++) {
    currentRolls.hunger.push(rollDie());
  }

  updateDiceDisplay();

  // Show post-roll controls
  if (postControls) {
    postControls.style.display = "block";
  }
  clearButton.disabled = false;
}

function updateDiceDisplay() {
  const resultsDiv = document.getElementById("roller-results");

  // Calculate results
  const { successes, outcome, outcomeClass, hungerOnes } = calculateResults();

  // Build results HTML
  let html = '<div class="roller__result-section">';

  if (currentRolls.normal.length > 0) {
    html += `<div class="roller__dice-result">
      <span class="roller__dice-label">Normal Dice:</span>
      <div class="roller__dice-container">
        ${currentRolls.normal
          .map((val, index) => formatDie(val, false, index))
          .join("")}
      </div>
    </div>`;
  }

  if (currentRolls.hunger.length > 0) {
    html += `<div class="roller__dice-result roller__dice-result--hunger">
      <span class="roller__dice-label">Hunger Dice:</span>
      <div class="roller__dice-container">
        ${currentRolls.hunger
          .map((val, index) => formatDie(val, true, index))
          .join("")}
      </div>
    </div>`;
  }

  html += `<p class="roller__success-count">Successes: <strong>${successes}</strong></p>`;
  html += `<p class="roller__outcome ${outcomeClass}">${outcome}</p>`;

  // Add hunger warning if needed
  if (hungerOnes > 0 && successes >= (currentDifficulty || 0)) {
    html += `<p class="roller__warning">⚠️ Hunger die rolled 1: Bestial Compulsion possible!</p>`;
  }

  html += "</div>";
  resultsDiv.innerHTML = html;
}

function calculateResults() {
  let successes = 0;
  let normalTens = 0;
  let hungerTens = 0;
  let hungerOnes = 0;

  // Process normal dice
  currentRolls.normal.forEach((val) => {
    if (val >= 6 && val < 10) successes++;
    if (val === 10) {
      normalTens++;
      successes++;
    }
  });

  // Process hunger dice
  currentRolls.hunger.forEach((val) => {
    if (val >= 6 && val < 10) successes++;
    if (val === 10) {
      hungerTens++;
      successes++;
    }
    if (val === 1) hungerOnes++;
  });

  // Calculate critical successes
  const totalTens = normalTens + hungerTens;
  const critPairs = Math.floor(totalTens / 2);
  successes += critPairs * 2;

  const hasCrit = critPairs >= 1;
  const messyCrit = hasCrit && hungerTens > 0;

  // Determine outcome
  let outcome = "";
  let outcomeClass = "";

  // Check if this was a Rouse Check
  const isRouteCheck =
    currentRolls.normal.length === 0 &&
    currentRolls.hunger.length === 1 &&
    currentDifficulty === 1;

  if (isRouteCheck) {
    if (successes >= 1) {
      outcome = `✅ Rouse Check Success - No Hunger gained`;
      outcomeClass = "roller__outcome--success";
    } else {
      outcome = `❌ Rouse Check Failed - Hunger increases by 1`;
      outcomeClass = "roller__outcome--failure";
      if (hungerOnes > 0) {
        outcome = `💀 Rouse Check Bestial Failure - Hunger increases & Compulsion check`;
        outcomeClass = "roller__outcome--bestial-failure";
      }
    }
    return { successes, outcome, outcomeClass, hungerOnes };
  }

  if (currentDifficulty !== null) {
    if (successes >= currentDifficulty) {
      if (messyCrit) {
        outcome = `✅ Messy Critical Success (${successes}/${currentDifficulty})`;
        outcomeClass = "roller__outcome--messy-success";
      } else if (hasCrit) {
        outcome = `✅ Critical Success (${successes}/${currentDifficulty})`;
        outcomeClass = "roller__outcome--critical";
      } else {
        outcome = `✅ Success (${successes}/${currentDifficulty})`;
        outcomeClass = "roller__outcome--success";
      }
    } else {
      if (hungerOnes > 0) {
        outcome = `❌ Bestial Failure (${successes}/${currentDifficulty})`;
        outcomeClass = "roller__outcome--bestial-failure";
      } else {
        outcome = `❌ Failure (${successes}/${currentDifficulty})`;
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

  return { successes, outcome, outcomeClass, hungerOnes };
}

function formatDie(value, isHunger = false, index = 0) {
  let diceClass = "roller__die";
  let symbol = "";

  if (isHunger) {
    diceClass += " roller__die--hunger";
    if (value === 1) {
      diceClass += " roller__die--bestial";
      symbol = "💀";
    } else if (value >= 2 && value <= 5) {
      diceClass += " roller__die--fail";
      symbol = "✖";
    } else if (value >= 6 && value <= 9) {
      diceClass += " roller__die--success";
      symbol = "✓";
    } else if (value === 10) {
      diceClass += " roller__die--crit";
      symbol = "★";
    }
  } else {
    diceClass += " roller__die--normal";
    if (value >= 1 && value <= 5) {
      diceClass += " roller__die--fail";
      symbol = "○";
    } else if (value >= 6 && value <= 9) {
      diceClass += " roller__die--success";
      symbol = "●";
    } else if (value === 10) {
      diceClass += " roller__die--crit";
      symbol = "◆";
    }

    // Add clickable class for reroll mode
    if (rerollMode && !isHunger) {
      diceClass += " roller__die--clickable";
      if (selectedDice.includes(index)) {
        diceClass += " roller__die--selected";
      }
    }
  }

  const clickHandler =
    rerollMode && !isHunger ? `onclick="toggleDieSelection(${index})"` : "";

  return `<div class="${diceClass}" ${clickHandler}>
    <div class="roller__die-symbol">${symbol}</div>
    <div class="roller__die-value">${value}</div>
  </div>`;
}

function toggleDieSelection(index) {
  if (!rerollMode) return;

  const selectedIndex = selectedDice.indexOf(index);

  if (selectedIndex > -1) {
    // Remove from selection
    selectedDice.splice(selectedIndex, 1);
  } else {
    // Add to selection (max 3)
    if (selectedDice.length < 3) {
      selectedDice.push(index);
    } else {
      alert("You can only reroll up to 3 dice with Willpower!");
      return;
    }
  }

  updateDiceDisplay();
}

function rollDie() {
  return Math.floor(Math.random() * 10) + 1;
}

// Make functions globally available
window.toggleDieSelection = toggleDieSelection;

// Initialize immediately when script loads
initializeDiceRoller();

// Export for use in other modules if needed
window.rollV5Dice = rollV5Dice;
window.initializeDiceRoller = initializeDiceRoller;
