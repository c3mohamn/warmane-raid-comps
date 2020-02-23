import { CharacterGuild, CharacterGuildLeader } from './character.interface';

export interface Guild {
  name: string;
  realm: string;
  faction: string;
  membercount: string;
  pvepoints: string;
  leader: CharacterGuildLeader;
  roster: CharacterGuild[];
}
