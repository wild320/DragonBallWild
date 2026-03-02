import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface DragonBallCharacter {
  id: number;
  name: string;
  ki: string;
  maxKi: string;
  race: string;
  gender: string;
  description: string;
  image: string;
  affiliation: string;
  deletedAt: string | null;
}

export interface DragonBallApiResponse {
  items: DragonBallCharacter[];
  meta: any;
  links: any;
}

@Injectable({
  providedIn: 'root',
})
export class DragonBallService {
  private http = inject(HttpClient);
  private apiUrl = 'https://dragonball-api.com/api/characters';

  getCharacters(limit: number = 58): Observable<DragonBallApiResponse> {
    return this.http.get<DragonBallApiResponse>(
      `${this.apiUrl}?limit=${limit}`,
    );
  }

  getCharactersPage(
    page: number,
    limit: number = 20,
  ): Observable<DragonBallApiResponse> {
    return this.http.get<DragonBallApiResponse>(
      `${this.apiUrl}?page=${page}&limit=${limit}`,
    );
  }
}
