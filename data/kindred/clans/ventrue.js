import { KindredBuilder } from '../kindredBuilder.js';

export const ventrueCharacters = [
  KindredBuilder.create()
    .id("carlton-everett")
    .name("Carlton Lance Everett")
    .epitaph("The Silver Fox")
    .generation("9th Generation")
    .quote("In the game of power, the only rule is to win.")
    .background("Carlton Lance Everett is a prominent member of the Ventrue clan, known for his sharp business acumen and political savvy. He has a reputation for being ruthless in his pursuit of power and influence within the Kindred society of Las Vegas.")
    .mortalDays("Details about Carlton's mortal life remain shrouded in mystery, with little known about his origins or the events that led to his embrace.")
    .kindredNights("Carlton's nights are spent navigating the complex web of Kindred politics, often leveraging his wealth and connections to maintain his position of power.")
    .domain("Carlton's domain is primarily centered around the Las Vegas Strip, where he exerts significant influence over various businesses and establishments.")
    .relationships("Carlton maintains a complex web of relationships within the Kindred community, often using charm and manipulation to achieve his goals.")
    .sire("Unknown")
    .embraced("1987 (Born 1952)")
    .ambition("Control the Strip's financial infrastructure")
    .convictions("Business before blood")
    .humanity("6")
    .bloodPotency("3")
    .attributes(
      ["Strength: 2", "Dexterity: 3", "Stamina: 2"],
      ["Charisma: 4", "Manipulation: 5", "Composure: 3"],
      ["Intelligence: 3", "Wits: 4", "Resolve: 3"]
    )
    .skills([
      "Etiquette (Court): 4",
      "Intimidation: 5", 
      "Persuasion: 3",
      "Finance: 4"
    ])
    .disciplines(["Dominate: 3", "Fortitude: 2", "Presence: 4"])
    .build(),
];

export const ventrueData = {
  name: "Ventrue",
  description: "The Blue Bloods of Las Vegas maintain their grip on the city's corporate infrastructure. Despite the Sheepfold purge, surviving Ventrue have quietly rebuilt their influence through legitimate business channels and careful political maneuvering.",
  characters: ventrueCharacters,
};