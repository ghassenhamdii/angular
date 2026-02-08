import { Component } from '@angular/core';
import { ListSuggestionComponent } from './core/list-suggestion/list-suggestion.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ListSuggestionComponent],
  template: `<app-list-suggestion></app-list-suggestion>`,

})
export class AppComponent {}
