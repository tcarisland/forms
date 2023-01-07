// // import the interface
import { FormPage } from '../models/form-page.model';
import { FormPageAction as FormPageAction, FormPageActionType } from '../actions/form-page.action';
// //create a dummy initial state

const initialState: Array<FormPage> = [
  {
    id: "step1",
    labels: "labels go here",
    title: "Step One"
  },
  {
    id: "step2",
    labels: "more labels",
    title: "Step Two"
  }
];

export function FormPageReducer(
  state: Array<FormPage> = initialState,
  action: FormPageAction
) {
  switch (action.type) {
    case FormPageActionType.REPLACE_FORM_PAGE:
      return state;
    default:
      return state;
  }
}
