import { Component, OnInit, Input } from '@angular/core';
import { Note } from 'src/app/models/note';

@Component({
  selector: 'app-note-tile',
  templateUrl: './note-tile.component.html',
  styleUrls: ['./note-tile.component.css']
})
export class NoteTileComponent implements OnInit {
@Input() note:Note;

  constructor() { }

  ngOnInit(): void {
    
  }

}
