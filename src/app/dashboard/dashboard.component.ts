import {Component, OnChanges, OnInit} from '@angular/core';
import {Note} from '../note';
import {NoteService} from '../note.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  noteList: Note[];
  selectedNote: Note;
  constructor(
      private noteService: NoteService
  ) { }

  ngOnInit() {
    this.getNotes();
  }
  getNotes(): void {
    this.noteService.getNotes().then(notes => {
      this.noteList = notes;
      this.selectedNote = notes[0];
    });
  }
  getCheckedNote(note) {
    this.selectedNote = note;
  }

}
