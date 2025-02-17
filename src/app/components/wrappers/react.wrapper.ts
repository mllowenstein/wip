import { Component, OnInit, ElementRef, AfterViewInit } from '@angular/core';
import { createCustomElement } from '@angular/elements';
import { createRoot } from 'react-dom/client';
import * as  React from 'react';

const ReactElement = () => {
  return React.createElement('div', {}, 'Reacting a little more than usual to the crowd today...')
};

@Component({
  standalone: true,
  selector: 'mll-react-wrapper',
  template: '<div #container></div>'
})
export class ReactWrapper implements AfterViewInit {

  constructor(private elemRef: ElementRef) { }

  ngAfterViewInit(): void {
    const container = this.elemRef.nativeElement.querySelector('#container');
    if (container) {
      const root = createRoot(container);
      root.render(React.createElement(ReactElement));
    }
  }
}
