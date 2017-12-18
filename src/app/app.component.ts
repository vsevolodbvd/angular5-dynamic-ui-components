import {Component} from '@angular/core';

import {ButtonTypes, BadgeTypes, ProgressBarTypes} from './common/Types';
import settings from '../../settings';

@Component({
  selector: 'my-app',
  template: `
    <ui-styles>
      <div style="text-align:center">
        <h1>{{title}}</h1>
        <img [src]="angularIcon" width="100"> &
        <img [src]="webpackIcon" width="100">
        <h1>{{ ui }}</h1>
        <div class="container">
          <h3>Buttons:</h3>
          <div class="row text-center">
            <div class="col-12">
              <app-button *ngFor="let button of buttons" [type]="button.type">{{ button.name }}</app-button>
            </div>
          </div>
          <hr>
          <h3>Badges:</h3>
          <div class="row text-center">
            <div class="col-12">
              <app-badge *ngFor="let badge of badges" [type]="badge.type">{{ badge.name }}</app-badge>
            </div>
          </div>
          <hr>
          <h3>Progress bars:</h3>
          <div class="row text-center">
            <div class="col-12">
              <app-progress-bar *ngFor="let progressBar of progressBars" [value]="progressBar.value"
                                [type]="progressBar.type">
                {{ progressBar.name }}
              </app-progress-bar>
            </div>
          </div>
        </div>
      </div>
    </ui-styles>
  `
})
export class AppComponent {
  public title: string = 'Angular 5 Webpack Example';
  public ui: string = `${settings.stylesProvider} UI framework`;
  public angularIcon: string = 'https://hsto.org/webt/eb/ly/pp/eblypp6fge8ppfcellukk_kimf0.png';
  public webpackIcon: string = 'https://camo.githubusercontent.com/d18f4a7a64244f703efcb322bf298dcb4ca38856/68747470733a2f2f7765627061636b2e6a732e6f72672f6173736574732f69636f6e2d7371756172652d6269672e737667';
  public buttons = [
    {name: 'Primary', type: ButtonTypes.PRIMARY},
    {name: 'Secondary', type: ButtonTypes.SECONDARY},
    {name: 'Success', type: ButtonTypes.SUCCESS},
    {name: 'Warning', type: ButtonTypes.WARNING},
    {name: 'Danger', type: ButtonTypes.DANGER}
  ];
  public badges = [
    {name: 'Default', type: BadgeTypes.DEFAULT},
    {name: 'Primary', type: BadgeTypes.PRIMARY},
    {name: 'Success', type: BadgeTypes.SUCCESS},
    {name: 'Warning', type: BadgeTypes.WARNING},
    {name: 'Danger', type: BadgeTypes.DANGER}
  ];
  public progressBars = [
    {name: 'Default', type: ProgressBarTypes.DEFAULT, value: 25},
    {name: 'Success', type: ProgressBarTypes.SUCCESS, value: 50},
    {name: 'WARNING', type: ProgressBarTypes.WARNING, value: 75},
    {name: 'DANGER', type: ProgressBarTypes.DANGER, value: 100}
  ];
}