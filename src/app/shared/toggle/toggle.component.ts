import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  HostBinding,
  HostListener,
  Input,
  OnInit,
  Output
} from '@angular/core';

@Component({
  selector: 'mll-toggle',
  standalone: false,
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './toggle.component.html',
  styleUrl: './toggle.component.scss'
})
export class ToggleComponent implements OnInit {
  @HostBinding('class.toggle-checked') @Input() checked = false;
  @HostBinding('class.toggle-disabled') @Input() disabled = false;

  // 'Change' appended intentionally to support 2 way data binding
  @Output() checkedChange = new EventEmitter();

  constructor() { }

  ngOnInit() {}

  onToggleChange() {
    this.checked = !this.checked;
    this.checkedChange.emit(this.checked);
  }
}
