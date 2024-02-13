import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { ProjectsComponent } from './projects/projects.component';
import { ContactComponent } from './contact/contact.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { EducationComponent } from './education/education.component';
import { CertificatesComponent } from './certificates/certificates.component';
import { SkillComponent } from './skill/skill.component';

import { ExperienceComponent } from './experience/experience.component';


@NgModule({
  declarations: [
    AppComponent,

    AboutComponent,
    ProjectsComponent,
    ContactComponent,
    HeaderComponent,
    FooterComponent,
    EducationComponent,
    CertificatesComponent,

    SkillComponent,
    ExperienceComponent,
    SkillComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
