import { Component, Input, OnInit } from '@angular/core';

import { ButtonTypes } from '../../common/Types';

const buttonTypes = [
	{
		type: ButtonTypes.PRIMARY,
		className: 'btn btn-primary'
	},
	{
		type: ButtonTypes.SECONDARY,
		className: 'btn btn-secondary'
	},
	{
		type: ButtonTypes.SUCCESS,
		className: 'btn btn-success'
	},
	{
		type: ButtonTypes.WARNING,
		className: 'btn btn-warning'
	},
  {
    type: ButtonTypes.DANGER,
    className: 'btn btn-danger'
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
