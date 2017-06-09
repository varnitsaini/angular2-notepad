import {
 Component, ElementRef, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges,
  ViewChild
} from '@angular/core';
import {Note} from '../note';
import {NoteService} from '../note.service';
import {Router} from '@angular/router';


@Component({
  selector: 'app-notelist',
  templateUrl: './notelist.component.html',
  styleUrls: ['./notelist.component.css']
})
export class NotelistComponent implements OnInit, OnChanges {


  @ViewChild('noteListDiv') private scrollContainer: ElementRef;
  @Input() noteList: Note[];
  @Output() noteClicked = new EventEmitter<Note> ();
  selectedNote: Note;
  note: Note;
  constructor(
      // private router: Router,
  ) { }

  ngOnInit() {
  }
  ngOnChanges(change: SimpleChanges): void {
    if (this.noteList) {
      this.onSelect(this.noteList[0]);
    }
  }
  newNote() {
    this.scrollToBottom();
    this.note = new Note;
    this.note.id = this.noteList.length + 1;
    this.note.name = 'New Note ';
    this.note.content = 'New Note Content';
    this.noteList.push(this.note);
    this.onSelect(this.note);
  }

  onSelect(note: Note): void {
    this.selectedNote = note;
    this.noteClicked.emit(note);
    // this.router.navigate(['/home', this.selectedNote.name]);
  }
  scrollToBottom(): void {
    try {
      this.scrollContainer.nativeElement.scrollTop = this.scrollContainer.nativeElement.scrollHeight;
    } catch (err) {
    }
  }
  removeNote(note: Note) {
    this.noteList = this.noteList.filter(item => item.id !== note.id);
  }
}
