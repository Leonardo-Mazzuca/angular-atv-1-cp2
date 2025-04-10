import { Component } from '@angular/core';

@Component({
  selector: 'app-number-switch',
  standalone: true,
  imports: [],
  templateUrl: './number-switch.component.html',
  styleUrl: './number-switch.component.scss'
})
export class NumberSwitchComponent {
  currentValue : string | number = "Valor desconhecido"

  changeValue (event:Event) {
    const target = event.target as HTMLSelectElement;
    if(!isNaN(parseInt(target.value))){
     this.currentValue = parseInt(target.value)
    } else {
      this.currentValue = target.value
    }
  }


}
