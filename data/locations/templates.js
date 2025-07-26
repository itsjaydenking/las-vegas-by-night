import { LocationBuilder } from './locationBuilder.js';

// Template functions for common location types
export const Templates = {
  casino(id, name, shortDesc) {
    return LocationBuilder.create()
      .id(id)
      .name(name)
      .type("Casino Resort")
      .shortDescription(shortDesc)
      .securityLevel("High")
      .kindredAccess("Varies by arrangement");
  },

  restaurant(id, name, shortDesc) {
    return LocationBuilder.create()
      .id(id)
      .name(name)
      .type("Restaurant")
      .shortDescription(shortDesc)
      .securityLevel("Moderate")
      .kindredAccess("Public with discrete arrangements");
  },

  club(id, name, shortDesc) {
    return LocationBuilder.create()
      .id(id)
      .name(name)
      .type("Nightclub")
      .shortDescription(shortDesc)
      .securityLevel("Variable")
      .kindredAccess("Open to public");
  },

  corporate(id, name, shortDesc) {
    return LocationBuilder.create()
      .id(id)
      .name(name)
      .type("Corporate Facility")
      .shortDescription(shortDesc)
      .securityLevel("Maximum")
      .kindredAccess("By invitation only");
  }
};