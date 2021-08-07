import { Component, OnInit } from '@angular/core';
import { faInbox } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  faInbox = faInbox;

  constructor() { }

  ngOnInit() {
  }

}
