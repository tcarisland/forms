import { Action } from '@ngrx/store';
import { FormPage } from '../models/form-page.model';

export enum FormPageActionType {
  REPLACE_FORM_PAGE = '[FORMPAGE] Replace Form Page',
}

export class ReplaceFormPageAction implements Action {
  readonly type = FormPageActionType.REPLACE_FORM_PAGE;

  //add an optional payload

  constructor(public payload: FormPage) {}
}

export type FormPageAction = ReplaceFormPageAction;
