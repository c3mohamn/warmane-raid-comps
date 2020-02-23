import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Guild } from '../models/guild.interface';
import { warmaneApi } from 'src/app/constants/warmane-api.constant';
import { environment } from 'src/environments/environment';
import { Character } from '../models/character.interface';

@Injectable({
  providedIn: 'root'
})
export class WarmaneApiService {
  apiUrl = environment.warmaneApiUrl;

  constructor(private http: HttpClient) {}

  /**
   * Returns basic guild information and roster.
   *
   * @param name - Guild name
   * @param realm - Realm name
   */
  getGuildInfo(name: string, realm: string): Observable<Guild> {
    return this.http.get<Guild>(this.apiUrl + warmaneApi.GET_GUILD(name, realm));
  }

  /**
   * Returns basic character information.
   *
   * @param name - Character name
   * @param realm - Realm name
   */
  getCharacterInfo(name: string, realm: string): Observable<Character> {
    return this.http.get<Character>(this.apiUrl + warmaneApi.GET_CHARACTER(name, realm));
  }
}
