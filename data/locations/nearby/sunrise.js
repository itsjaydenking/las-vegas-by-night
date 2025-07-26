import { LocationBuilder } from "../locationBuilder.js";

export const sunriseLocations = [
  LocationBuilder.create()
    .id("eastside-cannery")
    .name("Eastside Cannery Casino & Hotel")
    .type("Casino Resort")
    .shortDescription(
      "Where eastern valley residents find their supernatural shepherds."
    )
    .overview(
      "This locals-focused casino serves the eastern Las Vegas valley with gaming, dining, and entertainment tailored to neighborhood residents. Its position away from tourist areas creates an intimate atmosphere favored by some Kindred."
    )
    .kindredPresence(
      "Kindred who prefer stable, long-term relationships with mortal vessels appreciate the casino's loyal local customer base. The property's focus on residents rather than tourists allows for more personal supernatural relationships."
    )
    .mortalOperations(
      "Local gaming, casual dining, entertainment, and community events. The casino hosts regular customer appreciation events and maintains strong connections to the surrounding neighborhoods."
    )
    .plotHooks(
      "Territorial disputes over loyal customer territories, supernatural influences on working-class communities, or conflicts between different Kindred feeding philosophies."
    )
    .established("2003")
    .owner("Boyd Gaming")
    .keyFeatures([
      "Local customer focus",
      "Community events",
      "Neighborhood connections",
      "Casual atmosphere",
    ])
    .securityLevel("Moderate (locals casino security)")
    .kindredAccess(
      "Through local resident relationships and community involvement"
    )
    .build(),

  LocationBuilder.create()
    .id("sunrise-hospital")
    .name("Sunrise Hospital & Medical Center")
    .type("Medical Facility")
    .shortDescription(
      "Where healing and hunger intersect under fluorescent lights."
    )
    .overview(
      "This major medical facility serves the eastern Las Vegas valley with comprehensive healthcare services. The hospital's trauma center, blood bank, and 24-hour operations create unique opportunities for supernatural activities."
    )
    .kindredPresence(
      "Several Kindred maintain medical professional covers or have ghouls working in key positions. The hospital's blood supplies and emergency situations provide both feeding opportunities and cover for unusual medical needs."
    )
    .mortalOperations(
      "Emergency care, surgery, specialty medicine, and trauma services. The hospital's large size and comprehensive services make it a crucial healthcare resource for the eastern valley."
    )
    .plotHooks(
      "Kindred medical staff conducting unusual treatments, territorial disputes over medical facility access, or Second Inquisition agents investigating unexplained medical anomalies."
    )
    .established("1958")
    .owner("HCA Healthcare")
    .keyFeatures([
      "24-hour emergency department",
      "Trauma center",
      "Blood bank",
      "Comprehensive medical services",
    ])
    .securityLevel("High (medical facility security)")
    .kindredAccess(
      "Through medical professional covers and healthcare industry connections"
    )
    .build(),

  LocationBuilder.create()
    .id("boulevard-mall")
    .name("Boulevard Mall")
    .type("Shopping Mall")
    .shortDescription("Where aging retail spaces hide timeless predators.")
    .overview(
      "This older shopping mall serves the eastern valley with traditional retail and services. While not as upscale as newer shopping centers, its loyal customer base and familiar atmosphere create opportunities for Kindred who prefer predictable environments."
    )
    .kindredPresence(
      "Kindred who appreciate stability and routine use the mall's consistent patterns and loyal customer base for feeding. The location's familiarity allows for long-term relationship development with mortal vessels."
    )
    .mortalOperations(
      "Traditional retail stores, services, food court, and community events. The mall maintains connections to longtime customers and serves neighborhoods that have grown up around it."
    )
    .plotHooks(
      "Territorial disputes over established feeding grounds, supernatural influences on retail decline and renewal, or ancient Kindred adapting to changing commercial environments."
    )
    .established("1968")
    .owner("Various retailers")
    .keyFeatures([
      "Traditional retail stores",
      "Community services",
      "Longtime customer base",
      "Familiar neighborhood atmosphere",
    ])
    .securityLevel("Low to Moderate (aging mall with basic security)")
    .kindredAccess(
      "Through long-term community relationships and retail connections"
    )
    .build(),
];
