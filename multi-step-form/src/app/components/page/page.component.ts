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

  formPageList$: Observable<Array<FormPage>>;
  currentRoute: string;

  constructor(private router: Router, private store: Store<AppState>) {}

  ngOnInit(): void {
    this.currentRoute = this.router.url;
    console.log("store select")
    this.formPageList$ = this.store.select((state) => state.formPages);
    this.formPageList$.subscribe(e => {
      console.log(e);
    })
  }

  /*
    courseItems$: Observable<Array<CourseItem>>;
  constructor(private store: Store<AppState>) {}
  ngOnInit(): void {
    this.courseItems$ = this.store.select((store) => store.course);
  }

  addCourse(form: NgForm) {
    this.store.dispatch(new AddItemAction(form.value));
    form.reset();
  }
  */
}
