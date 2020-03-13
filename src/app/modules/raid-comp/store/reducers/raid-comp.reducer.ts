import { Guild } from '../../models/guild.interface';
import { Raid } from '../../models/raid-comp.interface';
import { Character } from '../../models/character.interface';
import { RaidCompActions, RaidCompActionTypes } from '../actions/raid-comp.action';
import { WarmaneApiError } from '../../models/error.interface';

export interface RaidCompState {
  guild: Guild | null;
  raid: Raid | null;
  substitutes: Character[];
  error: WarmaneApiError | null;
}

const initialState: RaidCompState = {
  guild: null,
  raid: null,
  substitutes: [],
  error: null
};

// TODO
export function raidCompReducer(state = initialState, action: RaidCompActions): RaidCompState {
  switch (action.type) {
    case RaidCompActionTypes.LOAD_CHARACTER_INFO_ERROR:
      return { ...state, error: action.payload };
    case RaidCompActionTypes.LOAD_GUILD_INFO_ERROR:
      return { ...state, error: action.payload };
    case RaidCompActionTypes.LOAD_GUILD_INFO_SUCCESS:
      return { ...state, guild: action.payload };
    default:
      return state;
  }
}
