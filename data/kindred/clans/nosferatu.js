import { KindredBuilder } from "../kindredBuilder.js";

export const nosferatuCharacters = [
  KindredBuilder.create()
    .id("data-ghost")
    .name("The Data Ghost")
    .epitaph("Information Broker")
    .generation("11th Generation")
    .quote("Knowledge is the only currency that matters in the new Vegas.")
    .background(
      "Known only as the Data Ghost, this Nosferatu has built an empire on information in post-Sheepfold Vegas."
    )
    .mortalDays(
      "Their mortal identity is completely unknown, lost in the digital maze they've created."
    )
    .kindredNights(
      "Operates from the old server farms beneath the city, monitoring every digital transaction."
    )
    .domain("The abandoned tech infrastructure beneath downtown Vegas.")
    .relationships(
      "Maintains strict neutrality, selling information to all factions equally."
    )
    .sire("Unknown")
    .embraced("2003 (Born 1981)")
    .ambition("Create the ultimate information network")
    .convictions("Information should flow freely (for a price)")
    .humanity("5")
    .bloodPotency("2")
    .attributes(
      ["Strength: 1", "Dexterity: 4", "Stamina: 3"],
      ["Charisma: 1", "Manipulation: 4", "Composure: 4"],
      ["Intelligence: 5", "Wits: 4", "Resolve: 3"]
    )
    .skills([
      "Technology: 5",
      "Investigation: 4",
      "Stealth: 4",
      "Streetwise: 3",
    ])
    .disciplines(["Obfuscate: 4", "Potence: 1", "Animalism: 2"])
    .build(),
];

export const nosferatuData = {
  name: "Nosferatu",
  description:
    "The Sewer Rats have survived the purge better than most, their network of tunnels and information brokers proving invaluable. They now serve as neutral parties in the new power structure, trading secrets for safety.",
  characters: nosferatuCharacters,
};
