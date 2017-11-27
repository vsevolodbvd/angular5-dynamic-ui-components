import { Component } from '@angular/core';

import { ButtonTypes, BadgeTypes, ProgressBarTypes } from './common/Types';
import settings from '../../settings';

@Component({
  selector: 'my-app',
  template: `
    <ui-styles>
      <div style="text-align:center">
        <h1>{{title}}</h1>
				<img src="https://hsto.org/webt/eb/ly/pp/eblypp6fge8ppfcellukk_kimf0.png" width="100"> &
				<img src="https://camo.githubusercontent.com/d18f4a7a64244f703efcb322bf298dcb4ca38856/68747470733a2f2f7765627061636b2e6a732e6f72672f6173736574732f69636f6e2d7371756172652d6269672e737667" width="100">
        <h1>{{ ui }}</h1>
        <div class="container">
          <h3>Buttons:</h3>
          <div class="row text-center">
            <div class="col-12">
              <app-button [type]="'${ButtonTypes.PRIMARY}'">Primary</app-button>
              <app-button [type]="'${ButtonTypes.SECONDARY}'">Secondary</app-button>
              <app-button [type]="'${ButtonTypes.SUCCESS}'">Success</app-button>
              <app-button [type]="'${ButtonTypes.WARNING}'">Warning</app-button>
              <app-button [type]="'${ButtonTypes.DANGER}'">Danger</app-button>
            </div>
          </div>
					<hr>
          <h3>Badges:</h3>
          <div class="row text-center">
            <div class="col-12">
              <app-badge [type]="'${BadgeTypes.DEFAULT}'">Default</app-badge>
              <app-badge [type]="'${BadgeTypes.PRIMARY}'">Primary</app-badge>
              <app-badge [type]="'${BadgeTypes.SUCCESS}'">Success</app-badge>
              <app-badge [type]="'${BadgeTypes.WARNING}'">Warning</app-badge>
              <app-badge [type]="'${BadgeTypes.DANGER}'">Danger</app-badge>
            </div>
          </div>
          <hr>
          <h3>Progress bars:</h3>
          <div class="row text-center">
            <div class="col-12">
              <app-progress-bar [value]="25" [type]="'${ProgressBarTypes.DEFAULT}'">Default</app-progress-bar>
              <app-progress-bar [value]="50" [type]="'${ProgressBarTypes.SUCCESS}'">Success</app-progress-bar>
              <app-progress-bar [value]="75" [type]="'${ProgressBarTypes.WARNING}'">Warning</app-progress-bar>
              <app-progress-bar [value]="100" [type]="'${ProgressBarTypes.DANGER}'">Danger</app-progress-bar>
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
}