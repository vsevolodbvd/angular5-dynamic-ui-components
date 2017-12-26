import {Component, Input, OnInit} from '@angular/core';

import {ProgressBarTypes} from '../../common/Types';

const badgeTypes = [
  {
    type: ProgressBarTypes.DEFAULT,
    className: 'secondary'
  },
  {
    type: ProgressBarTypes.SUCCESS,
    className: 'success'
  },
  {
    type: ProgressBarTypes.WARNING,
    className: 'warning'
  },
  {
    type: ProgressBarTypes.DANGER,
    className: 'alert'
  }
];

@Component({
  selector: 'app-progress-bar',
  template: `
    <div class="{{ className }} progress" role="progressbar" tabindex="0" [attr.aria-valuenow]="value" aria-valuemin="0"
         aria-valuemax="100" style="margin: 10px 325px">
      <span class="progress-meter" [style.width]="percent">
				<p class="progress-meter-text">{{ percent }}</p>
			</span>
    </div>
  `
})
export class ProgressBar implements OnInit {
  @Input() public type: ProgressBarTypes;
  @Input() public value: number;
  percent: string;
  className: string;

  ngOnInit(): void {
    this.percent = `${this.value}%`;
    this.className = badgeTypes.find(buttonType => buttonType.type === this.type).className;
  }
}