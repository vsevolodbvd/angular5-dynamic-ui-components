import {Component, Input, OnInit} from '@angular/core';

import {ProgressBarTypes} from '../../common/Types';

const badgeTypes = [
  {
    type: ProgressBarTypes.DEFAULT,
    className: ''
  },
  {
    type: ProgressBarTypes.SUCCESS,
    className: 'bg-success'
  },
  {
    type: ProgressBarTypes.WARNING,
    className: 'bg-warning'
  },
  {
    type: ProgressBarTypes.DANGER,
    className: 'bg-danger'
  }
];

@Component({
  selector: 'app-progress-bar',
  template: `
    <div class="progress" style="margin: 10px 0">
      <div class="progress-bar {{ className }}" role="progressbar" [style.width]="percent" [attr.aria-valuenow]="value"
           aria-valuemin="0" aria-valuemax="100">{{ percent }}
      </div>
    </div>
  `
})
export default class ProgressBar implements OnInit {
  @Input() public type: ProgressBarTypes;
  @Input() public value: number;
  percent: string;
  className: string;

  ngOnInit(): void {
    this.percent = `${this.value}%`;
    this.className = badgeTypes.find(buttonType => buttonType.type === this.type).className;
  }
}