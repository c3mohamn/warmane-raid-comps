import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { raidCompReducer } from './reducers/raid-comp.reducer';
import { RaidCompEffects } from './effects/raid-comp.effect';

@NgModule({
  imports: [StoreModule.forFeature('raidComp', raidCompReducer), EffectsModule.forFeature([RaidCompEffects])]
})
export class RaidCompStateModule {}
