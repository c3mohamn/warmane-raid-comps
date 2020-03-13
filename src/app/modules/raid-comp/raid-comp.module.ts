import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LandingComponent } from './pages/landing/landing.component';
import { RaidCompRoutingModule } from './raid-comp-routing.module';
import { WarmaneApiService } from './services/warmane-api.service';
import { GuildContainer } from './containers/guild/guild.container';
import { RaidContainer } from './containers/raid/raid.container';
import { SubstitutesContainer } from './containers/substitutes/substitutes.container';
import { CharacterComponent } from './components/character/character.component';

@NgModule({
  declarations: [LandingComponent, GuildContainer, RaidContainer, SubstitutesContainer, CharacterComponent],
  providers: [WarmaneApiService],
  imports: [CommonModule, RaidCompRoutingModule]
})
export class RaidCompModule {}
