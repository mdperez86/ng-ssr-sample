import { Component, Directive, Input, HostListener } from '@angular/core';

@Directive({
  // tslint:disable-next-line:directive-selector
  selector: '[routerLink]'
})
export class RouterLinkStubDirective {
  @Input() routerLink: any;
  navigatedTo: any = null;

  @HostListener('click') onClick() {
    this.navigatedTo = this.routerLink;
  }
}

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'router-outlet',
  template: ''
})
export class RouterOutletStubComponent { }
