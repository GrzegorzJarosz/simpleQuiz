import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {
  @Input() progress;
  @Output() navChanged = new EventEmitter<any>();

  constructor() { }

  ngOnInit() {
  }

  navigate(no){
    this.navChanged.emit(no);
  }

  backActivate={
    'active': this.progress > 0
  }
}
