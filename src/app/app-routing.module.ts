import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NoteModule } from './note/note/note.module';

import { AboutComponent } from './pages/about/about.component';
import { HomeComponent } from './pages/home/home.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { SavedQuotesComponent } from './quote/components/saved-quotes/saved-quotes.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: HomeComponent
  },
  {
    path: 'about',
    component: AboutComponent
  },
  {
    path: 'saved',
    component: SavedQuotesComponent
  },
  {
    path: 'notes',
    loadChildren: () => import('./note/note/note.module').then(m => m.NoteModule)
  },
  {
    path: '**',
    component: NotFoundComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
