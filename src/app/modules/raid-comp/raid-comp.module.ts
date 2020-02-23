import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LandingComponent } from './pages/landing/landing.component';
import { RaidCompRoutingModule } from './raid-comp-routing.module';

@NgModule({
  declarations: [LandingComponent],
  imports: [CommonModule, RaidCompRoutingModule]
})
export class RaidCompModule {}
