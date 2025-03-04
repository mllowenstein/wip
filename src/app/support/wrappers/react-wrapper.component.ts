import * as reactDom from 'react-dom';
import ComponentWrapper from './feature/feature.component';
import React from 'react';
import { StyledComponent } from './styled/styled.component';

export function mountReactComponent(element: HTMLElement) {
  reactDom
    .createPortal(
      React.createElement(ComponentWrapper.StyledFeatureComponent),
      element
    );
}
