import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NoteService {

  constructor() { }
  getNotes(){
    return JSON.parse(localStorage.getItem('notes'));
  }
  deleteNotes(id){
    return "going to delete this one here " + id;
  }
  }

