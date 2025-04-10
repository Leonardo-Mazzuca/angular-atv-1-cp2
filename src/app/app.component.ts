import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MonthSwitchComponent } from './components/month-switch/month-switch.component';
import { DynamicListComponent } from './components/dynamic-list/dynamic-list.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,MonthSwitchComponent,DynamicListComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'app';
}
