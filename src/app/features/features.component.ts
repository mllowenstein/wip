import { Component } from '@angular/core';
import { Features, Feature, FeatureOptions } from './features.model';
import { FeatureBuilder } from './features.builder';

@Component({
  selector: 'mll-features',
  standalone: false,
  templateUrl: './features.component.html',
  styleUrl: './features.component.scss'
})
export class FeaturesComponent {
  features!: Feature[];

  constructor() {
    this.features = this.constructAvailableFeatures();
  }

  constructAvailableFeatures(): Feature[] {
    const featureset: Feature[] = [];
    const analytics: Feature = new FeatureBuilder()
      .setTitle('Realtime Analytics')
      .setDescription('View up-to-date analytics and visualizations of cryprocurrency markets')
      .setRoute('/features/analysis').setIcon('graph_circle').build();
    const blog: Feature = new FeatureBuilder()
      .setTitle('Personal Developer Blog')
      .setDescription('View up-to-date analytics and visualizations of cryprocurrency markets')
      .setRoute('/features/blog').setIcon('article').build();
    const cloud: Feature = new FeatureBuilder()
      .setTitle('Secure Cloud Storage')
      .setDescription('View up-to-date analytics and visualizations of cryprocurrency markets')
      .setRoute('/features/cloud').setIcon('upload').build();
    const messaging: Feature = new FeatureBuilder()
      .setTitle('Realtime Chat')
      .setDescription('View up-to-date analytics and visualizations of cryprocurrency markets')
      .setRoute('/features/messaging').setIcon('chat_circle').build();

    featureset.push(analytics, blog, cloud, messaging);
    return featureset;
  }
}
