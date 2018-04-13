import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-final',
  templateUrl: './final.component.html',
  styleUrls: ['./final.component.scss']
})
export class FinalComponent implements OnInit {
  @Input() result;
  @Output() resetQuiz = new EventEmitter<boolean>();
  resultMessage: string = '';

  constructor() { }

  ngOnInit() {
    if (this.result.result / this.result.total === 1) { this.resultMessage = 'Brawo! Odpowiedziales poprawnie na wszystkie pytania'}
    if (this.result.result / this.result.total < 1 && this.result.result / this.result.total > 0){ this.resultMessage = 'Nnno, prawie dobrze ;) ...' }
    if (this.result.result / this.result.total == 0){ this.resultMessage = 'upss.. poczytaj troche i sprobuj ponownie..' }
  }

  reset(){
    this.resetQuiz.emit(true);
  }

}
