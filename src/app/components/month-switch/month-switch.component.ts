import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-month-switch',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './month-switch.component.html',
  styleUrl: './month-switch.component.scss'
})
export class MonthSwitchComponent {
  month = 1
  months = ['Jan','Fev','Mar','Abr','Maio','Jun','Jul','Ago','Set','Out','Nov','Dez']

  changeMonth (event:Event):void {
    const target = event.target as HTMLSelectElement;
    this.month = Number(target.value);
  }
}
