import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Note } from 'src/app/models/note';
import { NoteService } from '../../note.service';

@Component({
  selector: 'app-view-note',
  templateUrl: './view-note.component.html',
  styleUrls: ['./view-note.component.css']
})
export class ViewNoteComponent implements OnInit {
  date:string;
  note:Note[];

  constructor(private route: ActivatedRoute, private noteservice: NoteService) { }
  ngOnInit(): void {
    this.route.params.subscribe(params => {
       this.date = params['id'];
       this.note = this.noteservice.getNotes().filter(obj => {return obj.date ===  this.date })
      })
  
 
  }

}
