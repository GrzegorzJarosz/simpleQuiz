import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import {trigger, animate, style, transition, query, stagger} from '@angular/animations';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.scss'],
  animations: [
    trigger('questAnime', [
      transition(':enter', [
        style({ opacity: 0, transform:'translateX(-100%)'}),
        animate(300, style({ opacity: 1, transform:'translateX(0%)' }))
      ])
    ])
  ]
})
export class QuestionComponent implements OnInit {
  @Input() active_question;
  @Input() activePanel;
  @Output() questionSelected = new EventEmitter<number>();

  constructor() { }

  ngOnInit() {}
  
  onPanelSelect(i){
    this.activePanel = i;
    this.questionSelected.emit(i);
  }
}
