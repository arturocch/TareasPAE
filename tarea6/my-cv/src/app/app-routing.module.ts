import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactInfoComponent } from './pages/contact-info/contact-info.component';
import { CoursesCertificationsComponent } from './pages/courses-certifications/courses-certifications.component';
import { HomeComponent } from './pages/home/home.component';
import { ProjectsComponent } from './pages/projects/projects.component';
import { StudiesComponent } from './pages/studies/studies.component';

const routes: Routes = [

  {path:'',component: HomeComponent},
  {path:'contactinfo',component: ContactInfoComponent},
  {path:'certifications',component: CoursesCertificationsComponent},
  {path:'projects',component: ProjectsComponent},
  {path:'studies',component: StudiesComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
