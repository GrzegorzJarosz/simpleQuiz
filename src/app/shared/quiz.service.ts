import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class QuizService{

 private url = 'questions_src/questions.json';  // URL to web api

 constructor(private http: HttpClient) { }

  loadQuestions(){
    return this.http.get(this.url)
  }

}
