import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SurveyService } from './survey.service';
import { NodeComponent } from './node/node.component';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';
import { SurveyComponent } from './survey/survey.component';

const routes: Routes = [
  { path: '', component: SurveyComponent },
  { path: 'node/:node_id', component: SurveyComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    NodeComponent,
    SurveyComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(routes, { useHash: false }) 
  ],
  providers: [SurveyService],
  bootstrap: [AppComponent]
})
export class AppModule { }
