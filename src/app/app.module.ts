import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule,Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { LandingComponent } from './landing/landing.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ProjectsComponent } from './projects/projects.component';
import { AboutComponent } from './about/about.component';


const routes: Routes=[
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  {path: 'home', component: LandingComponent},
  {path: 'projects',component: ProjectsComponent},
  {path: 'about',component: AboutComponent}
];
@NgModule({
  declarations: [
    AppComponent,
    LandingComponent,
    NavbarComponent,
    ProjectsComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule, RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { 

}
