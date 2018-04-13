import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { QuizService } from './shared/quiz.service';

import { AppComponent } from './app.component';
import { LogoComponent } from './logo/logo.component';
import { QuestionComponent } from './question/question.component';
import { NavigationComponent } from './navigation/navigation.component';
import { FinalComponent } from './final/final.component';


@NgModule({
  declarations: [
    AppComponent,
    LogoComponent,
    QuestionComponent,
    NavigationComponent,
    FinalComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule
  ],
  providers: [QuizService],
  bootstrap: [AppComponent]
})
export class AppModule { }
