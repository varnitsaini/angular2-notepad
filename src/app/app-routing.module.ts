import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { NotelistComponent } from './notelist/notelist.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NotepadComponent } from './notepad/notepad.component';

const routes: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'home', component: DashboardComponent },
    { path: 'home/:id', component: DashboardComponent }
];

@NgModule({
    imports: [ RouterModule.forRoot(routes) ],
    exports: [ RouterModule ]
})

export class AppRoutingModule {}
