import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-nav-button-area',
  templateUrl: './nav-button-area.component.html',
  styleUrls: ['./nav-button-area.component.css']
})
export class NavButtonAreaComponent {

  @Output() prevClicked = new EventEmitter();
  @Output() nextClicked = new EventEmitter();
  @Input() prevVisible: boolean = true;
  @Input() nextVisible: boolean = true;

}
