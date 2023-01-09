import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AppState } from 'src/app/store/models/app-state.model';
import { FormPage } from 'src/app/store/models/form-page.model';

@Component({
  selector: 'app-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.css']
})
export class PageComponent {

  formPage$: Observable<FormPage>;
  currentRoute: string;
  formPageMissing: boolean;

  constructor(private router: Router, private store: Store<AppState>) {}

  ngOnInit(): void {
    this.currentRoute = this.router.url.replaceAll("/", "");
    this.formPage$ = this.store.select((state) => state.formPages.find(page => page.id === this.currentRoute));
  }

  onSubmit(): void {
    console.log("onSubmit");
  }

  onPrevClicked(): void {
    console.log("onPrevClicked");
  }

  /*
  addCourse(form: NgForm) {
    this.store.dispatch(new AddItemAction(form.value));
    form.reset();
  }
  */
}

