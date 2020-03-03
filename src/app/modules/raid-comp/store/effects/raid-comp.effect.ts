import { Injectable } from '@angular/core';
import { Effect, Actions, ofType } from '@ngrx/effects';
import { Observable, of } from 'rxjs';
import { Action } from '@ngrx/store';
import {
  LoadGuildInfoAction,
  RaidCompActionTypes,
  LoadGuildInfoSuccessAction,
  LoadGuildInfoErrorAction
} from '../actions/raid-comp.action';
import { catchError, map, switchMap } from 'rxjs/operators';
import { WarmaneApiService } from '../../services/warmane-api.service';

@Injectable()
export class RaidCompEffects {
  @Effect()
  loadGuild$: Observable<Action> = this.actions$.pipe(
    ofType<LoadGuildInfoAction>(RaidCompActionTypes.LOAD_CHARACTER_INFO),
    map(action => action.payload),
    switchMap(payload => {
      return this.warmaneApiService.getGuildInfo(payload.name, payload.realm).pipe(
        map(result => {
          if (result?.name) {
            return new LoadGuildInfoSuccessAction(result);
          } else {
            return new LoadGuildInfoErrorAction(result);
          }
        }),
        catchError(error => of(new LoadGuildInfoErrorAction(error)))
      );
    })
  );

  constructor(private actions$: Actions, private warmaneApiService: WarmaneApiService) {}
}
