import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactComponent } from './components/contact/contact.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { DocumentationComponent } from './components/documentation/documentation.component';
import { ExperienceComponent } from './components/experience/experience.component';
import { ProjectRequirementsComponent } from './components/project-requirements/project-requirements.component';

const routes: Routes = [
  { path: 'dashboard', component: DashboardComponent },
  { path: 'project-requirements', component: ProjectRequirementsComponent },
  { path: 'experience', component: ExperienceComponent },
  { path: 'documentation', component: DocumentationComponent },
  { path: 'contact', component: ContactComponent },
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
