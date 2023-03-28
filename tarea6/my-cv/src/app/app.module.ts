import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './layouts/footer/footer.component';
import { HeaderComponent } from './layouts/header/header.component';
import { SidebarComponent } from './layouts/sidebar/sidebar.component';
import { HomeComponent } from './pages/home/home.component';
import { StudiesComponent } from './pages/studies/studies.component';
import { ProjectsComponent } from './pages/projects/projects.component';
import { CoursesCertificationsComponent } from './pages/courses-certifications/courses-certifications.component';
import { ContactInfoComponent } from './pages/contact-info/contact-info.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    SidebarComponent,
    HomeComponent,
    StudiesComponent,
    ProjectsComponent,
    CoursesCertificationsComponent,
    ContactInfoComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
