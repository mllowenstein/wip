export class Features {
  constructor(
    public list: Feature[]
  ) { }
}

export interface FeatureOptions {
  live: boolean;
  staging: boolean;
  development: boolean;
  feedbackOk: boolean;
  comments?: string;
}

export class Feature {
  constructor(
    public title: string,
    public description: string,
    public route: string,
    public icon: string,
    public options?: FeatureOptions,
  ) { }

  setTitle(title: string): Feature {
    this.title = title;
    return this;
  }

  setDescription(description: string): Feature {
    this.description = description;
    return this;
  }

  setRoute(route: string): Feature {
    this.route = route;
    return this;
  }

  setIcon(icon: string): Feature {
    this.icon = icon;
    return this;
  }

  setOptions(options: FeatureOptions): Feature {
    this.options = options;
    return this;
  }

  build(): Feature {
    return this;
  }
}
