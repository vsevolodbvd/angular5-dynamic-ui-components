import {Component, ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'ui-styles',
  encapsulation: ViewEncapsulation.None,
  styleUrls: ['../styles/styles.scss'],
  template: `
    <ng-content></ng-content>
  `
})
export default class Styles {}
