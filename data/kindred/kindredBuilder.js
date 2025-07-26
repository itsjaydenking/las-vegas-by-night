export class KindredBuilder {
  constructor() {
    this.character = {
      sections: {},
      stats: {
        attributes: {},
      },
    };
  }

  static create() {
    return new KindredBuilder();
  }

  id(id) {
    this.character.id = id;
    return this;
  }

  name(name) {
    this.character.name = name;
    return this;
  }

  epitaph(epitaph) {
    this.character.epitaph = epitaph;
    return this;
  }

  generation(generation) {
    this.character.generation = generation;
    return this;
  }

  quote(quote) {
    this.character.quote = quote;
    return this;
  }

  background(text) {
    this.character.sections.background = text;
    return this;
  }

  mortalDays(text) {
    this.character.sections.mortalDays = text;
    return this;
  }

  kindredNights(text) {
    this.character.sections.kindredNights = text;
    return this;
  }

  domain(text) {
    this.character.sections.domain = text;
    return this;
  }

  relationships(text) {
    this.character.sections.relationships = text;
    return this;
  }

  customSection(key, text) {
    this.character.sections[key] = text;
    return this;
  }

  sire(sire) {
    this.character.stats.sire = sire;
    return this;
  }

  embraced(embraced) {
    this.character.stats.embraced = embraced;
    return this;
  }

  ambition(ambition) {
    this.character.stats.ambition = ambition;
    return this;
  }

  convictions(convictions) {
    this.character.stats.convictions = convictions;
    return this;
  }

  humanity(humanity) {
    this.character.stats.humanity = humanity;
    return this;
  }

  bloodPotency(bloodPotency) {
    this.character.stats.bloodPotency = bloodPotency;
    return this;
  }

  attributes(physical, social, mental) {
    this.character.stats.attributes = {
      physical: physical,
      social: social,
      mental: mental,
    };
    return this;
  }

  skills(skills) {
    this.character.stats.skills = skills;
    return this;
  }

  disciplines(disciplines) {
    this.character.stats.disciplines = disciplines;
    return this;
  }

  build() {
    return { ...this.character };
  }
}
