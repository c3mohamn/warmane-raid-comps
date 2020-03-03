import { Component, OnInit, OnDestroy } from '@angular/core';
import { WarmaneApiService } from '../../services/warmane-api.service';
import { Subscription } from 'rxjs/internal/Subscription';
import { Store, select } from '@ngrx/store';
import { RaidCompState } from '../../store/reducers/raid-comp.reducer';
import { LoadGuildInfoAction } from '../../store/actions/raid-comp.action';
import { selectRaidCompGuildState } from '../../store/selectors/raid-comp.selector';

@Component({
  selector: 'rc-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.sass']
})
export class LandingComponent implements OnInit, OnDestroy {
  guildSub$: Subscription;
  characterSub$: Subscription;

  constructor(private warmaneApiService: WarmaneApiService, private store: Store<RaidCompState>) {}

  ngOnInit() {
    // timeout to avoid error: too many requests
    setTimeout(() => {
      this.characterSub$ = this.warmaneApiService.getCharacterInfo('Momentum', 'Icecrown').subscribe(data => {
        console.log(data);
      });
    }, 5000);

    this.store.dispatch(new LoadGuildInfoAction({ name: 'Fade', realm: 'Icecrown' }));
    this.guildSub$ = this.store.pipe(select(selectRaidCompGuildState)).subscribe(guild => console.log(guild));
  }

  ngOnDestroy() {
    this.guildSub$.unsubscribe();
    this.characterSub$.unsubscribe();
  }
}
