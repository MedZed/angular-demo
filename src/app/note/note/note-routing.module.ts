import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreateNoteComponent } from '../components/create-note/create-note.component';
import { EditNoteComponent } from '../components/edit-note/edit-note.component';
import { NotesComponent } from '../components/notes/notes.component';
import { ViewNoteComponent } from '../components/view-note/view-note.component';

const routes: Routes = [
  {
    path:'',
    component:NotesComponent
  },
  {
    path:'new',
    component:CreateNoteComponent
  },
  {
    path:':id',
    component:ViewNoteComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NoteRoutingModule { }
