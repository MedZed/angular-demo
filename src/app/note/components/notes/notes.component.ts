import { Component, OnInit } from '@angular/core';
import { Note } from 'src/app/models/note';
import { NoteService } from '../../note.service';

@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.css']
})
export class NotesComponent implements OnInit {
notes:Note[];
  constructor(private noteservice: NoteService) { }


  ngOnInit(): void {
    this.notes = this.noteservice.getNotes();

}



}