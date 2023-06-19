import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment.development";
import {Song} from "../model/Song";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class SongService {
// API LOCAL
  private API_SONG = environment.API_LOCAL + 'song';
  constructor(private htttpClient: HttpClient) { }
  createSongService(song: Song): Observable<any>{
    return this.htttpClient.post(this.API_SONG, song);
  }
}
