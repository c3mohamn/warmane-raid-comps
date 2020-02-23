import { createFeatureSelector, createSelector } from '@ngrx/store';
import { RaidCompState } from '../reducers/raid-comp.reducer';

const getRaidCompState = createFeatureSelector<RaidCompState>('raidComp');

export const selectRaidCompState = createSelector(getRaidCompState, state => state);
export const selectRaidCompGuildState = createSelector(getRaidCompState, state => state.guild);
export const selectRaidCompRaidState = createSelector(getRaidCompState, state => state.raid);
export const selectRaidCompAvailableCharsState = createSelector(getRaidCompState, state => state.availableChars);
export const selectRaidCompErrorState = createSelector(getRaidCompState, state => state.error);
