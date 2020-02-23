import { Component, OnInit, OnDestroy } from '@angular/core';
import { WarmaneApiService } from '../../services/warmane-api.service';
import { Subscription } from 'rxjs/internal/Subscription';

@Component({
  selector: 'rc-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.sass']
})
export class LandingComponent implements OnInit, OnDestroy {
  guildSub$: Subscription;
  characterSub$: Subscription;

  constructor(private warmaneApiService: WarmaneApiService) {}

  ngOnInit() {
    this.guildSub$ = this.warmaneApiService.getGuildInfo('Fade', 'Icecrown').subscribe(data => {
      console.log(data);
    });
    // timeout to avoid error: too many requests
    setTimeout(() => {
      this.characterSub$ = this.warmaneApiService.getCharacterInfo('Momentum', 'Icecrown').subscribe(data => {
        console.log(data);
      });
    }, 5000);
  }

  ngOnDestroy() {
    this.guildSub$.unsubscribe();
    this.characterSub$.unsubscribe();
  }
}
