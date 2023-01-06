import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.css']
})
export class PageComponent {

  currentRoute: string;

  constructor(private router: Router) {
    this.currentRoute = router.url;
  }

}