import { Component, OnInit, Input } from '@angular/core';
import { Note } from 'src/app/models/note';
import { NoteService } from '../../note.service';

@Component({
  selector: 'app-note-tile',
  templateUrl: './note-tile.component.html',
  styleUrls: ['./note-tile.component.css']
})
export class NoteTileComponent implements OnInit {
  @Input() note:Note;

  notes: Note[] = [];

  constructor(private quoteservice: NoteService) { }
 

  ngOnInit(): void {
    //  this.quoteservice.cast.subscribe(quotes => this.quotes = quotes);
  }
  




  delete_dialog_id:string;
  show_delete_dialog:boolean;

  onItemClick(event, item) {
    this.delete_dialog_id = item;
    this.show_delete_dialog = true;
 }

 onConfirmButton(event, item) {
  if(item){
    let index = JSON.parse(localStorage.getItem('notes')).findIndex(x => x._id === this.delete_dialog_id );
    this.notes = JSON.parse(localStorage.getItem('notes'));
    this.notes.splice(index, 1);
    localStorage.setItem('notes', JSON.stringify(this.notes));
    this.delete_dialog_id = "";
    this.show_delete_dialog = false;
    this.notes = JSON.parse(localStorage.getItem('notesy'));
  }else{
    this.delete_dialog_id = "";
    this.show_delete_dialog = false;
  }
}



}
