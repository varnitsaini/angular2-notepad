import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import { Note } from './note';

@Injectable()
export class NoteService {

  private notesUrl = 'api/notes';  // URL to web API
  private headers = new Headers({'Content-Type': 'application.json'});
  constructor(private http: Http) { }

  getNotes(): Promise<Note[]> {
    return this.http.get(this.notesUrl)
        .toPromise()
        .then(response => response.json().data as Note[])
        .catch(this.handleError);
  }
  private handleError(error: any): Promise<any> {
    console.error('An error occured', error);
    return Promise.reject(error.message || error);
  }
}
