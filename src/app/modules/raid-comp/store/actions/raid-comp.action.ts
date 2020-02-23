import { Action } from '@ngrx/store';
import { Guild } from '../../models/guild.interface';
import { Character } from '../../models/character.interface';

export enum RaidCompActionTypes {
  LOAD_GUILD_INFO = '[RaidComp] load guild info',
  LOAD_CHARACTER_INFO = '[RaidComp] load character info',
  LOAD_GUILD_INFO_ERROR = '[RaidComp] load guild info error',
  LOAD_CHARACTER_INFO_ERROR = '[RaidComp] load character info error',
  LOAD_GUILD_INFO_SUCCESS = '[RaidComp] load guild info success',
  LOAD_CHARACTER_INFO_SUCCESS = '[RaidComp] load character info success'
}

export class LoadGuildInfoAction implements Action {
  readonly type = RaidCompActionTypes.LOAD_CHARACTER_INFO;

  constructor(public payload: { name: string; realm: string }) {}
}

export class LoadCharacterInfoAction implements Action {
  readonly type = RaidCompActionTypes.LOAD_CHARACTER_INFO;

  constructor(public payload: { name: string; realm: string }) {}
}

export class LoadGuildInfoErrorAction implements Action {
  readonly type = RaidCompActionTypes.LOAD_GUILD_INFO_ERROR;

  constructor(public payload: any) {}
}

export class LoadCharacterInfoErrorAction implements Action {
  readonly type = RaidCompActionTypes.LOAD_CHARACTER_INFO_ERROR;

  constructor(public payload: any) {}
}

export class LoadGuildInfoSuccessAction implements Action {
  readonly type = RaidCompActionTypes.LOAD_GUILD_INFO_SUCCESS;

  constructor(public payload: Guild) {}
}

export class LoadCharacterInfoSuccessAction implements Action {
  readonly type = RaidCompActionTypes.LOAD_CHARACTER_INFO_SUCCESS;

  constructor(public payload: Character[]) {}
}

export type RaidCompActions =
  | LoadGuildInfoAction
  | LoadCharacterInfoAction
  | LoadCharacterInfoErrorAction
  | LoadGuildInfoErrorAction
  | LoadGuildInfoSuccessAction
  | LoadCharacterInfoSuccessAction;
