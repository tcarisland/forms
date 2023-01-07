import { createSelector, select } from '@ngrx/store';
import { FormPage } from './form-page.model';
import { state } from '@angular/animations';

export interface AppState {
  readonly formPages: Array<FormPage>;
}

export const selectFormPages = (state: AppState) => state.formPages;
