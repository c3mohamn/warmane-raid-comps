import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LandingComponent } from './pages/landing/landing.component';
import { RaidCompRoutingModule } from './raid-comp-routing.module';
import { WarmaneApiService } from './services/warmane-api.service';

@NgModule({
  declarations: [LandingComponent],
  providers: [WarmaneApiService],
  imports: [CommonModule, RaidCompRoutingModule]
})
export class RaidCompModule {}
