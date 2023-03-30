import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactInfoComponent } from './pages/contact-info/contact-info.component';
import { HomeComponent } from './pages/home/home.component';
import { ProjectsComponent } from './pages/projects/projects.component';
import { StudiesComponent } from './pages/studies/studies.component';
import { WorkExperienceComponent } from './pages/work-experience/work-experience.component';


const routes: Routes = [

  {path:'',redirectTo: 'home', pathMatch: 'full'},
  {path:'home',component: HomeComponent},
  {path:'contactinfo',component: ContactInfoComponent},
  {path:'works',component: WorkExperienceComponent},
  {path:'projects',component: ProjectsComponent},
  {path:'studies',component: StudiesComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
