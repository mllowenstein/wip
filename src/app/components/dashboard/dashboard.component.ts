import { Component, OnInit, AfterViewInit, ViewChild, computed, signal } from '@angular/core';
import { NavbarComponent } from '../../shared/navbar/navbar.component';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { ThemeService } from '../../core/services/theme.service';
import { RealtimeService } from '../../core/services/realtime.service';
import { Router } from '@angular/router';
import { BarChartComponent } from '../../shared/chart/bar-chart/bar-chart.component';
import { LineChartComponent } from '../../shared/chart/line-chart/line-chart.component';
import { ComboChartComponent } from '../../shared/chart/combo-chart/combo-chart.component';
import { ScatterChartComponent } from '../../shared/chart/scatter-chart/scatter-chart.component';
import { ChartConfig } from '../../shared/chart/chart.model';
import { SITEMODULES, BarChartConfig, ComboChartConfig, LineChartConfig, ScatterChartConfig } from '../../core/data/constants';
import { SiteModule } from '../../core/data/schema';

@Component({
  selector: 'mll-dashboard',
  standalone: false,
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent implements OnInit, AfterViewInit {
  @ViewChild('scatter') scatter!: ScatterChartComponent;
  @ViewChild('combo') combo!: ComboChartComponent;
  @ViewChild('line') line!: LineChartComponent;
  @ViewChild('bar') bar!: BarChartComponent;
  @ViewChild('nav') nav!: NavbarComponent;
  chartConfigs = signal<ChartConfig[]>([
    LineChartConfig,
    BarChartConfig,
    ComboChartConfig,
    ScatterChartConfig,
  ]);
  dataset = computed(() => this.realtime.getData());
  module: SiteModule | undefined = SITEMODULES.find(
    (mod: SiteModule) => window.location.pathname.includes(mod.name)
  );

  constructor(
    private realtime: RealtimeService,
    public themes: ThemeService,
    private router: Router,
  ) { }

  ngOnInit(): void {
    console.log('oninit...');
    console.log('module: ' + this.module);
  }

  ngAfterViewInit(): void {
    console.log('afterviewinit...');
  }

  onNavigating(path: any) {
    this.router.navigateByUrl(`/${path}`);
  }

  onToggling(onoff: any) {
    this.themes.toggleTheme();
  }

  drop(event: CdkDragDrop<string[]>) {
    const current = [...this.chartConfigs()];
    moveItemInArray(current, event.previousIndex, event.currentIndex);
    this.chartConfigs.set(current);
  }
}
