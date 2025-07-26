// Utility class for building location objects with validation
export class LocationBuilder {
  constructor() {
    this.location = {
      sections: {},
      details: {}
    };
  }

  static create() {
    return new LocationBuilder();
  }

  id(id) {
    this.location.id = id;
    return this;
  }

  name(name) {
    this.location.name = name;
    return this;
  }

  type(type) {
    this.location.type = type;
    return this;
  }

  shortDescription(description) {
    this.location.shortDescription = description;
    return this;
  }

  overview(text) {
    this.location.sections.overview = text;
    return this;
  }

  kindredPresence(text) {
    this.location.sections.kindredPresence = text;
    return this;
  }

  mortalOperations(text) {
    this.location.sections.mortalOperations = text;
    return this;
  }

  plotHooks(text) {
    this.location.sections.plotHooks = text;
    return this;
  }

  established(year) {
    this.location.details.established = year;
    return this;
  }

  owner(owner) {
    this.location.details.owner = owner;
    return this;
  }

  keyFeatures(features) {
    this.location.details.keyFeatures = Array.isArray(features) ? features : [features];
    return this;
  }

  securityLevel(level) {
    this.location.details.securityLevel = level;
    return this;
  }

  kindredAccess(access) {
    this.location.details.kindredAccess = access;
    return this;
  }

  customSection(key, content) {
    this.location.sections[key] = content;
    return this;
  }

  customDetail(key, value) {
    this.location.details[key] = value;
    return this;
  }

  build() {
    // Validate required fields
    if (!this.location.id || !this.location.name || !this.location.type) {
      throw new Error('Location must have id, name, and type');
    }

    return { ...this.location };
  }
}