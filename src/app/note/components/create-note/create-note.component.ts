import { Component } from '@angular/core';
import { Note } from 'src/app/models/note';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-note',
  templateUrl: './create-note.component.html',
  styleUrls: ['./create-note.component.css']
})
export class CreateNoteComponent  {
  notes: Note[];
  note: Note;
 constructor(private router: Router){}
  onSubmit(title: string, text:string) {

  this.note = {
    title:title,
    text:text,
    date:new Date().getTime().toString()
  }

  this.notes = JSON.parse(localStorage.getItem('notes'));

  if (this.notes == null) {
    this.notes = [];
    this.notes.push(this.note);
    localStorage.setItem('notes', JSON.stringify(this.notes));
  }else{
    this.notes.push(this.note);
    localStorage.setItem('notes', JSON.stringify(this.notes));
  }

 
  console.log(this.notes);
this.router.navigateByUrl('/');
}


}