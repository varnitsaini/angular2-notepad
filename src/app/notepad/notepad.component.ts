import {Component, Input, OnChanges, OnInit} from '@angular/core';
import {Note} from '../note';

@Component({
  selector: 'app-notepad',
  templateUrl: './notepad.component.html',
  styleUrls: ['./notepad.component.css']
})
export class NotepadComponent implements OnInit, OnChanges {
  @Input() selectedNote: Note;
  writtenNote: string;
  constructor() {
    // console.log(this.selectedNote.content);
    // setTimeout(() => {
    //   con sole.log(this.selectedNote.content);
    // }, 2000);
  }
  ngOnInit() {
  }
  ngOnChanges(): void {
    // console.log(this.selectedNote.content);
    // this.writtenNote = this.selectedNote.content;
  }

}
