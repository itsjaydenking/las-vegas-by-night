// Additional Reading data structure
const readingData = {
  rules: {
    name: "Laws & Governance",
    description: "Official documents, laws, and governance structures that define how Las Vegas operates under vampire rule.",
    documents: {
      "house-rules": {
        title: "House Rules of Las Vegas",
        subtitle: "Proclaimed by Order of the Velvet Table",
        category: "Laws & Governance",
        type: "Official Proclamation",
        author: "The Aces of Las Vegas",
        content: {
          preamble: `"The House always wins. But the House let's everyone play."

A Message from the Aces of Las Vegas: "Welcome to Las Vegas. These are the Terms of Play. You want to exist under these lights? Then know this: survival here isn't granted, it's bought, bartered, and enforced. Break these Rules and you'll find that exile is merciful compared to the alternatives."`,
          rules: [
            {
              number: "I",
              title: "The Masquerade",
              quote: "The first bet you place is the life you lose if you break it.",
              content: "The Veil is absolute. No one exposes what we are, no matter the price. Cameras, social media, inquisitors—they're everywhere, watching for the slightest slip. Reveal your nature, show your power where mortals can see, and you risk not only your Final Death but the city's ruin. The House will deal with breaches swiftly and without mercy."
            },
            {
              number: "II",
              title: "Acknowledgment",
              quote: "You don't play without buying in.",
              content: "No Kindred walks these streets unaccounted for. Present yourself within twenty-four hours of arrival. Declare your clan, lineage, purpose. Thin-blood or Caitiff, neonate or elder—it makes no difference. Without the House's blessing, you're nothing but prey in the desert."
            },
            {
              number: "III",
              title: "Domain & Rack Rights",
              quote: "Territory is the Table. Respect the House Edge.",
              content: "Las Vegas is open, not lawless. Feeding is licensed, territories negotiated at the Table. Claim nothing without approval. Poaching another's Rack is theft, pure and simple. Hunt recklessly, endanger the Masquerade, or threaten mortal stability, and the House will cut you out of the game permanently."
            },
            {
              number: "IV",
              title: "Progeny",
              quote: "New blood needs permission to join the game.",
              content: "No Embrace happens without the House's word. Make a childe without sanction and you condemn them and yourself to destruction. Sires are accountable for their Progeny until they're Released. Thin-blood births that go unsponsored will be culled unless they prove their worth."
            },
            {
              number: "V",
              title: "The Court of Faces",
              quote: "The Table is open, but the Dealer sets the game.",
              content: "The Court of Faces exists to speak, argue, and bargain for their Suits. Kings, Queens, and Jacks hold votes and make deals, but they don't rule. The Aces hear them out, weigh the stakes, and make the final call. The Table is open for business—but the House decides how the game is played."
            },
            {
              number: "VI",
              title: "The Suits",
              quote: "A full Deck is a peaceful Table.",
              content: "Four Suits divide this city: Spades for the House, Clubs for the Anarchs, Hearts for the Independents, Diamonds for the Camarilla. Each is expected to keep its own in line. Handle your coteries, your grudges, your messes. Fail to do so, and the House will intervene on its own terms."
            },
            {
              number: "VII",
              title: "Boons & Debts",
              quote: "Everything has a price.",
              content: "Boons are our currency, our contracts, our leverage. Make a promise, pay it. Refuse to honor a Boon without cause and you risk exile or worse. False claims are fraud against the House itself. The Ledger is watched. The Gossips remember everything."
            },
            {
              number: "VIII",
              title: "Elysium",
              quote: "No blood on the casino floor.",
              content: "Elysium is sacred ground, declared neutral by the House. No violence, no feeding, no discipline without permission. It exists so we can trade, negotiate, and threaten each other civilly. Break the peace, and the House will remind you why the floor stays clean."
            },
            {
              number: "IX",
              title: "Blood Hunts",
              quote: "Sometimes the House burns the Deck.",
              content: "When the Aces declare a Blood Hunt, the city unites to hunt the target. Aid them and you share their sentence. Every Suit, every Face is expected to comply. When the House calls the Hunt, there is no negotiation. Only quarry—and executioners."
            },
            {
              number: "X",
              title: "The House's Final Word",
              quote: "The House Rules are not suggestions.",
              content: "The Aces hold final authority over these laws. They may amend, suspend, or override any Rule at their discretion. Question their judgment if you want—but understand that such challenges are settled in blood, not debate."
            }
          ]
        },
        notes: "These rules form the backbone of supernatural law in Las Vegas, blending traditional vampire traditions with the city's unique casino-themed governance structure."
      }
    }
  },
  vocabulary: {
    name: "Terminology & Slang",
    description: "Local slang, terminology, and phrases used by the Kindred of Las Vegas.",
    documents: {
      "vegas-vocab": {
        title: "Las Vegas Kindred Vocabulary",
        subtitle: "Common Phrases & Terminology",
        category: "Terminology & Slang",
        type: "Reference Guide",
        author: "Compiled by The Gossips",
        content: {
          introduction: "The Kindred of Las Vegas have developed their own unique terminology that blends traditional vampire language with casino and gambling metaphors. Understanding these terms is essential for navigating the city's supernatural society.",
          terms: [
            {
              term: "Aces",
              definition: "The ruling powers of each Suit. Primarily the city's two Princes and their seneschals.",
              usage: "\"The Aces have called a meeting at the Velvet Table.\""
            },
            {
              term: "Suits",
              definition: "The different Sects living and working within the city.",
              breakdown: [
                "♠ Spades = The House",
                "♣ Clubs = Anarchs", 
                "♦ Diamonds = Camarilla",
                "♥ Hearts = Independent kindred either unwilling to join a sect or unwanted by those sects"
              ]
            },
            {
              term: "Chips",
              definition: "Boons. The material, color, and markings on a chip indicate the type of boon and who owes it.",
              usage: "\"I'm calling in my chips from that favor last month.\""
            },
            {
              term: "Blocs",
              definition: "The divided portions of the City by Sect or 'Suit'.",
              usage: "\"That territory is in the Diamond Bloc - Camarilla turf.\""
            },
            {
              term: "The Court of Faces",
              definition: "The collective of those kindred holding the Titles of Ace, King, Queen, and Jack for their respective suits. The Court of Faces assemble as a group when governance needs to happen, or large choices impacting the city as a whole need to be made.",
              usage: "\"The Court of Faces will decide this matter next week.\""
            },
            {
              term: "The House",
              definition: "The organization of select powerful kindred running the unique system that is Las Vegas.",
              usage: "\"The House always has the final say.\""
            },
            {
              term: "House Cards",
              definition: "Kindred ID, also reflects a kindred's standing with The House.",
              note: "See: 'Burn a card'"
            },
            {
              term: "Task Cards",
              definition: "Assignments from the House.",
              usage: "\"I received a new Task Card tonight - looks like trouble.\""
            }
          ],
          phrases: [
            {
              phrase: "Shuffling the Deck",
              meaning: "Forcing a vote to replace Face Cards.",
              usage: "\"The younger vampires are talking about shuffling the deck after that disaster.\""
            },
            {
              phrase: "Burn a Card",
              meaning: "Exile or execution of a Kindred.",
              usage: "\"Cross the Aces and they'll burn your card before sunrise.\""
            },
            {
              phrase: "Dealer's Choice",
              meaning: "The Aces ruling unilaterally.",
              usage: "\"This isn't up for debate - it's dealer's choice.\""
            },
            {
              phrase: "Cutting the Deck",
              meaning: "Redrawing territory or Rack rights.",
              usage: "\"After the incident, they're cutting the deck on downtown feeding rights.\""
            },
            {
              phrase: "All In",
              meaning: "A Suit risking everything on a major boon or deal.",
              usage: "\"The Anarchs are going all in on this territorial dispute.\""
            },
            {
              phrase: "Stacked Deck",
              meaning: "Corrupt voting bloc ensuring outcomes.",
              usage: "\"That vote was rigged - total stacked deck situation.\""
            },
            {
              phrase: "House Rules",
              meaning: "The fundamental laws enforced by the Aces.",
              usage: "\"You violated House Rules - now face the consequences.\""
            },
            {
              phrase: "Cashing in your chips",
              meaning: "Calling on a boon or boons.",
              usage: "\"Time to cash in my chips - I need that favor repaid.\""
            }
          ]
        },
        notes: "This vocabulary reflects Las Vegas's unique blend of traditional vampire politics with the city's gambling culture. New arrivals are expected to learn these terms quickly to avoid embarrassment or misunderstandings."
      }
    }
  },
  documents: {
    name: "In-World Documents",
    description: "Letters, memos, reports, and other documents from the world of Las Vegas by Night.",
    documents: {
      "welcome-memo": {
        title: "Welcome to Las Vegas - New Arrival Briefing",
        subtitle: "Official House Document",
        category: "In-World Documents",
        type: "Briefing Document",
        author: "The House Administration",
        content: {
          header: "CONFIDENTIAL - FOR KINDRED EYES ONLY",
          body: `Welcome to Las Vegas, the city where the neon never dies and neither do we.

You have twenty-four hours from your arrival to present yourself to The House. Failure to comply will result in your immediate classification as hostile and subsequent elimination.

Your briefing package includes:
- House Rules (mandatory reading)
- Territorial maps with current Bloc divisions
- Emergency contact protocols
- List of recognized Elysium locations
- Current Blood Hunt notices (if any)

Remember: Las Vegas operates under a unique system. Traditional Camarilla and Anarch structures exist within our Suit system, but The House has final authority. Learn the game, respect the players, and you might just survive to see another hand dealt.

The House is watching. The House is always watching.

- Administration
The House`
        },
        notes: "This document is given to all new arrivals in Las Vegas as part of their mandatory orientation process."
      }
    }
  },
  culture: {
    name: "Culture & Customs",
    description: "Cultural practices, traditions, and customs unique to Las Vegas Kindred society.",
    documents: {
      "elysium-etiquette": {
        title: "Elysium Etiquette Guide",
        subtitle: "Proper Conduct in Neutral Territory",
        category: "Culture & Customs",
        type: "Etiquette Guide",
        author: "The Protocol Committee",
        content: {
          introduction: "Elysium in Las Vegas follows both traditional vampire customs and local innovations. All Kindred, regardless of Suit affiliation, are expected to observe these protocols.",
          guidelines: [
            {
              title: "Dress Code",
              content: "Business formal or better. This is Las Vegas - we maintain standards. No combat gear, obvious weapons, or clothing that could compromise the Masquerade."
            },
            {
              title: "Feeding Prohibition",
              content: "Absolutely no feeding in Elysium. This includes blood dolls, willing vessels, or any other source. Violation results in immediate expulsion and possible sanctions."
            },
            {
              title: "Violence Prohibition",
              content: "No physical violence, threats of violence, or use of Disciplines against others. Verbal sparring is permitted and encouraged, but keep it civil."
            },
            {
              title: "Recognition Protocols",
              content: "Acknowledge ranking Kindred appropriately. In Vegas, this means recognizing Face Cards before others, regardless of clan or generation."
            },
            {
              title: "Gaming Etiquette",
              content: "Many Elysium meetings include actual gambling. House chips only - no boons or serious stakes at Elysium games. These are for entertainment and networking."
            },
            {
              title: "Information Trading",
              content: "Elysium is the traditional place for information exchange. Be discrete, be accurate, and remember that lies discovered in Elysium reflect poorly on your entire Suit."
            }
          ]
        },
        notes: "Elysium violations are taken seriously in Las Vegas. The House maintains neutrality in most disputes, but protecting Elysium is non-negotiable."
      }
    }
  }
};

// Initialize the additional reading system
function initializeAdditionalReadingSystem() {
  console.log("Initializing Additional Reading System");
  
  const categoryButtons = document.querySelectorAll('.reading-nav__category-button');
  const readingDisplay = document.getElementById('reading-display');
  const specificDocumentDisplay = document.getElementById('specific-document-display');

  if (!categoryButtons.length || !readingDisplay) {
    console.error("Required reading elements not found");
    return;
  }

  // Add event listeners to category buttons
  categoryButtons.forEach(button => {
    button.addEventListener('click', (e) => {
      const selectedCategory = e.target.getAttribute('data-category');
      setActiveCategoryButton(e.target);
      displayCategory(selectedCategory);
    });
  });

  function setActiveCategoryButton(activeButton) {
    categoryButtons.forEach(btn => btn.classList.remove('reading-nav__category-button--active'));
    activeButton.classList.add('reading-nav__category-button--active');
  }

  function displayCategory(categoryKey) {
    const categoryData = readingData[categoryKey];
    
    if (!categoryData) {
      console.error("Category data not found for:", categoryKey);
      return;
    }

    // Hide specific document display
    specificDocumentDisplay.style.display = 'none';

    // Show category information
    readingDisplay.innerHTML = `
      <div class="reading-category-info">
        <h3 class="content__heading">${categoryData.name}</h3>
        <p class="content__body">${categoryData.description}</p>
        
        <h4 class="content__subheading">Available Documents</h4>
        <div class="document-list">
          ${Object.entries(categoryData.documents).map(([key, doc]) => `
            <div class="document-card" data-category="${categoryKey}" data-document="${key}">
              <h5 class="document-card__title">${doc.title}</h5>
              <p class="document-card__subtitle">${doc.subtitle}</p>
              <p class="document-card__type">${doc.type}</p>
            </div>
          `).join('')}
        </div>
      </div>
    `;

    // Add click listeners to document cards
    const documentCards = readingDisplay.querySelectorAll('.document-card');
    documentCards.forEach(card => {
      card.addEventListener('click', (e) => {
        const categoryKey = card.getAttribute('data-category');
        const documentKey = card.getAttribute('data-document');
        displayDocument(categoryKey, documentKey);
      });
    });
  }

  function displayDocument(categoryKey, documentKey) {
    const categoryData = readingData[categoryKey];
    const document = categoryData.documents[documentKey];
    
    if (!document) {
      console.error("Document not found");
      return;
    }

    // Show specific document display
    specificDocumentDisplay.style.display = 'block';
    
    let contentHtml = '';
    
    // Handle different document types
    if (document.title === "House Rules of Las Vegas") {
      contentHtml = generateHouseRulesHTML(document);
    } else if (document.title === "Las Vegas Kindred Vocabulary") {
      contentHtml = generateVocabularyHTML(document);
    } else {
      contentHtml = generateGenericDocumentHTML(document);
    }

    specificDocumentDisplay.innerHTML = `
      <div class="specific-document-info">
        <div class="document-header">
          <h3 class="content__heading">${document.title}</h3>
          <p class="document-subtitle">${document.subtitle}</p>
          <div class="document-meta">
            <span class="document-type">${document.type}</span>
            <span class="document-author">By: ${document.author}</span>
          </div>
        </div>

        ${contentHtml}

        ${document.notes ? `
          <div class="document-notes">
            <h4 class="content__subheading">Notes</h4>
            <p class="content__body">${document.notes}</p>
          </div>
        ` : ''}

        <button class="content__button" onclick="document.getElementById('specific-document-display').style.display='none'">
          ← Back to ${categoryData.name}
        </button>
      </div>
    `;

    // Scroll to specific document display
    specificDocumentDisplay.scrollIntoView({ behavior: 'smooth' });
  }

  function generateHouseRulesHTML(document) {
    return `
      <div class="document-content">
        <div class="document-preamble">
          <blockquote class="content__body">${document.content.preamble.replace(/\n/g, '<br>')}</blockquote>
        </div>

        <div class="house-rules-list">
          ${document.content.rules.map(rule => `
            <div class="house-rule">
              <div class="house-rule__header">
                <h4 class="house-rule__title">Rule ${rule.number} — ${rule.title}</h4>
                <p class="house-rule__quote">"${rule.quote}"</p>
              </div>
              <div class="house-rule__content">
                <p class="content__body">${rule.content}</p>
              </div>
            </div>
          `).join('')}
        </div>
      </div>
    `;
  }

  function generateVocabularyHTML(document) {
    return `
      <div class="document-content">
        <div class="vocabulary-intro">
          <p class="content__body">${document.content.introduction}</p>
        </div>

        <div class="vocabulary-section">
          <h4 class="content__subheading">Core Terminology</h4>
          <div class="vocabulary-terms">
            ${document.content.terms.map(term => `
              <div class="vocabulary-term">
                <h5 class="vocabulary-term__word">${term.term}</h5>
                <p class="vocabulary-term__definition">${term.definition}</p>
                ${term.breakdown ? `
                  <ul class="vocabulary-term__breakdown">
                    ${term.breakdown.map(item => `<li>${item}</li>`).join('')}
                  </ul>
                ` : ''}
                ${term.usage ? `<p class="vocabulary-term__usage"><em>Usage: ${term.usage}</em></p>` : ''}
                ${term.note ? `<p class="vocabulary-term__note"><strong>Note:</strong> ${term.note}</p>` : ''}
              </div>
            `).join('')}
          </div>
        </div>

        <div class="vocabulary-section">
          <h4 class="content__subheading">Common Phrases</h4>
          <div class="vocabulary-phrases">
            ${document.content.phrases.map(phrase => `
              <div class="vocabulary-phrase">
                <h5 class="vocabulary-phrase__text">"${phrase.phrase}"</h5>
                <p class="vocabulary-phrase__meaning">${phrase.meaning}</p>
                <p class="vocabulary-phrase__usage"><em>Usage: ${phrase.usage}</em></p>
              </div>
            `).join('')}
          </div>
        </div>
      </div>
    `;
  }

  function generateGenericDocumentHTML(document) {
    if (document.content.header) {
      return `
        <div class="document-content">
          <div class="document-header-text">
            <p class="document-classification">${document.content.header}</p>
          </div>
          <div class="document-body">
            <pre class="document-text">${document.content.body}</pre>
          </div>
        </div>
      `;
    } else if (document.content.introduction && document.content.guidelines) {
      return `
        <div class="document-content">
          <div class="document-intro">
            <p class="content__body">${document.content.introduction}</p>
          </div>
          <div class="guidelines-list">
            ${document.content.guidelines.map(guideline => `
              <div class="guideline">
                <h5 class="guideline__title">${guideline.title}</h5>
                <p class="guideline__content">${guideline.content}</p>
              </div>
            `).join('')}
          </div>
        </div>
      `;
    } else {
      return `
        <div class="document-content">
          <p class="content__body">Document content structure not recognized.</p>
        </div>
      `;
    }
  }

  console.log("Additional Reading System initialized successfully");
}

// Export for global access
window.initializeAdditionalReadingSystem = initializeAdditionalReadingSystem;