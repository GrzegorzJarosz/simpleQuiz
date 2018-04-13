import { Component, OnInit } from '@angular/core';
import { QuizService } from './shared/quiz.service';

 @Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  constructor( private service: QuizService ){}

  questions;
  active_question = 0;
  progress = {
    first:true,
    val:0
  }
  answers = [];
  finished = false;

  ngOnInit(){
    this.service.loadQuestions().subscribe((questions) => {
      this.questions = questions;
      this.progress.val = ((this.active_question+1)/this.questions.questions.length)*100
    });
  }


  onSelectAnswer($event){
    this.answers[this.active_question] = $event;
  }


  onNavigate(no){
    if(this.answers.length-1 >= this.active_question || no < 0){
      if((this.active_question > 0 && no<0) || ((this.active_question < this.questions.questions.length - 1)  && no > 0)){
        this.active_question = this.active_question + no;
        this.progress.val = ((this.active_question + 1)/this.questions.questions.length) * 100;
        this.progress.first = (this.active_question===0) ? true : false;
      }
    }
    if(this.answers.length == this.questions.questions.length && no > 0){
      this.finished = true;
    }
  }

  getAlreadyAswered(act_q){
    return this.answers[act_q];
  }

  getResult(){
    const total = this.questions.questions.length;
    let results = this.answers.reduce((sum, item, idx) => {
      if(item == this.questions.questions[idx].correctAnswer){sum++;}
      return sum;
    }, 0);
    return {
      result:results,
      total:total
    }
  }

  newQuiz($vent){
    this.active_question = 0;
    this.progress = {
      first:true,
      val :((this.active_question+1)/this.questions.questions.length)*100
    }
    this.answers = [];
    this.finished = false;
  }

}
