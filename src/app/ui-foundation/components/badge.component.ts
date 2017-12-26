import {Component, Input, OnInit} from '@angular/core';

import {BadgeTypes} from '../../common/Types';

const badgeTypes = [
  {
    type: BadgeTypes.DEFAULT,
    className: 'badge secondary'
  },
  {
    type: BadgeTypes.PRIMARY,
    className: 'badge primary'
  },
  {
    type: BadgeTypes.SUCCESS,
    className: 'badge success'
  },
  {
    type: BadgeTypes.WARNING,
    className: 'badge warning'
  },
  {
    type: BadgeTypes.DANGER,
    className: 'badge alert'
  }
];

@Component({
  selector: 'app-badge',
  template: `
    <span class="badge {{ className }}">
			<ng-content></ng-content>
		</span>
  `
})
export class Badge implements OnInit {
  @Input() public type: BadgeTypes;
  className: string;

  ngOnInit(): void {
    this.className = badgeTypes.find(buttonType => buttonType.type === this.type).className;
  }
}