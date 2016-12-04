import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'mainoptions',
  templateUrl: './mainoptions.component.html',
  styleUrls: ['./mainoptions.component.sass']
})
export class MainoptionsComponent {

  @Input() state;
  @Output() closeopts = new EventEmitter();

  close_opt(){
    this.state = false;
    this.closeopts.emit();
  }

  constructor() { }
}
