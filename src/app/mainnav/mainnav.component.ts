import { Component, Input, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'mainnav',
  templateUrl: './mainnav.component.html',
  styleUrls: ['./mainnav.component.sass']
})
export class MainnavComponent {

  @Input() state;
  @Output() closemenu = new EventEmitter();

  close_nav(){
    this.state = false;
    this.closemenu.emit();
  }

  constructor() { }

}
