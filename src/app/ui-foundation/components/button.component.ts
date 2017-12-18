import {Component, Input, OnInit} from '@angular/core';

import {ButtonTypes} from '../../common/Types';

const buttonTypes = [
  {
    type: ButtonTypes.PRIMARY,
    className: 'button primary'
  },
  {
    type: ButtonTypes.SECONDARY,
    className: 'button secondary'
  },
  {
    type: ButtonTypes.SUCCESS,
    className: 'button success'
  },
  {
    type: ButtonTypes.WARNING,
    className: 'button warning'
  },
  {
    type: ButtonTypes.DANGER,
    className: 'button alert'
  }
];

@Component({
  selector: 'app-button',
  template: `
    <button type="button" class="{{ className }}">
      <ng-content></ng-content>
    </button>
  `
})
export default class Button implements OnInit {
  @Input() public type: ButtonTypes;
  className: string;

  ngOnInit(): void {
    this.className = buttonTypes.find(buttonType => buttonType.type === this.type).className;
  }
}
