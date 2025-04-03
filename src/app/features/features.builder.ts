import { Feature, FeatureOptions, Features } from "./features.model";

export class FeaturesBuilder {
  private features: Features;
  private list: Feature[] = [];

  constructor() {
    this.features = new Features(this.list);
  }
}

export class FeatureBuilder {
  private feature: Feature;

  constructor() {
    this.feature = new Feature('', '', '', '');
  }

  setTitle(title: string): Feature {
    this.feature.title = title;
    return this.feature;
  }

  setDescription(description: string): Feature {
    this.feature.description = description;
    return this.feature;
  }

  setRoute(route: string): Feature {
    this.feature.route = route;
    return this.feature;
  }

  setIcon(icon: string): Feature {
    this.feature.icon = icon;
    return this.feature;
  }

  setOptions(options: FeatureOptions): Feature {
    this.feature.options = options;
    return this.feature;
  }

  build(): Feature {
    return this.feature;
  }
}
