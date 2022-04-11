import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';

import { MaterialModule } from './shared/modules/material/material.module';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { BrandingBarComponent } from './components/branding-bar/branding-bar.component';
import { ProjectRequirementsComponent } from './components/project-requirements/project-requirements.component';
import { CardsComponent } from './shared/widgets/cards/cards.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ExperienceComponent } from './components/experience/experience.component';
import { DocumentationComponent } from './components/documentation/documentation.component';
import { ContactComponent } from './components/contact/contact.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    BrandingBarComponent,
    ProjectRequirementsComponent,
    CardsComponent,
    ExperienceComponent,
    DocumentationComponent,
    ContactComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    MaterialModule,
    FlexLayoutModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
