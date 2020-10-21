
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewNoteTileComponent } from '../components/new-note-tile/new-note-tile.component';
import { NoteTileComponent } from '../components/note-tile/note-tile.component';
import { NotesComponent } from '../components/notes/notes.component';
import { ViewNoteComponent } from '../components/view-note/view-note.component';
import { NoteRoutingModule } from './note-routing.module';
import { CreateNoteComponent } from '../components/create-note/create-note.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [NewNoteTileComponent, NoteTileComponent, NotesComponent,ViewNoteComponent, CreateNoteComponent],
  exports:[NewNoteTileComponent, NoteTileComponent, NotesComponent],
  imports: [
    CommonModule,
    NoteRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class NoteModule { }
