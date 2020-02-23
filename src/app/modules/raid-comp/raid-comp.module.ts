import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LandingComponent } from './pages/landing/landing.component';
import { RaidCompRoutingModule } from './raid-comp-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { WarmaneApiService } from './services/warmane-api.service';

@NgModule({
  declarations: [LandingComponent],
  providers: [WarmaneApiService],
  imports: [CommonModule, RaidCompRoutingModule, HttpClientModule]
})
export class RaidCompModule {}
