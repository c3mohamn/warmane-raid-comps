export interface Character extends GuildLeaderCharacter {
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

export interface GuildMemberCharacter extends GuildLeaderCharacter {
  online: boolean;
  achievementpoints: string;
  professions: GuildMemberCharacterProfessions;
}

export interface GuildLeaderCharacter {
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

export interface GuildMemberCharacterProfessions {
  professions: CharacterProfessions[];
}

export interface CharacterTalents {
  tree: string;
  points: number[];
}
