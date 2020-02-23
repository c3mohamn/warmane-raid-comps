import { NgModule, InjectionToken } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule, ActionReducerMap } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { RaidCompStateModule } from '../raid-comp/store/raid-comp-state.module';
import { RaidCompState, raidCompReducer } from '../raid-comp/store/reducers/raid-comp.reducer';

export interface State {
  raidComp: RaidCompState;
}

const reducers: ActionReducerMap<State> = {
  raidComp: raidCompReducer
};

const REDUCERS_TOKEN = new InjectionToken<ActionReducerMap<State>>('Registered Reducers');
Object.assign(REDUCERS_TOKEN, reducers);

@NgModule({
  imports: [
    CommonModule,
    EffectsModule.forRoot([]),
    StoreModule.forRoot(REDUCERS_TOKEN),
    StoreDevtoolsModule.instrument({ maxAge: 25, name: 'RaidComp' }),
    RaidCompStateModule
  ],
  providers: [{ provide: REDUCERS_TOKEN, useValue: reducers }]
})
export class StateModule {}
