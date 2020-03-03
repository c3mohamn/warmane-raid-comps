export interface Character extends CharacterGuildLeader {
  realm: string;
  faction: string;
  honorablekills: string;
  guild: string;
  online: boolean;
  achievementpoints: string;
  equipment: CharacterEquipment[];
  talents: CharacterTalents[];
  professions: CharacterProfessions;
}

export interface CharacterEquipment {
  name: string;
  item: string;
  transmog: string;
}

export interface CharacterGuild extends CharacterGuildLeader {
  online: boolean;
  achievementpoints: string;
  professions: CharacterProfessionsGuild;
}

export interface CharacterGuildLeader {
  name: string;
  level: string;
  gender: string;
  race: string;
  racemask: number;
  class: string;
  classmask: number;
}

export interface CharacterProfessions {
  name: string;
  skill: string;
}

export interface CharacterProfessionsGuild {
  professions: CharacterProfessions[];
}

export interface CharacterTalents {
  tree: string;
  points: number[];
}
