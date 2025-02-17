import { Component, ElementRef, AfterViewInit } from '@angular/core';
import { defineComponent, createApp, h } from '@vue/runtime-dom';

const VueComponent = defineComponent({
  setup() {
    return () => h('div', 'Hello from Vue in Angular 17!');
  }
});

@Component({
  standalone: true,
  selector: 'mll-vue-wrapper',
  template: '<div #container></div>',
})
export class VueWrapper implements AfterViewInit {

  constructor(private elemRef: ElementRef) { }

  ngAfterViewInit(): void {
    const container = this.elemRef.nativeElement.querySelector('#container');
    if (container) {
      createApp(VueComponent).mount(container);
    }
  }
}

